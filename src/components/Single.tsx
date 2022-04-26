import React from "react";
import ViewContainer from "../lib/ViewContainer";
import {Col, Row} from "antd";
import {Tabs} from 'antd';

const {TabPane} = Tabs;



const Single = () => {

    function callback(key: any) {
        console.log(key);
    }

    return (
        <ViewContainer loading={false} code={200}>
            <div className={'single'}>
                <div className={'container marginTop50 marginBottom50'}>
                    <Row gutter={30}>
                        <Col xxl={12} xl={12} lg={12} md={24}>
                            <div className={'left'}>
                                <div className={'slideHeight coverBackgroundSize coverBackgroundPosition '}
                                     style={{
                                         backgroundImage: `url('/img/tractor.jpg')`,
                                         height: 450,
                                         borderRadius: 5
                                     }}/>
                            </div>
                        </Col>
                        <Col xxl={12} xl={12} lg={12} md={24}>
                            <div className={'right'}>
                                <div className={'middle'}>
                                    <h2>6R110 UTILITY TRACTOR</h2>
                                </div>
                                <div className={'middle'}>
                                    <h2>Техникийн үзүүлэлт</h2>
                                    <ul>
                                        <li>John Deere FT PowerTech</li>
                                        <li>Engine HP: 121HP Max/110</li>
                                        <li>Autocad or IVIT transmission</li>
                                        <li>Cat.2.3N Hitch with lift capacity over 7900lb</li>
                                    </ul>
                                </div>
                                <div className={'middle'}>
                                    <h2 style={{color: '#005332', fontWeight: 500}}>Ангилал: Зүтгэх хүчний машин</h2>
                                </div>
                                <div className={'middle'}>
                                    <Tabs onChange={callback} type="card">
                                        <TabPane tab="Нэмэлт" key="1">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit nisi maiores
                                            possimus! Doloribus ipsam vero mollitia optio, blanditiis et enim quia! Delectus
                                            dolor eum iure incidunt rem ducimus sed corrupti voluptatibus, voluptates sunt
                                            doloribus eos iusto atque assumenda voluptatem aliquid culpa, inventore vitae
                                            unde omnis laborum, vero tenetur nesciunt recusandae! Perferendis vitae quos
                                            iure laborum distinctio pariatur, totam expedita, suscipit ut placeat odio
                                        </TabPane>
                                        <TabPane tab="Онцлог" key="2">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit nisi maiores
                                            possimus! Doloribus ipsam vero mollitia optio, blanditiis et enim quia! Delectus
                                            dolor eum iure incidunt rem ducimus sed corrupti voluptatibus, voluptates sunt
                                            doloribus eos iusto atque assumenda voluptatem aliq
                                        </TabPane>
                                        <TabPane tab="Үзүүлэлт" key="3">
                                            Iusto atque assumenda voluptatem aliquid culpa, inventore vitae
                                            unde omnis laborum, vero tenetur nesciunt recusandae! Perferendis vitae quos
                                            iure laborum distinctio pariatur, totam expedita, suscipit ut placeat odio
                                        </TabPane>
                                    </Tabs>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </ViewContainer>
    )
}
export default Single


