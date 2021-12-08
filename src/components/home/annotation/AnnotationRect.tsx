import React, { MouseEvent, useState, useRef } from 'react';
import styled from 'styled-components';
import { AnnotationType } from 'interface';

interface Props {
    annotation: AnnotationType;
    isSelected: boolean;
    handleChangeAnnotation: (Anno: AnnotationType) => void;
}

const Rect = styled.div<{
    color: string;
    width: number;
    height: number;
    x: number;
    y: number;
    isSelected: boolean;
}>`
    position: absolute;
    top: ${(props) => props.y}px;
    left: ${(props) => props.x}px;
    border: 2px solid ${(props) => props.color};
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    background-color: ${(props) => (props.isSelected ? '#FFFFFF80' : 'parents')};
    z-index: ${(props) => (props.isSelected ? 1000 : 'unset')};
`;

const DotSize = 8;

const EdgeDot = styled.span<{ edge: 'lt' | 'rt' | 'lb' | 'rb'; color: string }>`
    position: absolute;
    ${(props) => {
        const { edge } = props;
        switch (edge) {
            case 'lt':
                return `top:-${DotSize / 2}px; left:-${DotSize / 2}px;`;
            case 'rt':
                return `top:-${DotSize / 2}px; right:-${DotSize / 2}px;`;
            case 'lb':
                return `bottom:-${DotSize / 2}px; left:-${DotSize / 2}px;`;
            case 'rb':
                return `bottom:-${DotSize / 2}px; right:-${DotSize / 2}px`;
            default:
                return `bottom:-${DotSize / 2}px; right:-${DotSize / 2}px`;
        }
    }};
    width: ${DotSize}px;
    height: ${DotSize}px;
    background-color: ${(props) => props.color};
`;

