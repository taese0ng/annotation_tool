import { AnnotationType } from 'components/home/annotation/AnnotationRect';

const randomNumber = (annotationList: AnnotationType[]): string => {
    const True = true;
    let RAND_0_10000 = '';
    while (True) {
        const RAND = String(Math.floor(Math.random() * 10001));

        const found = annotationList.find((item) => item.id === RAND);

        if (found === undefined) {
            RAND_0_10000 = RAND;
            break;
        }
    }

    return RAND_0_10000;
};

export default randomNumber;
