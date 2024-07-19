import React from 'react'
import './Home.css'
import Form from '../../components/form/Form'
import List from '../../components/list/List'

const Home = () => {
    return (
        <div>
            <div className='app'>
                <List />
                <Form />
            </div>
        </div>
    )
}

export default Home