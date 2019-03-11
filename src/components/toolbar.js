import React, {Component} from "react";
import logo from '../logo.png'

export default class Toolbar extends Component {
    render() {
        return (
            <header class="page-header">
                <div class="container">
                    <div className='mobileToolbar mobileToolbarLeft'>
                        <img alt= {true} src={logo} class='titleIcon'/>
                    </div>
                    
                    <div className='mobileToolbar mobileToolbarRight'>
                        <ul class='ulTop'>
                            <li><a href='#home'> Home </a></li>
                            <li><a href='#services'> Services </a></li>
                            <li><a href='#portfolio'> Portfolio </a></li>
                            <li style={{margin: 0}}><a href='#team'> Team </a></li>
                        </ul>
                    </div>
                </div>
            </header>
        )
    }
}