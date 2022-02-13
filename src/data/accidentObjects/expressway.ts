import { AccidentObjectType } from 'data/accidentType';

const expressway: AccidentObjectType = {
    title: '고속도로',
    place: [
        {
            title: '고속도로(자동차 전용도로) 포함',
            feat: [
                {
                    title: '주행차로와 추월차로',
                    Adirection: [
                        {
                            title: '추월차로에서 직진',
                            Bdirection: [{ title: '주행차로에서 추월차로로 진로변경', rate: 80 }],
                        },
                        {
                            title: '후행 직진',
                            Bdirection: [
                                { title: '추월차로에서 주행차로로 진로변경', rate: 70 },
                                { title: '주행차로에서 주행차로로 변경', rate: 70 },
                            ],
                        },
                    ],
                },
                {
                    title: '합류',
                    Adirection: [
                        {
                            title: '본선에서 직진',
                            Bdirection: [
                                { title: '본선으로 합류', rate: 70 },
                                { title: '차로 감소 도로에서 본선으로 합류', rate: 60 },
                            ],
                        },
                    ],
                },
                {
                    title: '주(정)차',
                    Adirection: [
                        {
                            title: '차로에서 주(정)차한 차량을 추돌',
                            Bdirection: [{ title: '차로에서 주(정)차', rate: 40 }],
                        },
                        {
                            title: '갓깃에서 주(정)차한 차량을 추돌',
                            Bdirection: [{ title: '갓길에서 주(정)차', rate: 0 }],
                        },
                    ],
                },
                {
                    title: '추돌',
                    Adirection: [
                        {
                            title: '선행 차량 추돌',
                            Bdirection: [{ title: '선행직진', rate: 0 }],
                        },
                    ],
                },
                {
                    title: '낙하물',
                    Adirection: [
                        {
                            title: '낙화물에 의해 충격,회피중',
                            Bdirection: [{ title: '적재물 등의 낙하', rate: 100 }],
                        },
                    ],
                },
                {
                    title: '보행자',
                    Adirection: [
                        {
                            title: '직진',
                            Bdirection: [
                                { title: '이유 없는 고속도로 보행', rate: 100 },
                                { title: '이유 없는 고속도로 보행(고장, 사무, 공무 등)', rate: 60 },
                            ],
                        },
                    ],
                },
                {
                    title: '갓길 진로변경',
                    Adirection: [
                        {
                            title: '갓길로 진로변경',
                            Bdirection: [{ title: '갓길 직진', rate: 40 }],
                        },
                    ],
                },
            ],
        },
    ],
};

export default expressway;
