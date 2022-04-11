import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ErrorView from "./ErrorView";
import Loader from "./Loader";
import {Layout} from "antd";

interface Props {
    loading: boolean
    code: number
    children: any
    reload?: any
    header?: boolean
    footer?: boolean
    trading?: boolean
    headerClass?: string
    footerClass?: string
}

const successCode: any[] = [200, 201, 202, 204];

const ViewContainer = ({children, loading, code, reload, header, footer}: Props) => {

    return (
        <Layout className={'defaultBackgroundColor'}>
            <>
                {!header ? <Header onClick={false} onClose={false}/> : null}
                <Layout.Content>
                    {loading ? <Loader/> : (successCode.indexOf(code || 200) > -1 ? children :
                        <ErrorView code={code} reload={reload}/>)}
                </Layout.Content>
                {!footer ? <Footer/> : null}
            </>
        </Layout>
    )
};

export default ViewContainer