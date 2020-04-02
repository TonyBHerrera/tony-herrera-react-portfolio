import React, { Component } from "react";

import PortfolioItem from "./portfolio-item"

export default class PortfolioContainer extends Component {
    constructor() {
        super()

        console.log("portfolio container has rendered")
    }

    portfolioItems() {
        const data = ["Quip", "Eventbright", "Ministry Safe", "Swing Away"];

        return data.map(item => {
            return <PortfolioItem />
        })
    }

    render() {
        return (
            <div>
                <h2>Portfolio items go here...</h2>

                {this.portfolioItems()}
            </div>
        )
    }
}