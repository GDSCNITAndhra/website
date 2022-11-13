
import "./event.css"

export default function Event(props) {
    return (
        <>
            <div className="event">
                <img src={props.eventImage}></img>
                <p className="eventName">{props.eventName}</p>
                <p className="eventAbout">
                    {props.eventAbout}
                </p>
            </div>
        </>
    )
}
