import React from "react";
import author from "../me.jpg";

const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                    <img className="profile-img" src={author} alt="author..."/>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About Me</h1>
                    <p>I am a very enthusiastic person with everything that smells of analysis, programming and always feel challenged to work on new projects of web or mobile based application creation. I have previously spent becoming a teaching assistant or laboratory assistant for two academic year.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
