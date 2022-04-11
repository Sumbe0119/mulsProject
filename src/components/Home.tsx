import React from 'react'
import ViewContainer from "../lib/ViewContainer";
import {Col, Row} from "antd";
import CustomButton from "../lib/CustomButton";

const Home = () => {
    return (
        <ViewContainer loading={false} code={200}>
            <div className={'mainContainer'}>
                <div className={'home marginTop30 marginBottom30'}>
                    <div className={'top'}>

                    </div>
                    <div className={'content'}>
                        <h2 className={'none fontBold'}> Онцлох сургалт</h2>
                    </div>
                </div>

            </div>
        </ViewContainer>
    )
}
export default Home