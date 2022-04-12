import * as React from "react";
import {Button, Drawer, Radio, Row, Space} from "antd";
import {Link, useLocation} from "react-router-dom";
import CustomButton from "./CustomButton";
import {useState} from "react";

interface Props {
    onClick: boolean
    onClose: boolean
}

const Header = ({onClick, onClose}: Props) => {
    const location = useLocation();
    const [show, setShow] = useState(false)
    return (
        <>
            <header className={'header'}>
                <div className={'top'}>
                    <div className={'container'}>
                        <div className={'subTop displayFlex alignItems justifySpaceBetween'}>
                            <div style={{display: "flex"}}>
                                <div className={'item'}>
                                    <img width={22} height={22} src={'/img/icon/phone.png'} style={{marginRight: 15}}/>
                                    <p className={'none'}>+976 98115854</p>
                                </div>
                                <div className={'item'}>
                                    <img width={22} height={22} src={'/img/icon/e-mail.png'} style={{marginRight: 15}}/>
                                    <p className={'none'}>info@muls.edu.mn</p>
                                </div>
                                <div className={'item'}>
                                    <img width={22} height={22} src={'/img/icon/location.png'} style={{marginRight: 15}}/>
                                    <p className={'none'}>ЗАЙСАН, ХААИС, ИТС</p>
                                </div>
                            </div>
                            <div style={{display: 'flex'}}>
                                <div className={'item'}>
                                    <img width={22} height={22} src={'/img/icon/facebook.png'} style={{marginRight: 15}}/>
                                </div>
                                <div className={'item'}>
                                    <img width={22} height={22} src={'/img/icon/instagram.png'} style={{marginRight: 15}}/>
                                </div>
                                <div className={'item'}>
                                    <img width={22} height={22} src={'/img/icon/twitter.png'} style={{marginRight: 15}}/>
                                </div>
                                <div className={'item'}>
                                    <img width={22} height={22} src={'/img/icon/youtube.png'} style={{marginRight: 15}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'bottom '}>
                    <div className={'container'}>
                        <div className={'displayFlex alignItems justifySpaceBetween'}>
                            <div className={'left displayFlex alignItems paddingRight15'}>
                                <img width={149} height={47} style={{marginRight: 30}} src={'img/yam.png'}/>
                                <img width={47} height={47} style={{marginRight: 40}} src={'img/haaisLogo.png'}/>
                                <img width={145} height={47} src={'img/khaadsLogo.png'}/>
                            </div>
                            <div className={'right displayFlex alignItems'}>
                                <div className={'item displayFlex alignItems font14 fontMedium'}>
                                    <Link
                                        className={`${location.pathname === "/" ? "textActive" : "textMain"} pointer colorHover paddingRight20`}
                                        to={'/'}>
                                        Нүүр хуудас
                                    </Link>
                                    <Link
                                        className={`${location.pathname === "/news" ? "textActive" : "textMain"} pointer colorHover paddingLeft20 paddingRight20`}
                                        to={'/news'}>
                                        Мэдээ мэдээлэл
                                    </Link>
                                    <Link
                                        className={`${location.pathname === "/tech" ? "textActive" : "textMain"} pointer colorHover paddingLeft20 paddingRight20`}
                                        to={'/tech'}>
                                        Техникийн танилцуулга
                                    </Link>
                                </div>
                                <Link className={'login displayFlex alignItems marginRight30'} to={'/login'}>
                                    <div className={'fontMedium font14 colorHover'} style={{color: '#fff'}}>
                                        Нэвтрэх
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>

    )
}

export default Header