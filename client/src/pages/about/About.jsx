import "./about.css"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import about from "../../images/aboutUsPage.png"
import { Link } from "react-router-dom"
import idea from "../../images/idea 1.png"
import group from "../../images/group 1.png"
import question from "../../images/question 1.png"
import Member from "../../components/member/Member"
import ashChampion from "../../images/ashChampion.jpeg"

export default function About() {
    return (
        <>
            <Navbar />
                <div className="aboutWrapper">
                    <div className="about">
                        <div className="infoContainer">
                            <h1 style={{color: "#4182EF"}}>About Us</h1>
                            <header>Get to know more about our club</header>
                            <p style={{maxWidth: "70%", lineHeight: "2", color: "#757575"}}>
                                Google Developer Student Clubs are community groups for college and university students to learn 
                                app development, web development, machine learning, cloud computing and leadership skills
                            </p>
                        </div>
                        <div className="imageContainer">
                            <img src={about}></img>
                        </div>
                    </div>

                    <div className="whatWhyWhoContainer">
                        <div>
                            <img src={idea}></img>
                            <header>What is GDSC?</header>
                            <p>Google developer student clubs is an initiative launched by Google to bring together
                            students interested in Google Developer Technologies and associated skills in a peer-to-peer
                            learning environment</p>
                        </div>
                        <div>
                            <img src={question}></img>
                            <header>Why GDSC?</header>
                            <p>Google developer student clubs is an initiative launched by Google to bring together
                            students interested in Google Developer Technologies and associated skills in a peer-to-peer
                            learning environment</p>
                        </div>
                        <div>
                            <img src={group}></img>
                            <header>Who is it for?</header>
                            <p>Google developer student clubs is an initiative launched by Google to bring together
                            students interested in Google Developer Technologies and associated skills in a peer-to-peer
                            learning environment</p>
                        </div>
                    </div>

                    <div className="teamWrapper">
                        <header>Our Team</header>
                        <div className="teamContainer">
                            <Member memberImage={ashChampion} memberName={"Ashish Reddy"} memberPosition={"Web Developer"} />
                            <Member memberImage={ashChampion} memberName={"Ashish Reddy"} memberPosition={"Web Developer"} />
                            <Member memberImage={ashChampion} memberName={"Ashish Reddy"} memberPosition={"Web Developer"} />
                            <Member memberImage={ashChampion} memberName={"Ashish Reddy"} memberPosition={"Web Developer"} />
                            <Member memberImage={ashChampion} memberName={"Ashish Reddy"} memberPosition={"Web Developer"} />
                        </div>
                    </div>
                </div>
            <Footer />
        </>
    )
}
