import React, {useState} from 'react';
import {Modal, Button} from 'antd';


interface Props {
    title: string,
    show: boolean,
    close: Function,
    save?: Function,
    loading?: boolean,
    children: any
}

const CustomModal = ({title, show, children, close, save, loading}: Props) => {
    return (
        <Modal title={title} visible={show} onCancel={()=>close()}
               aria-labelledby="contained-modal-title-vcenter">
            {children}
        </Modal>
    )
}

export default CustomModal