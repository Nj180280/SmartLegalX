import React from "react"
import './Resources.css';

const Resources = (props) => {
    return (
        <>
            <div className="intro-section">
                <h1><b>Welcome to our Resources Page</b></h1>
                <p>Here you can find various resources related to legal documentation. Click on the accordions below to access specific resources.</p>
            </div>
            <div className="accord-pad">
                <div className="accordion " id="accordionPanelsStayOpenExample">
                    <div className="accordion-item ">
                        <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                            <button
                                className="accordion-button collapsed accordion-section"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseOne"
                                aria-expanded="false"
                                aria-controls="panelsStayOpen-collapseone"
                            >
                                <h3>
                                    <b>How to apply for Passport</b>
                                </h3>
                            </button>
                        </h2>
                        <div
                            id="panelsStayOpen-collapseOne"
                            className="accordion-collapse collapse"
                            aria-labelledby="panelsStayOpen-headingOne"
                        >
                            <div className="accordion-body">
                                <div>
                                    <h3>Step By Step Process for applying of passport</h3>
                                    <a href='https://www.godigit.com/passport/process/how-to-apply-for-passport' target="_blank">
                                        <h4><strong>Follow this link</strong></h4>
                                    </a>
                                    <br />
                                    <iframe
                                        width={1000}
                                        height={500}
                                        src="https://www.youtube.com/embed/yfsj8NZy6Z8?si=CWyiC3C4lRVZLLyW"
                                        title="YouTube video player"
                                        frameBorder={0}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                            <button
                                className="accordion-button collapsed accordion-section"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseTwo"
                                aria-expanded="false"
                                aria-controls="panelsStayOpen-collapseTwo"
                            >
                                <h3>
                                    <b>How to apply for Aadhar Card</b>
                                </h3>
                            </button>
                        </h2>
                        <div
                            id="panelsStayOpen-collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="panelsStayOpen-headingTwo"
                        >
                            <div className="accordion-body">
                                <h3>Step By Step Process for applying of aadhar card</h3>
                                <a href='https://groww.in/blog/how-to-apply-for-new-aadhar-card-online' target="_blank">
                                    <h4><strong>Follow this link</strong></h4>
                                </a>
                                <br />
                                <iframe
                                    width={1000}
                                    height={500}
                                    src="https://www.youtube.com/embed/wMFysg_wBvc?si=L6qqly4PiExhjlOg"
                                    title="YouTube video player"
                                    frameBorder={0}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen=""
                                />

                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                            <button
                                className="accordion-button collapsed accordion-section"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseThree"
                                aria-expanded="false"
                                aria-controls="panelsStayOpen-collapseThree"
                            >
                                <h3>
                                    <b>How to apply for Voter Id</b>
                                </h3>
                            </button>
                        </h2>
                        <div
                            id="panelsStayOpen-collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="panelsStayOpen-headingThree"
                        >
                            <div className="accordion-body">
                                <h3>Step By Step Process for applying for Voter Id</h3>
                                <a href='https://www.godigit.com/voter-id-card/how-to-apply-for-voter-id-card-in-maharashtra' target="_blank">
                                    <h4><strong>Follow this link</strong></h4>
                                </a>
                                <br />
                                <iframe
                                    width={1000}
                                    height={500}
                                    src="https://www.youtube.com/embed/5e42sBwq10I?si=bS8iOzaZfC08NTWY"
                                    title="YouTube video player"
                                    frameBorder={0}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen=""
                                />

                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                            <button
                                className="accordion-button collapsed accordion-section"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseFour"
                                aria-expanded="false"
                                aria-controls="panelsStayOpen-collapseFour"
                            >
                                <h3>
                                    <b>How to apply for Pan Card</b>
                                </h3>
                            </button>
                        </h2>
                        <div
                            id="panelsStayOpen-collapseFour"
                            className="accordion-collapse collapse"
                            aria-labelledby="panelsStayOpen-headingFour"
                        >
                            <div className="accordion-body">
                                <h3>Step By Step Process for applying for Pan Card</h3>
                                <a href='https://paytm.com/blog/pan-card/how-to-apply-for-a-pan-card/' target="_blank">
                                    <h4><strong>Follow this link</strong></h4>
                                </a>
                                <br />
                                <iframe
                                    width={1000}
                                    height={500}
                                    src="https://www.youtube.com/embed/UV0L9jKYhRg?si=ENxzQSeIKWI39R9C"
                                    title="YouTube video player"
                                    frameBorder={0}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen=""
                                />

                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingFive">
                            <button
                                className="accordion-button collapsed accordion-section"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseFive"
                                aria-expanded="false"
                                aria-controls="panelsStayOpen-collapseFive"
                            >
                                <h3>
                                    <b>How to apply for Driving License</b>
                                </h3>
                            </button>
                        </h2>
                        <div
                            id="panelsStayOpen-collapseFive"
                            className="accordion-collapse collapse"
                            aria-labelledby="panelsStayOpen-headingFive"
                        >
                            <div className="accordion-body">
                                <h3>Step By Step Process for applying for Driving License</h3>
                                <a href='https://www.acko.com/driving-licence/driving-licence-in-mumbai/' target="_blank">
                                    <h4><strong>Follow this link</strong></h4>
                                </a>
                                <br />
                                <iframe
                                    width={1000}
                                    height={500}
                                    src="https://www.youtube.com/embed/H9f4CivrTVs?si=HdmibdG3irw1tYHp"
                                    title="YouTube video player"
                                    frameBorder={0}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen=""
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Resources;
