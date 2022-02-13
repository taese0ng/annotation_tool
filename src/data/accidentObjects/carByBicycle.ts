import { AccidentObjectType } from 'data/accidentType';

const carByBicycle: AccidentObjectType = {
    title: '차대자전거',
    place: [
        {
            title: '직선 도로',
            feat: [
                {
                    title: '마주보는 자전거와 자동차간의 사고',
                    Adirection: [
                        {
                            title: '차도 횡단',
                            Bdirection: [{ title: '차도에서 직진', rate: 60 }],
                        },
                        {
                            title: '[자동차를 마주보며] 역주행',
                            Bdirection: [{ title: '[자전거를 마주보며] 직진', rate: 40 }],
                        },
                    ],
                },
                {
                    title: '차도가 아닌 장소에서 차도로 진입',
                    Adirection: [
                        {
                            title: '차도에서 직진',
                            Bdirection: [{ title: '차도가 아닌 장소에서 차도로 진입', rate: 95 }],
                        },
                        {
                            title: '차도가 아닌 장소에서 차도로 진입',
                            Bdirection: [{ title: '차도에서 직진', rate: 40 }],
                        },
                    ],
                },
                {
                    title: '선행차량과 후행차량',
                    Adirection: [
                        {
                            title: '후행 직진',
                            Bdirection: [{ title: '선행 진로 변경', rate: 90 }],
                        },
                        {
                            title: '선행 진로 변경',
                            Bdirection: [{ title: '후행 직진', rate: 50 }],
                        },
                        {
                            title: '선행 직진',
                            Bdirection: [{ title: '후행 추돌', rate: 100 }],
                        },
                        {
                            title: '후행 추돌',
                            Bdirection: [{ title: '선행 직진', rate: 0 }],
                        },
                    ],
                },
                {
                    title: '자전거 횡단도로',
                    Adirection: [
                        {
                            title: '자전거 횡단도로 횡단',
                            Bdirection: [{ title: '직진', rate: 100 }],
                        },
                    ],
                },
            ],
        },
        {
            title: '사거리 교차로(신호등 없음)',
            feat: [
                {
                    title: '동일폭도로',
                    Adirection: [
                        {
                            title: '오른쪽에서 직진',
                            Bdirection: [
                                { title: '왼쪽에서 직진', rate: 80 },
                                { title: '왼쪽에서 좌회전', rate: 90 },
                            ],
                        },
                        {
                            title: '왼쪽에서 직진',
                            Bdirection: [
                                { title: '오른쪽에서 직진', rate: 60 },
                                { title: '오른쪽에서 좌회전', rate: 80 },
                                { title: '오른쪽에서 우회전', rate: 80 },
                            ],
                        },
                        {
                            title: '[자동차를 마주보며] 직진',
                            Bdirection: [{ title: '[자전거를 마주보며] 좌회전', rate: 90 }],
                        },
                        {
                            title: '[자동차를 마주보며] 좌회전',
                            Bdirection: [{ title: '[자전거를 마주보며] 직진', rate: 50 }],
                        },
                        {
                            title: '오른쪽에서 좌회전',
                            Bdirection: [{ title: '왼쪽에서 직진', rate: 70 }],
                        },
                        {
                            title: '왼쪽에서 좌회전',
                            Bdirection: [{ title: '오른쪽에서 직진', rate: 60 }],
                        },
                        {
                            title: '오른쪽에서 우회전',
                            Bdirection: [{ title: '왼쪽에서 직진', rate: 50 }],
                        },
                    ],
                },
                {
                    title: '대로와 소로',
                    Adirection: [
                        {
                            title: '대로에서 직진',
                            Bdirection: [
                                { title: '소로에서 직진', rate: 90 },
                                { title: '소로에서 좌회전', rate: 90 },
                                { title: '소로에서 우회전', rate: 90 },
                            ],
                        },
                        {
                            title: '소로에서 직진',
                            Bdirection: [
                                { title: '대로에서 직진', rate: 50 },
                                { title: '대로에서 좌회전', rate: 70 },
                                { title: '대로에서 우회전', rate: 50 },
                            ],
                        },
                        {
                            title: '소로에서 좌회전',
                            Bdirection: [{ title: '대로에서 직진', rate: 60 }],
                        },
                        {
                            title: '대로에서 좌회전',
                            Bdirection: [{ title: '소로에서 직진', rate: 80 }],
                        },
                        {
                            title: '소로에서 우회전',
                            Bdirection: [{ title: '대로에서 직진', rate: 50 }],
                        },
                        {
                            title: '대로에서 우회전',
                            Bdirection: [{ title: '소로에서 직진', rate: 90 }],
                        },
                    ],
                },
                {
                    title: '일시정지 표지가 한쪽방향에만 있음',
                    Adirection: [
                        {
                            title: '일시정지 위반 직진',
                            Bdirection: [
                                { title: '표지가 없는 도로에서 직진', rate: 40 },
                                { title: '표지가 없는 도로에서 좌회전', rate: 50 },
                                { title: '표지가 없는 도로에서 우회전', rate: 40 },
                            ],
                        },
                        {
                            title: '표지가 없는 도로에서 직진',
                            Bdirection: [
                                { title: '일시정지 위반 직진', rate: 90 },
                                { title: '일시정지 위반 좌회전', rate: 90 },
                                { title: '일시정지 위반 우회전', rate: 90 },
                            ],
                        },
                        {
                            title: '표지가 없는 도로에서 좌회전',
                            Bdirection: [{ title: '일시정지 위반 직진', rate: 90 }],
                        },
                        {
                            title: '일시정지 위반 좌회전',
                            Bdirection: [{ title: '표지가 없는 도로에서 직진', rate: 40 }],
                        },
                        {
                            title: '일시정지 위반 우회전',
                            Bdirection: [{ title: '표지가 없는 도로에서 직진', rate: 40 }],
                        },
                        {
                            title: '표지가 없는 도로에서 우회전',
                            Bdirection: [{ title: '일시정지 위반 직진', rate: 100 }],
                        },
                    ],
                },
                {
                    title: '일방통행 표지가 한쪽방향에만 있음',
                    Adirection: [
                        {
                            title: '표지가 없는 도로에서 직진',
                            Bdirection: [{ title: '일방통행 위반 직진', rate: 100 }],
                        },
                        {
                            title: '일방통행 위반 직진',
                            Bdirection: [{ title: '표지가 없는 도로에서 직진', rate: 40 }],
                        },
                    ],
                },
                {
                    title: '자동차와 자전거가 나란히 통행 가능한 차로폭',
                    Adirection: [
                        {
                            title: '후행 직진',
                            Bdirection: [
                                { title: '자전거 좌측에서 대우회전', rate: 70 },
                                { title: '자전거 좌측에서 소우회전', rate: 30 },
                            ],
                        },
                        {
                            title: '자동차 좌측에서 대우회전',
                            Bdirection: [{ title: '직진', rate: 60 }],
                        },
                        {
                            title: '자동차 좌측에서 소우회전',
                            Bdirection: [{ title: '직진', rate: 100 }],
                        },
                    ],
                },
            ],
        },
        {
            title: '사거리 교차로(신호등 있음)',
            feat: [
                {
                    title: '상대 차량이 측면 방향에서 진입',
                    Adirection: [
                        {
                            title: '[녹색신호] 직진',
                            Bdirection: [{ title: '[적색신호] 직진', rate: 100 }],
                        },
                        {
                            title: '[적색신호] 직진',
                            Bdirection: [
                                { title: '[적색신호] 직진', rate: 70 },
                                { title: '[녹색신호] 직진', rate: 10 },
                                { title: '[황색신호] 직진', rate: 40 },
                            ],
                        },
                        {
                            title: '[황색신호] 직진',
                            Bdirection: [{ title: '[적색신호] 직진', rate: 85 }],
                        },
                    ],
                },
                {
                    title: '상대 차량이 맞은편 방향에서 진입',
                    Adirection: [
                        {
                            title: '[녹색신호] 직진',
                            Bdirection: [{ title: '[녹색신호] 좌회전(비보호 좌회전)', rate: 40 }],
                        },
                        {
                            title: '[녹색신호] 좌회전(비보호 좌회전)',
                            Bdirection: [{ title: '[녹색신호] 직진', rate: 95 }],
                        },
                    ],
                },
            ],
        },
        {
            title: '자전거 도로',
            feat: [
                {
                    title: '자전거 전용도로',
                    Adirection: [
                        {
                            title: '자전거 전용도로 통행',
                            Bdirection: [{ title: '진로변경', rate: 100 }],
                        },
                    ],
                },
                {
                    title: '자전거 전용차로',
                    Adirection: [
                        {
                            title: '자전거 전용차로 통행',
                            Bdirection: [{ title: '진로변경', rate: 100 }],
                        },
                    ],
                },
                {
                    title: '자전거 우선도로',
                    Adirection: [
                        {
                            title: '자전거 우선도로 통행',
                            Bdirection: [{ title: '진로변경', rate: 90 }],
                        },
                    ],
                },
            ],
        },
    ],
};

export default carByBicycle;
