import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAndroid, faSearchengin} from "@fortawesome/free-brands-svg-icons";
import { faFileCode } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
    return (
        <div className="skills">
            <h1 className="py-5">My Skills</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>
                                <h3>Web Development</h3>
                                <p>Create a website, namely the front end and back end. Front end using ReactJS and Back end using CodeIgniter. CSS/HTML, ReactJs, PHP, Javascript
</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faAndroid} size="2x" /></div>
                                <h3>Android Development</h3>
                                <p>Creating an Android-based application, using Android Studio software, Firebase Database, and Java Language</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faSearchengin} size="2x" /></div>
                                <h3>Analysis</h3>
                                <p>Waterfall Model & The Unified Modeling Language (UML)</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Skills
