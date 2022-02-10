import React, { ChangeEvent, useState } from 'react';
import { Container, Col } from 'styles/default-styles';
import styled, { css } from 'styled-components';
import Color from 'assets/color';
import accidentObjects from 'data/accidentType';

interface Props {
    handleStartDrawMode: () => void;
    inputs: {
        accidentPlace: string;
        placeFeat: string;
        objectA: string;
        objectB: string;
        rate: string;
    };
    handleChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
    classList: string[];
    selectedClass: string;
    handleSelectClass: (e: ChangeEvent<HTMLSelectElement>) => void;
    handleSaveData: () => void;
    handleClickAutoLabelling: () => void;
}

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

const Input = styled.input`
    margin-bottom: 10px;
    ${width}
`;

const Select = styled.select`
    margin-bottom: 10px;
    ${width}
`;

const SettingArea: React.FC<Props> = (props: Props) => {
    const {
        handleStartDrawMode,
        inputs,
        handleChangeInput,
        classList,
        selectedClass,
        handleSelectClass,
        handleSaveData,
        handleClickAutoLabelling,
    } = props;
    const { accidentPlace, placeFeat, objectA, objectB, rate } = inputs;
    const [inputs2, setInputs] = useState({
        accidentObj: accidentObjects[0].title,
        accidentPlace: accidentObjects[0].place[0].title,
        placeFeat: accidentObjects[0].place[0].feat[0].title,
        objectA: accidentObjects[0].place[0].feat[0].Adirection[0].title,
        objectB: accidentObjects[0].place[0].feat[0].Adirection[0].Bdirection[0].title,
        rate: accidentObjects[0].place[0].feat[0].Adirection[0].Bdirection[0].rate,
    });

    const accidentPlaces = accidentObjects.find((obj) => obj.title === inputs2.accidentObj)?.place;
    const placeFeats = accidentPlaces?.find((place) => place.title === inputs2.accidentPlace)?.feat;
    const objectAs = placeFeats?.find((feat) => feat.title === inputs2.placeFeat)?.Adirection;
    const objectBs = objectAs?.find((objA) => objA.title === inputs2.objectA)?.Bdirection;

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
                    rate: test?.place[0].feat[0].Adirection[0].Bdirection[0].rate || 0,
                });
                break;
            }

            case 'accidentPlace': {
                const test = accidentPlaces?.find((place) => place.title === value);

                setInputs({
                    ...inputs2,
                    accidentPlace: value,
                    placeFeat: test?.feat[0].title || '',
                    objectA: test?.feat[0].Adirection[0].title || '',
                    objectB: test?.feat[0].Adirection[0].Bdirection[0].title || '',
                    rate: test?.feat[0].Adirection[0].Bdirection[0].rate || 0,
                });
                break;
            }

            case 'placeFeat': {
                const test = placeFeats?.find((feat) => feat.title === value);

                setInputs({
                    ...inputs2,
                    placeFeat: value,
                    objectA: test?.Adirection[0].title || '',
                    objectB: test?.Adirection[0].Bdirection[0].title || '',
                    rate: test?.Adirection[0].Bdirection[0].rate || 0,
                });
                break;
            }

            case 'objectA': {
                const test = objectAs?.find((objA) => objA.title === value);

                setInputs({
                    ...inputs2,
                    objectA: value,
                    objectB: test?.Bdirection[0].title || '',
                    rate: test?.Bdirection[0].rate || 0,
                });
                break;
            }
            default:
                break;
        }
    };

    return (
        <Container size={{ width: '200px', height: '100%' }}>
            <Button onClick={handleSaveData}>저장</Button>

            <Wrapper>
                <Col>
                    <Label>사고객체</Label>
                    <Select
                        value={inputs2.accidentObj}
                        name="accidentObj"
                        onChange={handleSelectItem}
                    >
                        {accidentObjects.map((item) => (
                            <option key={item.title} value={item.title}>
                                {item.title}
                            </option>
                        ))}
                    </Select>
                </Col>

                <Col>
                    <Label>사고장소</Label>
                    <Select
                        value={inputs2.accidentPlace}
                        name="accidentPlace"
                        onChange={handleSelectItem}
                    >
                        {accidentPlaces?.map((item) => (
                            <option key={item.title} value={item.title}>
                                {item.title}
                            </option>
                        ))}
                    </Select>
                </Col>

                <Col>
                    <Label>사고장소특징</Label>
                    <Select value={inputs2.placeFeat} name="placeFeat" onChange={handleSelectItem}>
                        {placeFeats?.map((item) => (
                            <option key={item.title} value={item.title}>
                                {item.title}
                            </option>
                        ))}
                    </Select>
                </Col>

                <Col>
                    <Label>A진행방향</Label>
                    <Select value={inputs2.objectA} name="objectA" onChange={handleSelectItem}>
                        {objectAs?.map((item) => (
                            <option key={item.title} value={item.title}>
                                {item.title}
                            </option>
                        ))}
                    </Select>
                </Col>

                <Col>
                    <Label>B진행방향</Label>
                    <Select value={inputs2.objectB} name="objectB" onChange={handleSelectItem}>
                        {objectBs?.map((item) => (
                            <option key={item.title} value={item.title}>
                                {item.title}
                            </option>
                        ))}
                    </Select>
                </Col>

                {/*  */}
                {/*  */}
                {/*  */}
                {/*  */}
                {/*  */}
                {/*  */}
                {/*  */}
                {/*  */}
                {/*  */}

                <Col>
                    <Label>사고 장소 유형</Label>
                    <Input
                        name="accidentPlace"
                        value={accidentPlace}
                        onChange={handleChangeInput}
                    />
                </Col>

                <Col>
                    <Label>사고 장소 특징</Label>
                    <Input name="placeFeat" value={placeFeat} onChange={handleChangeInput} />
                </Col>

                <Col>
                    <Label>사고 객체 A 진행 정보</Label>
                    <Input name="objectA" value={objectA} onChange={handleChangeInput} />
                </Col>

                <Col>
                    <Label>사고 객체 B 진행 정보</Label>
                    <Input name="objectB" value={objectB} onChange={handleChangeInput} />
                </Col>

                <Col>
                    <Label>과실 비율</Label>
                    <Input name="rate" value={rate} onChange={handleChangeInput} />
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
