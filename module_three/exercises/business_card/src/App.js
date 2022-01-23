import React from "react";
import Profile from "./assets/components/Profile";
import About from "./assets/components/About";
// import Interests from "./components/Interests";
// import Footer from "./components/Footer";
import Img from "./assets/images/pickle_rick.jpg";

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            profile: {
                profileImg: Img,
                name: "Pickle Rick",
                jobTitle: "Mad Scientist",
                email: "imPickleRick@mortySucks.org",
            },
            about: "Megagenius scientist whose alcoholism and reckless, nihilistic behavior are sources of concern for his daughter's family, as well as the safety of their son, Morty.",
            interests: ["Spending time with Morty", "Creating new inventions", "Being a genius"]
        };
    };

    render() {
        const primaryStyle = {
            position: "absolute",
            width: "550px",
            height: "868px",
            left: "664px",
            top: "53px",
            background: "#23252C",
            margin: "0px",
            padding: "0px"
        };
        const secondaryStyle = {
            position: "absolute",
            left: "116px",
            top: "44px",
            height: "780px",
            width: "317px",
            margin: "0px",
            padding: "0px"
        };

        return (
            <div style={primaryStyle}>
                <div style={secondaryStyle}>
                    <Profile content={this.state.profile}/>
                    <About content={this.state.about}/>
                    {/* <Interests props={this.state.interests}/>
                    <Footer /> */}
                </div>
            </div>
        );
    };
};

export default App;