import { carByCar, carByPedestrian, expressway, carByCart, carByBicycle } from './accidentObjects';

const accidentObjects: Array<AccidentObjectType> = [
    {
        title: '선택하세요',
        place: [
            {
                title: '객체를 선택하세요',
                feat: [
                    {
                        title: '장소를 선택하세요',
                        Adirection: [
                            {
                                title: '장소 특징을 선택하세요',
                                Bdirection: [
                                    {
                                        title: 'A진행방향을 선택하세요',
                                        rate: 0,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    carByCar,
    carByPedestrian,
    expressway,
    carByCart,
    carByBicycle,
];

export interface AccidentObjectType {
    title: string;
    place: Array<PlaceType>;
}

export interface PlaceType {
    title: string;
    feat: Array<FeatType>;
}

export interface FeatType {
    title: string;
    Adirection: Array<AdirectionType>;
}

export interface AdirectionType {
    title: string;
    Bdirection: Array<BdirectionType>;
}

export interface BdirectionType {
    title: string;
    rate: number;
}

export default accidentObjects;
