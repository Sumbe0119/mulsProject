import React from 'react'
import ViewContainer from "../lib/ViewContainer";
import {Carousel, Row, Col} from 'antd';
import * as url from "url";

const Home = () => {

    return (
        <ViewContainer loading={false} code={200}>
            <div className={'home'}>
                <div className={'slideShow'}>
                    <Carousel effect="fade">
                        <div>
                            <div className={'slideHeight coverBackgroundSize coverBackgroundPosition'}
                                 style={{backgroundImage: `url('/img/slide_1.jpg')`}}>
                                <div className={'container'}>
                                    <Row>
                                        <Col xxl={8} xl={16} lg={16} md={16}>
                                            <div className={'content '}>
                                                <div>
                                                    <h2 className={'none font24 fontMedium'}>Хөдөө аж ахуйг дэмжих
                                                        сан</h2>
                                                    <p className={'none fontMedium marginTop20 marginBottom20'}>2022 онд
                                                        газар тариалан мал аж ахуйг дэмжих
                                                        чиглэлээр хөдөө аж ахуй дэмжих сангаас хөрөнгө орлууах
                                                        чиглэл батлагдав блабла бла</p>
                                                    <div className={'btn'}>Дэлгэрэнгүй</div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xxl={16} xl={16} lg={16} md={16}/>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
                <div className={'middle container'}>
                    <div>
                        <h1 className={'none textMain fontBold font24 textCenter marginTop30'}>Мэдээ мэдээлэл</h1>
                        <img width={612} height={46} src={'img/line.png'} style={{marginBottom: 30}}/>
                    </div>
                </div>
                <div className={'container marginBottom50'}>
                    <Row gutter={30}>
                        {
                            [1,2,3,4].map((item:any, index:number)=>{
                                return(
                                    <Col xxl={6} xl={6} lg={6} md={6}>
                                        <div key={index} className={'box'}>
                                            <div className={'slideHeight coverBackgroundSize coverBackgroundPosition '}
                                                 style={{
                                                     backgroundImage: `url('/img/tractor.jpg')`,
                                                     height: 150,
                                                     borderTopLeftRadius: 10,
                                                     borderTopRightRadius: 10
                                                 }}/>
                                            <div className={'paddingRight20 paddingLeft20'}>
                                                <p className={'none font16 textMain fontMedium textCenter marginTop15 marginBottom15'}>Мэдээ
                                                    мэдээллийн гарчиг</p>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum in tenetur reiciendis
                                                    laudantium suscipit quo ducimus, aliquam, veniam deserunt nam officia porro
                                                    consectetur error iusto consequatur.
                                                </p>
                                                <p className={'none font14 textActive fontMedium pointer'}>Цааш унших...</p>
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

export default Home