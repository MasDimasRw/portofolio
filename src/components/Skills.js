import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAndroid, faSearchengin} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faFileCode } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
    return (
        <div className="skills">
            <h1 className="py-5"><b>My Skills</b></h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>
                                <h3>Website</h3>
                                <p>Create a website, namely the front end and back end. Front end using ReactJS and Back end using CodeIgniter. CSS/HTML, ReactJs, PHP, Javascript</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faDatabase} size="2x" /></div>
                                <h3>Database</h3>
                                <p>Mysql, Microsoft SQL Server, SQLite, Firebase Database, PL/SQL</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faAndroid} size="2x" /></div>
                                <h3>Android</h3>
                                <p>Creating an Android-based application, using Android Studio software, Firebase Database, and Java Language</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
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
