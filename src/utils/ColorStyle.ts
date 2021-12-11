import Color from 'assets/color';

const colorStyle = (mode: string): string => {
    switch (mode) {
        case '선택하세요':
            return 'black';
        case '차량':
            return 'red';
        case '보행자':
            return 'orange';
        case '이륜차':
            return 'yellow';
        case '자전거':
            return 'green';
        case '표지판':
            return 'blue';
        case '신호등(적색)':
            return 'navy';
        case '신호등(녹색)':
            return 'purple';
        case '신호등(기타)':
            return Color.hotPink;
        case '횡단보도':
            return Color.graySky;
        default:
            return 'black';
    }
};

export default colorStyle;
