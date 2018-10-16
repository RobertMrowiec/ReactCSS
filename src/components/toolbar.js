import React, {Component} from "react";
import logo from '../logo.png'
import {Link} from 'react-router-dom'

export default class Toolbar extends Component {
    render() {
        return (
            <header class="page-header">
                <div class="container">
                    <img alt= {true} src={logo} class='titleIcon'/>
                    <nav>
                        <ul class='ulTop'>
                            <li><Link to='/'> Home </Link></li>
                            <li><Link to='/services'> Services </Link></li>
                            <li><Link to='/portfolio'> Portfolio </Link></li>
                            <li> <Link to='/team'> Team </Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}