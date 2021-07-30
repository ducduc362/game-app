import { Card, Col, Row } from 'antd'
import Meta from 'antd/lib/card/Meta'
import React from 'react'
import styled from 'styled-components'

const FullContent = styled.div`
    width: 100%;
    background-color: blue;
`

const ContentRow = styled(Row)`
  max-width: 1280px;
  margin: 0 auto;
  align-items: center;
  background-color: blue;
  height: 70vh;
`

const Content = () => (
    <>
        <ContentRow >
            <Col xs={12}>
                {/* <Card
                    hoverable
                    // style={{ width: 240 }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>, */}
                <h1>Left</h1>
            </Col>
            <Col xs={12}>
                <h1>Right</h1>
            </Col>
        </ContentRow>

    </ >
)

export default Content
