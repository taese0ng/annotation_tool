import React, { useState, ChangeEvent } from 'react';
import { ImageArea2, SettingArea, ListArea } from 'components/home';
import { Container, Spacer } from 'styles/default-styles';
import { AnnotationType } from 'components/home/annotation/AnnotationRect';
import Color from 'assets/color';
import randomNumber from 'utils/RandomNum';

export interface ClassType {
    title: string;
    id: string;
    color: string;
}

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

        setAnnotationList((prev) => [...prev, tempAnno]);
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
        setAnnotationList((prev) => {
            return prev.map((item) => {
                if (item.id === Anno.id) {
                    return Anno;
                }
                return item;
            });
        });
    };

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
                annotationList={annotationList}
                handleAddAnnotation={handleAddAnnotation}
                selectedAnnotation={selectedAnnotation}
                handleChangeAnnotation={handleChangeAnnotation}
            />

            <Spacer length={25} />

            <ListArea
                annotationList={annotationList}
                handleSelectAnnotation={handleSelectAnnotation}
            />
        </Container>
    );
};

export default Home;
