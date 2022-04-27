import React, {useState} from "react";
import ViewContainer from "../../lib/ViewContainer";
import {Col, Row} from "antd";
import ProfileSideBar from "./ProfileSideBar";

const type = 'Хувийн мэдээлэл' || 'Нууц үг солих' || 'Цахим хаяг'


const TechAbout = () => {
    const [tab, setTab] = useState(type)
    return (
        <ViewContainer loading={false} code={200}>
            <div className={'profile'}>
                <div className={'container'}>
                    <Row gutter={30}>
                        <Col xxl={6} xl={6} lg={6} md={24}>
                            <ProfileSideBar/>
                        </Col>
                        <Col xxl={18} xl={18} lg={18} md={24}>
                            <div className={'right'}>
                                <div className={'bottom'}>
                                    <div className={'registration'}>
                                        <h2>Зүтгэх хүчний машин</h2>
                                        <Row>
                                            <Col xxl={8} xl={8} lg={8} md={8}>
                                                <div className={'myTableHeader'}>Марк</div>
                                            </Col>
                                            <Col xxl={8} xl={8} lg={8} md={8}>
                                                <div className={'myTableHeader'}>
                                                    Он
                                                </div>
                                            </Col>
                                            <Col xxl={8} xl={8} lg={8} md={8}>
                                                <div className={'myTableHeader'}>Техникийн
                                                </div>
                                            </Col>
                                        </Row>
                                        {
                                            [1, 2].map((item: any, index: number) => {
                                                return (
                                                    <Row>
                                                        <Col xxl={8} xl={8} lg={8} md={8}>
                                                            <div className={'myTableContent'}>

                                                            </div>
                                                        </Col>
                                                        <Col xxl={8} xl={8} lg={8} md={8}>
                                                            <div className={'myTableContent'}></div>
                                                        </Col>
                                                        <Col xxl={8} xl={8} lg={8} md={8}>
                                                            <div className={'myTableContent'}>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </ViewContainer>
    )
}
export default TechAbout