import React from 'react'
import ViewContainer from "../lib/ViewContainer";
import {Carousel, Col, Row} from "antd";

const News = () => {
    return (
        <ViewContainer loading={false} code={200}>
            <div className={'introduction'}>
                <Carousel effect="fade">
                    <div>
                        <div className={'slideHeight coverBackgroundSize coverBackgroundPosition'}
                             style={{backgroundImage: `url('/img/slide_2.jpg')`}}>
                        </div>
                    </div>
                    <div>
                        <div className={'slideHeight coverBackgroundSize coverBackgroundPosition'}
                             style={{backgroundImage: `url('/img/slide_3.jpg')`}}>
                        </div>
                    </div>
                    <div>
                        <div className={'slideHeight coverBackgroundSize coverBackgroundPosition'}
                             style={{backgroundImage: `url('/img/slide_1.jpg')`}}>
                        </div>
                    </div>
                </Carousel>
                <div className={'container marginTop30 marginBottom50'}>
                    <h1 className={'textMain fontMedium marginBottom30'}>Тоног төхөөрөмжийн танилцуулга</h1>
                    <Row gutter={30}>
                        <Col xxl={14} xl={14} lg={14} md={14}>
                            <div className={'box'}>
                                <div className={'coverBackgroundSize coverBackgroundPosition '}
                                     style={{
                                         backgroundImage: `url('/img/boxImage.jpg')`,
                                         height: 300,
                                         borderTopLeftRadius: 10,
                                         borderTopRightRadius: 10
                                     }}/>
                                <div className={'paddingRight30 paddingLeft30'}>
                                    <h2 className={'textMain fontMedium marginTop10 textCenter '}>Хадлангийн машин</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit nisi maiores
                                        possimus! Doloribus ipsam vero mollitia optio, blanditiis et enim quia! Delectus
                                        dolor eum iure incidunt rem ducimus sed corrupti voluptatibus, voluptates sunt
                                        doloribus eos iusto atque assumenda voluptatem aliquid culpa, inventore vitae
                                        unde omnis laborum, vero tenetur nesciunt recusandae! Perferendis vitae quos
                                        iure laborum distinctio pariatur, totam expedita, suscipit ut placeat odio
                                        ratione! Officia facere nesciunt possimus deserunt velit nisi aut. At laudantium
                                        non, similique ad aspernatur illo in doloremque nihil odit quisquam, itaque eprehenderit laudantium harum dolore magnam possimus sapiente
                                        nesciunt porro magni, provident corporis est pariatur. Nostrum quisquam
                                        voluptatibus fugit sapiente ut. Neque illum tempora non harum voluptatibus et
                                        molestias voluptates nulla pariatur? Voluptatibus, molestias repudiandae
                                        provident tempore repellat architecto itaque assumenda iste optio, consequuntur
                                        eos inventore magni delectus debitis est at doloremque dolore blanditiis ipsam
                                        impedit, saepe deserunt. Ratione eius voluptatum quo qui exercitationem incidunt
                                        temporibus, inventore tempora rerum consequatur voluptatibus facere itaque esse
                                        quia velit doloremque rem architecto molestias.
                                    </p>
                                </div>

                            </div>
                        </Col>
                        <Col xxl={10} xl={10} lg={10} md={10}>
                            <div className={'box'}></div>
                        </Col>
                    </Row>
                </div>
            </div>
        </ViewContainer>
    )
}
export default News