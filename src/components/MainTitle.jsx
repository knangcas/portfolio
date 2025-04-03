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
                                <li>HTML*</li>
                                <li>Git/Github</li>
                                <li>Java*</li>
                                <li>JavaFX*</li>
                                <li>Java SpringBoot</li>

                            </div>
                            <div className="bodyContainerItem">


                                <li>Javascript*</li>
                                <li>MongoDB*</li>
                                <li>MySQL*</li>
                                <li>Python (Pandas)</li>
                                <li>R</li>
                                <li>React</li>
                                <li>ReactNative</li>
                                <li>Visual Basic</li>
                                <li>VueJS</li>
                            </div>
                        </div>

                        <p style={{fontSize: "0.9em", textAlign:"right"}}>*indicates high proficiency</p>

                    </div>
                </div>
            <div className="bodyContainerItem">
                <h1 className="titleText2">P R O J E C T S</h1>
                <div className="subTextI">
                    <p className="subSubText">PSYCHE SCRAPER</p>
                    <p className="subSubTextI">
                        &nbsp;&nbsp;&nbsp;&nbsp; Psyche Scraper is a university capstone project that spanned two
                        semesters (Fall 2024-Spring
                        2025)
                        sponsored by <a target="_blank"
                                        href="https://psyche.asu.edu/get-involved/capstone-projects/">NASA
                        PSYCHE</a>.
                        The goal of this project was to create a Virtual Reality experience which would be
                        demonstrated at NASA PSYCHE events in order to
                        increase awareness of the <a target="_blank" href="https://psyche.asu.edu/">mission to
                        Psyche</a>. My team and I utilized the
                        <strong> AGILE SCRUM </strong> Software Development Lifecycle, developing the software
                        in <strong>UNITY</strong> over several iterations. This
                        project also involved composing high quality documents such as a project plan, quality plan,
                        and testing plan.
                        <br/>
                        <br/>
                        maybe 1 or 2 screenshots, then link to the repo? (it's private though).
                    </p>

                    <br/>
                </div>
                <div className="subTextI">
                    <p className="subSubText">FlashCardsFX</p>
                    <p className="subSubTextI">
                        &nbsp;&nbsp;&nbsp;&nbsp; FlashCards is a personal project first implemented in <strong>Java
                        using JavaFX</strong> making
                        use of a <strong>MySQL database</strong> and linking to Java
                        with a JDBC Driver. It also includes an "offline" mode which makes use of a JSON file to save
                        data locally.

                        maybe 1 or 2 screenshots, then link to the repo? (it's private though).
                    </p>


                </div>
                <div className="subTextI">
                    <p className="subSubText">FlashCards SPA</p>
                    <p className="subSubTextI">
                        &nbsp;&nbsp;&nbsp;&nbsp; FlashCards SPA is a web-app version of FlashCardsFX
                        It was implemented as a web-application using <strong>javascript/html/css</strong> before
                        being re-implemented
                        as a single page application using <strong>React</strong>.
                        This web-app utilizes a <strong>RESTful API</strong> using <strong>Java
                        Springboot</strong> for the back-end technology.
                        <br/>


                        maybe 1 or 2 screenshots, then link to the repo? (it's private though).
                    </p>


                </div>

                <div className="subTextI">
                    <p className="subSubText">FlashCards ReactNative</p>
                    <p className="subSubTextI">
                        &nbsp;&nbsp;&nbsp;&nbsp; FlashCards ReactNative is a mobile-app version of FlashCardsFX.
                        Implemented using <strong>ReactNative using Expo</strong>, the aim of this project was to learn
                        about mobile-app
                        development. This app also uses the same <strong>RESTful API</strong> from FlashCards SPA.
                        This project is still currently in progress.


                        maybe 1 or 2 screenshots, then link to the repo? (it's private though).
                    </p>


                </div>

                <div className="subTextI">
                    <p className="subSubText">ConnectFourFX</p>
                    <p className="subSubTextI">
                        &nbsp;&nbsp;&nbsp;&nbsp; ConnectFourFX is a implementation of the popular game "ConnectFour" in
                        <strong>Java using JavaFX</strong> Utilizing the scene builder tool in JavaFX, a recreation of
                        the board from Connect Four was created.


                        maybe 1 or 2 screenshots, then link to the repo? (it's private though).
                    </p>
                </div>

                <div className="subTextI">
                    <p className="subSubText">JeopardyVue</p>
                    <p className="subSubTextI">
                        &nbsp;&nbsp;&nbsp;&nbsp; JeopardyVue was a class project from the class "web-based applications" taken at
                        Arizona State University. In this project, a recreation of the Jeopardy game was created using the options API of the
                        <strong>VueJS framework</strong>. This involved making api calls using the fetch API to a trivia database for the questions/answers,
                        as well as making a dynamic application that allowed for a variable amount of players and categories.


                        maybe 1 or 2 screenshots, then link to the repo? (it's private though).
                    </p>
                </div>
            </div>


        </>

    )


}