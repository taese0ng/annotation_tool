import { carByCar, carByPedestrian, expressway, carByCart } from './accidentObjects';

const accidentObjects: Array<AccidentObjectType> = [
    carByCar,
    carByPedestrian,
    expressway,
    carByCart,
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
