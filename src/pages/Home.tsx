import React, { useState, ChangeEvent, useEffect } from 'react';
import { ImageArea2, SettingArea, ListArea } from 'components/home';
import { Container, Spacer } from 'styles/default-styles';
import Color from 'assets/color';
import randomNumber from 'utils/RandomNum';
import getImageList from 'api/imageList';
import { File, ClassType, AnnotationType } from 'interface';

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
    const [annotationList, setAnnotationList] = useState<AnnotationType[]>([]);
    const [drawMode, setDrawMode] = useState<boolean>(false);
    const [selectedAnnotation, setSelectedAnnotation] = useState<AnnotationType | null>(null);
    const [inputs, setInputs] = useState({
        accidentType: '',
        accidentFeat: '',
        AInfo: '',
        BInfo: '',
        rate: '',
    });
    const [selectedClass, setSelectedClass] = useState<ClassType>({
        title: '선택하세요',
        id: 'none',
        color: 'black',
    });
    const [fileList, setFileList] = useState<File[]>([
        { no: 55, name: 'https://data.crowdbank.co.kr/images/46/013_112_141.png', annoList: [] },
        { no: 56, name: 'https://data.crowdbank.co.kr/images/46/013_112_139.png', annoList: [] },
        { no: 57, name: 'https://data.crowdbank.co.kr/images/46/013_112_140.png', annoList: [] },
    ]);
    const [selectedImg, setSelectedImg] = useState<File>(fileList[0]);

    const init = async () => {
        const res = await getImageList();
        // eslint-disable-next-line no-console
        console.log(res);
    };

    const handleSelectClass = (e: ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        const classValue = classList.filter((item) => item.id === value);

        setSelectedClass(classValue[0]);
    };

    const handleAddAnnotation = (Anno: AnnotationType) => {
        const tempAnno = Anno;
        tempAnno.id = randomNumber(annotationList);
        tempAnno.info = {
            accidentType: inputs.accidentType,
            accidentFeat: inputs.accidentFeat,
            AInfo: inputs.AInfo,
            BInfo: inputs.BInfo,
            rate: inputs.rate,
            class: selectedClass,
        };

        if (tempAnno.info.class.id === 'none') {
            // eslint-disable-next-line no-alert
            window.alert('class를 선택하지 않았습니다.');
            return;
        }

        setSelectedImg((prev) => {
            return {
                no: prev.no,
                name: prev.name,
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
                no: prev.no,
                name: prev.name,
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
                    no: prev.no,
                    name: prev.name,
                    annoList: prev.annoList.filter((item) => item.id !== Anno.id),
                };
            });
        }
    };

    const handleSelectImg = (selectedItem: File) => {
        setFileList((prev) => {
            return prev.map((file) => {
                if (file.no === selectedImg.no) {
                    return selectedImg;
                }
                return file;
            });
        });
        setSelectedImg(selectedItem);
        setAnnotationList(selectedItem.annoList);
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
