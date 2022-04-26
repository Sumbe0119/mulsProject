import React from "react";
import {useLocation, Link} from "react-router-dom";

const ProfileSideBar = () => {
    const location = useLocation();
    return (
        <div className={'left'}>
            <div>
                <div className={'top'}>
                    <div className={'user'}>
                    </div>
                </div>
                <div className={'item'}>
                    <Link to={'/profile'}>
                        <p className={`text ${location.pathname === "/profile" ? "active" : ""}`}>Хувийн
                            мэдээлэл</p>
                    </Link>
                    <Link to={'/registration'}>
                        <p className={`text ${location.pathname === "/registration" ? "active" : ""}`}>Бүртгэл</p>
                    </Link>
                    <Link to={'/registration'}>
                        <p className={`text ${location.pathname === "/a" ? "active" : ""}`}>Техникийн байдал</p>
                    </Link>
                    <Link to={'/registration'}>
                        <p className={`text ${location.pathname === "/a" ? "active" : ""}`}>Тайлан</p>
                    </Link>
                    <Link to={'/registration'}>
                        <p className={`text ${location.pathname === "/a" ? "active" : ""}`}>Санал хүсэлт</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProfileSideBar