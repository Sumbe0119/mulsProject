import React from 'react';
import {Link} from "react-router-dom";
import {Col, Row} from "antd";

function Footer() {
    return (
        <footer className={'footer backgroundMain paddingTop30 paddingBottom50'}>
            <div className={'container'}>
                <Row>
                    <Col xxl={8} xl={8} xs={8}>
                        <div className={'desc'}>Бидний тухай</div>
                        <p className={'title'}>Инженер Технологийн сургуулийн Оюутны эрдэм шинжилгээний бага хурал
                            онлайнаар амжилттай зохион байгуулагдлаа.Онлайнаар оролцон судалгааны ажлаа хэлэлцүүлсэн бүх
                            оюутнууд, удирдагч багш нарт талархал илэрхийлье.</p>
                    </Col>
                    <Col xxl={8} xl={8} xs={8}>
                        <div className={'desc'}>Хэрэгцээт холбоосууд</div>
                        <div className={'links'}>
                            <ul>
                                <li>Хүнс хөдөө аж ахуй хөнгөн үйлдэрлэлийн яам</li>
                                <li>Хөдөө аж ахуй их сургууль</li>
                                <li>Хөдөө аж ахуй дэмжих сан</li>
                            </ul>
                        </div>
                    </Col>
                    <Col xxl={8} xl={8} xs={8}>
                        <div className={'widget'}>
                            <div>
                                <h3>
                                    Холбоо барих
                                </h3>
                            </div>
                            <div>
                                <p>
                                    Зайсан ХУД 11-р хороо ХААИС ИТС төв байр <br/>
                                    Утас: 9999-9999<br/>
                                    И-мэйл: info@muls.edu.mn
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </footer>
    )
};
export default Footer
