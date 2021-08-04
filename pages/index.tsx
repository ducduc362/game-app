import React, { useState } from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

export default function Home() {
    const [user, setUser] = useState('a');
    return (
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
    )
}
