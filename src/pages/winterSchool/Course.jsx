
import "./Course.css"

export default function Course(props) {
    return (
        <>
            <div className="course">
                <img src={props.courseImage}></img>
                <p className="courseName">{props.courseName}</p>
                <p className="courseAbout">
                    {props.courseAbout}
                </p>
            </div>
        </>
    )
}