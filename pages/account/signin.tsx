import { Form, Button, Input } from 'antd'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
import axiosInstance from '../../client'

const Container = styled.div`
    margin: 0 auto;
    max-width: 480px;
    text-align: center;
`

const Content = styled.div`
    border-radius: 6px;
    box-shadow: 0 2px 10px rgb(0 0 0 / 45%);
    padding: 16px;
    @media only screen and (max-width: 400px) {
        box-shadow: none;
    }
`

const FacebookButton = styled(Button)`
    width: 80%;
    background-color: #3b5998;
    border-radius: 0.25rem;
    height: 40px;
    font-size: 1rem;
    margin-top: 15px;
`

const GoogleButton = styled(Button)`
    width: 80%;
    background-color: #4285f4;
    border-radius: 0.25rem;
    height: 40px;
    font-size: 1rem;
    margin: 15px 0;
`

const layout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

const SignUp = () => {
    const router = useRouter();

    async function LogIn(values: object) {
        try {
            const response = await axiosInstance.post('/auth/signin', { ...values });
            console.log(response, 'test');
            localStorage.setItem('access_token', response.data.access_token)
            router.push('/account/profile');
        } catch (error) {
            console.error(error, 'error');
        }
    }

    useEffect(() => {
        const accessToken = localStorage.getItem('access_token');
        console.log(accessToken, 'check');
        if (accessToken) {
            router.push('/')
        }
    }, [router])

    return (
        <Container>
            <h1>Logo</h1>
            <Content>
                <h1 style={{
                    color: '#525252',
                    fontSize: '23px',
                    margin: '16px', textAlign: 'center'
                }} >Đăng nhập tài khoản</h1>
                <div style={{ borderTop: ' 1px solid #eee', width: '100%' }}>
                    <FacebookButton type="primary">Đăng nhập bằng Facebook</FacebookButton>
                    <GoogleButton type="primary">Đăng nhập bằng Google</GoogleButton>
                </div>
                <div style={{ borderTop: ' 1px solid #eee', width: '100%', paddingTop: '16px' }}>
                    <p style={{ textAlign: 'left' }}>Đăng nhập tài khoản</p>
                    <Form {...layout} name="nest-messages" onFinish={LogIn} validateMessages={validateMessages}>
                        <Form.Item name='email' label="Email" rules={[{ required: true, type: 'email' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Mật khẩu"
                            name='password'
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item wrapperCol={{ ...layout.wrapperCol }}>
                            <Button type="primary" htmlType="submit" danger>
                                Đăng nhập
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
                <div style={{ borderTop: ' 1px solid #eee', width: '100%', fontSize: '16px', padding: '16px 0' }} >
                    <p>Chưa có tài khoản <Link href="/account/signup">Đăng ký</Link></p>
                </div>
            </Content>
        </Container>
    )
}

export default SignUp
