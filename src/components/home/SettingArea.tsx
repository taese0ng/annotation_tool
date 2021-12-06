import React, { ChangeEvent } from 'react';
import { Container, Col } from 'styles/default-styles';
import styled, { css } from 'styled-components';
import Color from 'assets/color';
import { ClassType } from 'pages/Home';

interface Props {
    handleStartDrawMode: () => void;
    inputs: {
        accidentType: string;
        accidentFeat: string;
        AInfo: string;
        BInfo: string;
        rate: string;
    };
    handleChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
    classList: ClassType[];
    selectedClass: ClassType;
    handleSelectClass: (e: ChangeEvent<HTMLSelectElement>) => void;
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
    } = props;
    const { accidentType, accidentFeat, AInfo, BInfo, rate } = inputs;

    const handleClickSave = () => {
        // eslint-disable-next-line no-console
        console.log('save');
    };

    const handleClickDraw = () => {
        handleStartDrawMode();
    };

    const handleClickAutoLabelling = () => {
        // eslint-disable-next-line no-console
        console.log('autoLabelling');
    };

    return (
        <Container size={{ width: '200px', height: '100%' }}>
            <Button onClick={handleClickSave}>저장</Button>

            <Wrapper>
                <Col>
                    <Label>사고 장소 유형</Label>
                    <Input name="accidentType" value={accidentType} onChange={handleChangeInput} />
                </Col>

                <Col>
                    <Label>사고 장소 특징</Label>
                    <Input name="accidentFeat" value={accidentFeat} onChange={handleChangeInput} />
                </Col>

                <Col>
                    <Label>사고 객체 A 진행 정보</Label>
                    <Input name="AInfo" value={AInfo} onChange={handleChangeInput} />
                </Col>

                <Col>
                    <Label>사고 객체 B 진행 정보</Label>
                    <Input name="BInfo" value={BInfo} onChange={handleChangeInput} />
                </Col>

                <Col>
                    <Label>과실 비율</Label>
                    <Input name="rate" value={rate} onChange={handleChangeInput} />
                </Col>

                <Col>
                    <Label>클래스 선택</Label>
                    <Select value={selectedClass.id} onChange={handleSelectClass}>
                        {classList.map((item) => (
                            <option key={item.id} value={item.id}>
                                {item.title}
                            </option>
                        ))}
                    </Select>
                </Col>
            </Wrapper>

            <Button onClick={handleClickDraw}>그리기</Button>

            <Button onClick={handleClickAutoLabelling} style={{ marginTop: 10 }}>
                Auto
                <br />
                Labeling
            </Button>
        </Container>
    );
};

export default SettingArea;
