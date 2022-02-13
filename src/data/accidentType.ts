import { carByCar, carByPedestrian, expressway } from './accidentObjects';

const accidentObjects: Array<AccidentObjectType> = [carByCar, carByPedestrian, expressway];

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
