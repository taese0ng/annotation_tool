import API, { AnnoAPI } from './api';

export const saveAnnotationData = async (data: FormData): Promise<any> => {
    try {
        const res = await API.post('', data);

        return res;
    } catch (e: any) {
        return e.response;
    }
};

export const getAutoLabel = async (imgUrl: string): Promise<any> => {
    try {
        const res = await AnnoAPI.get(`auto?url=${imgUrl}`);

        return res;
    } catch (e: any) {
        return e.response;
    }
};
