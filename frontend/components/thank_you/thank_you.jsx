import React from 'react'

export default class ReviewsIndex extends React.Component {

    render() {
        return (
            <div className="confirmation">
                <span>Your confirmation number is {Math.floor(Math.random() * 10000000000)}.
                </span>
                <span>Thank you for visiting my website!
                </span>
                <img className="cat-pic" src="https://media3.giphy.com/media/3oKIPnAiaMCws8nOsE/200w.gif?cid=82a1493bs454c55k9wm720pnqses7bkj6oke300wqdzxiqey&rid=200w.gif&ct=g" alt="" />
            </div >
        )
    }
}