import React from "react";
import {Button, Spinner} from "react-bootstrap";

interface CustomButtonProps {
    loading?: boolean
    reload?: Function
    title: string
    style?: 'main' | 'second'
    disabled?: boolean
    type?: "submit" | "button" | undefined
}

const CustomButton = ({loading, reload, title, style, disabled, type}: CustomButtonProps) => {
    return (
        <Button type={type ? type : "button"}
                className={style === "main" ? 'btn-primary main-button' : 'second-button'}
                disabled={disabled || loading}
                onClick={() => reload ? reload() : null}
        >
            {
                loading ? (
                    <Spinner style={{marginRight: 10}} animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                ) : null
            }
            <span className={'font14 fontMedium'}>{title}</span>
        </Button>
    )
}
export default CustomButton