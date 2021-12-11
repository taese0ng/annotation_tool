import React, { useState, ChangeEvent, useEffect } from 'react';
import { ImageArea2, SettingArea, ListArea } from 'components/home';
import { Container, Spacer } from 'styles/default-styles';
import Color from 'assets/color';
import randomNumber from 'utils/RandomNum';
import getImageList from 'api/imageList';
import { File, ClassType, AnnotationType } from 'interface';
import dummyImg from 'assets/img/dummyImg.png';
import saveAnnotationData from 'api/annotation';

const classList: ClassType[] = [
    { title: '선택하세요', id: 'none', color: 'black' },
    { title: '차량', id: 'car', color: 'red' },
    { title: '보행자', id: 'pedestrian', color: 'orange' },
    { title: '이륜차', id: 'cart', color: 'yellow' },
    { title: '자전거', id: 'bike', color: 'green' },
    { title: '표지판', id: 'notice', color: 'blue' },
    { title: '신호등(적색)', id: 'red_signal', color: 'navy' },
    { title: '신호등(녹색)', id: 'green_signal', color: 'purple' },
    { title: '신호등(기타)', id: 'etc_signal', color: Color.hotPink },
    { title: '횡단보도', id: 'crosswalk', color: Color.graySky },
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
    const [selectedClass, setSelectedClass] = useState<ClassType>({
        title: '선택하세요',
        id: 'none',
        color: 'black',
    });
    const [fileList, setFileList] = useState<File[]>([
        {
            info: {
                dno: '1',
                url: dummyImg,
                domain: '',
                filename: 'dummyImg',
                path: '',
            },
            annoList: [],
        },
    ]);
    const [selectedImg, setSelectedImg] = useState<File>(fileList[0]);

    const init = async () => {
        const res = await getImageList();

        const { datas } = res.data;
        const productData = datas.map((data: File) => {
            return {
                info: data,
                annoList: [],
            };
        });
        setFileList(productData);
        setSelectedImg(productData[0]);
    };

    const handleSelectClass = (e: ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        const classValue = classList.filter((item) => item.id === value);

        setSelectedClass(classValue[0]);
    };

    const handleAddAnnotation = (Anno: AnnotationType) => {
        const tempAnno = Anno;
        tempAnno.id = randomNumber(selectedImg.annoList);
        tempAnno.class = selectedClass;

        if (tempAnno.class.id === 'none') {
            // eslint-disable-next-line no-alert
            window.alert('class를 선택하지 않았습니다.');
            return;
        }

        setSelectedImg((prev) => {
            return {
                info: {
                    dno: prev.info.dno,
                    filename: prev.info.filename,
                    path: prev.info.path,
                    url: prev.info.url,
                    domain: prev.info.domain,
                },
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
                info: {
                    dno: prev.info.dno,
                    filename: prev.info.filename,
                    path: prev.info.path,
                    url: prev.info.url,
                    domain: prev.info.domain,
                },
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
                    info: {
                        dno: prev.info.dno,
                        filename: prev.info.filename,
                        path: prev.info.path,
                        url: prev.info.url,
                        domain: prev.info.domain,
                    },
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
        setSelectedImg(selectedItem);
    };

    const handleSaveData = async () => {
        const formData = new FormData();

        const boundingList = selectedImg.annoList.map((anno) => {
            return {
                id: anno.id,
                class_name: anno.class.title,
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
