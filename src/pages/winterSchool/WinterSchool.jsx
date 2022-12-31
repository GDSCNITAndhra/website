import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import Course from "./Course"
import "./WinterSchool.css"
import wint_scl_logo from "../../images/Winter School Logo.png"
import git_github from "../../images/git_github.png"
import dsa from "../../images/dsa.png"
import web_dev from "../../images/web_dev.png"
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import Diversity3RoundedIcon from '@mui/icons-material/Diversity3Rounded';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import Member from "../../components/member/Member"
import ritvik from "../../images/ritvik.jpeg"
import rajakarthik from "../../images/Vobugari Raja Karthik - Raja Karthik.jpg"
import mamoor from "../../images/IMG_20221123_235128_261 - Mamoor Jaan Khan.jpg"

function WinterSchool(){
    return(<>
        <Navbar/>
            <div  className="winterSchoolWrapper">
                <div className="winterSchoolIntro">
                    <div className="winterSchoolIntroImage">
                        <img src={wint_scl_logo}></img>
                    </div>
                    <div className="winterSchoolIntroHeader">
                        <h1>Winter School</h1>
                    </div>
                    <div className="winterSchoolIntroContent">
                        <p>
                        Winter School is an online course conducted by GDSC NIT Andhra Pradesh. This online course will guide three of the most demanding courses required in the programming field.  
                        <br></br>
                        - Data structures and algorithms
                        <br></br>
                        - Web development
                        <br></br>
                        - Git and GitHub
                        <br></br>
                        <br></br>
                        Winter School aims to provide a more profound and in-depth understanding of these topics. The subject undertaken will be taught by experienced and qualified mentors. The schedule of this course starts on 21st December and ends on 30th December 2022.
                        <br></br><br></br>
                        The key aspects that make Winter School stand out from other available courses are:
                        <br></br>
                        - 1-1 doubt sessions 
                        <br></br>
                        - Practical problems implementation 
                        <br></br>
                        - Certificate by GDSC
                        <br></br>
                        - Potential internship counseling
                        <br></br>
                        <br></br>
                        Renowned professionals will join the course and share their insights and knowledge in their respective fields.
                        </p>
                    </div>
                    <div className="winterSchoolIntroButton">
                        <button>Stay Updated</button>
                    </div>
                </div>

                <div className="winterSchoolCoursesWrapper">
                    <header>Courses Offered</header>

                    <div className="winterSchoolCoursesContainer">
                        <Course courseName={"Git and Github"} courseImage={git_github} courseAbout={"Learn how the business world uses Git and its cloud sister, Github, to keep track of all its code. By the end of this course, you will be able to comprehend the fundamentals of Git and Github, as well as design a template website using Jekyll or start your portfolio website using Github Pages."} />
                        <Course courseName={"Data Structures & Algorithms"} courseImage={dsa} courseAbout={"DSA is a magnet for high-paying professions and a competency required to be a successful programmer. It provides the groundwork for who you want to be. By the end of this course, you should be able to grasp how data structures are used in real-world scenarios and have received some basic training in answering practical interview questions."} />
                        <Course courseName={"Web Development"} courseImage={web_dev} courseAbout={"Through project-based learning, learn how to build a website using HTML/CSS and Javascript. By the conclusion of this course, you will have built your own personal portfolio website and launched it on Github."} />
                    </div>
                </div>

                <div className="winterSchoolIconsContainer">
                    <div>
                        <div className="iconContainer">
                            <WorkspacePremiumRoundedIcon style={{fontSize: "30px"}} />
                        </div>
                        <p>Certificate from GDSC</p>
                    </div>

                    <div>
                        <div className="iconContainer">
                            <HelpOutlineRoundedIcon style={{fontSize: "30px"}} />
                        </div>
                        <p>1-1 Doubt Clearing Session</p>
                    </div>

                    <div>
                        <div className="iconContainer">
                            <Diversity3RoundedIcon style={{fontSize: "30px"}} />
                        </div>
                        <p>Potential Internship Counselling</p>
                    </div>

                    <div>
                        <div className="iconContainer">
                            <AccountTreeRoundedIcon style={{fontSize: "30px"}} />
                        </div>
                        <p>Practical Project Implementation</p>
                    </div>
                </div>

                <div className="courseFacilitatorsWrapper">
                    <header>Course Facilitators</header>
                    <div className="courseFacilitatorsContainer">
                        <Member memberImage={ritvik} memberName={"Ritvik G."} memberPosition={"GDSC Lead"}/>
                        <Member memberImage={rajakarthik} memberName={"Vobugari Raja Karthik"} memberPosition={"Senior Web Developer"} />
                        <Member memberImage={mamoor} memberName={"Mammor Jaan Khan"} memberPosition={"Senior Web Developer"} />
                    </div>
                </div>
            </div>
        <Footer/>
    </>)
}

export default WinterSchool;