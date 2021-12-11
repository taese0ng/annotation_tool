import API from './api';

const saveAnnotationData = async (data: FormData): Promise<any> => {
    try {
        const res = await API.post('', data);

        return res;
    } catch (e: any) {
        return e.response;
    }
};

export default saveAnnotationData;