const CoorPad = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1001;
`;

const AnnotationRect: React.FC<Props> = (props: Props) => {
    const { annotation, isSelected, handleChangeAnnotation } = props;
    const { mark, info } = annotation;
    const [dragable, setDragable] = useState<string | null>(null);
    const coorRef = useRef({ x: 0, y: 0 });
    const [tempRect, setTempRect] = useState<AnnotationType>(annotation);

    const handleStartDrag = (e: MouseEvent<HTMLDivElement>) => {
        const { offsetX, offsetY } = e.nativeEvent;
        const { x, y, width, height } = mark;
        const dot = DotSize / 2;
        const innerDragBox =
            x + dot < offsetX &&
            x + width - dot > offsetX &&
            y + dot < offsetY &&
            y + height - dot > offsetY;

        const ltDotBox =
            x - dot <= offsetX && x + dot >= offsetX && y - dot <= offsetY && y + dot >= offsetY;

        const rtDotBox =
            x + width + dot >= offsetX &&
            x + width - dot <= offsetX &&
            y - dot <= offsetY &&
            y + dot >= offsetY;

        const lbDotBox =
            x - dot <= offsetX &&
            x + dot >= offsetX &&
            y + height + dot >= offsetY &&
            y + height - dot <= offsetY;

        const rbDotBox =
            x + width + dot >= offsetX &&
            x + width - dot <= offsetX &&
            y + height + dot >= offsetY &&
            y + height - dot <= offsetY;

        if (isSelected && innerDragBox) {
            setDragable('drag');
            coorRef.current = { x: offsetX - x, y: offsetY - y };
        } else if (isSelected && ltDotBox) {
            setDragable('lt');
            coorRef.current = { x: offsetX, y: offsetY };
        } else if (isSelected && rtDotBox) {
            setDragable('rt');
            coorRef.current = { x: offsetX, y: offsetY };
        } else if (isSelected && lbDotBox) {
            setDragable('lb');
            coorRef.current = { x: offsetX, y: offsetY };
        } else if (isSelected && rbDotBox) {
            setDragable('rb');
            coorRef.current = { x: offsetX, y: offsetY };
        }
    };

    const handleDrag = (e: MouseEvent<HTMLDivElement>) => {
        const { offsetX, offsetY } = e.nativeEvent;
        if (isSelected && dragable === 'drag') {
            setTempRect((prev) => {
                return {
                    id: `${prev.id}`,
                    mark: {
                        x: offsetX - coorRef.current.x,
                        y: offsetY - coorRef.current.y,
                        width: prev.mark.width,
                        height: prev.mark.height,
                    },
                    info: prev.info,
                };
            });
        } else if (isSelected && dragable === 'lt') {
            setTempRect((prev) => {
                return {
                    id: `${prev.id}`,
                    mark: {
                        x: offsetX - coorRef.current.x < mark.width ? offsetX : mark.x + mark.width,
                        y:
                            offsetY - coorRef.current.y < mark.height
                                ? offsetY
                                : mark.y + mark.height,
                        width:
                            coorRef.current.x < offsetX
                                ? mark.width - (offsetX - coorRef.current.x)
                                : mark.width + (coorRef.current.x - offsetX),
                        height:
                            coorRef.current.y < offsetY
                                ? mark.height - (offsetY - coorRef.current.y)
                                : mark.height + (coorRef.current.y - offsetY),
                    },
                    info: prev.info,
                };
            });
        } else if (isSelected && dragable === 'rt') {
            setTempRect((prev) => {
                return {
                    id: `${prev.id}`,
                    mark: {
                        x: prev.mark.x,
                        y:
                            offsetY - coorRef.current.y < mark.height
                                ? offsetY
                                : mark.y + mark.height,
                        width: offsetX - mark.x,
                        height: mark.height - (offsetY - coorRef.current.y),
                    },
                    info: prev.info,
                };
            });
        } else if (isSelected && dragable === 'lb') {
            setTempRect((prev) => {
                return {
                    id: `${prev.id}`,
                    mark: {
                        x: offsetX - coorRef.current.x < mark.width ? offsetX : mark.x + mark.width,
                        y: prev.mark.y,
                        width:
                            coorRef.current.x < offsetX
                                ? mark.width - (offsetX - coorRef.current.x)
                                : mark.width + (coorRef.current.x - offsetX),
                        height: offsetY - mark.y,
                    },
                    info: prev.info,
                };
            });
        } else if (isSelected && dragable === 'rb') {
            setTempRect((prev) => {
                return {
                    id: `${prev.id}`,
                    mark: {
                        x: prev.mark.x,
                        y: prev.mark.y,
                        width: offsetX - mark.x,
                        height: offsetY - mark.y,
                    },
                    info: prev.info,
                };
            });
        }
    };

    const handleEndDrag = () => {
        if (isSelected) {
            setDragable(null);
            handleChangeAnnotation(tempRect);
        }
    };

    if (isSelected) {
        return (
            <>
                <Rect
                    width={tempRect.mark.width}
                    height={tempRect.mark.height}
                    color={tempRect.info?.class.color || 'black'}
                    x={tempRect.mark.x}
                    y={tempRect.mark.y}
                    isSelected={isSelected}
                >
                    <EdgeDot edge="lt" color={tempRect.info?.class.color || 'black'} />
                    <EdgeDot edge="rt" color={tempRect.info?.class.color || 'black'} />
                    <EdgeDot edge="lb" color={tempRect.info?.class.color || 'black'} />
                    <EdgeDot edge="rb" color={tempRect.info?.class.color || 'black'} />
                </Rect>

                <CoorPad
                    onMouseDown={handleStartDrag}
                    onMouseMove={handleDrag}
                    onMouseUp={handleEndDrag}
                />
            </>
        );
    }

    return (
        <Rect
            width={mark.width}
            height={mark.height}
            color={info?.class.color || 'black'}
            x={mark.x}
            y={mark.y}
            isSelected={isSelected}
        />
    );
};

export default AnnotationRect;
