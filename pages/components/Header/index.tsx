import React, { useState } from 'react'
import { Col, Row, Input, Button, Drawer, Menu, Modal } from 'antd'
import { MenuOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Link from 'next/link';

const { Search } = Input;
const { SubMenu } = Menu;

const FullHeader = styled.div`
    width: 100%;
    background-color: skyblue;
`

const HeaderRow = styled(Row)`
  max-width: 1280px;
  margin: 0 auto;
  align-items: center; 
  background-color: skyblue;
  height: 10vh;
  position: relative;
  /* overflow: hidden; */
`;

const ButtonCol = styled(Col)`
    display: flex;
    justify-content: flex-end;
    @media only screen and (max-width: 600px) {
    display: none;
}
`

const SearchCol = styled(Col)`
    display: flex;
    justify-content: flex-end;
    @media only screen and (min-width: 600px) {
    display: none;
}
`

const Logo = styled.h1`
    font-weight: 600;
    margin-bottom: 0;
    margin-left: 5%;
`

const LogoMobile = styled.h1`
    font-weight: 600;
    margin-bottom: 0;
`

const SignInButton = styled(Button)`
    height: 44px;
    font-size: 13px;
    font-weight: 700;
    padding: 0 13px;
    border-radius: 8px;
    border: 0;
    margin-left: 10px;
`

const LogInButton = styled(Button)`
    height: 44px;
    font-size: 13px;
    font-weight: 700;
    padding: 0 13px;
    border-radius: 8px;
    border: 0;
`

const SignInButtonMobile = styled(Button)`
    height: 44px;
    font-size: 13px;
    font-weight: 700;
    padding: 0 13px;
    border-radius: 8px;
    border: 0;
    margin-left: 10px;
    width: 48%;
`

const LogInButtonMobile = styled(Button)`
    height: 44px;
    font-size: 13px;
    font-weight: 700;
    padding: 0 13px;
    border-radius: 8px;
    border: 0;
    width: 48%;
`

const MenuIcon = styled(MenuOutlined)`
    font-size: 30px;
    margin-left: 10px;
`

const SearchIcon = styled(SearchOutlined)`
    font-size: 25px;
    margin-right: 10px;
`

const UserIcon = styled(UserOutlined)`
    font-size: 25px;
    margin-right: 10px;
`

const CustomDrawer = styled(Drawer)`
    height: 200px;
    top: 100;
    text-align: center;
    background: #fafafa;
    border: 1px solid #ebedf0;
    border-radius: 2px;
`

const Header = () => {
    const [visibleMenu, setVisibleMenu] = useState(false);
    const [visibleSearch, setVisibleSearch] = useState(false);
    const [visibleUser, setVisibleUser] = useState(false);

    const showDrawerMenu = () => {
        setVisibleMenu(true);
    };
    const onCloseMenu = () => {
        setVisibleMenu(false);
    };

    const showDrawerSearch = () => {
        setVisibleSearch(true);
    };
    const onCloseSearch = () => {
        setVisibleSearch(false);
    };

    const onCloseUser = () => {
        setVisibleUser(false);
    };
    const showDrawerUser = () => {
        setVisibleUser(true);
    };

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onFinish = (values: object) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: object) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <FullHeader>
            <HeaderRow className="site-drawer-render-in-current-wrapper">
                <>
                    <Col xs={{ order: 2, span: 0 }} xl={{ order: 1, span: 8 }} >
                        <Logo>Let's Play</Logo>
                    </Col>
                    <Col xs={{ order: 2, span: 8 }} xl={{ order: 1, span: 0 }} >
                        <LogoMobile>Let's Play</LogoMobile>
                    </Col>
                    <Col xs={{ order: 1, span: 8 }} xl={{ order: 3, span: 0 }} >
                        <MenuIcon onClick={showDrawerMenu} />
                        <Drawer
                            title="Danh mục"
                            placement="left"
                            onClose={onCloseMenu}
                            visible={visibleMenu}
                            bodyStyle={{ padding: 0 }}
                        >
                            <Menu
                                style={{ width: 256 }}
                                defaultSelectedKeys={['1']}
                                mode="inline"
                            >
                                <Menu.Item key="1">Option 1</Menu.Item>
                                <Menu.Item key="2">Option 2</Menu.Item>
                                <SubMenu key="sub1" title="SubMenu">
                                    <Menu.Item key="3">Option 3</Menu.Item>
                                    <Menu.Item key="4">Option 4</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Drawer>
                    </Col>
                </>
                <>
                    <Col xs={{ order: 3, span: 0 }} xl={{ order: 2, span: 8 }} >
                        <Search placeholder="Tìm kiếm trò chơi" size="large" enterButton />
                    </Col>
                </>
                <>
                    <ButtonCol
                        xs={{ order: 1, span: 0 }}
                        xl={{ order: 3, span: 8 }}
                    >
                        <LogInButton type="primary" onClick={showModal}>Đăng nhập</LogInButton>
                        <SignInButton type="primary" danger>Đăng ký</SignInButton>
                        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} centered={true}>
                            <p>Some contents...</p>
                        </Modal>
                    </ButtonCol>
                    <SearchCol
                        xs={{ order: 3, span: 8 }}
                        xl={{ order: 2, span: 0 }}
                    >
                        <SearchIcon onClick={showDrawerSearch} />
                        <Drawer
                            placement="top"
                            height={100}
                            onClose={onCloseSearch}
                            visible={visibleSearch}
                            bodyStyle={{ padding: 0, margin: "45px 30px 0 30px" }}
                        >
                            <Search placeholder="Tìm kiếm trò chơi" size="large" enterButton />
                        </Drawer>
                        <UserIcon onClick={showDrawerUser} />
                        <Drawer
                            placement="top"
                            closable={false}
                            onClose={onCloseUser}
                            visible={visibleUser}
                            height={100}
                            bodyStyle={{ padding: '30px 20px 20px 20px', textAlign: 'center' }}
                        >
                            <LogInButtonMobile type="primary">
                                <Link href="/account/signin" passHref>Đăng nhập </Link>
                            </LogInButtonMobile>
                            <SignInButtonMobile type="primary" danger>
                                <Link href="/account/signup" passHref>Đăng ký </Link>
                            </SignInButtonMobile>
                        </Drawer>
                    </SearchCol>
                </>
            </HeaderRow>
        </FullHeader>
    )
}


export default Header
