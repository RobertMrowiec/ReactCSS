import React, {Component} from 'react';
import '../App.scss';

export default class Welcome extends Component {
    render() {
        return (
            <div class="hero">
                <div class="container">
                    <h1 class='welcomeH1'>Welcome to my small studio</h1>
                    <h2 class='typewrite'>It's nice to meet You...</h2>
                </div>
            </div>
        )
    }
}