import React, { Component } from 'react'
import Header from './Header'
import { Route } from 'react-router-dom'
import cart from '../routes/cart'
import ProductList from '../routes/productList'
import { NotificationContainer } from 'react-notifications'
import 'react-notifications/lib/notifications.css'

export default class App extends Component {
    componentWillMount() {
        document.body.style.margin = 0
    }
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <NotificationContainer />
                <Header />
                <Route exact path='/' component={ProductList} />
                <Route path='/cart' component={cart} />
            </div>
        )
    }
}
