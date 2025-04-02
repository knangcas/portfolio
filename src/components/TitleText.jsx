import './ComponentStyles.css'
import SvgLinks from "./SvgLinks.jsx";

export default function TitleText() {

    return (
        <>
            <div className="titleTextContainer">
                <h1 className="titleText">Hi, I'm Kevin.</h1>
                <p className="subTitle">Full Stack Developer</p>
                <p className="subTextI">B.S. Software Engineering <br/>
                Arizona State University<br/>
                4.00 GPA - Class of 2025<br/>
                </p>
                <SvgLinks/>
            </div>
        </>




    )
}