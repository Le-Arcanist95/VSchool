import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
    // NASA Astronomy Picture of the Day
    const [AstroPicture, setAstroPicture] = useState({
        title: "",
        explanation: "",
        url: "",
        copyright: ""
    });
    // Quote of the day
    const [QuoteOfTheDay, setQuoteOfTheDay] = useState({
        quote: "",
        author: "",
        backgroundImg: "",
        title: ""
    });
    
    //useEffect for Axios requests
    useEffect(() => {
        const fetchData = async () => {
            const endpoints = [
                'https://api.nasa.gov/planetary/apod?api_key=YQVratHzp85sqeL2JyuCAMOXJFVhUuXaBLoIvSco',
                'https://quotes.rest/qod'
            ]
            axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
                .then(
                    axios.spread(({data: apod}, {data: qod}) => {
                        const astroPicture = apod;
                        const quoteData = qod.contents.quotes[0]
                        
                        setAstroPicture({
                            title: astroPicture.title,
                            explanation: astroPicture.explanation,
                            url: astroPicture.hdurl,
                            copyright: astroPicture.copyright
                        })
                        setQuoteOfTheDay({
                            quote: quoteData.quote,
                            author: quoteData.author,
                            backgroundImg: quoteData.background,
                            title: quoteData.title
                        })
                    })
                );
        };
        

        fetchData();
    }, [])
    
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
                <img alt="" src={QuoteOfTheDay.backgroundImg}/>
                <p className="overlay-quote">{QuoteOfTheDay.quote} - <em>{QuoteOfTheDay.author}</em></p>
                <span className="overlay-credit" style={{zIndex: 50, fontSize: "0.9em", fontWeight: "bold"}}>
                    <img src="https://theysaidso.com/branding/theysaidso.png" height="20" width="20" alt="theysaidso.com"/>
                    <a href="https://theysaidso.com" title="Powered by quotes from theysaidso.com" style={{color: "#ccc", marginLeft: "4px", verticalAlign: "middle"}}>
                        They Said So®
                    </a>
                </span>
            </section>
        </div>
    );
};