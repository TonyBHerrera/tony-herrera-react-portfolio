import React from 'react'
import profilePicture from "../../../static/assets/images/bio/scarecrow.jpg"

export default function () {
    return (
        <div className="content-page-wrapper">
            <div className="left-column"
                style={{
                    background: "url(" + profilePicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            />


            <div className="right-column">
                The test is not a complex one: when the alarm goes off,
                do you get up out of bed, or do you lie there in comfort and fall back to sleep?
                If you have the discipline to get out of bed, you win—you pass the test.
                If you are mentally weak for that moment and you let that weakness keep you in bed, you fail.
                Though it seems small, that weakness translates to more significant decisions.
                But if you exercise discipline, that too translates to more substantial elements of your life.
            </div>
        </div>
    )
}