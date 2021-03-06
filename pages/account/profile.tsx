import React, { useEffect } from 'react'
import { Col, Input, Form, Row, Button, Upload, DatePicker } from 'antd'
import styled from 'styled-components'
import Image from 'next/image';
import { UploadOutlined } from '@ant-design/icons';
import Footer from '../components/Footer';
import Header from '../components/Header';
import profilePic from '../../public/logo-game.jpg'
import axiosInstance from '../../client';

const ProfileRow = styled(Row)`
  max-width: 1280px;
  margin: 0 auto;
  padding: 16px;
  align-items: center;
  background-color: blue;
  height: 70vh;
    @media only screen and (max-width: 600px) {
        background-color: #fff;
        height: auto;
    }
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

const ChangeProfile = (values: object) => {
    console.log(values);
}

// const normFile = (e: any) => {
//     console.log('Upload event:', e);
//     if (Array.isArray(e)) {
//         return e;
//     }
//     return e && e.fileList;
// };


const Profile = () => {
    useEffect(() => {
        const accessToken = localStorage.getItem('access_token');
        console.log(accessToken, 'check');

        const getData = async () => {
            const data = await axiosInstance.post('graphql', {
                query: `
                    query{
                        profile{
                        id,
                        name,
                        }
                    }
               `,
            }, {
                headers: {
                    'access_token': `Bearer ${accessToken}`
                }
            })
            console.log(data, 'abc');
        }
        getData();
    }, [])

    return (
        <div>
            <Header />
            <ProfileRow >
                <Col>
                    <h2>T??n ????ng nh???p</h2>
                    <Image src={profilePic} alt="Image of user" id="logo" width={75} height={75} />
                    <Form {...layout} name="nest-messages" onFinish={ChangeProfile} validateMessages={validateMessages}>
                        {/* <Form.Item
                            name="upload"
                            label="Upload"
                            valuePropName="fileList"
                            getValueFromEvent={normFile}
                        >
                            <Upload name="logo" action="/upload.do" listType="picture" >
                                <Button icon={<UploadOutlined />}>
                                    Thay ???nh ?????i di???n
                                </Button>
                            </Upload>
                        </Form.Item> */}
                        <Form.Item
                            name="url_avatar"
                            label="S??? d???ng URL ????? l??m ???nh ?????i di???n"
                            rules={[{ whitespace: true }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="nickname"
                            label="T??n hi???n th???"
                            tooltip="What do you want others to call you?"
                            rules={[{ whitespace: true }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Ng??y sinh"
                            name="dob"
                        >
                            <DatePicker />
                        </Form.Item>
                        <Form.Item
                            name="address"
                            label="?????a ch???"
                            rules={[{ whitespace: true }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item wrapperCol={{ ...layout.wrapperCol }}>
                            <Button type="primary" htmlType="submit">
                                L??u th??ng tin
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </ProfileRow>
            <Footer />
        </div>
    )
}

export default Profile
