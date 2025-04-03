import './ComponentStyles.css'
import TitleText from "./TitleText.jsx";
import TitlePicture from "./TitlePicture.jsx";

export default function MainTitle() {
    return (
        <>

                <div id="headerDiv">
                    <h1 className="headerTitle L">K E V I N &nbsp; N A N G C A S</h1>
                </div>
                <div id="titleContainer">
                    <TitlePicture/>
                    <TitleText/>
                </div>

                <div className="bodyContainerItem">
                    <h1 className="titleText2">A B O U T</h1>
                    <div className="subTextI">My name is Kevin Nangcas. I am a proud graduate of Arizona State University with a 4.0 GPA in the Software Engineering program.
                        Throughout my academic journey, I have come to enjoy the process of learning and problem-solving in this vast field of software development.
                        There is a tool for almost any problem out there, and I am always excited for the opportunity to add to my toolbox to bolster my problem-solving skills.
                        Not only has ASU given me the means to learn some of tools, but I have also picked up some tools of my own along the way.
                        Some of which include...

                        <div className="bodyContainer">
                            <div className="bodyContainerItem">
                                <li>C</li>
                                <li>C#</li>
                                <li>CSS</li>
                                <li>Docker</li>
                                <li>HTML</li>
                                <li>Git/Github</li>
                                <li>Java</li>
                                <li>JavaFX</li>

                            </div>
                            <div className="bodyContainerItem">

                                <li>Java SpringBoot</li>
                                <li>Javascript</li>
                                <li>MongoDB</li>
                                <li>MySQL</li>
                                <li>Python (Pandas)</li>
                                <li>React</li>
                                <li>ReactNative</li>
                                <li>VueJS</li>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="bodyContainerItem">
                    <h1 className="titleText2">P R O J E C T S</h1>
                    <div className="subTextI">
                        <p className="subSubText">PSYCHE SCRAPER</p>
                        <p className="subSubTextI">
                            Psyche Scraper is a university capstone project that spanned two semesters (Fall 2024-Spring 2025)
                            sponsored by <a target="_blank" href="https://psyche.asu.edu/get-involved/capstone-projects/">NASA PSYCHE</a>.
                            The goal of this project was to create a Virtual Reality experience which would be demonstrated at NASA PSYCHE events in order to
                            increase awareness of the <a target="_blank" href="https://psyche.asu.edu/">mission to Psyche</a>
                        </p>





                    </div>
                </div>





        </>

    )


}