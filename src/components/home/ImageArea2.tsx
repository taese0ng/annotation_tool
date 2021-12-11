import React, { useState, useRef, MouseEvent } from 'react';
import styled from 'styled-components';
import { Container } from 'styles/default-styles';
import { ClassType, AnnotationType, File } from 'interface';
import randomNum from 'utils/RandomNum';
import AnnotationRect from './annotation/AnnotationRect';

interface Props {
    annotationList: AnnotationType[];
    handleAddAnnotation: (Anno: AnnotationType) => void;
    drawMode: boolean;
    handleEndDrawMode: () => void;
    selectedAnnotation: AnnotationType | null;
    selectedClass: ClassType;
    handleChangeAnnotation: (Anno: AnnotationType) => void;
    selectedImg: File | null;
}

const Img = styled.img`
    min-width: 640px;
    width: 640px;
    min-height: 480px;
    height: 480px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

const DummyRect = styled.div<{ mark: AnnotationType; color: string }>`
    position: absolute;
    top: ${(props) => props.mark.mark.y}px;
    left: ${(props) => props.mark.mark.x}px;
    width: ${(props) => props.mark.mark.width}px;
    height: ${(props) => props.mark.mark.height}px;
    border: 2px solid ${(props) => props.color};
`;

const Screen = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
`;

const ImageArea2: React.FC<Props> = (props: Props) => {
    const {
        selectedClass,
        annotationList,
        handleAddAnnotation,
        drawMode,
        handleEndDrawMode,
        selectedAnnotation,
        handleChangeAnnotation,
        selectedImg,
    } = props;
    const [mouseClick, setMouseClick] = useState<boolean>(false);
    const imgRef = useRef(null);
    const [tempRect, setTempRect] = useState<AnnotationType>({
        id: '0',
        mark: { x: 0, y: 0, width: 0, height: 0 },
        class: { title: '', id: '', color: 'black' },
    });
    const coorRef = useRef({ x: 0, y: 0 });

    const handleStartDraw = (e: MouseEvent<HTMLDivElement>) => {
        if (drawMode) {
            const { offsetX, offsetY } = e.nativeEvent;
            setMouseClick(true);
            coorRef.current = { x: offsetX, y: offsetY };
        }
    };

    const handleDraw = (e: MouseEvent<HTMLDivElement>) => {
        if (drawMode && mouseClick) {
            const { offsetX, offsetY } = e.nativeEvent;
            setTempRect(() => {
                return {
                    id: `${randomNum(annotationList)}`,
                    mark: {
                        x: coorRef.current.x < offsetX ? coorRef.current.x : offsetX,
                        y: coorRef.current.y < offsetY ? coorRef.current.y : offsetY,
                        width: Math.abs(offsetX - coorRef.current.x),
                        height: Math.abs(offsetY - coorRef.current.y),
                    },
                    class: { title: '', id: '', color: 'black' },
                };
            });
        }
    };

    const handleEndDraw = () => {
        if (drawMode) {
            setMouseClick(false);
            handleEndDrawMode();
            handleAddAnnotation(tempRect);
            setTempRect({
                id: '0',
                mark: { x: 0, y: 0, width: 0, height: 0 },
                class: { title: '', id: '', color: 'black' },
            });
        }
    };

    return (
        <Container
            size={{ width: '640px', height: '480px' }}
            onMouseDown={handleStartDraw}
            onMouseMove={handleDraw}
            onMouseUp={handleEndDraw}
        >
            {selectedAnnotation ? <></> : <Screen> </Screen>}

            <Img ref={imgRef} src={selectedImg?.info.url} alt="selectedImg" draggable={false} />

            {annotationList &&
                annotationList.map((item) => (
                    <AnnotationRect
                        key={item.id}
                        annotation={item}
                        isSelected={selectedAnnotation?.id === item.id}
                        handleChangeAnnotation={handleChangeAnnotation}
                    />
                ))}
            {mouseClick && <DummyRect mark={tempRect} color={selectedClass.color} />}
        </Container>
    );
};

export default ImageArea2;
