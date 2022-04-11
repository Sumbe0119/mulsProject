import React from 'react';
const Loader = ()=>{
    return(
        <div className={'page'}>
            <div className="preloader">
                <div className="preloader-inner">
                    <div className={'preloader-icon'}>
                        <span/>
                        Loading
                        <span/>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Loader