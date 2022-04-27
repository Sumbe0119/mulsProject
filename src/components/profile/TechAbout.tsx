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

                                    {
                                        tab === 'Хувийн мэдээлэл' ? (
                                            <div>Техникийн байдал</div>
                                        ):null
                                    }
                                    {
                                        tab === 'Нууц үг солих' ? (
                                            <div>Нууц үг солих</div>
                                        ):null
                                    }
                                    {
                                        tab === 'Цахим хаяг' ? (
                                            <div>Цахим хаяг</div>
                                        ):null
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
export default TechAbout