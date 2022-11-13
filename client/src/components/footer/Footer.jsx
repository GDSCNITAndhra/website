import "./footer.css"
import logo from "../../images/logo.png"
import { useState, useEffect } from "react"

export default function Footer() {

    const [instaHover, setInstaHover] = useState(0)
    const [twitterHover, setTwitterHover] = useState(0)
    const [linkedInHover, setLinkedInHover] = useState(0)
    const [fbHover, setFbHover] = useState(0)
    const [gitHover, setGitHover] = useState(0)

    useEffect(() => {

    }, [])

    return (
        <>
            <div className="footerWrapper">
                <div className="gdscInfo">
                    <div className="logoContainer">
                        <img className="logo-footer" src={logo}></img>
                        <h2 style={{margin: 0}}>Google Developer Student Clubs</h2>
                        <p style={{margin: 0}}>NIT Andhra Pradesh</p>
                    </div>
                </div>

                <div className="connectWithUs">
                    <h2>Connect with us</h2>
                    <div className="linkContainer">
                        <div className="link" onMouseOver={() => {setGitHover(1)}} onMouseOut={() => {setGitHover(0)}}>
                            <iconify-icon style={gitHover == 1 ? {color: "#6e5494", fontSize: "24px"} : {fontSize: "24px"}} icon="fa-brands:github-square"></iconify-icon>
                            <p className="para">Github</p>
                        </div>
                        <div className="link" onMouseOver={() => {setTwitterHover(1)}} onMouseOut={() => {setTwitterHover(0)}}>
                            <iconify-icon style={twitterHover == 1 ? {color: "#1DA1F2", fontSize: "24px"} : {fontSize: "24px"}} icon="akar-icons:twitter-fill"></iconify-icon>
                            <p className="para">Twitter</p>
                        </div>
                        <div className="link" onMouseOver={() => {setFbHover(1)}} onMouseOut={() => {setFbHover(0)}}>
                            <iconify-icon style={fbHover == 1 ? {color: "#4267B2", fontSize: "24px"} : {fontSize: "24px"}} icon="ant-design:facebook-filled"></iconify-icon>
                            <p className="para">Facebook</p>
                        </div>
                        <div className="link" onMouseOver={() => {setLinkedInHover(1)}} onMouseOut={() => {setLinkedInHover(0)}}>
                            <iconify-icon style={linkedInHover == 1 ? {color: "#0077b5", fontSize: "24px"} : {fontSize: "24px"}} icon="akar-icons:linkedin-box-fill"></iconify-icon>
                            <p className="para">Linkedin</p>
                        </div>
                        <div className="link" onMouseOver={() => {setInstaHover(1)}} onMouseOut={() => {setInstaHover(0)}}>
                            <iconify-icon style={instaHover == 1 ? {color: "#E1306C", fontSize: "24px"} : {fontSize: "24px"}} icon="akar-icons:instagram-fill"></iconify-icon>
                            <p className="para">Instagram</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}