import React, {Component} from 'react'
export default class Services extends Component {
    render() {
        return (
            <section class="services">
                <div class="container">
                    <h2 class="heading">Services</h2>
                    <h3 class="subheading">Lorem ipsum sit dolor</h3>
                    <div class="services__list">
                        <div class="service">
                            <i class="fa fa-shopping-basket" />
                            <h4 class="service__name">E-commerce</h4>
                            <p class="service__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div class="service">
                            <i class="fa fa-laptop" />
                            <h4 class="service__name">Responsive web</h4>
                            <p class="service__text">Nullam nec dolor est. Sed eget lectus eros.</p>
                        </div>
                        <div class="service">
                            <i class="fa fa-lock" />
                            <h4 class="service__name">Web security</h4>
                            <p class="service__text">Vestibulum at urna eu arcu vulputate commodo id vel massa.</p>
                        </div>
                    </div>
                </div>
            </section>            
        )
    }
}