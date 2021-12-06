import React, { useState } from 'react';
import { Container } from 'styles/default-styles';
// import styled from 'styled-components';
import dummyImg from 'assets/img/dummyImg.png';
import { ReactPictureAnnotation, defaultShapeStyle } from 'react-picture-annotation';

// const Img = styled.img`
//     min-width: 640px;
//     width: 640px;
//     min-height: 480px;
//     height: 480px;
// `;

interface IAnnotation {
    id: string; // required,
    comment: string; // not required
    mark: {
        type: 'RECT'; // now only support rect

        // The number of pixels in the upper left corner of the image
        x: number;
        y: number;

        // The size of tag
        width: number;
        height: number;
    };
}

const ImageArea: React.FC = () => {
    // const pageSize = { width: window.innerWidth, height: window.innerHeight };
    const [annotationData, setAnnotationData] = useState<IAnnotation[]>([
        {
            id: '11', // required,
            comment: '',
            mark: {
                type: 'RECT', // now only support rect

                // The number of pixels in the upper left corner of the image
                x: 110,
                y: 20,

                // The size of tag
                width: 100,
                height: 10,
            },
        },
    ]);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSelect = (selectedId: any) => {
        // eslint-disable-next-line no-console
        console.log('select: ', selectedId);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChange = (data: any) => {
        // eslint-disable-next-line no-console
        console.log('data: ', data);
        setAnnotationData(data);
    };

    return (
        <Container size={{ width: '640px', height: '480px' }}>
            {/* <Img src={dummyImg} alt="selectedImg" /> */}
            <ReactPictureAnnotation
                image={dummyImg}
                annotationData={annotationData}
                onSelect={handleSelect}
                onChange={handleChange}
                width={670}
                height={480}
                scrollSpeed={0}
                annotationStyle={{
                    ...defaultShapeStyle,
                    shapeShadowStyle: 'blue',
                    shapeStrokeStyle: 'blue',
                }}
                // inputElement={() => <></>}
            />
        </Container>
    );
};

export default ImageArea;
