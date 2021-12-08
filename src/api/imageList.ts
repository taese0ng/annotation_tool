import API from './api';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getImageList = async (): Promise<any> => {
    try {
        const res = await API.get(
            '?mode=list&pno=46&spno=41&apikey=7670f88f-814c-4a16-bd13-5eb2cdf86f01&limit=10',
        );

        return res;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
        return e.response;
    }
};

export default getImageList;
