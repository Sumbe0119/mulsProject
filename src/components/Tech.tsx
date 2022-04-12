import React from 'react'
import ViewContainer from "../lib/ViewContainer";
import {Col, Row} from "antd";

const Tech = () => {
    return (
        <ViewContainer loading={false} code={200}>
            <div className={'tech'}>
                <div className={'container marginBottom50 marginTop30'}>
                    <div className={'displayFlex justifySpaceBetween marginBottom20'}>
                        <h2 className={'font18 fontMedium textMain'}>Зүтгэх хүчний машин</h2>
                        <div className={'displayFlex alignItems justifyCenter pointer'}>
                            <h2 className={'none font16 fontMedium marginRight15'}>Цааш үзэх</h2>
                            <div className={'iconMedium icons backgroundDark '}
                                 style={{WebkitMaskImage: `url('/img/icon/more.png')`}}/>
                        </div>
                    </div>
                    <div className={'marginBottom50'}>
                        <Row gutter={30}>
                            {
                                [1, 2, 3, 4, 6, 7].map((item: any, index: number) => {
                                    return (
                                        <Col xxl={4} xl={4} lg={4} md={4}>
                                            <div key={index} className={'box'}>
                                                <div className={'slideHeight coverBackgroundSize coverBackgroundPosition '}
                                                     style={{
                                                         backgroundImage: `url('/img/tractor.jpg')`,
                                                         height: 250,
                                                         borderRadius: 5
                                                     }}/>
                                                <div className={'paddingRight20 paddingLeft20'}>
                                                    <p className={'none font16 textMain fontMedium textCenter marginTop15 marginBottom15'}>
                                                        Хүнд даацын трактор</p>
                                                </div>
                                            </div>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </div>
                    <div className={'displayFlex justifySpaceBetween marginBottom20'}>
                        <h2 className={'font18 fontMedium textMain'}>Чиргүүлт дүүжин машин</h2>
                        <div className={'displayFlex alignItems justifyCenter pointer'}>
                            <h2 className={'none font16 fontMedium marginRight15'}>Цааш үзэх</h2>
                            <div className={'iconMedium icons backgroundDark '}
                                 style={{WebkitMaskImage: `url('/img/icon/more.png')`}}/>
                        </div>
                    </div>
                    <Row gutter={30}>
                        {
                            [1, 2, 3, 4, 6, 7].map((item: any, index: number) => {
                                return (
                                    <Col xxl={4} xl={4} lg={4} md={4}>
                                        <div key={index} className={'box'}>
                                            <div className={'slideHeight coverBackgroundSize coverBackgroundPosition '}
                                                 style={{
                                                     backgroundImage: `url('/img/zvtgvvr.jpg')`,
                                                     height: 250,
                                                     borderRadius: 5
                                                 }}/>
                                            <div className={'paddingRight20 paddingLeft20'}>
                                                <p className={'none font16 textMain fontMedium textCenter marginTop15 marginBottom15'}>
                                                    Хүнд даацын трактор</p>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </div>
            </div>
        </ViewContainer>
    )
}
export default Tech