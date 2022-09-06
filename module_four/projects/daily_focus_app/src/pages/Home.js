import React, { useState, useEffect } from "react";

export default function Home() {
    // NASA Astronomy Picture of the Day
    const [AstroPicture, setAstroPicture] = useState({
        title: "",
        explanation: "",
        url: ""
    });
    // Quote of the day
    const [QuoteOfTheDayElement, setQuoteOfTheDayElement] = useState("");

    useEffect(() => {
        
    })

    return (
        <div>
            <section className="introduction-section">
                <h3> Take a moment to focus yourself. </h3>
                <p> Hello there, and welcome to a space created for you! In every day, within every second of it, we can find ourselves swept away by the constant flood of information we're being fed; This can get overwhelming and eventually cause burnout where we lose our ability to continue. When I started this project, my intention was to create a place where I could keep up with my thoughts in a way that worked for me. I've always struggled with physically writing things down with any bit of consistency, but I find myself sitting down at a computer screen constantly throughout the day and typing things out isn't as much of an issue for my perfectionism. If you've found this little creation, or been led here by another, I hope or imagine that these things resonate with you. Take a moment to look around and see if it's for you too! </p>
            </section>
            <section className="astronomy-picture-section">
                <h3> {AstroPicture.title} </h3>
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img alt="NASA Astronomy Picture of the Day" src={AstroPicture.url}/>
                <p> {AstroPicture.explanation} </p>
            </section>
            <section className="quote-section">
                {QuoteOfTheDayElement}
            </section>
        </div>
    );
};