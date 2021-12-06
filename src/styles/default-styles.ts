import styled, { keyframes } from 'styled-components';
import Color from 'assets/color';

export const Container = styled.div<{
    bgColor?: string;
    scroll?: boolean;
    alignItems?: 'center' | 'flex-end';
    justifyContent?: 'space-between' | 'center' | 'space-around' | 'flex-end';
    margin?: string;
    padding?: string;
    size?: { width: string; height: string } | 'unset';
    borderRadius?: string;
    fullSpace?: boolean;
    flexDirection?: 'col' | 'row';
}>`
    position: relative;
    display: flex;
    flex-direction: ${(props) => (props.flexDirection === 'row' ? 'row' : 'column')};
    ${(props) => {
        if (props.fullSpace) {
            return 'width:100vw; height:100vh;';
        }
        if (props.size === 'unset') {
            return 'width: unset; height: unset;';
        }
        if (props.size?.width) {
            return `min-width:${props.size.width}; width:${props.size.width}; min-height:${props.size.height}; height:${props.size.height};`;
        }
        return 'width:100%; height:100%;';
    }}
    background-color: ${(props) => (props.bgColor !== null ? props.bgColor : 'transparent')};
    overflow-y: ${(props) => (props.scroll === true ? 'auto' : 'hidden')};
    overflow-x: hidden;

    align-items: ${(props) => (props.alignItems ? props.alignItems : 'flex-start')};
    justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'unset')};

    margin: ${(props) => (props.margin !== null ? props.margin : '0')};
    padding: ${(props) => (props.padding !== null ? props.padding : '0')};
    border-radius: ${(props) => (props.borderRadius ? props.borderRadius : '0')};
`;

export const Body = styled.div<{
    scroll?: boolean;
    bgColor?: string;
    size?: { width: number; height: number } | 'unset';
}>`
    ${(props) => {
        if (props.size === 'unset') {
            return 'width: unset; height: unset;';
        }
        if (props.size?.width) {
            return `width:${props.size.width}px; height:${props.size.height};`;
        }
        return 'width:100%; height:100%;';
    }}
    overflow: ${(props) => (props.scroll ? 'auto' : 'hidden')};
`;

export const Row = styled.div<{
    reverse?: boolean;
    wrap?: boolean;
    alignItems?: 'center' | 'flex-end' | 'unset';
    justifyContent?: 'unset' | 'space-between' | 'center' | 'space-around' | 'flex-end';
    scroll?: boolean;
    margin?: string;
    padding?: string;
    bgColor?: string;
    relative?: boolean;
    absolute?: boolean;
    pointer?: boolean;
}>`
    position: ${(props) => {
        if (props.relative) {
            return 'relative';
        }
        if (props.absolute) {
            return 'absolute';
        }
        return 'unset';
    }};
    width: 100%;
    margin: ${(props) => (props.margin !== null ? props.margin : '0')};
    padding: ${(props) => (props.padding !== null ? props.padding : '0')};
    display: ${(props) => (props.scroll ? '-webkit-box' : 'flex')};
    flex-wrap: ${(props) => (props.wrap === true ? 'wrap' : 'nowrap')};
    flex-direction: ${(props) => (props.reverse === true ? 'row-reverse' : 'row')};
    overflow: ${(props) => (props.scroll ? 'scroll' : 'unset')};
    align-items: ${(props) => (props.alignItems ? props.alignItems : 'flex-start')};
    justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'unset')};
    background-color: ${(props) => (props.bgColor !== null ? props.bgColor : 'transparent')};
    cursor: ${(props) => (props.pointer ? 'pointer' : 'unset')};
`;

export const Col = styled.div<{
    reverse?: boolean;
    wrap?: boolean;
    alignItems?: 'center' | 'flex-end' | 'flex-start';
    justifyContent?: 'space-between' | 'center' | 'space-around' | 'flex-end' | 'flex-start';
    scroll?: boolean;
    margin?: string;
    padding?: string;
    bgColor?: string;
    fullWidth?: boolean;
    relative?: boolean;
    absolute?: boolean;
}>`
    position: ${(props) => {
        if (props.relative) {
            return 'relative';
        }
        if (props.absolute) {
            return 'absolute';
        }
        return 'unset';
    }};
    margin: ${(props) => (props.margin !== null ? props.margin : '0')};
    padding: ${(props) => (props.padding !== null ? props.padding : '0')};
    display: flex;
    flex-wrap: ${(props) => (props.wrap === true ? 'wrap' : 'unset')};
    flex-direction: ${(props) => (props.reverse === true ? 'column-reverse' : 'column')};
    overflow: ${(props) => (props.scroll ? 'auto' : 'hidden')};
    align-items: ${(props) => (props.alignItems ? props.alignItems : 'flex-start')};
    justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'unset')};
    background-color: ${(props) => (props.bgColor !== null ? props.bgColor : 'transparent')};
    width: ${(props) => (props.fullWidth ? '100%' : 'unset')};
`;

export const Divider = styled.div<{
    vertical?: boolean;
    color?: string;
    thick?: number;
    length?: number | string;
    margin?: string;
    padding?: string;
    borderRadius?: number;
}>`
    ${(props) => {
        if (props.vertical) {
            if (props.length) {
                return `height: ${props.length}${
                    typeof props.length === 'number' ? 'px' : ''
                }; width:${props.thick != null ? props.thick : 1}px;`;
            }
            return `height: 100%; width:${props.thick != null ? props.thick : 1}px;`;
        }
        if (props.length) {
            return `width: ${props.length}${typeof props.length === 'number' ? 'px' : ''}; height:${
                props.thick != null ? props.thick : 1
            }px;`;
        }
        return `width: 100%; height:${props.thick != null ? props.thick : 1}px;`;
    }}
    background-color: ${(props) => (props.color != null ? props.color : Color.black)};
    margin: ${(props) => (props.margin !== null ? props.margin : '0')};
    padding: ${(props) => (props.padding !== null ? props.padding : '0')};
    border-radius: ${(props) => (props.borderRadius != null ? props.borderRadius : 0)}px;
`;

export const Spacer = styled.div<{ length: number; vertical?: boolean }>`
    padding: 0;
    margin: 0;
    ${(props) =>
        props.vertical
            ? `min-height:${props.length}px; height:${props.length}px; width:1px`
            : `height:1px; min-width:${props.length}px; width:${props.length}px`}
`;

export const MapWrapper = styled.div<{
    margin?: string;
    padding?: string;
    direction?: 'row' | 'col';
    alignItems?: 'center' | 'flex-end';
    justifyContent?: 'space-between' | 'center' | 'space-around' | 'flex-end';
}>`
    position: relative;
    ${(props) => {
        if (props.direction === 'row') {
            return 'display:flex;';
        }
        return 'display:block;';
    }}
    margin: ${(props) => (props.margin ? props.margin : 0)};
    padding: ${(props) => (props.padding ? props.padding : 0)};
    align-items: ${(props) => (props.alignItems ? props.alignItems : 'unset')};
    justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'unset')};
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
    animation: ${rotate360} 1s linear infinite;
    transform: translateZ(0);
    border-top: 2px solid grey;
    border-right: 2px solid grey;
    border-bottom: 2px solid grey;
    border-left: 4px solid black;
    background: transparent;
    width: 24px;
    height: 24px;
    border-radius: 50%;
`;

export const Btn = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`;
