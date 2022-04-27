import React from "react";
import {useLocation, Link} from "react-router-dom";

const ProfileSideBar = () => {
    const location = useLocation();
    return (
        <div className={'sideBar'}>
            <div className={'left'}>
                <div>
                    <div className={'top'}>
                        <div className={'user'}>
                            <img width={102} height={102} src={'img/teacher.png'}/>
                        </div>
                    </div>
                    <div style={{textAlign: 'center',marginTop: -20, marginBottom: 20,   fontFamily: "Montserrat Bold"}}>Пүрэвжаргал</div>
                    <div className={'sideBarItem'}>
                        <div className={'icon'}>
                            <img width={22} height={22} src={'img/icon/userAbout.png'}/>
                        </div>

                        <Link to={'/profile'}>
                            <p className={`text ${location.pathname === "/profile" ? "active" : ""}`}>Хувийн
                                мэдээлэл</p>
                        </Link>
                    </div>
                    <div className={'sideBarItem'}>
                        <div className={'icon'}>
                            <img width={22} height={22} src={'img/icon/registration.png'}/>
                        </div>
                        <Link to={'/registration'}>
                            <p className={`text ${location.pathname === "/registration" ? "active" : ""}`}>Техникийн Бүртгэл</p>
                        </Link>
                    </div>
                    <div className={'sideBarItem'}>
                        <div className={'icon'}>
                            <img width={22} height={22} src={'img/icon/tech.png'}/>
                        </div>
                        <Link to={'/techAbout'}>
                            <p className={`text ${location.pathname === "/techAbout" ? "active" : ""}`}>Техникийн
                                байдал</p>
                        </Link>
                    </div>
                    <div className={'sideBarItem'}>
                        <div className={'icon'}>
                            <img width={22} height={22} src={'img/icon/report.png'}/>
                        </div>
                        <Link to={'/report'}>
                            <p className={`text ${location.pathname === "/report" ? "active" : ""}`}>Тайлан</p>
                        </Link>
                    </div>
                    {/*<div className={'sideBarItem'}>*/}
                    {/*    <div className={'icon'}>*/}
                    {/*        <img width={22} height={22} src={'img/icon/contacted.png'}/>*/}
                    {/*    </div>*/}
                    {/*    <Link to={'/feedback'}>*/}
                    {/*        <p className={`text ${location.pathname === "/feedback" ? "active" : ""}`}>Санал хүсэлт</p>*/}
                    {/*    </Link>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>

    )
}

export default ProfileSideBar