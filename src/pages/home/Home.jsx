import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import './home.css';
import landing from '../../images/landing.png';
import about from '../../images/about.png';
import Event from '../../components/event/Event';
import { Link } from 'react-router-dom';
import wint_scl_logo from '../../images/Winter School Logo.png';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="homeWrapper">
        <div className="gdsc">
          <div className="infoContainer">
            <header>Google Developer Student Clubs</header>
            <p style={{ fontSize: '24px', marginTop: '10px' }}>
              NIT Andhra Pradesh
            </p>
            <p style={{ maxWidth: '70%', lineHeight: '2', color: '#757575' }}>
              A community of developers, designers and tech nerds who desire to
              learn, educate and grow. At GDSC NIT AP, we provide a platform for
              individuals to learn, develop, collaborate, exchange ideas and
              grow together
            </p>
            <button
              onClick={() => {
                alert('Coming soon');
              }}
              className="memberButton"
            >
              Become a member
            </button>
          </div>
          <div className="imageContainer">
            <img src={landing}></img>
          </div>
        </div>

        <div className="about">
          <div className="imageContainer">
            <img src={about}></img>
          </div>
          <div className="infoContainer">
            <h1 style={{ color: '#4182EF' }}>About Us</h1>
            <header>Get to know more about our club</header>
            <p style={{ maxWidth: '70%', lineHeight: '2', color: '#757575' }}>
              Google Developer Student Clubs are community groups for college
              and university students to learn app development, web development,
              machine learning, cloud computing and leadership skills
            </p>
            <Link
              to="/about"
              style={{ textDecoration: 'none', color: '#4182EF' }}
            >
              <a className="aboutUsLink">Learn More {' >'}</a>
            </Link>
          </div>
        </div>

        <div className="eventsWrapper">
          <header>Our Upcoming Events</header>
          <div className="eventsContainer">
            <Event
              link={'/winterSchool'}
              eventName={'Winter School'}
              eventAbout={
                'This is the first winter school by any gdsc ever. In this winter school, you will be able to participate in a series of courses and pick up official certifications for web development, git and github and DSA.'
              }
              eventImage={wint_scl_logo}
            />
            {/* <Event eventName={"Winter School"} eventAbout={"This is the first ever winter school by any gdsc ever. In this winter school, you will be able to participate in a series of courses and pick up certifications for web development, git and github and DSA."} eventImage={about} /> */}
          </div>
          <button
            onClick={() => {
              alert('Coming soon');
            }}
            className="pastEventsButton"
          >
            Past Events
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
