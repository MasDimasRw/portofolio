import React from "react";

function ProfessionalExperiences() {
    return (
        <div className="professionalexperiences">
            <div className="d-flex justify-content-center my-5">
                <h1><b>Professional Experiences</b></h1>
            </div>
            <div className="container professionalexperiences-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>September 2018 - December 2020</h3>
                        <h4>LABORATORY ASSISTANT | University of Mercu Buana</h4>
                        <p>Helping lecturers in teaching programming courses, namely Programming C++, WEB (HTML, CSS, PHP, CODEIGNITER), NETWORKING (CCNA/CISCO), and PL/SQL (ORACLE)</p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>August – October 2020</h3>
                        <h4>INTERNSHIP | PUSINFOLAHTA MABES TNI</h4>
                        <p>Create an android-based application RANDIS (Vehicle Service). Create a UML (Unified Modeling Language) Use Case Diagram, Use Case Description, Activity Diagram, Sequence Diagram , Class Diagram, and Database Design. Create a mockup or UI (User Interface)</p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>February – April 2016</h3>
                        <h4>INTERNSHIP | PT Citra Van Titipan Kilat</h4>
                        <p>Managing BTTKB (Proof of Receipt of Shipment). Filter BTTKB according to sender name.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfessionalExperiences
