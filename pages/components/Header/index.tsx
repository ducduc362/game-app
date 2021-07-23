import React, { useState } from 'react'
import { Col, Row, Input, Button } from 'antd'
import { MenuOutlined, SearchOutlined } from '@ant-design/icons';
import Image from 'next/image'
import styled from 'styled-components';
import logoPic from '../../../public/logo-game.jpg';


const { Search } = Input;

const HeaderRow = styled(Row)`
  max-width: 1280px;
  margin: 0 auto;
  align-items: center; 
  background-color: skyblue;
  height: 10vh;
`;

const ThirdCol = styled(Col)`
    display: flex;
    flex-direction: row-reverse;
`

const SignInButton = styled(Button)`
    height: 44px;
    font-size: 13px;
    font-weight: 700;
    padding: 0 13px;
    border-radius: 8px;
    border: 0;
`

const LogInButton = styled(Button)`
    height: 44px;
    font-size: 13px;
    font-weight: 700;
    padding: 0 13px;
    border-radius: 8px;
    border: 0;
    margin-left: 10px;
`

const MenuIcon = styled(MenuOutlined)`
    font-size: 35px;
    margin-left: 15px;
`

const Header = () => {
    const [visible, setVisible] = useState(false);
    return (
        <HeaderRow>
            <Col xs={{ order: 2, span: 8 }} xl={{ order: 1, span: 8 }}  >
                <Image id="logo" src={logoPic} alt="Logo" width={70} height={70} />
            </Col>
            <>
                <Col xs={{ order: 3, span: 0 }} xl={{ order: 2, span: 8 }} >
                    <Search placeholder="input search text" size="large" enterButton />
                </Col>
                <Col xs={{ order: 3, span: 8 }} xl={{ order: 2, span: 0 }} >
                    <SearchOutlined />
                </Col>
            </>
            <Col xs={{ order: 1, span: 0 }} xl={{ order: 3, span: 8 }} >
                <LogInButton type="primary">Đăng nhập</LogInButton>
                <SignInButton type="primary" danger>Đăng ký</SignInButton>
            </Col>
            <Col xs={{ order: 1, span: 8 }} xl={{ order: 3, span: 8 }} >
                <MenuIcon />
            </Col>
        </HeaderRow>
    )
}


export default Header
