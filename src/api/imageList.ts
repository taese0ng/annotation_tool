/* eslint-disable @typescript-eslint/no-explicit-any */
import API from './api';

const getImageList = async (queryString: {
    mode: string;
    pno: string;
    spno: string;
    apiKey: string;
    limit: string;
}): Promise<any> => {
    try {
        const { mode, pno, spno, apiKey, limit } = queryString;

        const res = await API.get(
            `?mode=${mode}&pno=${pno}&spno=${spno}&apikey=${apiKey}&limit=${limit}`,
        );

        return res;
    } catch (e: any) {
        return e.response;
    }
};

export default getImageList;
