import React, {useState} from "react";
import ViewContainer from "../../lib/ViewContainer";
import {Col, Row} from "antd";
import ProfileSideBar from "./ProfileSideBar";

const type = 'Улсын тайлан' || 'Аймгийн тайлан' || 'Сумын тайлан' || 'ААН-ийн тайлан'


const Report = () => {
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
                                <div className={'top'}>
                                    <div onClick={() => setTab('Улсын тайлан')}
                                         className={tab === 'Улсын тайлан' ? 'boxActive' : 'box'}>Улсын тайлан
                                    </div>
                                    <div onClick={() => setTab('Аймгийн тайлан')}
                                         className={tab === 'Аймгийн тайлан' ? 'boxActive' : 'box'}>Аймгийн тайлан
                                    </div>
                                    <div onClick={() => setTab('Сумын тайлан')}
                                         className={tab === 'Сумын тайлан' ? 'boxActive' : 'box'}>Сумын тайлан
                                    </div>
                                    <div onClick={() => setTab('ААН-ийн тайлан')}
                                         className={tab === 'ААН-ийн тайлан' ? 'boxActive' : 'box'}>ААН-ийн тайлан
                                    </div>
                                </div>
                                <div className={'bottom'}>
                                    {
                                        tab === 'Улсын тайлан' ? (
                                            <div>Улсын тайлан</div>
                                        ) : null
                                    }
                                    {
                                        tab === 'Аймгийн тайлан' ? (
                                            <div>Аймгийн тайлан</div>
                                        ) : null
                                    }
                                    {
                                        tab === 'Сумын тайлан' ? (
                                            <div>Сумын тайлан</div>
                                        ) : null
                                    }
                                    {
                                        tab === 'ААН-ийн тайлан' ? (
                                            <div>ААН-ийн тайлан</div>
                                        ) : null
                                    }
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </ViewContainer>
    )
}
export default Report