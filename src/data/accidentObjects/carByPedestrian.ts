import { AccidentObjectType } from 'data/accidentType';

const carByPedestrian: AccidentObjectType = {
    title: '차대보행자',
    place: [
        {
            title: '횡단보도(신호등 없음)',
            feat: [
                {
                    title: '직선 도로',
                    Adirection: [
                        {
                            title: '횡단보도 횡단',
                            Bdirection: [
                                { title: '직진', rate: 100 },
                                { title: '이륜차 횡단보도 횡단', rate: 100 },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            title: '횡단보도(신호등 있음)',
            feat: [
                {
                    title: '자동차 교차로 통과 후',
                    Adirection: [
                        {
                            title: '[적색신호] 횡단 시작, [적색신호] 충격',
                            Bdirection: [
                                { title: '[녹색 좌회전 신호] 좌회전', rate: 30 },
                                { title: '[녹색 직진 신호] 직진', rate: 30 },
                                { title: '[녹색 우회전 신호] 우회전', rate: 30 },
                                { title: '[황색신호] 좌회전', rate: 50 },
                                { title: '[황색신호] 직진', rate: 50 },
                                { title: '[황색 우회전 신호] 우회전', rate: 50 },
                                { title: '[적색신호] 좌회전', rate: 60 },
                                { title: '[적색신호] 직진', rate: 60 },
                                { title: '[적색 우회전 신호] 우회전', rate: 60 },
                            ],
                        },
                        {
                            title: '[적색신호] 횡단 시작, 녹색(녹색점멸 포함) 신호 충격',
                            Bdirection: [
                                { title: '[황색신호] 좌회전', rate: 70 },
                                { title: '[황색신호] 직진', rate: 70 },
                            ],
                        },
                        {
                            title: '[녹색신호] 횡단 시작, 녹색(녹색점멸 포함) 신호 충격',
                            Bdirection: [
                                { title: '[황색신호] 좌회전', rate: 100 },
                                { title: '[황색신호] 직진', rate: 100 },
                                { title: '[적색신호] 좌회전', rate: 100 },
                                { title: '[적색신호] 직진', rate: 100 },
                                { title: '[적색 우회전 신호] 우회전', rate: 100 },
                            ],
                        },
                        {
                            title: '녹색(녹색점멸) 신호에 횡단 시작, [적색신호] 충격',
                            Bdirection: [
                                { title: '[적색신호] 좌회전', rate: 80 },
                                { title: '[적색신호] 직진', rate: 80 },
                                { title: '[적색 우회전 신호] 우회전', rate: 80 },
                            ],
                        },
                    ],
                },
                {
                    title: '자동차 교차로 통과 전',
                    Adirection: [
                        {
                            title: '[적색신호] 횡단 시작, [적색신호] 충격',
                            Bdirection: [{ title: '[녹색신호] 직진', rate: 30 }],
                        },
                        {
                            title: '[녹색신호] 횡단 시작, 녹색(녹색점멸 표함) 신호 충격',
                            Bdirection: [{ title: '[적색신호] 직진', rate: 100 }],
                        },
                        {
                            title: '[적색신호] 횡단 시작, [녹색신호] 충격',
                            Bdirection: [{ title: '[적색신호] 직진', rate: 80 }],
                        },
                        {
                            title: '[녹색신호] 횡단 시작, [적색신호] 충격',
                            Bdirection: [{ title: '[녹색신호] 직진', rate: 90 }],
                        },
                        {
                            title: '[녹색점멸신호] 횡단 시작, [적색신호] 충격',
                            Bdirection: [{ title: '[녹색신호] 직진', rate: 80 }],
                        },
                        {
                            title: '[녹색점멸신호] 횡단 시작, [녹색점멸신호] 충격',
                            Bdirection: [{ title: '[적색신호] 직진', rate: 95 }],
                        },
                    ],
                },
            ],
        },
        {
            title: '횡단보도 없음',
            feat: [
                {
                    title: '교차로(대로와 소로)',
                    Adirection: [
                        {
                            title: '소로 횡단',
                            Bdirection: [{ title: '소로 주행<좌(우)회전 동일>', rate: 90 }],
                        },
                        {
                            title: '대로 횡단',
                            Bdirection: [{ title: '대로 주행<좌(우)회전 동일>', rate: 70 }],
                        },
                        {
                            title: '횡단',
                            Bdirection: [{ title: '교차로 주행<좌(우)회전 동일>', rate: 80 }],
                        },
                    ],
                },
                {
                    title: '단일로(중앙선 없음)',
                    Adirection: [{ title: '횡단', Bdirection: [{ title: '직진', rate: 80 }] }],
                },
                {
                    title: '보도와 차도',
                    Adirection: [
                        { title: '보도 보행', Bdirection: [{ title: '보도 침범', rate: 100 }] },
                        {
                            title: '차도 보행(인도에서 공사 또는 퇴적토 등)',
                            Bdirection: [{ title: '차도 주행', rate: 90 }],
                        },
                        {
                            title: '차도 보행(이유없이 보, 차도 경계 1m이내)',
                            Bdirection: [{ title: '차도 주행', rate: 80 }],
                        },
                        {
                            title: '차도 보행(이유없이 보, 차도 경계 1m이상',
                            Bdirection: [{ title: '차도 주행', rate: 70 }],
                        },
                        {
                            title: '차도에서 놀이, 누워있음 또는 유사한 행위',
                            Bdirection: [{ title: '차도 주행', rate: 60 }],
                        },
                    ],
                },
                {
                    title: '보도와 차도(구분 없음)',
                    Adirection: [
                        {
                            title: '차도의 가장 자리로 보행',
                            Bdirection: [{ title: '차도 주행', rate: 100 }],
                        },
                        {
                            title: '차도의 중앙부분 보행',
                            Bdirection: [{ title: '차도 주행', rate: 80 }],
                        },
                    ],
                },
                {
                    title: '보행자 전용도로',
                    Adirection: [
                        {
                            title: '보행자 전용도로에서 보행',
                            Bdirection: [{ title: '보행자 전용도로로 주행', rate: 100 }],
                        },
                    ],
                },
                {
                    title: '차도가 아닌 장소',
                    Adirection: [
                        {
                            title: '횡단',
                            Bdirection: [{ title: '직진', rate: 90 }],
                        },
                        {
                            title: '후진하는 차 뒷부분의 3m 이내 거리에서 횡단',
                            Bdirection: [{ title: '후진', rate: 80 }],
                        },
                        {
                            title: '후진하는 차 뒷부분의 3m 이상 거리에서 횡단',
                            Bdirection: [{ title: '후진', rate: 90 }],
                        },
                    ],
                },
            ],
        },
        {
            title: '횡단보도(신호등 없음) 부근',
            feat: [
                {
                    title: '직선도로',
                    Adirection: [
                        {
                            title: '횡단보도 10m 이내에서 횡단',
                            Bdirection: [{ title: '직진', rate: 80 }],
                        },
                    ],
                },
            ],
        },
        {
            title: '횡단보도(신호등 있음) 부근',
            feat: [
                {
                    title: '자동차 횡단보도 통과 후',
                    Adirection: [
                        {
                            title: '[녹색신호] 횡단보도 10m 이내에서 횡단',
                            Bdirection: [
                                { title: '[적색 우회전 신호] 우회전', rate: 90 },
                                { title: '[적색신호] 직진 또는 좌회전', rate: 90 },
                                { title: '[황색신호] 직진 또는 좌회전', rate: 90 },
                            ],
                        },
                        {
                            title: '[적색신호] 횡단보도 10m 이내에서 횡단',
                            Bdirection: [
                                { title: '[녹색 우회전 신호] 우회전', rate: 40 },
                                { title: '[적색 우회전 신호] 우회전', rate: 60 },
                                { title: '[적색신호] 직진 또는 좌회전', rate: 60 },
                                { title: '[황색신호] 직진 또는 좌회전', rate: 50 },
                                {
                                    title: '[녹색신호] 직진 또는 [녹색 좌회전 신호] 좌회전',
                                    rate: 50,
                                },
                            ],
                        },
                    ],
                },
                {
                    title: '자동차 횡단보도 통과 전',
                    Adirection: [
                        {
                            title: '[녹색신호] 횡단보도 10m 이내에서 횡단',
                            Bdirection: [{ title: '직진', rate: 80 }],
                        },
                        {
                            title: '[적색신호] 횡단보도 10m 이내에서 횡단',
                            Bdirection: [{ title: '직진', rate: 60 }],
                        },
                    ],
                },
            ],
        },
        {
            title: '육교 및 지하도 부근',
            feat: [
                {
                    title: '직선도로',
                    Adirection: [
                        {
                            title: '육교 및 지하도 10m 이내에서 횡단',
                            Bdirection: [{ title: '직진', rate: 80 }],
                        },
                    ],
                },
            ],
        },
    ],
};

export default carByPedestrian;
