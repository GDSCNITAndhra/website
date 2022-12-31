
import "./event.css"
import { useNavigate } from "react-router-dom"

export default function Event(props) {

    const navigate = useNavigate();

    const handleClick = () => {
        if (props.link) {
            navigate(props.link)
        }
    }

    return (
        <>
            <div className="event">
                <img src={props.eventImage}></img>
                <p className="eventName">{props.eventName}</p>
                <p className="eventAbout">
                    {props.eventAbout}
                </p>
                <button onClick={handleClick}>Know More</button>
            </div>
        </>
    )
}
