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
import abhimanyu from "../../images/ABHIMANYU TIWARI NIT AP.jpg"
import ananya from "../../images/ANANYA RAVI 421104.jpg"
import devesh from "../../images/320113-2-2-2 - GORE SHREYASH DATTA NITAP.jpg"
import venkatasai from "../../images/Regulagedda Venkata Sai.jpg"
import shreyas from "../../images/320113-2-2-2 - GORE SHREYASH DATTA NITAP.jpg"
import laya from "../../images/420228 - RANGU LAYA NIT AP.jpg"
import raviraj from "../../images/20221123_225639 - RAVIRAJ MAGAR NIT AP.jpg"
import vigna from "../../images/20221124_082459 - PADURU VIGNATEJ REDDY NIT AP.jpg"
import sushil from "../../images/1669279259540 - Sushil Shinde.jpg"
import pavan from "../../images/GODUGU PAVAN KUMAR NIT AP.jpg"
import mayank from "../../images/IMG_4856_COMPRESSED1 - Mayank Kumar Sain.jpg"
import mamoor from "../../images/IMG_20221123_235128_261 - Mamoor Jaan Khan.jpg"
import kiran from "../../images/IMG_20221124_205434 - SAI KIRAN DHULIPUDI NIT AP.jpg"
import meghana from "../../images/IMG_20221124_220749 - Meghana Kankipati.jpg"
import vivekkumar from "../../images/IMG_20221124_234644 - Vivek Kumar.jpg"
import ashish from "../../images/IMG-20220808-WA0007 - CHEVVA ASHISH REDDY NIT AP.jpg"
import ayush from "../../images/IMG20220122195553~2 - AYUSH POONIA NIT AP.jpg"
import mano from "../../images/Mano W photo - MANO W 421215.jpg"
import varun from "../../images/My_Photo - VALLAMKONDU SAI VARUN NIT AP.JPG"
import navaneeth from "../../images/NAVANEETH K NAMPOOTHIRI NIT AP.jpg"
import prem from "../../images/passport size photo - Gajji Prem Kumar.JPG"
import mohan from "../../images/pic2 - KORUPROLU MOHAN NIT AP.jpg"
import sumukh from "../../images/pp copy_copy_405x540 - VEERAMALLA SUMUKH NIT AP.jpg"
import aseem from "../../images/SAVE_20220429_183345-01 - ASEEM GUPTA 121103.jpeg"
import vivekranjan from "../../images/vivek pic 1 - VIVEK RANJAN 421274.jpg"
import rajakarthik from "../../images/Vobugari Raja Karthik - Raja Karthik.jpg"
import sathvika from "../../images/WhatsApp Image 2022-11-24 at 18.53.15 - PASUMARTHY SATHVIKA NIT AP.jpeg"
import vikram from "../../images/IMG_20221123_225851 - Vikram Sable.jpg"
import ritvik from "../../images/ritvik.jpeg"

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
                            <Member memberImage={ritvik} memberName={"Ritvik G."} memberPosition={"GDSC Lead"}/>
                            <Member memberImage={rajakarthik} memberName={"Vobugari Raja Karthik"} memberPosition={"Senior Web Developer"} />
                            <Member memberImage={mamoor} memberName={"Mammor Jaan Khan"} memberPosition={"Senior Web Developer"} />
                            <Member memberImage={ashish} memberName={"Chevva Ashish Reddy"} memberPosition={"Web Developer"} />
                            <Member memberImage={varun} memberName={"Vallamkondu Sai Varun"} memberPosition={"Public Relations"} />
                            <Member memberImage={navaneeth} memberName={"Navaneeth K Nampoothiri"} memberPosition={"Designer"} />
                            <Member memberImage={ananya} memberName={"Ananya Ravi"} memberPosition={"Public Relations"} />
                            <Member memberImage={devesh} memberName={"Devesh Kichar"} memberPosition={"Public Relations"} />
                            <Member memberImage={raviraj} memberName={"Raviraj Magar"} memberPosition={"Public Relations"} />
                            <Member memberImage={abhimanyu} memberName={"Abhimanyu Tiwari"} memberPosition={"Public Relations"} />
                            <Member memberImage={mayank} memberName={"Mayank Kumar Sain"} memberPosition={"Public Relations"} />
                            {/* <Member memberImage={shreyas} memberName={"Gore Shreyash"} memberPosition={"Public Relations"} /> */}
                            <Member memberImage={prem} memberName={"Gajji Prem Kumar"} memberPosition={"Web Developer"} />
                            <Member memberImage={sumukh} memberName={"Veramalla Sumukh"} memberPosition={"Web Developer"} />
                            <Member memberImage={sathvika} memberName={"Pasumarthy Sathvika"} memberPosition={"Web Developer"} />
                            <Member memberImage={mano} memberName={"Mano W."} memberPosition={"Web Developer"} />
                            <Member memberImage={laya} memberName={"Rangu Laya"} memberPosition={"Web Developer"} />
                            <Member memberImage={vigna} memberName={"Paduru Vignatej Reddy"} memberPosition={"App Developer"} />
                            <Member memberImage={pavan} memberName={"Godugu Pavan Kumar"} memberPosition={"App Developer"} /> 
                            <Member memberImage={venkatasai} memberName={"Regulagedda Venkata Sai"}  />
                            
                            <Member memberImage={sushil} memberName={"Sushil Shinde"} />
                            
                            <Member memberImage={kiran} memberName={"Sai Kiran Dhulipudi"} />
                            <Member memberImage={meghana} memberName={"Kankipati Meghana"} />
                            <Member memberImage={vivekkumar} memberName={"Vivek Kumar"}  />
                            <Member memberImage={ayush} memberName={"Ayush Poonia"} />  
                            <Member memberImage={aseem} memberName={"Aseem Gupta"} />
                            <Member memberImage={vivekranjan} memberName={"Vivek Ranjan"} />
                            <Member memberImage={vikram} memberName={"Vikram Sable"} />
                        </div>
                    </div>
                </div>
            <Footer />
        </>
    )
}
