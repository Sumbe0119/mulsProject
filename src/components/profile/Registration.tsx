import React, {useState} from "react";
import ViewContainer from "../../lib/ViewContainer";
import {Col, Row, Select} from "antd";
import ProfileSideBar from "./ProfileSideBar";
import CustomButton from "../../lib/CustomButton";


const type = 'Үндсэн бүртгэл' || 'Техникийн бүртгэл'
const {Option} = Select;
const cityData = [
        {
            id: 1,
            title: 'Хөрс боловсруулах'
        },
        {
            id: 2,
            title: 'Үрлэх машин'
        },
        {
            id: 3,
            title: 'Ургамал хамгаалах'
        },
        {
            id: 4,
            title: 'Ургамал хураах'
        },
        {
            id: 5,
            title: 'Хураалтын дараах боловсруулал'
        },
        {
            id: 6,
            title: 'Хураалтын дараах боловсруулал'
        }
    ]

;
const Profile = () => {
    const [tab, setTab] = useState(type)
    const [category, updateCategory] = useState<any>(cityData);


    return (
        <ViewContainer loading={false} code={200}>
            <div className={'profile'}>
                <div className={'container'}>
                    <Row gutter={30}>
                        <Col xxl={6} xl={6} lg={6} md={24}>
                            <ProfileSideBar/>
                        </Col>
                        <Col xxl={18} xl={18} lg={18} md={24}>
                            <div className={'right'}>
                                <div className={'top'}>
                                    <div onClick={() => setTab('Үндсэн бүртгэл')}
                                         className={tab === 'Үндсэн бүртгэл' ? 'boxActive' : 'box'}>Үндсэн бүртгэл
                                    </div>
                                    <div onClick={() => setTab('Техникийн бүртгэл')}
                                         className={tab === 'Техникийн бүртгэл' ? 'boxActive' : 'box'}>Техникийн бүртгэл
                                    </div>
                                </div>
                                <div className={'bottom'}>
                                    {
                                        tab === 'Үндсэн бүртгэл' ? (
                                            <div className={'registration'}>
                                                <h2>Зүтгэх хүчний машин</h2>
                                                <Row>
                                                    <Col xxl={6} xl={6} lg={6} md={6}>
                                                        <div className={'myTableHeader'}>Фирм</div>
                                                    </Col>
                                                    <Col xxl={6} xl={6} lg={6} md={6}>
                                                        <div className={'myTableHeader'}>Марк</div>
                                                    </Col>
                                                    <Col xxl={6} xl={6} lg={6} md={6}>
                                                        <div className={'myTableHeader'}>
                                                            Он
                                                        </div>
                                                    </Col>
                                                    <Col xxl={6} xl={6} lg={6} md={6}>
                                                        <div className={'myTableHeader'}>Тоо ширхэг
                                                        </div>
                                                    </Col>
                                                </Row>
                                                {
                                                    [1, 2].map((item: any, index: number) => {
                                                        return (
                                                            <Row>
                                                                <Col xxl={6} xl={6} lg={6} md={6}>
                                                                    <div className={'myTableContent'}>

                                                                    </div>
                                                                </Col>
                                                                <Col xxl={6} xl={6} lg={6} md={6}>
                                                                    <div className={'myTableContent'}></div>
                                                                </Col>
                                                                <Col xxl={6} xl={6} lg={6} md={6}>
                                                                    <div className={'myTableContent'}>
                                                                    </div>
                                                                </Col>
                                                                <Col xxl={6} xl={6} lg={6} md={6}>
                                                                    <div className={'myTableContent'}>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        )
                                                    })
                                                }
                                                <h2 style={{marginTop: 10, marginBottom: 20}}>ХАА ЧИРГҮҮЛ, ДҮҮЖИН
                                                    МАШИН</h2>
                                                <Row>
                                                    <Col xxl={6} xl={6} lg={6} md={6}>
                                                        <div className={'myTableHeader'}>Төрөл</div>
                                                    </Col>
                                                    <Col xxl={6} xl={6} lg={6} md={6}>
                                                        <div className={'myTableHeader'}>Марк</div>
                                                    </Col>
                                                    <Col xxl={6} xl={6} lg={6} md={6}>
                                                        <div className={'myTableHeader'}>
                                                            Он
                                                        </div>
                                                    </Col>
                                                    <Col xxl={6} xl={6} lg={6} md={6}>
                                                        <div className={'myTableHeader'}>Тоо ширхэг
                                                        </div>
                                                    </Col>
                                                </Row>
                                                {
                                                    [1, 2].map((item: any, index: number) => {

                                                        return (
                                                            <Row>
                                                                <Col xxl={6} xl={6} lg={6} md={6}>
                                                                    <div className={'myTableContent'}>
                                                                        <Select
                                                                            placeholder="Сонгох"
                                                                            style={{width: '100%', height: 50}}
                                                                        >
                                                                            {
                                                                                (category).map((item: any) => {
                                                                                    return (
                                                                                        <Option key={item.id}
                                                                                                value={item.id}>{item.title}</Option>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </Select>
                                                                    </div>
                                                                </Col>
                                                                <Col xxl={6} xl={6} lg={6} md={6}>
                                                                    <div className={'myTableContent'}></div>
                                                                </Col>
                                                                <Col xxl={6} xl={6} lg={6} md={6}>
                                                                    <div className={'myTableContent'}>
                                                                    </div>
                                                                </Col>
                                                                <Col xxl={6} xl={6} lg={6} md={6}>
                                                                    <div className={'myTableContent'}>
                                                                    </div>
                                                                </Col>
                                                            </Row>

                                                        )
                                                    })
                                                }
                                                <div
                                                    style={{marginTop: 20, justifyContent: 'end', display: "flex"}}>
                                                    <CustomButton title={'Хадгалах'}/>
                                                </div>
                                            </div>
                                        ) : null}
                                    {
                                        tab === 'Техникийн бүртгэл' ? (
                                            <div className={'registration'}>
                                                <h2>Үр тариа цэвэрлэх машин</h2>
                                                <Row>
                                                    <Col xxl={6} xl={6} lg={6} md={6}>
                                                        <div className={'myTableHeader'}>Төрөл</div>
                                                    </Col>
                                                    <Col xxl={6} xl={6} lg={6} md={6}>
                                                        <div className={'myTableHeader'}>Марк</div>
                                                    </Col>
                                                    <Col xxl={6} xl={6} lg={6} md={6}>
                                                        <div className={'myTableHeader'}>
                                                            Он
                                                        </div>
                                                    </Col>
                                                    <Col xxl={6} xl={6} lg={6} md={6}>
                                                        <div className={'myTableHeader'}>Тоо ширхэг
                                                        </div>
                                                    </Col>
                                                </Row>
                                                {
                                                    [1, 2].map((item: any, index: number) => {

                                                        return (
                                                            <Row>
                                                                <Col xxl={6} xl={6} lg={6} md={6}>
                                                                    <div className={'myTableContent'}>
                                                                        <Select
                                                                            placeholder="Сонгох"
                                                                            style={{width: '100%', height: 50}}
                                                                        >
                                                                            {
                                                                                (category).map((item: any) => {
                                                                                    return (
                                                                                        <Option key={item.id}
                                                                                                value={item.id}>{item.title}</Option>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </Select>
                                                                    </div>
                                                                </Col>
                                                                <Col xxl={6} xl={6} lg={6} md={6}>
                                                                    <div className={'myTableContent'}></div>
                                                                </Col>
                                                                <Col xxl={6} xl={6} lg={6} md={6}>
                                                                    <div className={'myTableContent'}>
                                                                    </div>
                                                                </Col>
                                                                <Col xxl={6} xl={6} lg={6} md={6}>
                                                                    <div className={'myTableContent'}>
                                                                    </div>
                                                                </Col>
                                                            </Row>

                                                        )
                                                    })
                                                }
                                                <h2>Ангилахсортлох машин</h2>
                                                <Row>
                                                    <Col xxl={6} xl={6} lg={6} md={6}>
                                                        <div className={'myTableHeader'}>Төрөл</div>
                                                    </Col>
                                                    <Col xxl={6} xl={6} lg={6} md={6}>
                                                        <div className={'myTableHeader'}>Марк</div>
                                                    </Col>
                                                    <Col xxl={6} xl={6} lg={6} md={6}>
                                                        <div className={'myTableHeader'}>
                                                            Он
                                                        </div>
                                                    </Col>
                                                    <Col xxl={6} xl={6} lg={6} md={6}>
                                                        <div className={'myTableHeader'}>Тоо ширхэг
                                                        </div>
                                                    </Col>
                                                </Row>
                                                {
                                                    [1, 2].map((item: any, index: number) => {

                                                        return (
                                                            <Row>
                                                                <Col xxl={6} xl={6} lg={6} md={6}>
                                                                    <div className={'myTableContent'}>
                                                                        <Select
                                                                            placeholder="Сонгох"
                                                                            style={{width: '100%', height: 50}}
                                                                        >
                                                                            {
                                                                                (category).map((item: any) => {
                                                                                    return (
                                                                                        <Option key={item.id}
                                                                                                value={item.id}>{item.title}</Option>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </Select>
                                                                    </div>
                                                                </Col>
                                                                <Col xxl={6} xl={6} lg={6} md={6}>
                                                                    <div className={'myTableContent'}></div>
                                                                </Col>
                                                                <Col xxl={6} xl={6} lg={6} md={6}>
                                                                    <div className={'myTableContent'}>
                                                                    </div>
                                                                </Col>
                                                                <Col xxl={6} xl={6} lg={6} md={6}>
                                                                    <div className={'myTableContent'}>
                                                                    </div>
                                                                </Col>
                                                            </Row>

                                                        )
                                                    })
                                                }
                                                <h2>Ачих машин</h2>
                                                <Row>
                                                    <Col xxl={6} xl={6} lg={6} md={6}>
                                                        <div className={'myTableHeader'}>Төрөл</div>
                                                    </Col>
                                                    <Col xxl={6} xl={6} lg={6} md={6}>
                                                        <div className={'myTableHeader'}>Марк</div>
                                                    </Col>
                                                    <Col xxl={6} xl={6} lg={6} md={6}>
                                                        <div className={'myTableHeader'}>
                                                            Он
                                                        </div>
                                                    </Col>
                                                    <Col xxl={6} xl={6} lg={6} md={6}>
                                                        <div className={'myTableHeader'}>Тоо ширхэг
                                                        </div>
                                                    </Col>
                                                </Row>
                                                {
                                                    [1, 2].map((item: any, index: number) => {

                                                        return (
                                                            <Row>
                                                                <Col xxl={6} xl={6} lg={6} md={6}>
                                                                    <div className={'myTableContent'}>
                                                                        <Select
                                                                            placeholder="Сонгох"
                                                                            style={{width: '100%', height: 50}}
                                                                        >
                                                                            {
                                                                                (category).map((item: any) => {
                                                                                    return (
                                                                                        <Option key={item.id}
                                                                                                value={item.id}>{item.title}</Option>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </Select>
                                                                    </div>
                                                                </Col>
                                                                <Col xxl={6} xl={6} lg={6} md={6}>
                                                                    <div className={'myTableContent'}></div>
                                                                </Col>
                                                                <Col xxl={6} xl={6} lg={6} md={6}>
                                                                    <div className={'myTableContent'}>
                                                                    </div>
                                                                </Col>
                                                                <Col xxl={6} xl={6} lg={6} md={6}>
                                                                    <div className={'myTableContent'}>
                                                                    </div>
                                                                </Col>
                                                            </Row>

                                                        )
                                                    })
                                                }
                                            </div>
                                        ) : null}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </ViewContainer>
    )
}
export default Profile