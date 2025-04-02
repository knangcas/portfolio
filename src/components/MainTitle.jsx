import './ComponentStyles.css'
import TitleText from "./TitleText.jsx";
import TitlePicture from "./TitlePicture.jsx";

export default function MainTitle() {
    return (
        <>
            <div>
                <div id="headerDiv">
                    <h1 className="headerTitle L">K E V I N &nbsp; N A N G C A S</h1>
                </div>
                <div id="titleContainer">
                    <TitlePicture/>
                    <TitleText/>
                </div>

            </div>

        </>

    )


}