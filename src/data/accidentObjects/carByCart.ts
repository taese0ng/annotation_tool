import { AccidentObjectType } from 'data/accidentType';

const carByCart: AccidentObjectType = {
    title: '차대이륜차',
    place: [
        {
            title: '직선도로',
            feat: [
                {
                    title: '마주보는 이륜차와 자동차간의 사고',
                    Adirection: [
                        {
                            title: '직진',
                            Bdirection: [{ title: '중앙선을 침범하여 반대차로 진행', rate: 100 }],
                        },
                        {
                            title: '중앙선을 침범하여 반대차로 진행',
                            Bdirection: [{ title: '좌회전', rate: 0 }],
                        },
                    ],
                },
                {
                    title: '추월사고',
                    Adirection: [
                        {
                            title: '후행 추월(추월 금지 장소)',
                            Bdirection: [{ title: '선행직진', rate: 10 }],
                        },
                        {
                            title: '선행 직진',
                            Bdirection: [
                                { title: '후행추월(추월 금지 장소)', rate: 100 },
                                { title: '급접거리 추월(점섬 충앙선)', rate: 100 },
                            ],
                        },
                        {
                            title: '급접거리 추월(점섬 중앙선)',
                            Bdirection: [{ title: '선행직진', rate: 0 }],
                        },
                    ],
                },
                {
                    title: '차로변경(진로변경)',
                    Adirection: [
                        {
                            title: '후행직진',
                            Bdirection: [{ title: '진로변경', rate: 80 }],
                        },
                        {
                            title: '진로변경',
                            Bdirection: [{ title: '후행직진', rate: 40 }],
                        },
                        {
                            title: '직진(측면 충돌)',
                            Bdirection: [
                                { title: '정제차로에서 대기 중 진로변경(측면 충돌)', rate: 100 },
                            ],
                        },
                        {
                            title: '정체차로에서 대기중 진로변경(측면 충돌)',
                            Bdirection: [{ title: '직진(측면 충돌)', rate: 0 }],
                        },
                        {
                            title: '동시 차로변경(진로변경)',
                            Bdirection: [{ title: '동시 차로변경(진로변경)', rate: 60 }],
                        },
                    ],
                },
                {
                    title: '안전지대 통과 사고',
                    Adirection: [
                        {
                            title: '후행직진(안전지대 벗어나기 전)',
                            Bdirection: [{ title: '선행진로 변경', rate: 40 }],
                        },
                        {
                            title: '후행직진(안전지대 벗어나기 후)',
                            Bdirection: [{ title: '선행진로 변경', rate: 30 }],
                        },
                        {
                            title: '선행 진로변경',
                            Bdirection: [
                                { title: '후행 직진(안전지대 벗어나기 전)', rate: 100 },
                                { title: '후행직진(안전지대 벗어난 후)', rate: 80 },
                            ],
                        },
                    ],
                },
                {
                    title: '추돌사고',
                    Adirection: [
                        {
                            title: '선행직진',
                            Bdirection: [{ title: '후행추돌', rate: 100 }],
                        },
                        {
                            title: '후행추돌',
                            Bdirection: [
                                { title: '선행 직진', rate: 0 },
                                { title: '주정차', rate: 0 },
                            ],
                        },
                    ],
                },
                {
                    title: '열린 문 접촉사고',
                    Adirection: [
                        {
                            title: '후행직전',
                            Bdirection: [
                                { title: '왼쪽 문 열림', rate: 80 },
                                { title: '오른쪽 문 열림', rate: 70 },
                            ],
                        },
                        {
                            title: '정차 후 출발',
                            Bdirection: [{ title: '추월', rate: 30 }],
                        },
                        {
                            title: '추월',
                            Bdirection: [{ title: '정차 후 출발', rate: 90 }],
                        },
                    ],
                },
            ],
        },
        {
            title: '사거리 교차로(신호등 없음)',
            feat: [
                {
                    title: '동일폭 도로',
                    Adirection: [
                        {
                            title: '오른쪽에서 직진(동시진입)',
                            Bdirection: [{ title: '왼쪽에서 직진(동시진입)', rate: 70 }],
                        },
                        {
                            title: '오른쪽에서 직진(선진입)',
                            Bdirection: [{ title: '왼쪽에서 직진(후진입)', rate: 80 }],
                        },
                        {
                            title: '오른쪽에서 직진(후진입)',
                            Bdirection: [{ title: '왼쪽에서 직진(선진입)', rate: 55 }],
                        },
                        {
                            title: '왼쪽에서 직진(동시진입)',
                            Bdirection: [
                                { title: '오른쪽에서 직진(동시진입)', rate: 50 },
                                { title: '오른쪽에서 우회전(동시진입)', rate: 70 },
                            ],
                        },
                        {
                            title: '왼쪽에서 직진(선진입)',
                            Bdirection: [
                                { title: '오른쪽에서 직진(후진입)', rate: 65 },
                                { title: '오른쪽에서 우회전(후진입)', rate: 80 },
                            ],
                        },
                        {
                            title: '왼쪽에서 직진(후진입)',
                            Bdirection: [
                                { title: '오른쪽에서 직진(선진입)', rate: 40 },
                                { title: '오른쪽에서 우회전(선진입)', rate: 50 },
                            ],
                        },
                        {
                            title: '[마주보며] 직진',
                            Bdirection: [{ title: '[마주보며] 좌회전', rate: 80 }],
                        },
                        {
                            title: '[마주보며] 좌회전',
                            Bdirection: [{ title: '[마주보며] 직진', rate: 40 }],
                        },
                        {
                            title: '왼쪽에서 직진',
                            Bdirection: [{ title: '오른쪽에서 좌회전', rate: 70 }],
                        },
                        {
                            title: '오른쪽에서 좌회전',
                            Bdirection: [
                                { title: '왼쪽에서 직진', rate: 50 },
                                { title: '왼쪽에서 좌회전', rate: 70 },
                            ],
                        },
                        {
                            title: '왼쪽에서 좌회전',
                            Bdirection: [
                                { title: '오른쪽에서 좌회전', rate: 50 },
                                { title: '오른쪽에서 직진', rate: 40 },
                            ],
                        },
                        {
                            title: '오른쪽에서 우회전(동시진입)',
                            Bdirection: [{ title: '왼쪽에서 직진(동시진입)', rate: 45 }],
                        },
                        {
                            title: '오른쪽에서 우회전(선진입)',
                            Bdirection: [{ title: '왼쪽에서 직진(후진입)', rate: 70 }],
                        },
                        {
                            title: '오른쪽에서 우회전(후진입)',
                            Bdirection: [{ title: '왼쪽에서 직진(선진입)', rate: 40 }],
                        },
                    ],
                },
                {
                    title: '대로와 소로',
                    Adirection: [
                        {
                            title: '대로에서 직진(동시진입)',
                            Bdirection: [{ title: '소로에서 우회전(동시진입)', rate: 80 }],
                        },
                        {
                            title: '대로에서 직진(선진입)',
                            Bdirection: [
                                { title: '소로에서 직진(후진입)', rate: 90 },
                                { title: '소로에서 우회전(후진입)', rate: 90 },
                            ],
                        },
                        {
                            title: '대로에서 직진(후진입)',
                            Bdirection: [
                                { title: '소로에서 직진(선진입)', rate: 50 },
                                { title: '소로에서 우회전(선진입)', rate: 70 },
                            ],
                        },
                        {
                            title: '소로에서 직진(동시진입)',
                            Bdirection: [
                                { title: '대로에서 직진(동시진입)', rate: 40 },
                                { title: '대로에서 우회전(동시진입)', rate: 40 },
                            ],
                        },
                        {
                            title: '소로에서 직진(선진입)',
                            Bdirection: [
                                { title: '대로에서 직진(후진입)', rate: 50 },
                                { title: '대로에서 우회전(후진입)', rate: 50 },
                            ],
                        },
                        {
                            title: '소로에서 직진(후진입)',
                            Bdirection: [
                                { title: '대로에서 직진(선진입)', rate: 25 },
                                { title: '대로에서 우회전(선진입)', rate: 30 },
                            ],
                        },
                        {
                            title: '대로에서 직진',
                            Bdirection: [{ title: '소로에서 좌회전', rate: 90 }],
                        },
                        {
                            title: '소로에서 좌회전',
                            Bdirection: [
                                { title: '대로에서 직진', rate: 30 },
                                { title: '대로에서 좌회전', rate: 40 },
                            ],
                        },
                        {
                            title: '대로에서 좌회전',
                            Bdirection: [
                                { title: '소로에서 직진', rate: 60 },
                                { title: '소로에서 좌회전', rate: 80 },
                            ],
                        },
                        {
                            title: '소로에서 직진',
                            Bdirection: [{ title: '대로에서 좌회전', rate: 60 }],
                        },
                        {
                            title: '소로에서 우회전(동시진입)',
                            Bdirection: [{ title: '대로에서 직진(동시진입)', rate: 40 }],
                        },
                        {
                            title: '소로에서 우회전(선진입)',
                            Bdirection: [{ title: '대로에서 직진(후진입)', rate: 60 }],
                        },
                        {
                            title: '소로에서 우회전(후진입)',
                            Bdirection: [{ title: '대로에서 직진(선진입)', rate: 30 }],
                        },
                        {
                            title: '대로에서 우회전(동시진입)',
                            Bdirection: [{ title: '소로에서 직진(동시진입)', rate: 80 }],
                        },
                        {
                            title: '대로에서 우회전(선진입)',
                            Bdirection: [{ title: '소로에서 직진(후진입)', rate: 90 }],
                        },
                        {
                            title: '대로에서 우회전(후진입)',
                            Bdirection: [{ title: '소로에서 직진(선진입)', rate: 70 }],
                        },
                        {
                            title: '대로에서 직진(동시진입)',
                            Bdirection: [{ title: '소로에서 직진(동시진입)', rate: 80 }],
                        },
                    ],
                },
                {
                    title: '일시정지 표지가 한쪽방향에만 있음',
                    Adirection: [
                        {
                            title: '표지가 없는 도로에서 직진',
                            Bdirection: [
                                { title: '일시정지 위반 직진', rate: 90 },
                                { title: '일시정지 위반 좌회전', rate: 90 },
                            ],
                        },
                        {
                            title: '일시정지 위반 직진',
                            Bdirection: [
                                { title: '표지가 없는 도로에서 직진', rate: 30 },
                                { title: '표지가 없는 도로에서 좌회전', rate: 45 },
                                { title: '표지가 없는 도로에서 우회전', rate: 30 },
                            ],
                        },
                        {
                            title: '표지가 없는 도로에서 좌회전',
                            Bdirection: [
                                { title: '일시정지 위반 직진', rate: 70 },
                                { title: '일시정지 위반 좌회전', rate: 90 },
                            ],
                        },
                        {
                            title: '일시정지 위반 좌회전',
                            Bdirection: [
                                { title: '표지가 없는 도로에서 직진', rate: 30 },
                                { title: '표지가 없는 도로에서 좌회전', rate: 30 },
                                { title: '표지가 없는 도로에서 직진', rate: 30 },
                            ],
                        },
                        {
                            title: '직진',
                            Bdirection: [{ title: '일시정지 위반 우회전', rate: 80 }],
                        },
                        {
                            title: '표지가 없는 도로에서 우회전',
                            Bdirection: [{ title: '일시정지 위반 직진', rate: 90 }],
                        },
                        {
                            title: '표지가 없는 도로에서 직진',
                            Bdirection: [{ title: '일방통행 위반 직진', rate: 90 }],
                        },
                        {
                            title: '일방통행 위반 직진',
                            Bdirection: [{ title: '표지가 없는 도로에서 직진', rate: 30 }],
                        },
                    ],
                },
                {
                    title: '교차로 내 진로변경',
                    Adirection: [
                        {
                            title: '우회전',
                            Bdirection: [{ title: '직진(교차로 내 진로변경)', rate: 70 }],
                        },
                        {
                            title: '직진(교차로 내 진로변경)',
                            Bdirection: [{ title: '우회전', rate: 50 }],
                        },
                    ],
                },
                {
                    title: '자동차와 이륜차가 나란히 통행 가능한 차로폭',
                    Adirection: [
                        {
                            title: '동일차로에서 후행 직진',
                            Bdirection: [
                                { title: '동일차로에서 선행 좌회전', rate: 40 },
                                { title: '동일차로에서 선행 우회전', rate: 40 },
                            ],
                        },
                        {
                            title: '동일차로에서 선행 직진',
                            Bdirection: [
                                { title: '동일차로에서 후행 좌회전', rate: 90 },
                                { title: '동일차로에서 후행 우회전', rate: 90 },
                            ],
                        },
                        {
                            title: '동일차로에서 선행 우회전',
                            Bdirection: [{ title: '동일차로에서 후행 직진', rate: 70 }],
                        },
                        {
                            title: '동일차로에서 선행 좌회전',
                            Bdirection: [
                                { title: '동일차로에서 후행 직진', rate: 70 },
                                { title: '동일차로에서 추월 직진', rate: 90 },
                            ],
                        },
                        {
                            title: '동일차로에서 추월 우회전',
                            Bdirection: [{ title: '동일차로에서 선행 직진', rate: 20 }],
                        },
                        {
                            title: '동일차로에서 추월 직진',
                            Bdirection: [{ title: '동일차로에서 선행 좌회전', rate: 30 }],
                        },
                    ],
                },
                {
                    title: '좌/우회전 각도가 90도 미만',
                    Adirection: [
                        {
                            title: '차량좌측에서 후행 직진(차량 우측에서 후행 직진)',
                            Bdirection: [
                                {
                                    title: '이륜차 우측에서 선행 좌회전(이륜차 좌측에서 선행 우회전)',
                                    rate: 50,
                                },
                            ],
                        },
                        {
                            title: '차량우측에서 선행 좌회전(차량 좌측에서 선행 우회전)',
                            Bdirection: [
                                {
                                    title: '이륜차 좌측에서 후행 직진(이륜차 우측에서 후행 직진)',
                                    rate: 60,
                                },
                            ],
                        },
                    ],
                },
                {
                    title: '정체도로',
                    Adirection: [
                        {
                            title: '정체도로 사이에서 직진',
                            Bdirection: [
                                { title: '직진', rate: 30 },
                                { title: '좌회전', rate: 30 },
                            ],
                        },
                    ],
                },
                {
                    title: '정차 후 출발 사고',
                    Adirection: [
                        {
                            title: '정차 후 출발',
                            Bdirection: [
                                { title: '추월', rate: 30 },
                                { title: '추월', rate: 90 },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            title: '사거리 교차로(신호등 있음)',
            feat: [
                {
                    title: '상대차량이 측면 방향에서 진입',
                    Adirection: [
                        {
                            title: '[녹색신호]직진',
                            Bdirection: [
                                { title: '[적색신호]직진', rate: 100 },
                                { title: '[적색신호]좌회전', rate: 100 },
                            ],
                        },
                        {
                            title: '[적색신호]직진',
                            Bdirection: [
                                { title: '[적색신호]직진', rate: 60 },
                                { title: '[녹색신호]직진', rate: 0 },
                                { title: '[황색신호]직진', rate: 40 },
                                { title: '[적색신호]좌회전', rate: 60 },
                                { title: '[녹색좌회전신호]좌회전', rate: 0 },
                                { title: '[황색신호]좌회전', rate: 50 },
                            ],
                        },
                        {
                            title: '[황색신호]직진',
                            Bdirection: [
                                { title: '[적색신호]직진', rate: 80 },
                                { title: '[적색신호]좌회전', rate: 80 },
                            ],
                        },
                        {
                            title: '[적색신호]좌회전',
                            Bdirection: [
                                { title: '[적색신호]직진', rate: 50 },
                                { title: '[녹색신호]직진', rate: 0 },
                                { title: '[황색신호]직진', rate: 40 },
                            ],
                        },
                        {
                            title: '[녹색좌회전신호] 좌회전',
                            Bdirection: [{ title: '[적색신호]직진', rate: 100 }],
                        },
                        {
                            title: '[황색신호]좌회전',
                            Bdirection: [{ title: '[적색신호]직진', rate: 70 }],
                        },
                    ],
                },
                {
                    title: '교차로 내 진로변경',
                    Adirection: [
                        {
                            title: '우회전',
                            Bdirection: [{ title: '[녹색신호]직진(교차로내진로변경)', rate: 40 }],
                        },
                        {
                            title: '[녹색신호]직진(교차로내진로변경)',
                            Bdirection: [{ title: '우회전', rate: 80 }],
                        },
                    ],
                },
                {
                    title: '추월사고',
                    Adirection: [
                        {
                            title: '중앙선 침범 추월',
                            Bdirection: [{ title: '[녹색 좌회전 신호]', rate: 0 }],
                        },
                        {
                            title: '[녹색 좌회전 신호]좌회전',
                            Bdirection: [{ title: '중앙선 침범 추월', rate: 100 }],
                        },
                        {
                            title: '(마주보며)직진',
                            Bdirection: [
                                { title: '상시유턴구역에서 유턴', rate: 90 },
                                { title: '신호에 따른 유턴', rate: 0 },
                            ],
                        },
                        {
                            title: '상시유턴구역에서 유턴',
                            Bdirection: [
                                { title: '(마주보며)직진', rate: 20 },
                                { title: '우회전(좌측도로)', rate: 30 },
                            ],
                        },
                        {
                            title: '신호에 따른 유턴',
                            Bdirection: [
                                { title: '(마주보며)직진', rate: 100 },
                                { title: '우회전(좌측도로)', rate: 90 },
                            ],
                        },
                        {
                            title: '우회전(좌측도로)',
                            Bdirection: [
                                { title: '상시유턴구역에서 유턴', rate: 80 },
                                { title: '신호에 따른 유턴', rate: 30 },
                            ],
                        },
                        {
                            title: '유턴(선행)',
                            Bdirection: [{ title: '급 유턴(후행)', rate: 100 }],
                        },
                        {
                            title: '동시 유턴(선행)',
                            Bdirection: [{ title: '동시 유턴(후행)', rate: 90 }],
                        },
                        {
                            title: '급 유턴(후행)',
                            Bdirection: [{ title: '유턴(선행)', rate: 0 }],
                        },
                        {
                            title: '동시 유턴(후행)',
                            Bdirection: [{ title: '동시 유턴(선행)', rate: 30 }],
                        },
                    ],
                },
                {
                    title: '상대차량이 맞은편 방향에서 진입',
                    Adirection: [
                        {
                            title: '[녹색좌회전신호]좌회전',
                            Bdirection: [{ title: '맞은편 우회전', rate: 90 }],
                        },
                        {
                            title: '맞은편 우회전',
                            Bdirection: [{ title: '[녹색좌회전신호]좌회전', rate: 30 }],
                        },
                    ],
                },
                {
                    title: '정차 후 출발 사고',
                    Adirection: [
                        {
                            title: '정차 후 출발',
                            Bdirection: [{ title: '추월', rate: 30 }],
                        },
                        {
                            title: '추월',
                            Bdirection: [{ title: '정차 후 출발', rate: 90 }],
                        },
                    ],
                },
                {
                    title: '노면 표시 위반사고',
                    Adirection: [
                        {
                            title: '[녹색직진.좌회전 신호] 후행 직진(좌회전 노면표시차로)',
                            Bdirection: [
                                {
                                    title: '[녹색직진.좌회전 신호]선행좌회전(직진좌회전 노면표시차로)',
                                    rate: 0,
                                },
                            ],
                        },
                        {
                            title: '[녹색직진.좌회전 신호] 선행 좌회전(직진좌회전 노면표시차로)',
                            Bdirection: [
                                {
                                    title: '[녹색직진.좌회전 신호] 후행직진(좌회전 노면표시차로)',
                                    rate: 100,
                                },
                            ],
                        },
                        {
                            title: '좌회전(직진 노면표시차로)',
                            Bdirection: [{ title: '직진(직진.좌회전 노면표시차로)', rate: 0 }],
                        },
                        {
                            title: '직진(직진.좌회전 노면표시차로)',
                            Bdirection: [{ title: '좌회전(직진 노면표시차로)', rate: 100 }],
                        },
                        {
                            title: '추월 우회전(직진 노면표시차로)',
                            Bdirection: [{ title: '직진(직진.우회전 노면표시차로)', rate: 0 }],
                        },
                        {
                            title: '직진(직진.우회전 노면표시차로)',
                            Bdirection: [{ title: '추월 우회전(직진 노면표시차로)', rate: 100 }],
                        },
                    ],
                },
            ],
        },
        {
            title: 'T자형 교차로',
            feat: [
                {
                    title: '동일폭 도로',
                    Adirection: [
                        {
                            title: '왼쪽에서 직진(동시진입)',
                            Bdirection: [{ title: '오른쪽에서 우회전(동시진입)', rate: 80 }],
                        },
                        {
                            title: '왼쪽에서 직진',
                            Bdirection: [{ title: '오른쪽에서 좌회전', rate: 80 }],
                        },
                        {
                            title: '오른쪽에서 좌회전',
                            Bdirection: [
                                { title: '왼쪽에서 직진', rate: 40 },
                                { title: '왼쪽에서 좌회전', rate: 70 },
                            ],
                        },
                        {
                            title: '오른쪽에서 직진',
                            Bdirection: [{ title: '왼쪽에서 좌회전', rate: 90 }],
                        },
                        {
                            title: '왼쪽에서 좌회전',
                            Bdirection: [
                                { title: '오른쪽에서 좌회전', rate: 50 },
                                { title: '오른쪽에서 직진', rate: 30 },
                            ],
                        },
                        {
                            title: '오른쪽에서 우회전(동시진입)',
                            Bdirection: [{ title: '왼쪽에서 직진(동시진입)', rate: 40 }],
                        },
                    ],
                },
                {
                    title: '대로와 소로',
                    Adirection: [
                        {
                            title: '대로에서 직진(동시진입)',
                            Bdirection: [{ title: '소로에서 우회전(동시진입)', rate: 90 }],
                        },
                        {
                            title: '소로에서 직진(동시진입)',
                            Bdirection: [{ title: '대로에서 우회전(동시진입)', rate: 50 }],
                        },
                        {
                            title: '대로에서 직진',
                            Bdirection: [{ title: '소로에서 좌회전', rate: 100 }],
                        },
                        {
                            title: '소로에서 좌회전',
                            Bdirection: [
                                { title: '대로에서 직진', rate: 20 },
                                { title: '대로에서 좌회전', rate: 40 },
                            ],
                        },
                        {
                            title: '대로에서 좌회전',
                            Bdirection: [
                                { title: '소로에서 좌회전', rate: 80 },
                                { title: '소로에서 직진', rate: 50 },
                            ],
                        },
                        {
                            title: '소로에서 직진',
                            Bdirection: [{ title: '대로에서 좌회전', rate: 70 }],
                        },
                        {
                            title: '소로에서 우회전(동시진입)',
                            Bdirection: [{ title: '대로에서 직진(동시진입)', rate: 30 }],
                        },
                        {
                            title: '대로에서 우회전(동시진입)',
                            Bdirection: [{ title: '소로에서 직진(동시진입)', rate: 70 }],
                        },
                    ],
                },
                {
                    title: '일시정지 표지가 한쪽방향에만 있음',
                    Adirection: [
                        {
                            title: '표지가 없는 도로에서 직진',
                            Bdirection: [{ title: '일시정지 위반 좌회전', rate: 100 }],
                        },
                        {
                            title: '일시정지 위반 직진',
                            Bdirection: [
                                { title: '표지가 없는 도로에서 좌회전', rate: 55 },
                                { title: '표지가 없는 도로에서 우회전', rate: 40 },
                            ],
                        },
                        {
                            title: '표지가 없는 도로에서 좌회전',
                            Bdirection: [
                                { title: '일시정지 위반 직진', rate: 60 },
                                { title: '일시정지 위반 좌회전', rate: 90 },
                            ],
                        },
                        {
                            title: '일시정지 위반 좌회전',
                            Bdirection: [
                                { title: '표지가 없는 도로에서 직진', rate: 20 },
                                { title: '표지가 없는 도로에서 좌회전', rate: 30 },
                            ],
                        },
                        {
                            title: '일시정지 위반 우회전',
                            Bdirection: [{ title: '표지가 없는 도로에서 직진', rate: 20 }],
                        },
                        {
                            title: '직진',
                            Bdirection: [{ title: '일시정지 위반 우회전', rate: 90 }],
                        },
                        {
                            title: '표지가 없는 도로에서 우회전',
                            Bdirection: [{ title: '일시정지 위반 직진', rate: 80 }],
                        },
                    ],
                },
            ],
        },
        {
            title: '차도와 차도가 아닌 장소',
            feat: [
                {
                    title: '차도가 아닌 장소에서 차도로 진입',
                    Adirection: [
                        {
                            title: '차도에서 직진',
                            Bdirection: [{ title: '차도가 아닌 장소에서 차도로 진입', rate: 90 }],
                        },
                        {
                            title: '차도가 아닌 장소에서 차도로 진입',
                            Bdirection: [{ title: '차도에서 직진', rate: 30 }],
                        },
                    ],
                },
                {
                    title: '차도에서 차도가 아닌 장소로 진입',
                    Adirection: [
                        {
                            title: '차도에서 직진',
                            Bdirection: [{ title: '차도에서 차도가 아닌 장소로 진입', rate: 90 }],
                        },
                        {
                            title: '차도에서 차도가 아닌 장소로 진입',
                            Bdirection: [{ title: '차도에서 직진', rate: 20 }],
                        },
                    ],
                },
                {
                    title: '인도에서 차도가 아닌 장소로 진입',
                    Adirection: [
                        {
                            title: '인도에서 차도가 아닌 장소로 진행',
                            Bdirection: [{ title: '차도에서 차도가 아닌 장소로 진입', rate: 30 }],
                        },
                    ],
                },
            ],
        },
        {
            title: '회전교차로',
            feat: [
                {
                    title: '회전차로 1차로형',
                    Adirection: [
                        {
                            title: '교차로 내 회전',
                            Bdirection: [{ title: '회전 교차로 진입', rate: 90 }],
                        },
                        {
                            title: '회전 교차로 진입',
                            Bdirection: [{ title: '교차로 내 회전', rate: 30 }],
                        },
                    ],
                },
                {
                    title: '회전차로 2차로형',
                    Adirection: [
                        {
                            title: '회전 교차로 진입',
                            Bdirection: [{ title: '진로변경(회전 1차로 → 회전 2차로)', rate: 40 }],
                        },
                        {
                            title: '회전(회전 2차로)',
                            Bdirection: [{ title: '진로변경(회전 1차로 → 회전 2차로)', rate: 70 }],
                        },
                        {
                            title: '진로변경(회전 1차로 → 회전 2차로)',
                            Bdirection: [
                                { title: '회전 교차로 진입', rate: 80 },
                                { title: '회전(회전 2차로)', rate: 50 },
                            ],
                        },
                        {
                            title: '회전교차로 진입(1차로 → 회전 2차로)',
                            Bdirection: [
                                { title: '회전교차로 진입(2차로 → 회전 2차로)', rate: 50 },
                            ],
                        },
                        {
                            title: '회전교차로 진입(2차로 → 회전 2차로)',
                            Bdirection: [
                                { title: '회전교차로 진입(1차로 → 회전 2차로)', rate: 70 },
                            ],
                        },
                        {
                            title: '회전(회전 1차로)',
                            Bdirection: [{ title: '회전교차로 대진입', rate: 100 }],
                        },
                        {
                            title: '회전교차로 대진입',
                            Bdirection: [{ title: '회전(회전 1차로)', rate: 20 }],
                        },
                    ],
                },
            ],
        },
    ],
};

export default carByCart;
