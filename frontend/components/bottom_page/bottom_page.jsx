import React from 'react'

export default class BottomPage extends React.Component {

    render() {
        return (
            <div className="what-is-medsy">
                <h1>What is Medsy?</h1>
                <div className="what-answer-container">
                    <div className="what-answer">
                        <b>A community doing good</b>
                        <br />
                        Etsy is a global online marketplace,
                        where people come together to make,
                        buy medications. We're also a community
                        pushing for positive change for small
                        businesses, people, and the planet.
                    </div>
                    <div className="what-answer">
                        <b>Support independent businesses</b>
                        <br />
                        There's no Medsy warehouse - just tens
                        of people selling the things they love.
                        We make the whole process easy, helping
                        you connect directly with makers to find
                        something extraordinary.
                    </div>
                    <div className="what-answer">
                        <b>Peace of mind</b>
                        <br />
                        Your privacy is the highest priority of
                        our dedicated team. And if you ever need
                        assistance, we are always ready to step
                        in for support.
                    </div>
                </div>
            </div>
        )
    };
}