
import { useState } from "react"
import "./member.css"

export default function Member(props) {

    const [instaHover, setInstaHover] = useState(0)
    const [twitterHover, setTwitterHover] = useState(0)
    const [linkedInHover, setLinkedInHover] = useState(0)

    return (
        <>
            <div className="member">
                <img src={props.memberImage}></img>
                <p className="memberName">{props.memberName}</p>
                <p className="memberPosition">
                    {props.memberPosition}
                </p>
                <div className="linksContainer">
                    <iconify-icon onMouseOver={() => {setInstaHover(1)}} onMouseOut={() => {setInstaHover(0)}} style={instaHover == 1 ? {color: "#E1306C", fontSize: "24px", cursor: "pointer"} : {fontSize: "24px", cursor: "pointer"}} icon="akar-icons:instagram-fill"></iconify-icon>
                    <iconify-icon onMouseOver={() => {setTwitterHover(1)}} onMouseOut={() => {setTwitterHover(0)}} style={twitterHover == 1 ? {color: "#1DA1F2", fontSize: "28px", cursor: "pointer"} : {fontSize: "28px", cursor: "pointer"}} icon="ant-design:twitter-circle-filled"></iconify-icon>
                    <iconify-icon onMouseOver={() => {setLinkedInHover(1)}} onMouseOut={() => {setLinkedInHover(0)}} style={linkedInHover == 1 ? {color: "#0077b5", fontSize: "24px", cursor: "pointer"} : {fontSize: "24px", cursor: "pointer"}} icon="akar-icons:linkedin-box-fill"></iconify-icon>
                </div>
            </div>
        </>
    )
}

