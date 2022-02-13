import React, { ChangeEvent } from 'react';
import { Container, Col } from 'styles/default-styles';
import styled, { css } from 'styled-components';
import Color from 'assets/color';
import accidentObjects, {
    PlaceType,
    FeatType,
    AdirectionType,
    BdirectionType,
} from 'data/accidentType';

const width = css`
    width: calc(100% - 20px);
`;

const Button = styled.button`
    border: none;
    outline: none;
    background-color: ${Color.blue_90};
    color: ${Color.white};
    font-size: 25px;
    font-weight: bold;
    width: 100%;
    cursor: pointer;
`;

const Wrapper = styled.div`
    width: 100%;
    background-color: ${Color.lightsteelgray_20};
    padding: 10px 5px 0 5px;
    margin: 10px 0;
`;

const Label = styled.div`
    margin-bottom: 5px;
    font-size: 13px;
`;

const Select = styled.select`
    margin-bottom: 10px;
    ${width}
`;

interface Props {
    inputs: {
        accidentObj: string;
        accidentPlace: string;
        placeFeat: string;
        objectA: string;
        objectB: string;
    };
    classList: string[];
    selectedClass: string;
    accidentPlaces: Array<PlaceType> | undefined;
    placeFeats: Array<FeatType> | undefined;
    objectAs: Array<AdirectionType> | undefined;
    objectBs: Array<BdirectionType> | undefined;
    handleStartDrawMode: () => void;
    handleSelectClass: (e: ChangeEvent<HTMLSelectElement>) => void;
    handleSaveData: () => void;
    handleClickAutoLabelling: () => void;
    handleSelectItem: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const SettingArea: React.FC<Props> = (props: Props) => {
    const {
        inputs,
        classList,
        selectedClass,
        accidentPlaces = [],
        placeFeats = [],
        objectAs = [],
        objectBs = [],
        handleStartDrawMode,
        handleSelectClass,
        handleSaveData,
        handleClickAutoLabelling,
        handleSelectItem,
    } = props;
    const { accidentObj, accidentPlace, placeFeat, objectA, objectB } = inputs;

    return (
        <Container size={{ width: '200px', height: '100%' }}>
            <Button onClick={handleSaveData}>저장</Button>

            <Wrapper>
                <Col>
                    <Label>사고객체</Label>
                    <Select value={accidentObj} name="accidentObj" onChange={handleSelectItem}>
                        {accidentObjects.map((item) => (
                            <option key={item.title} value={item.title}>
                                {item.title}
                            </option>
                        ))}
                    </Select>
                </Col>

                <Col>
                    <Label>사고장소</Label>
                    <Select value={accidentPlace} name="accidentPlace" onChange={handleSelectItem}>
                        {accidentPlaces?.map((item) => (
                            <option key={item.title} value={item.title}>
                                {item.title}
                            </option>
                        ))}
                    </Select>
                </Col>

                <Col>
                    <Label>사고장소특징</Label>
                    <Select value={placeFeat} name="placeFeat" onChange={handleSelectItem}>
                        {placeFeats?.map((item) => (
                            <option key={item.title} value={item.title}>
                                {item.title}
                            </option>
                        ))}
                    </Select>
                </Col>

                <Col>
                    <Label>A진행방향</Label>
                    <Select value={objectA} name="objectA" onChange={handleSelectItem}>
                        {objectAs?.map((item) => (
                            <option key={item.title} value={item.title}>
                                {item.title}
                            </option>
                        ))}
                    </Select>
                </Col>

                <Col>
                    <Label>B진행방향</Label>
                    <Select value={objectB} name="objectB" onChange={handleSelectItem}>
                        {objectBs?.map((item) => (
                            <option key={item.title} value={item.title}>
                                {item.title}
                            </option>
                        ))}
                    </Select>
                </Col>

                <Col>
                    <Label>클래스 선택</Label>
                    <Select value={selectedClass} onChange={handleSelectClass}>
                        {classList.map((item) => (
                            <option key={item} value={item}>
                                {item}
                            </option>
                        ))}
                    </Select>
                </Col>
            </Wrapper>

            <Button onClick={handleStartDrawMode}>그리기</Button>

            <Button onClick={handleClickAutoLabelling} style={{ marginTop: 10 }}>
                Auto
                <br />
                Labeling
            </Button>
        </Container>
    );
};

export default SettingArea;
