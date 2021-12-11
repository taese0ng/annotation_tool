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
    class: ClassType;
}

export interface File {
    info: {
        dno: string;
        url: string;
        domain: string;
        filename: string;
        path: string;
    };
    annoList: AnnotationType[];
}

interface DataType {
    url: string;
    accident_place: string;
    place_feature: string;
    object_A: string;
    object_B: string;
    rate: string;
    Bounding_Box: Array<{ id: string; class_name: string; coordinate: number[] }>;
}

export interface SaveDataType {
    mode: string;
    apikey: string;
    pno: string;
    spno: string;
    dno: string;
    data: DataType;
}
