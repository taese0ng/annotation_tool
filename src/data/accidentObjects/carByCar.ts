import { AccidentObjectType } from 'data/accidentType';

const carByCar: AccidentObjectType = {
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
                        {
                            title: '대로에서 우회전(선진입)',
                            Bdirection: [{ title: '소로에서 직진(후진입)', rate: 80 }],
                        },
                        {
                            title: '소로에서좌회전',
                            Bdirection: [{ title: '대로에서 좌회전', rate: 30 }],
                        },
                    ],
                },
                {
                    title: '일시정지 표시가 한쪽방향에만 있음',
                    Adirection: [
                        {
                            title: '표지가 없는 도로에서 직진',
                            Bdirection: [
                                { title: '일시정지 위반 직진', rate: 80 },
                                { title: '일시정지 위반 좌회전', rate: 80 },
                            ],
                        },
                        {
                            title: '일시정지 위반 직진(좌측도로)',
                            Bdirection: [
                                { title: '표지가 없는 도로에서 좌회전(우측도로)', rate: 30 },
                            ],
                        },
                        {
                            title: '일시정지 위반 직진(우측도로)',
                            Bdirection: [
                                { title: '표지가 없는 도로에서 좌회전(좌측도로)', rate: 40 },
                            ],
                        },
                        {
                            title: '일시정지 위반 우회전',
                            Bdirection: [{ title: '표지가 없는 도로에서 직진', rate: 20 }],
                        },
                        {
                            title: '일시정지 위반 직진',
                            Bdirection: [{ title: 'ㅠㅛ지가 없는 도로에서 우회전', rate: 20 }],
                        },
                        {
                            title: '일시정지 위반 좌회전',
                            Bdirection: [{ title: '표지가 없는 도로에서 좌회전', rate: 20 }],
                        },
                    ],
                },
                {
                    title: '일방통행 표지가 한쪽방향에만 있음',
                    Adirection: [
                        {
                            title: '직진',
                            Bdirection: [{ title: '일방통행 위반 직진', rate: 80 }],
                        },
                    ],
                },
                {
                    title: '교차로 내 진로변경',
                    Adirection: [
                        {
                            title: '직진(교차로 내 진로변경)',
                            Bdirection: [{ title: '우회전', rate: 40 }],
                        },
                    ],
                },
                {
                    title: '2개 차량이 나란히 통행 가능한 차로폭',
                    Adirection: [
                        {
                            title: '후행 직진(차로 좌측)',
                            Bdirection: [{ title: '선행 좌회전(차로 우측)', rate: 80 }],
                        },
                        {
                            title: '후행 직진(차로 우측)',
                            Bdirection: [{ title: '선행 우회전(차로 좌측)', rate: 80 }],
                        },
                    ],
                },
                {
                    title: '좌/우회전 각도가 90도 미만',
                    Adirection: [
                        {
                            title: '후행 직진',
                            Bdirection: [
                                { title: '선행 좌회전', rate: 60 },
                                { title: '선행 우회전', rate: 60 },
                            ],
                        },
                    ],
                },
                {
                    title: '2개 차로 동시 우회전',
                    Adirection: [
                        {
                            title: '우회전(오른쪽 차로)',
                            Bdirection: [{ title: '우회전(왼쪽 차로)', rate: 70 }],
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
                            title: '대로에서 직진',
                            Bdirection: [{ title: '소로에서 진입(긴급자동차)', rate: 30 }],
                        },
                    ],
                },
            ],
        },
        {
            title: '사거리교차로(신호등 있음)',
            feat: [
                {
                    title: '상대 차량이 측면 방향에서 진입',
                    Adirection: [
                        {
                            title: '[녹색신호] 직진',
                            Bdirection: [{ title: '[적색신호] 직진', rate: 100 }],
                        },
                        {
                            title: '[녹색신호], 직진, [적색신호] 충돌',
                            Bdirection: [{ title: '[녹색신호] 직진', rate: 70 }],
                        },
                        {
                            title: '[황색신호], 직진, [적색신호] 충돌',
                            Bdirection: [{ title: '[녹색신호] 직진', rate: 20 }],
                        },
                        {
                            title: '[황색신호] 직진',
                            Bdirection: [
                                { title: '[적색신호] 직진', rate: 70 },
                                { title: '[적색신호] 좌회전', rate: 70 },
                            ],
                        },
                        {
                            title: '[적색신호] 직진',
                            Bdirection: [
                                { title: '[적색신호] 직진', rate: 50 },
                                { title: '[녹색 좌회전 신호] 좌회전', rate: 0 },
                                { title: '[적색신호] 좌회전', rate: 50 },
                                { title: '[황색신호] 좌회전', rate: 40 },
                            ],
                        },
                        {
                            title: '[녹색 좌회전 신호]좌회전, [적색신호] 충돌',
                            Bdirection: [{ title: '[녹색신호] 직진', rate: 70 }],
                        },
                        {
                            title: '[황색신호] 좌회전, [적색신호] 충돌',
                            Bdirection: [{ title: '[녹색신호] 직진', rate: 20 }],
                        },
                    ],
                },
                {
                    title: '상대 차량이 맞은편 방향에서 진입',
                    Adirection: [
                        {
                            title: '(마주보며) [적색신호] 직진',
                            Bdirection: [
                                { title: '(마주보며) [녹색좌회전신호] 좌회전', rate: 0 },
                                { title: '(마주보며) [적색신호] 좌회전', rate: 50 },
                            ],
                        },
                        {
                            title: '(마주보며) [녹색신호] 직진',
                            Bdirection: [
                                {
                                    title: '(마주보며) [녹색신호] 좌회전(비보호좌회전 아님)',
                                    rate: 100,
                                },
                            ],
                        },
                        {
                            title: '(마주보며) [황색신호] 직진',
                            Bdirection: [
                                {
                                    title: '(마주보며) [녹색신호] 좌회전, [황색신호] 충돌',
                                    rate: 60,
                                },
                                {
                                    title: '(마주보며) [황색신호] 좌회전',
                                    rate: 50,
                                },
                            ],
                        },
                        {
                            title: '(마주보며) [녹색좌회전신호] 좌회전, [적색신호 충돌]',
                            Bdirection: [{ title: '(마주보며) [녹색신호] 직진', rate: 70 }],
                        },
                        {
                            title: '(마주보며) [황색신호] 좌회전, [적색신호] 충돌',
                            Bdirection: [{ title: '(마주보며) [녹색신호] 직진', rate: 20 }],
                        },
                        {
                            title: '[녹색 좌회전 신호] 좌회전',
                            Bdirection: [{ title: '맞은편 우회전', rate: 80 }],
                        },
                    ],
                },
                {
                    title: '비보호 좌회전 표지 있음',
                    Adirection: [
                        {
                            title: '(마주보며) [녹색신호] 좌회전(비보호좌회전)',
                            Bdirection: [{ title: '(마주보며) [녹색신호] 직진', rate: 20 }],
                        },
                    ],
                },
                {
                    title: '신호등이 한쪽차량 방향에만 있음',
                    Adirection: [
                        {
                            title: '[무신호] 직진',
                            Bdirection: [
                                { title: '[적색신호] 직진', rate: 90 },
                                { title: '[녹색신호] 직진', rate: 20 },
                                { title: '[황색신호] 직진', rate: 60 },
                            ],
                        },
                        {
                            title: '[무신호] 우회전',
                            Bdirection: [
                                { title: '[적색신호] 직진', rate: 90 },
                                { title: '[녹색신호] 직진', rate: 20 },
                                { title: '[황색신호] 직진', rate: 60 },
                            ],
                        },
                        {
                            title: '[무신호] 좌회전',
                            Bdirection: [
                                { title: '[적색신호] 직진', rate: 80 },
                                { title: '[녹색신호] 직진', rate: 10 },
                                { title: '[황색신호] 직진', rate: 50 },
                            ],
                        },
                    ],
                },
                {
                    title: '교차로 내 진로변경',
                    Adirection: [
                        {
                            title: '[녹색신호] 직진 (교차로 내 진로변경)',
                            Bdirection: [{ title: '우회전', rate: 70 }],
                        },
                    ],
                },
                {
                    title: '추월 사고',
                    Adirection: [
                        {
                            title: '중앙선 침범 추월',
                            Bdirection: [{ title: '[녹색 좌회전 신호] 좌회전', rate: 0 }],
                        },
                    ],
                },
                {
                    title: '유턴 구역',
                    Adirection: [
                        {
                            title: '(마주보며) 직진',
                            Bdirection: [
                                { title: '상시유턴구역에서 유턴', rate: 80 },
                                { title: '신호에 따른 유턴', rate: 0 },
                            ],
                        },
                        {
                            title: '우회전(좌측도로)',
                            Bdirection: [
                                { title: '상시유턴구역에서 유턴', rate: 70 },
                                { title: '신호에 따른 유턴', rate: 20 },
                            ],
                        },
                        {
                            title: '유턴(선행)',
                            Bdirection: [{ title: '급 유턴(후행)', rate: 100 }],
                        },
                        {
                            title: '동시 유턴(선행)',
                            Bdirection: [{ title: '동시 유턴(후행)', rate: 80 }],
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
                    title: '노면 표시 위반 사고',
                    Adirection: [
                        {
                            title: '[녹색 좌회전 신호] 직진 (좌회전 노면표시차로)',
                            Bdirection: [
                                {
                                    title: '[녹색 좌회전 신호] 좌회전 (직진·좌회전 노면표시차로)',
                                    rate: 0,
                                },
                            ],
                        },
                        {
                            title: '[녹색 직진·좌회전 신호] 후행 직진(좌회전 노면표시차로)',
                            Bdirection: [
                                {
                                    title: '[녹색 직진·좌회전 신호] 선행 좌회전 (직진·좌회전 노면표시차로) ',
                                    rate: 0,
                                },
                            ],
                        },
                        {
                            title: '직진(직진·좌회전 노면표시차로)',
                            Bdirection: [
                                {
                                    title: '좌회전 (직진 노면표시차로)',
                                    rate: 100,
                                },
                            ],
                        },
                        {
                            title: '추월 우회전(직진 노면표시차로)',
                            Bdirection: [{ title: '직진(직진·우회전 노면표시차로)', rate: 0 }],
                        },
                        {
                            title: '선행 우회전(직진·우회전 노면표시차로)',
                            Bdirection: [{ title: '후행 직진(우회전 노면표시차로)', rate: 100 }],
                        },
                    ],
                },
                {
                    title: '긴급자동차 사고',
                    Adirection: [
                        {
                            title: '[녹색신호] 직진',
                            Bdirection: [
                                {
                                    title: '[적색신호] 직진 (긴급자동차)',
                                    rate: 40,
                                },
                            ],
                        },
                        {
                            title: '[녹색 좌회전 신호] 좌회전',
                            Bdirection: [{ title: '중앙선 왼쪽 통행(긴급자동차)', rate: 40 }],
                        },
                        {
                            title: '유턴',
                            Bdirection: [{ title: '중앙선 왼쪽 통행(긴급자동차)', rate: 40 }],
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
                        { title: '직진', Bdirection: [{ title: '우회전', rate: 70 }] },
                        {
                            title: '왼쪽 도로에서 직진',
                            Bdirection: [{ title: '오른쪽 도로에서 좌회전', rate: 70 }],
                        },
                        {
                            title: '오른쪽 도로에서 직진',
                            Bdirection: [{ title: '왼쪽 도로에서 좌회전', rate: 80 }],
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
                                { title: '소로에서 좌회전', rate: 90 },
                                { title: '소로에서 우회전', rate: 80 },
                            ],
                        },
                        {
                            title: '소로에서 직진[좌측도로]',
                            Bdirection: [{ title: '대로에서 좌회전[우측도로]', rate: 60 }],
                        },
                        {
                            title: '소로에서 직진[우측도로]',
                            Bdirection: [{ title: '대로에서 좌회전[좌측도로]', rate: 65 }],
                        },
                        {
                            title: '소로에서 좌회전',
                            Bdirection: [{ title: '대로에서 좌회전', rate: 30 }],
                        },
                        {
                            title: '소로에서 직진',
                            Bdirection: [{ title: '대로에서 우회전', rate: 40 }],
                        },
                        {
                            title: '대로에서 좌회전',
                            Bdirection: [{ title: '소로에서 좌회전', rate: 70 }],
                        },
                    ],
                },
                {
                    title: '일시정지 표지가 한쪽방향에만 있음',
                    Adirection: [
                        {
                            title: '표지가 없는 도로에서 직진',
                            Bdirection: [
                                { title: '일시정지 위반 좌회전', rate: 90 },
                                { title: '일시정지 위반 우회전', rate: 90 },
                            ],
                        },
                        {
                            title: '일시정지 위반 직진[좌측도로]',
                            Bdirection: [
                                { title: '표지가 없는 도로에서 좌회전[우측도로]', rate: 40 },
                            ],
                        },
                        {
                            title: '일시정지 위반 직진[우측도로]',
                            Bdirection: [
                                { title: '표지가 없는 도로에서 좌회전[좌회전]', rate: 50 },
                            ],
                        },
                        {
                            title: '일시정지 위반 직진',
                            Bdirection: [{ title: '표지가 없는 도로에서 우회전', rate: 30 }],
                        },
                        {
                            title: '일시정지 위반 좌회전',
                            Bdirection: [{ title: '표지가 없는 도로에서 좌회전', rate: 20 }],
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
                            Bdirection: [
                                { title: '차도가 아닌 장소에서 중아선 침범 진입', rate: 100 },
                                { title: '차도가 아닌 장소에서 우회전 진입', rate: 80 },
                                { title: '차도가 아닌 장소로 중앙선 침범 진입', rate: 100 },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            title: '주차장(또는 차도가 아닌 장소)',
            feat: [
                {
                    title: '주차구역과 통로',
                    Adirection: [
                        {
                            title: '통로 직진',
                            Bdirection: [
                                { title: '주차구역에서 직진 출자', rate: 70 },
                                { title: '주차구역에서 후진 출자', rate: 75 },
                            ],
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
                            title: '회전교차로 진입',
                            Bdirection: [{ title: '교차로 내 회전', rate: 20 }],
                        },
                    ],
                },
                {
                    title: '회전차로 2차로형',
                    Adirection: [
                        {
                            title: '회전(회전 2차로)',
                            Bdirection: [{ title: '진로변경(회전1차로→회전2차로)', rate: 60 }],
                        },
                        {
                            title: '회전교차로 진입(1차로→회전2차로)',
                            Bdirection: [
                                {
                                    title: '회전교차로 진입(2차로→회전2차로)',
                                    rate: 40,
                                },
                            ],
                        },
                        {
                            title: '회전(회전 1차로)',
                            Bdirection: [{ title: '회전교차로 대진입', rate: 90 }],
                        },
                        {
                            title: '진로변경(회전1차로→회전2차로)',
                            Bdirection: [{ title: '회전교차로 진입', rate: 70 }],
                        },
                    ],
                },
            ],
        },
    ],
};

export default carByCar;
