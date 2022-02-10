const accidentObjects: Array<AccidentObjectType> = [
    {
        title: '차대차',
        place: [
            {
                title: '직선 도로',
                feat: [
                    {
                        title: '추돌 사고',
                        Adirection: [
                            {
                                title: '선행자동차(1차사고차량)를 추돌',
                                Bdirection: [
                                    {
                                        title: '선행자동차(1차사고차량)',
                                        rate: 20,
                                    },
                                ],
                            },
                            {
                                title: '후행 추돌',
                                Bdirection: [
                                    {
                                        title: '선행 직진',
                                        rate: 0,
                                    },
                                ],
                            },
                            {
                                title: '주(정)차',
                                Bdirection: [
                                    {
                                        title: '후행 추돌',
                                        rate: 100,
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        title: '차로 감소 도로 (합류)',
                        Adirection: [
                            {
                                title: '본선에서 직진',
                                Bdirection: [
                                    {
                                        title: '차로 감소 도로에서 본선으로 합류',
                                        rate: 60,
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        title: '열린 문 접촉사고',
                        Adirection: [
                            {
                                title: '후행직진',
                                Bdirection: [
                                    {
                                        title: '선행자동차(정차중 문열림)',
                                        rate: 80,
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        title: '역주행 사고(중앙선 침범)',
                        Adirection: [
                            {
                                title: '직진',
                                Bdirection: [
                                    {
                                        title: '중앙선 침범 직진',
                                        rate: 100,
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        title: '이면도로 교행 사고',
                        Adirection: [
                            {
                                title: '(마주보며)직진',
                                Bdirection: [
                                    {
                                        title: '(마주보며)직진',
                                        rate: 50,
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        title: '추월 사고',
                        Adirection: [
                            {
                                title: '선행직진',
                                Bdirection: [
                                    {
                                        title: '추월(실선 중앙선)',
                                        rate: 100,
                                    },
                                    {
                                        title: '급접거리 추월(점선 중앙선)',
                                        rate: 100,
                                    },
                                ],
                            },
                            {
                                title: '중앙선 침범 추월(후방)',
                                Bdirection: [{ title: '중앙선 침범 추월(전방)', rate: 40 }],
                            },
                            {
                                title: '실선 추월',
                                Bdirection: [{ title: '선행 직진', rate: 0 }],
                            },
                        ],
                    },
                    {
                        title: '차로변경(진로변경)',
                        Adirection: [
                            {
                                title: '후행 직진',
                                Bdirection: [{ title: '선행 진로 변경', rate: 70 }],
                            },
                            {
                                title: '동시 차로변경(진로변경)',
                                Bdirection: [{ title: '동시 차로변경(진로변경)', rate: 50 }],
                            },
                            {
                                title: '정체차로에서 대기 중 진로변경(측면 충돌)',
                                Bdirection: [{ title: '직진(측면 충돌)', rate: 0 }],
                            },
                        ],
                    },
                    {
                        title: '안전지대 통과 사고',
                        Adirection: [
                            {
                                title: '후행 직진(안전지대 벗어나기 전)',
                                Bdirection: [{ title: '선행 진로변경', rate: 0 }],
                            },
                            {
                                title: '후행 직진(안전지대 벗어난 후)',
                                Bdirection: [{ title: '선행 진로변경', rate: 30 }],
                            },
                        ],
                    },
                    {
                        title: '정차 후 출발 사고',
                        Adirection: [
                            {
                                title: '정차 후 출발',
                                Bdirection: [{ title: '추월', rate: 20 }],
                            },
                        ],
                    },
                    {
                        title: '긴급자동차 사고',
                        Adirection: [
                            {
                                title: '직진',
                                Bdirection: [{ title: '중앙선 왼쪽 통행(긴급자동차)', rate: 40 }],
                            },
                            {
                                title: '후행 직진',
                                Bdirection: [{ title: '선행 진로변경(긴급자동차)', rate: 10 }],
                            },
                            {
                                title: '선행 직진',
                                Bdirection: [{ title: '추월(긴급자동차)', rate: 40 }],
                            },
                            {
                                title: '선행 진로변경',
                                Bdirection: [{ title: '후행 직진(긴급자동차)', rate: 0 }],
                            },
                        ],
                    },
                ],
            },
            {
                title: '사거리교차로(신호등 없음)',
                feat: [
                    {
                        title: '동일폭 도로',
                        Adirection: [
                            {
                                title: '오른쪽에서 직진',
                                Bdirection: [{ title: '왼쪽에서 직진', rate: 60 }],
                            },
                            {
                                title: '오른쪽에서 직진(후진입)',
                                Bdirection: [{ title: '왼쪽에서 직진(선진입)', rate: 30 }],
                            },
                            {
                                title: '오른쪽에서 직진(선진입)',
                                Bdirection: [{ title: '왼쪽에서 직진(후진입)', rate: 70 }],
                            },
                            {
                                title: '(마주보며) 직진',
                                Bdirection: [{ title: '(마주보며) 좌회전', rate: 70 }],
                            },
                            {
                                title: '왼쪽 도로에서 직진',
                                Bdirection: [{ title: '오른쪽 도로에서 좌회전', rate: 60 }],
                            },
                            {
                                title: '오른쪽 도로에서 직진',
                                Bdirection: [{ title: '왼쪽 도로에서 좌회전', rate: 70 }],
                            },
                            {
                                title: '우회전',
                                Bdirection: [{ title: '직진', rate: 40 }],
                            },
                            {
                                title: '우회전(후진입)',
                                Bdirection: [{ title: '직진(선진입)', rate: 30 }],
                            },
                            {
                                title: '우회전(선진입)',
                                Bdirection: [{ title: '직진(후진입)', rate: 60 }],
                            },
                            {
                                title: '오른쪽 도로에서 좌회전',
                                Bdirection: [{ title: '왼쪽 도로에서 좌회전', rate: 60 }],
                            },
                        ],
                    },
                    {
                        title: '대로와 소로',
                        Adirection: [
                            {
                                title: '대로에서 직진',
                                Bdirection: [
                                    { title: '소로에서 직진', rate: 70 },
                                    { title: '소로에서 좌회전', rate: 80 },
                                ],
                            },
                            {
                                title: '대로에서 직진(후진입)',
                                Bdirection: [{ title: '소로에서 직진(선진입)', rate: 40 }],
                            },
                            {
                                title: '대로에서 직진(선진입)',
                                Bdirection: [{ title: '소로에서 직진(후진입)', rate: 80 }],
                            },
                            {
                                title: '소로에서 직진 <좌측도로>',
                                Bdirection: [{ title: '대로에서 좌회전 <우측도로>', rate: 50 }],
                            },
                            {
                                title: '소로에서 직진 <우측도로>',
                                Bdirection: [{ title: '대로에서 좌회전 <좌측도로>', rate: 55 }],
                            },
                            {
                                title: '소로에서 우회전',
                                Bdirection: [{ title: '대로에서 직진', rate: 30 }],
                            },
                            {
                                title: '소로에서 우회전(후진입)',
                                Bdirection: [{ title: '대로에서 직진(선진입', rate: 20 }],
                            },
                            {
                                title: '소로에서 우회전(선진입)',
                                Bdirection: [{ title: '대로에서 직진(후진입)', rate: 50 }],
                            },
                            {
                                title: '대로에서 우회전',
                                Bdirection: [{ title: '소로에서 직진', rate: 70 }],
                            },
                            {
                                title: '대로에서 우회전(후진입)',
                                Bdirection: [{ title: '소로에서 직진(선진입)', rate: 40 }],
                            },
                        ],
                    },
                ],
            },
        ],
    },
];

export interface AccidentObjectType {
    title: string;
    place: Array<PlaceType>;
}

export interface PlaceType {
    title: string;
    feat: Array<FeatType>;
}

export interface FeatType {
    title: string;
    Adirection: Array<AdirectionType>;
}

export interface AdirectionType {
    title: string;
    Bdirection: Array<BdirectionType>;
}

export interface BdirectionType {
    title: string;
    rate: number;
}

export default accidentObjects;
