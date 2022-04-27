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
                    <Link to={'/techAbout'}>
                        <p className={`text ${location.pathname === "/techAbout" ? "active" : ""}`}>Техникийн байдал</p>
                    </Link>
                    <Link to={'/report'}>
                        <p className={`text ${location.pathname === "/report" ? "active" : ""}`}>Тайлан</p>
                    </Link>
                    <Link to={'/feedback'}>
                        <p className={`text ${location.pathname === "/feedback" ? "active" : ""}`}>Санал хүсэлт</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProfileSideBar