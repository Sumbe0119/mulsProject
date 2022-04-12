import React from "react";
import {Col, Row, Form, Input, Button, Checkbox} from "antd";
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";

const Register = () => {
    return (
        <div className={'loginPage'}>
            <Row>
                <Col xxl={12} xl={12} lg={12} md={12}>
                    <div className={'loginImage coverBackgroundSize coverBackgroundPosition positionRelative'}
                         style={{backgroundImage: `url('/img/loginCover.jpg')`}}>
                        <div className={'text'}>
                            <div className={'description'}>
                                <h2 className={'title font32 fontMedium'}>
                                    Хөдөө аж ахуйн <br/> их сургууль
                                    <span/>
                                </h2>
                                <p className={'font16'}>
                                    If you use this site regularly and would like to help keep the site on the Internet,
                                    please consider donating a small sum to help pay for the hosting and bandwidth bill.
                                    There is no minimum donation, any sum is appreciated
                                </p>
                                <a className={'more'} href={'/'}>
                                    <div className={'displayFlex alignItems'}>
                                        <div>
                                            Дэлгэрэнгүй
                                        </div>
                                        <div className={'iconMedium icon'}
                                             style={{WebkitMaskImage: `url('/img/icon/more.png')`}}/>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xxl={12} xl={12} lg={12} md={12}>
                    <Link to={'/login'}>
                        <div className={'iconMedium icons'}
                             style={{WebkitMaskImage: `url('/img/icon/leftArrow.png')`}}/>
                    </Link>
                    <div className={'form displayFlex alignItems justifyCenter'}>

                        <div className={'content'}>
                            <div>
                                <div className={'title paddingBottom25'}>
                                    <h1 className={'margin0 font32 textDark fontBold'}>
                                        Бүртгүүлэх
                                    </h1>
                                </div>
                                <Form
                                    name="normal_login"
                                    className="login-form"
                                >
                                    <Form.Item
                                        name="username"
                                        rules={[{required: true, message: 'Please input your Username!'}]}
                                    >
                                        <Input
                                            prefix={<UserOutlined className="site-form-item-icon loginCo iconMedium"/>}
                                            placeholder="Нэр"/>
                                    </Form.Item>
                                    <Form.Item
                                        name="username"
                                        rules={[{required: true, message: 'Please input your Username!'}]}
                                    >
                                        <Input
                                            prefix={<UserOutlined className="site-form-item-icon loginCo iconMedium"/>}
                                            placeholder="Овог нэр"/>
                                    </Form.Item>
                                    <Form.Item
                                        name="password"
                                        rules={[{required: true, message: 'Please input your Password!'}]}
                                    >
                                        <Input
                                            prefix={<LockOutlined
                                                className="site-form-item-icon passwordCo iconMedium"/>}
                                            type="number"
                                            placeholder="Нууц үг"
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        name="password"
                                        rules={[{required: true, message: 'Please input your Password!'}]}
                                    >
                                        <Input
                                            prefix={<LockOutlined
                                                className="site-form-item-icon passwordCo iconMedium"/>}
                                            type="number"
                                            placeholder="Нууц үг давтах"
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        name="number"
                                        rules={[{required: true, message: 'Please input your Password!'}]}
                                    >
                                        <Input
                                            prefix={<LockOutlined
                                                className="site-form-item-icon phoneCo iconMedium"/>}
                                            type="number"
                                            placeholder="Утасны дугаар"
                                        />
                                    </Form.Item>
                                    <Form.Item className={'box'}>
                                        <Form.Item name="remember" valuePropName="checked" noStyle>
                                            <Checkbox>Намайг сана</Checkbox>
                                        </Form.Item>

                                        <a className="login-form-forgot textMain" href="">
                                            Нууц үгээ мартсан уу?
                                        </a>
                                    </Form.Item>
                                    <div>
                                        <Button className={'registerBtn'}>Бүртгүүлэх</Button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Register