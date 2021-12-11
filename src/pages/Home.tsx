import React, { useState, ChangeEvent, useEffect } from 'react';
import { ImageArea2, SettingArea, ListArea } from 'components/home';
import { Container, Spacer } from 'styles/default-styles';
import randomNumber from 'utils/RandomNum';
import getImageList from 'api/imageList';
import { File, AnnotationType } from 'interface';
import dummyImg from 'assets/img/dummyImg.png';
import saveAnnotationData from 'api/annotation';

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
    const [drawMode, setDrawMode] = useState<boolean>(false);
    const [selectedAnnotation, setSelectedAnnotation] = useState<AnnotationType | null>(null);
    const [inputs, setInputs] = useState({
        accidentPlace: '',
        placeFeat: '',
        objectA: '',
        objectB: '',
        rate: '',
    });
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

    const init = async () => {
        const res = await getImageList();

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

        setInputs({
            accidentPlace: productData[0].info.accidentPlace,
            placeFeat: productData[0].info.placeFeat,
            objectA: productData[0].info.objectA,
            objectB: productData[0].info.objectB,
            rate: productData[0].info.rate,
        });
        setSelectedImg(productData[0]);
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
            // eslint-disable-next-line no-alert
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

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
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
        // eslint-disable-next-line no-alert
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
            accidentPlace: selectedItem.info.accidentPlace,
            placeFeat: selectedItem.info.placeFeat,
            objectA: selectedItem.info.objectA,
            objectB: selectedItem.info.objectB,
            rate: selectedItem.info.rate,
        });

        setSelectedImg(selectedItem);
    };

    const handleSaveData = async () => {
        // eslint-disable-next-line no-alert
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
            formData.append('apikey', '7670f88f-814c-4a16-bd13-5eb2cdf86f01');
            formData.append('pno', '46');
            formData.append('spno', '41');
            formData.append('dno', selectedImg.info.dno);
            formData.append('data', JSON.stringify(data));

            await saveAnnotationData(formData);
        }
    };

    useEffect(() => {
        init();
    }, []);

    return (
        <Container fullSpace flexDirection="row" scroll>
            <SettingArea
                handleStartDrawMode={handleStartDrawMode}
                inputs={inputs}
                handleChangeInput={handleChangeInput}
                classList={classList}
                selectedClass={selectedClass}
                handleSelectClass={handleSelectClass}
                handleSaveData={handleSaveData}
            />

            <Spacer length={25} />

            <ImageArea2
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
