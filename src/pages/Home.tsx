/* eslint-disable consistent-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-alert */
import React, { useState, ChangeEvent, useEffect } from 'react';
import { ImageArea, SettingArea, ListArea } from 'components/home';
import { Container, Spacer } from 'styles/default-styles';
import randomNumber from 'utils/RandomNum';
import getImageList from 'api/imageList';
import { File, AnnotationType, AutoData } from 'interface';
import dummyImg from 'assets/img/dummyImg.png';
import { saveAnnotationData, getAutoLabel } from 'api/annotation';
import queryString from 'query-string';
import accidentObjects from 'data/accidentType';

const classList: string[] = [
    '선택하세요',
    '차량',
    '보행자',
    '이륜차',
    '자전거',
    '표지판',
    '신호등(적색)',
    '신호등(녹색)',
    '신호등(기타)',
    '횡단보도',
];

const Home: React.FC = () => {
    const queryObj = queryString.parse(window.location.search);
    const { mode: m, pno: p, spno: s, apikey: a } = queryObj;
    const [drawMode, setDrawMode] = useState<boolean>(false);
    const [selectedAnnotation, setSelectedAnnotation] = useState<AnnotationType | null>(null);
    const [selectedClass, setSelectedClass] = useState<string>('선택하세요');
    const [fileList, setFileList] = useState<File[]>([
        {
            info: {
                dno: '1',
                pno: '46',
                spno: '41',
                url: dummyImg,
                domain: '',
                filename: 'dummyImg',
                path: '',
                accidentPlace: '',
                placeFeat: '',
                objectA: '',
                objectB: '',
                rate: '',
            },
            annoList: [],
        },
    ]);
    const [selectedImg, setSelectedImg] = useState<File>(fileList[0]);
    const [hasKey, setHasKey] = useState<boolean>(false);

    const firstRate = `${
        100 - accidentObjects[0].place[0].feat[0].Adirection[0].Bdirection[0].rate
    }:${accidentObjects[0].place[0].feat[0].Adirection[0].Bdirection[0].rate}`;

    const [inputs, setInputs] = useState({
        accidentObj: accidentObjects[0].title,
        accidentPlace: accidentObjects[0].place[0].title,
        placeFeat: accidentObjects[0].place[0].feat[0].title,
        objectA: accidentObjects[0].place[0].feat[0].Adirection[0].title,
        objectB: accidentObjects[0].place[0].feat[0].Adirection[0].Bdirection[0].title,
        rate: firstRate,
    });

    const makeRateString = (BRate = 0) => {
        const ARate = 100 - BRate;
        const rate = `${ARate}:${BRate}`;

        return rate;
    };

    const accidentPlaces = accidentObjects.find((obj) => obj.title === inputs.accidentObj)?.place;
    const placeFeats = accidentPlaces?.find((place) => place.title === inputs.accidentPlace)?.feat;
    const objectAs = placeFeats?.find((feat) => feat.title === inputs.placeFeat)?.Adirection;
    const objectBs = objectAs?.find((objA) => objA.title === inputs.objectA)?.Bdirection;

    const handleSelectItem = (e: ChangeEvent<HTMLSelectElement>) => {
        const { value, name } = e.target;

        switch (name) {
            case 'accidentObj': {
                const test = accidentObjects.find((obj) => obj.title === value);

                setInputs({
                    accidentObj: value,
                    accidentPlace: test?.place[0]?.title || '',
                    placeFeat: test?.place[0].feat[0].title || '',
                    objectA: test?.place[0].feat[0].Adirection[0].title || '',
                    objectB: test?.place[0].feat[0].Adirection[0].Bdirection[0].title || '',
                    rate: makeRateString(
                        test?.place[0].feat[0].Adirection[0].Bdirection[0].rate || 0,
                    ),
                });
                break;
            }

            case 'accidentPlace': {
                const test = accidentPlaces?.find((place) => place.title === value);

                setInputs({
                    ...inputs,
                    accidentPlace: value,
                    placeFeat: test?.feat[0].title || '',
                    objectA: test?.feat[0].Adirection[0].title || '',
                    objectB: test?.feat[0].Adirection[0].Bdirection[0].title || '',
                    rate: makeRateString(test?.feat[0].Adirection[0].Bdirection[0].rate || 0),
                });
                break;
            }

            case 'placeFeat': {
                const test = placeFeats?.find((feat) => feat.title === value);

                setInputs({
                    ...inputs,
                    placeFeat: value,
                    objectA: test?.Adirection[0].title || '',
                    objectB: test?.Adirection[0].Bdirection[0].title || '',
                    rate: makeRateString(test?.Adirection[0].Bdirection[0].rate || 0),
                });
                break;
            }

            case 'objectA': {
                const test = objectAs?.find((objA) => objA.title === value);

                setInputs({
                    ...inputs,
                    objectA: value,
                    objectB: test?.Bdirection[0].title || '',
                    rate: makeRateString(test?.Bdirection[0].rate || 0),
                });
                break;
            }
            default:
                break;
        }
    };

    const init = async () => {
        const Obj = {
            mode: String(m),
            pno: String(p),
            spno: String(s),
            apiKey: String(a),
        };
        const res = await getImageList(Obj);

        if (res.data.result !== 1) {
            setHasKey(false);
            alert('apiKey가 다릅니다.');
        } else {
            setHasKey(true);
            const { datas } = res.data;

            const productData = datas.map((data: any) => {
                const annoData = JSON.parse(data.data);
                let annoList: any[] = [];
                const info = {
                    dno: data.dno,
                    pno: data.pno,
                    spno: data.spno,
                    url: data.url,
                    domain: data.domain,
                    filename: data.filename,
                    path: data.path,
                    accidentPlace: '',
                    placeFeat: '',
                    objectA: '',
                    objectB: '',
                    rate: '',
                };

                if (annoData !== null) {
                    annoList = annoData.Bounding_Box.map((anno: any) => {
                        return {
                            id: anno.id,
                            mark: {
                                x: anno.coordinate[0],
                                y: anno.coordinate[1],
                                width: anno.coordinate[2],
                                height: anno.coordinate[3],
                            },
                            class: anno.class_name,
                        };
                    });

                    info.accidentPlace = annoData.accident_place;
                    info.placeFeat = annoData.place_feature;
                    info.objectA = annoData.object_A;
                    info.objectB = annoData.object_B;
                    info.rate = annoData.rate;
                }

                return {
                    info,
                    annoList,
                };
            });

            setFileList(productData);

            if (productData.length > 0) {
                setInputs({
                    ...inputs,
                    accidentPlace: productData[0].info.accidentPlace,
                    placeFeat: productData[0].info.placeFeat,
                    objectA: productData[0].info.objectA,
                    objectB: productData[0].info.objectB,
                    rate: productData[0].info.rate,
                });
                setSelectedImg(productData[0]);
            }
        }
    };

    const handleSelectClass = (e: ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        const classValue = classList.filter((item) => item === value);

        setSelectedClass(classValue[0]);
    };

    const handleAddAnnotation = (Anno: AnnotationType) => {
        const tempAnno = Anno;
        tempAnno.id = randomNumber(selectedImg.annoList);
        tempAnno.class = selectedClass;

        if (tempAnno.class === '선택하세요') {
            window.alert('class를 선택하지 않았습니다.');
            return;
        }

        setSelectedImg((prev) => {
            return {
                info: prev.info,
                annoList: [...prev.annoList, tempAnno],
            };
        });
    };

    const handleEndDrawMode = () => {
        setDrawMode(false);
    };

    const handleStartDrawMode = () => {
        setDrawMode(true);
        setSelectedAnnotation(null);
    };

    const handleSelectAnnotation = (Anno: AnnotationType) => {
        setSelectedAnnotation(Anno);
    };

    const handleChangeAnnotation = (Anno: AnnotationType) => {
        setSelectedImg((prev) => {
            return {
                info: prev.info,
                annoList: prev.annoList.map((item) => {
                    if (item.id === Anno.id) {
                        return Anno;
                    }
                    return item;
                }),
            };
        });
    };

    const handleDeleteAnnotation = (Anno: AnnotationType) => {
        const answer = window.confirm('정말로 지우시겠습니까?');
        if (answer) {
            setSelectedImg((prev) => {
                return {
                    info: prev.info,
                    annoList: prev.annoList.filter((item) => item.id !== Anno.id),
                };
            });
        }
    };

    const handleSelectImg = (selectedItem: File) => {
        setFileList((prev) => {
            return prev.map((file) => {
                if (file.info.dno === selectedImg.info.dno) {
                    return selectedImg;
                }
                return file;
            });
        });

        setInputs({
            ...inputs,
            accidentPlace: selectedItem.info.accidentPlace,
            placeFeat: selectedItem.info.placeFeat,
            objectA: selectedItem.info.objectA,
            objectB: selectedItem.info.objectB,
            rate: selectedItem.info.rate,
        });

        setSelectedImg(selectedItem);
    };

    const handleSaveData = async () => {
        const answer = window.confirm('저장 하시겠습니까?');
        if (answer) {
            const formData = new FormData();

            const boundingList = selectedImg.annoList.map((anno) => {
                return {
                    id: anno.id,
                    class_name: anno.class,
                    coordinate: [anno.mark.x, anno.mark.y, anno.mark.width, anno.mark.height],
                };
            });

            const data = {
                url: selectedImg.info.url,
                accident_place: inputs.accidentPlace,
                place_feature: inputs.placeFeat,
                object_A: inputs.objectA,
                object_B: inputs.objectB,
                rate: inputs.rate,
                Bounding_Box: boundingList,
            };

            formData.append('mode', 'annotation');
            formData.append('apikey', String(a));
            formData.append('pno', String(p));
            formData.append('spno', String(s));
            formData.append('dno', selectedImg.info.dno);
            formData.append('data', JSON.stringify(data));

            await saveAnnotationData(formData);
        }
    };

    const handleClickAutoLabelling = async () => {
        const res = await getAutoLabel(selectedImg.info.url);

        if (res.status >= 400) {
            window.alert('통신에 실패했습니다.');
        }

        const { data } = res;
        const tempArr: AnnotationType[] = [];
        data.forEach((item: AutoData) => {
            tempArr.push({
                id: randomNumber(tempArr),
                mark: {
                    x: item.coordinate[0],
                    y: item.coordinate[1],
                    width: item.coordinate[2],
                    height: item.coordinate[3],
                },
                class: item.class_name,
            });
        });

        setSelectedImg((prev) => {
            return {
                info: prev.info,
                annoList: tempArr,
            };
        });
    };

    useEffect(() => {
        init();
    }, []);

    if (!hasKey) {
        return null;
    }

    return (
        <Container fullSpace flexDirection="row" scroll>
            <SettingArea
                inputs={inputs}
                classList={classList}
                selectedClass={selectedClass}
                accidentPlaces={accidentPlaces}
                placeFeats={placeFeats}
                objectAs={objectAs}
                objectBs={objectBs}
                handleStartDrawMode={handleStartDrawMode}
                handleSelectClass={handleSelectClass}
                handleSaveData={handleSaveData}
                handleClickAutoLabelling={handleClickAutoLabelling}
                handleSelectItem={handleSelectItem}
            />

            <Spacer length={25} />

            <ImageArea
                selectedClass={selectedClass}
                drawMode={drawMode}
                handleEndDrawMode={handleEndDrawMode}
                annotationList={selectedImg.annoList}
                handleAddAnnotation={handleAddAnnotation}
                selectedAnnotation={selectedAnnotation}
                handleChangeAnnotation={handleChangeAnnotation}
                selectedImg={selectedImg}
            />

            <Spacer length={25} />

            <ListArea
                fileList={fileList}
                annotationList={selectedImg.annoList}
                selectedAnnotation={selectedAnnotation}
                handleSelectAnnotation={handleSelectAnnotation}
                handleDeleteAnnotation={handleDeleteAnnotation}
                handleSelectImg={handleSelectImg}
                selectedImg={selectedImg}
            />
        </Container>
    );
};

export default Home;
