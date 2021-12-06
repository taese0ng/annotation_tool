import React, { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'styles/default-styles';
import Color from 'assets/color';

const Label = styled.label`
    font-size: 25px;
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const SubmitBtn = styled.button`
    background-color: ${Color.blue_50};
    border: none;
    border-radius: 10px;
    color: ${Color.white};
    height: 60px;
    width: 80px;
    margin-left: 30px;
    font-size: 20px;
    font-weight: bold;
`;

const Input = styled.input`
    margin-left: 25px;
`;

const Signin: React.FC = () => {
    const [ID, setID] = useState<string>('');
    const [PW, setPW] = useState<string>('');

    const handleChangeID = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setID(value);
    };

    const handleChangePW = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setPW(value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // 로그인 통신해야한다.
    };

    return (
        <Container justifyContent="center" alignItems="center" fullSpace>
            <form onSubmit={handleSubmit}>
                <Row alignItems="center">
                    <Col>
                        <Label style={{ marginBottom: 25 }}>
                            ID
                            <Input value={ID} onChange={handleChangeID} />
                        </Label>

                        <Label>
                            PW
                            <Input type="password" value={PW} onChange={handleChangePW} />
                        </Label>
                    </Col>

                    <SubmitBtn>
                        Log
                        <br />
                        in
                    </SubmitBtn>
                </Row>
            </form>
        </Container>
    );
};

export default Signin;
