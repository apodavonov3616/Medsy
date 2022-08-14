import React from 'react'

export default class BottomPage extends React.Component {

    render() {
        return (
            <div>
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
                            <b>Peace of mind for everyone</b>

                            <br />
                            Your privacy is the highest priority of
                            our dedicated team. And if you ever need
                            assistance, we are always ready to step
                            in for support.
                        </div>
                    </div>
                    <div>
                        Have a question? Well, we've got some answers.
                        <button>
                            <a target="_blank" href="https://alisher-podavonov.com/">Go to Help Center</a>
                        </button>
                    </div>
                </div>
                <div className="blue-box">
                    <div className="blue-box-items">
                        <b>
                            Technologies
                        </b>
                        <span>React</span>
                        <span>Redux</span>
                        <span>Ruby on Rails</span>
                        <span>PostgreSQL</span>
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>AWS S3</span>
                    </div>
                    <div className="blue-box-items">
                        <b>
                            About Me
                        </b>
                        <span className="about-me">Aside from coding,
                            I like to do powerlifting and
                            read about sports nutrition. I'm also
                            rather solid at chess!
                        </span>
                    </div>
                    <div className="blue-box-items">
                        <b>
                            Projects
                        </b>
                        <a target="_blank" className="project-link" href="https://apodavonov3616.github.io/powerlifting-visualizer/">Powerlifting Visualizer</a>
                        <a target="_blank" className="project-link" href="https://funfinderapp.herokuapp.com/#/">Fun Finder</a>
                        <a target="_blank" className="project-link" href="http://medsy.herokuapp.com/#/">Medsy</a>
                    </div>
                    <div className="blue-box-items">
                        <b>
                            Contacts
                        </b>
                        <a target="_blank" className="project-link" href="https://alisher-podavonov.com/">Portfolio</a>
                        <a target="_blank" className="project-link" href="https://www.linkedin.com/in/alisher-podavonov-80b85a23b/">LinkedIn</a>
                        <a target="_blank" className="project-link" href="https://github.com/apodavonov3616">Github</a>
                    </div>
                </div>
                <div className="dark-footer-box">

                </div>
            </div>
        )
    };
}