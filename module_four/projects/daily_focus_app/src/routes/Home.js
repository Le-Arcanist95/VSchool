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
        <div className="content-container">
            <div className="introduction section">
                <h3 className="section-title"> Are you focused today? </h3>
                <hr/>
                <p> Hello there! Welcome to a space created for you. In the day to day, within each and every second of them, we can find ourselves swept away by the constant flood of information we're being fed; This can get overwhelming and eventually cause burnout where we lose our ability to continue. When I started this project, my intention was to create a place where I could keep up with my thoughts in a way that worked for me. I've always struggled with physically writing things down consistently because I have to look for the pencil and pad, writing left-handed I will sometimes smear the ink or graphite, or I'll fill up a notebook and 'Dratz!' I've got to go out and buy another. I am aware these are minimal concerns, but ease is important when the task seems daunting! Although, I find myself sitting down at a computer screen constantly throughout the day and typing things out isn't as much of an issue for my perfectionism. It's worked for me so far. If you've found this little creation, or been led here by another, I imagine that these things may resonate with you. Will you take a moment to look around and give it a go as well? </p>
            </div>
            <div className="astronomy-pod section">
                <h3 className="section-title">
                    <b>Astronomy Picture of the Day: </b>
                    <br/>
                    {AstroPicture.title}
                </h3>
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img alt="NASA Astronomy Picture of the Day" src={AstroPicture.url}/>
                <hr/>
                <p> <b>Explanation: </b> {AstroPicture.explanation} </p>
            </div>
            <div className="inspirational section">
                <img alt="" src={QuoteOfTheDay.backgroundImg}/>
                <p className="overlay-quote">{QuoteOfTheDay.quote} - <em>{QuoteOfTheDay.author}</em></p>
                <span className="overlay-credit" style={{zIndex: 50, fontSize: "0.9em", fontWeight: "bold"}}>
                    <img src="https://theysaidso.com/branding/theysaidso.png" height="20" width="20" alt="theysaidso.com"/>
                    <a href="https://theysaidso.com" title="Powered by quotes from theysaidso.com" style={{color: "#ccc", marginLeft: "4px", verticalAlign: "middle"}}>
                        They Said So®
                    </a>
                </span>
            </div>
        </div>
    );
};