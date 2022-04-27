import React, {useState} from "react";
import ViewContainer from "../../lib/ViewContainer";
import {Col, Form, Input, Row} from "antd";
import ProfileSideBar from "./ProfileSideBar";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import CustomButton from "../../lib/CustomButton";


const type = 'Хувийн мэдээлэл' || 'Нууц үг солих'


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
                                    <div onClick={() => setTab('Хувийн мэдээлэл')}
                                         className={tab === 'Хувийн мэдээлэл' ? 'boxActive' : 'box'}>Хувийн мэдээлэл
                                    </div>
                                    <div onClick={() => setTab('Нууц үг солих')}
                                         className={tab === 'Нууц үг солих' ? 'boxActive' : 'box'}>Нууц үг солих
                                    </div>
                                </div>
                                <div className={'bottom'}>

                                    {
                                        tab === 'Хувийн мэдээлэл' ? (
                                            <Row gutter={30}>
                                                <Col xxl={12} xl={12} lg={12} md={24}>
                                                    <div style={{marginBottom: 15}}>
                                                        <p>Нэр</p>
                                                        <Input size="large" placeholder="large size"
                                                               prefix={<UserOutlined/>}/>
                                                    </div>
                                                    <p>Хүйс</p>
                                                    <Input size="large" placeholder="large size"
                                                           prefix={<UserOutlined/>}/>

                                                </Col>
                                                <Col xxl={12} xl={12} lg={12} md={24}>
                                                    <div style={{marginBottom: 15}}>
                                                        <p>Овог</p>
                                                        <Input size="large" placeholder="large size"
                                                               prefix={<UserOutlined/>}/>
                                                    </div>
                                                    <p>Төрсөн өдөр</p>
                                                    <Input size="large" placeholder="large size"
                                                           prefix={<UserOutlined/>}/>
                                                    <div
                                                        style={{marginTop: 20, justifyContent: 'end', display: "flex"}}>
                                                        <CustomButton title={'Мэдээлэл солих'}/>
                                                    </div>
                                                </Col>
                                            </Row>
                                        ) : null
                                    }
                                    {
                                        tab === 'Нууц үг солих' ? (
                                            <div>
                                                <Form
                                                    name="normal_login"
                                                    className="login-form"
                                                >

                                                    <p>Одоо хэрэглэж буй нууц үг</p>
                                                    <Form.Item
                                                        name="password"
                                                        rules={[{
                                                            required: true,
                                                            message: 'Please input your Password!'
                                                        }]}
                                                    >
                                                        <Input
                                                            prefix={<LockOutlined
                                                                className="site-form-item-icon passwordCo iconMedium"/>}
                                                            type="password"
                                                            placeholder="Password"
                                                        />
                                                    </Form.Item>
                                                    <p>Шинэ нууц үг</p>
                                                    <Form.Item
                                                        name="password"
                                                        rules={[{
                                                            required: true,
                                                            message: 'Please input your Password!'
                                                        }]}
                                                    >
                                                        <Input
                                                            prefix={<LockOutlined
                                                                className="site-form-item-icon passwordCo iconMedium"/>}
                                                            type="password"
                                                            placeholder="Password"
                                                        />
                                                    </Form.Item>
                                                </Form>
                                                <div style={{marginTop: 20, justifyContent: 'end', display: "flex"}}>
                                                    <CustomButton title={'Солих'}/>
                                                </div>
                                            </div>
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
export default Profile