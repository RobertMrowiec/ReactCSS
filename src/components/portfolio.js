import React, {Component} from 'react'

export default class Portfolio extends Component {
    constructor(props) {
        super(props)
        this.portfolioRef = React.createRef()
    }
    render() {
        return (
            <section class="portfolio">
                <div class="container">
                    <h2 class="heading">Our portfolio</h2>
                    <h3 class="subheading">Lorem ipsum sit dolor</h3>
                    <div class="portfolio-list">
                        <div class="portfolio__item">
                            <img src="https://www.placecage.com/150/150" alt="" class="portfolio__cover"/>
                            <div class="portfolio__title">Ebony & Ivory</div>
                            <div class="portfolio__category">Branding</div>
                        </div>
                        <div class="portfolio__item">
                            <img src="https://www.placecage.com/c/150/150" alt="" class="portfolio__cover"/>
                            <div class="portfolio__title">Smart Stationary</div>
                            <div class="portfolio__category">Print design</div>
                        </div>
                        <div class="portfolio__item">
                            <img src="https://www.placecage.com/g/150/150" alt="" class="portfolio__cover"/>
                            <div class="portfolio__title">Clever Poster</div>
                            <div class="portfolio__category">Print Design</div>
                        </div>
                        <div class="portfolio__item">
                            <img src="https://www.placecage.com/c/150/150" alt="" class="portfolio__cover"/>
                            <div class="portfolio__title">Vinyl Record</div>
                            <div class="portfolio__category">Product Mock-up</div>
                        </div>
                        <div class="portfolio__item">
                            <img src="https://www.placecage.com/150/150" alt="" class="portfolio__cover"/>
                            <div class="portfolio__title">Treehouse Template</div>
                            <div class="portfolio__category">Web Design</div>
                        </div>
                        <div class="portfolio__item">
                            <img src="https://www.placecage.com/g/150/150" alt="" class="portfolio__cover"/>
                            <div class="portfolio__title">Burned Logo</div>
                            <div class="portfolio__category">Branding</div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}