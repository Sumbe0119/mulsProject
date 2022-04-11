import React from "react";


interface ErrorViewProps {
    code?: number
    reload?: Function
}


const ErrorView = ({code, reload}: ErrorViewProps) => {
    return (
        <div className={'notFound'}>
            <div className={'content'}>
                <div className={'text'}>
                    <div>
                        <h1>
                            <b>404</b>
                            Уучлаарай, хуудас олдсонгүй
                        </h1>
                        <div className={'text-center'}>
                            {
                                reload ? (<button>Дахин холбогдох</button>) : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ErrorView