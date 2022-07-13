import React from "react";

export function Calculator() {
    return (
        <>
            <div className="page-intro">
                <div className="intro-text">
                    <h1>Lets start</h1>
                    <h3>Calculate your project</h3>
                </div>
            </div>
            <div className="calculator">
                <div className="wrapper">
                    <div className="calculator-container">
                        <div className="first-step">
                            <div className="step-info">
                                <div className="step-info__header">
                                    <h1>Choose</h1>
                                    <h3>type:</h3>
                                </div>
                                <div className="step-info__text">
                                    <p></p>
                                </div>
                            </div>
                            <div className="step-data">
                                <div className=""></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}