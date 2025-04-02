import './ComponentStyles.css'
import TitleText from "./TitleText.jsx";
import TitlePicture from "./TitlePicture.jsx";

export default function MainTitle() {
    return (
        <>
            <div>
                <div>
                    <h1 id="headerTitle">K E V I N &nbsp; N A N G C A S</h1>
                </div>
                <div id="titleContainer">

                    <TitlePicture/>
                    <TitleText/>
                </div>

            </div>

        </>

    )


}