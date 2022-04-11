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
            <header className={'header backgroundMain  paddingTop20 paddingBottom20'}>
                <div className={'displayFlex alignItems justifySpaceBetween paddingLeft100 paddingRight100'}>
                    <div className={' displayFlex alignItems paddingRight15'}>
                        <Link to={'/'}>
                            <div className={'fontBlack textLight font28 marginRight50'}>
                                Хөдөө ах ахуйг дэмжих сан
                            </div>

                        </Link>
                        <div className={'displayFlex alignItems font14 fontMedium'}>
                            <Link
                                className={`${location.pathname === "/" ? "textActive" : "textLight"} colorHover paddingRight20`}
                                to={'/'}>
                                Нүүр хуудас
                            </Link>
                            <Link
                                className={`${location.pathname === "/course" ? "textActive" : "textLight"} colorHover paddingLeft20 paddingRight20`}
                                to={'/course'}>
                                Сургалт
                            </Link>
                            <Link
                                className={`${location.pathname === "/premium" ? "textActive" : "textLight"} colorHover paddingLeft20 paddingRight20`}
                                to={'/premium'}>
                                Эрх авах
                            </Link>
                        </div>
                    </div>


                    <div className={'displayFlex alignItems'}>
                        <Link className={'displayFlex alignItems marginRight30'} to={'/login'}>
                            <div className={'fontMedium font14 textLight marginLeft15 colorHover'}>
                                Нэвтрэх
                            </div>
                        </Link>
                        <Link className={'register'} to={'/register'}>
                            <CustomButton title={'Бүртгүүлэх'} style={"main"} loading={false}
                                          reload={(e: any) => console.log(e)}/>
                        </Link>
                    </div>
                </div>
            </header>
        </>

    )
}

export default Header