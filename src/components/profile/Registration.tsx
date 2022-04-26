import React, {useState} from "react";
import ViewContainer from "../../lib/ViewContainer";
import {Col, Row} from "antd";
import ProfileSideBar from "./ProfileSideBar";

const type = 'Хувийн мэдээлэл' || 'Нууц үг солих' || 'Цахим хаяг'


const Profile = () => {
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
                                    <div onClick={() => setTab('Хувийн мэдээлэл')} className={ tab === 'Хувийн мэдээлэл' ? 'boxActive' :'box'} >Хувийн мэдээлэл </div>
                                    <div onClick={() => setTab('Нууц үг солих')} className={ tab === 'Нууц үг солих' ? 'boxActive' :'box'} >Нууц үг солих</div>
                                    <div onClick={() => setTab('Цахим хаяг')} className={ tab === 'Цахим хаяг' ? 'boxActive' :'box'} >Цахим хаяг</div>
                                </div>
                                <div className={'bottom'}>

                                    {
                                        tab === 'Хувийн мэдээлэл' ? (
                                            <div>Бүртгэл</div>
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
export default Profile