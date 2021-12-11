import React from 'react';
import { Container } from 'styles/default-styles';
import styled, { css } from 'styled-components';
import Color from 'assets/color';
import deleteIcon from 'assets/img/deleteIcon.png';
import { AnnotationType, File } from 'interface';

interface Props {
    fileList: File[];
    annotationList: AnnotationType[];
    handleSelectAnnotation: (Anno: AnnotationType) => void;
    handleDeleteAnnotation: (Anno: AnnotationType) => void;
    handleSelectImg: (Anno: File) => void;
    selectedImg: File | null;
    selectedAnnotation: AnnotationType | null;
}

const Wrapper = styled.div`
    background-color: ${Color.lightsteelgray_20};
    padding: 5px;
    width: 100%;
    height: 100%;
`;

const Title = styled.div`
    width: calc(100% - 15px);
    text-align: center;
    border-style: inset;
`;

const TableWrapper = styled.div<{ height?: number }>`
    width: calc(100% - 12px);
    margin: 5px 0;
    min-height: ${(props) => (props.height ? `${props.height}px` : 'unset')};
    height: ${(props) => (props.height ? `${props.height}px` : 'unset')};
    background-color: ${Color.white};
    border: solid 1px ${Color.lightsteelgray_60};
    overflow: scroll;
    padding: 0;
`;

const Table = styled.table<{ height?: number }>`
    table-layout: fixed;
    position: relative;
    width: 100%;
    height: 100%;
    border-spacing: 0;
`;

const Th = css`
    position: sticky;
    border: 1px solid ${Color.lightsteelgray_10};
    top: 0;
    background-color: ${Color.white};
`;

const Thead = styled.thead`
    width: 100%;
    ${Th}
`;

const ObjTh = styled.th`
    ${Th}
    text-align: center;
    &:nth-child(1) {
        width: 50px;
    }
`;

const FileTh = styled.th`
    ${Th}
    text-align: left;
    &:nth-child(1) {
        width: 50px;
    }
`;

const Tr = styled.tr<{ selected?: boolean }>`
    cursor: pointer;
    background-color: ${(props) => (props.selected ? Color.blue_20 : 'unset')};
`;

const Td = styled.td`
    border: 1px solid ${Color.lightsteelgray_20};
`;

const DeleteBtn = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${Color.fbred_60};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const DeleteIcon = styled.img`
    width: 15px;
    height: 15px;
`;

const ListArea: React.FC<Props> = (props: Props) => {
    const {
        fileList,
        annotationList,
        handleSelectAnnotation,
        handleDeleteAnnotation,
        handleSelectImg,
        selectedImg,
        selectedAnnotation,
    } = props;
    const columns: string[] = ['No', 'ClassName', 'Type', 'Object', '좌표'];

    return (
        <Container size={{ width: '500px', height: '480px' }}>
            <Wrapper>
                <Title>Object List</Title>
                <TableWrapper height={200}>
                    <Table>
                        <Thead>
                            <tr>
                                {columns.map((column) => (
                                    <ObjTh key={column}>{column}</ObjTh>
                                ))}
                                <ObjTh>기타</ObjTh>
                            </tr>
                        </Thead>
                        <tbody>
                            {annotationList &&
                                annotationList.map((annotation) => (
                                    <Tr
                                        key={annotation.id}
                                        onClick={() => {
                                            handleSelectAnnotation(annotation);
                                        }}
                                        selected={selectedAnnotation?.id === annotation.id}
                                    >
                                        <Td>{annotation.id}</Td>
                                        <Td>{annotation.class}</Td>
                                        <Td>타입영역</Td>
                                        <Td>Object영역</Td>
                                        <Td>좌표영역</Td>
                                        <Td>
                                            <DeleteBtn
                                                onClick={() => handleDeleteAnnotation(annotation)}
                                            >
                                                <DeleteIcon src={deleteIcon} alt="deleteIcon" />
                                            </DeleteBtn>
                                        </Td>
                                    </Tr>
                                ))}
                        </tbody>
                    </Table>
                </TableWrapper>

                <Title>File List</Title>
                <TableWrapper height={205}>
                    <Table>
                        <Thead>
                            <tr>
                                <FileTh>No</FileTh>
                                <FileTh>FileName</FileTh>
                            </tr>
                        </Thead>
                        <tbody style={{ height: 100, overflow: 'hidden' }}>
                            {fileList.map((file) => (
                                <Tr
                                    key={file.info.dno}
                                    onClick={() => handleSelectImg(file)}
                                    selected={selectedImg?.info.dno === file.info.dno}
                                >
                                    <Td>{file.info.dno}</Td>
                                    <Td>{file.info.filename}</Td>
                                </Tr>
                            ))}
                        </tbody>
                    </Table>
                </TableWrapper>
            </Wrapper>
        </Container>
    );
};

export default ListArea;
