import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assests/logos/b_logo.png'
import cart from '../assests/logos/shopping.png'
import styles from './styles'

export default class Header extends Component {
    render() {
        return (
            <div style={styles.header}>
                <div style={{ padding: 20 }}>
                    <NavLink to="/">
                        <img src={logo} height='50' alt="Logo" />
                    </NavLink>
                </div>
                <div style={{ padding: 20 }}>
                    <NavLink to="/cart">
                        <img src={cart} width='50' height='50' alt="Logo" />
                    </NavLink>
                </div>
            </div>
        )
    }
}
