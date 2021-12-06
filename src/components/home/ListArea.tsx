import React, { useState } from 'react';
import { Container } from 'styles/default-styles';
import styled, { css } from 'styled-components';
import Color from 'assets/color';
import { AnnotationType } from './annotation/AnnotationRect';

interface File {
    no: number;
    name: string;
}

interface Props {
    annotationList: AnnotationType[];
    handleSelectAnnotation: (Anno: AnnotationType) => void;
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

const ListArea: React.FC<Props> = (props: Props) => {
    const { annotationList, handleSelectAnnotation } = props;
    const columns: string[] = ['No', 'ClassName', 'Type', 'Object', '좌표'];
    const fileList: File[] = [
        { no: 55, name: '123567_9_3_2_159.png' },
        { no: 56, name: '123567_9_3_2_160.png' },
        { no: 57, name: '123567_9_3_2_161.png' },
        { no: 58, name: '123567_9_3_2_162.png' },
        { no: 59, name: '123567_9_3_2_163.png' },
        { no: 60, name: '123567_9_3_2_164.png' },
        { no: 61, name: '123567_9_3_2_165.png' },
        { no: 62, name: '123567_9_3_2_166.png' },
        { no: 63, name: '123567_9_3_2_167.png' },
        { no: 64, name: '123567_9_3_2_168.png' },
    ];
    const [selectedImg, setSelectedImg] = useState<File | null>(null);
    const [selectedObj, setSelectedObj] = useState<AnnotationType | null>(null);

    const handleSelectImg = (selectedItem: File) => {
        setSelectedImg(selectedItem);
    };

    const handleSelectObj = (selectedItem: AnnotationType) => {
        setSelectedObj(selectedItem);
    };

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
                            </tr>
                        </Thead>
                        <tbody>
                            {annotationList.map((annotation) => (
                                <Tr
                                    key={annotation.id}
                                    onClick={() => {
                                        handleSelectAnnotation(annotation);
                                        handleSelectObj(annotation);
                                    }}
                                    selected={selectedObj?.id === annotation.id}
                                >
                                    <Td>{annotation.id}</Td>
                                    <Td>{annotation.info?.class.title}</Td>
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
                                    key={file.no}
                                    onClick={() => handleSelectImg(file)}
                                    selected={selectedImg?.no === file.no}
                                >
                                    <Td>{file.no}</Td>
                                    <Td>{file.name}</Td>
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
