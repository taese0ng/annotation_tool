export interface ClassType {
    title: string;
    id: string;
    color: string;
}

export interface AnnotationType {
    id: string;
    mark: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    info?: {
        accidentType: string;
        accidentFeat: string;
        AInfo: string;
        BInfo: string;
        rate: string;
        class: ClassType;
    };
}

export interface File {
    no: number;
    name: string;
    annoList: AnnotationType[];
}