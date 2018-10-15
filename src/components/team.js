import React, { Component } from 'react';

export default class Team extends Component {
    render() {
        return (
            <section class="team">
                <div class="container">
                    <h2 class="heading">Our amazing team</h2>
                    <h3 class="subheading">Lorem ipsum sit dolor</h3>
                    <div class="team-list">
                        <div class="team__member">
                            <img src="https://www.placecage.com/100/100" alt=""/>
                            <p class="team__name">Kimberly Thompson</p>
                            <p class="team_position">Marketer</p>
                            <div class="social-icons">
                            <i class="fa fa-twitter"></i>
                            <i class="fa fa-facebook"></i>
                            <i class="fa fa-pinterest"></i>
                            </div>
                        </div>
                        <div class="team__member">
                            <img src="https://www.placecage.com/g/100/100" alt=""/>
                            <p class="team__name">Ricco Massimo</p>
                            <p class="team_position">Coder</p>
                            <div class="social-icons">
                            <i class="fa fa-twitter"></i>
                            <i class="fa fa-facebook"></i>
                            <i class="fa fa-google-plus"></i>
                            </div>
                        </div>
                        <div class="team__member">
                            <img src="https://www.placecage.com/c/100/100" alt=""/>
                            <p class="team__name">Uku Mason</p>
                            <p class="team_position">Graphic Designer</p>
                            <div class="social-icons">
                            <i class="fa fa-twitter"></i>
                            <i class="fa fa-pinterest"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
