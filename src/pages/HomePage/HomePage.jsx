import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import ReactPlayer from 'react-player';
import './HomePage.css';
function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="HomePage">
      <div className="Offer">
        <h1 className="Slogan">
          Elevate and Grow Your <span>Orthopeadic,</span>
          <span> Sports Medicine</span> And
          <br /> <span>Pain Management Practice</span> with the Power of AI.
        </h1>
        <p>
          LUXMED – Where <span>Patients</span> From Around The World Find You,
          and You Find Success!
        </p>
        <Button styling={'accent'}>Signup today for Free</Button>
      </div>
      <div className="Video">
        <ReactPlayer
          title="Video player"
          className="VideoPlayer"
          light={'./img/video-preview.png'}
          url={'./video/Luxmed Intro.webm'}
          playIcon={<img src="./img/play-icon.svg" alt="Play Icon"></img>}
          width={1100}
          height={605}
          playing
        ></ReactPlayer>
      </div>
      <div className="Promotion Section">
        <img className="Phone" src="./img/phone.svg" alt="Phone"></img>
        <div className="Description">
          <p className="Label">Only $9.99 per successful patient acquisition</p>
          <h1>
            Discover <span>Valuable</span> Customers
          </h1>
          <p className="AccentColor">Brand Exposure</p>
          <p>
            Showcase your company brand, products & services to travelling
            patients.
          </p>
          <p className="AccentColor">Instant Gradification</p>
          <p>
            LUXMED delivers on-demand results for patients seeking immediate
            products and services. Let Lux Med show you how your practice can
            tap into this demand for instant gradification.
          </p>
          <Button styling={'accent'} onClick={() => navigate('/questionnaire')}>
            Claim your free listing
          </Button>
        </div>
      </div>
      <div className="Review">
        <h1>
          Get <span>Worldwide</span> Exposure
        </h1>
        <p>
          LUXMED connects patients who are traveling to different countires with
          skilled doctors.
        </p>
        <img className="ReviewsMap" src="./img/reviews.svg" alt="Reviews"></img>
      </div>
      <div className="Pros Section">
        <div id="about" className="Description">
          <h1>
            Win-Win <span>Collaboration:</span>
            <br /> Ensuring Mutual Success
          </h1>
          <ul className="ProsList">
            <li>LUXMED utilizes cutting-edge AI Technology</li>
            <li>
              Get worldwide exposure for products & services being offered by
              your clinic
            </li>
            <li>
              Deliver a premium expeirence for your existing and new patients
            </li>
            <li>
              Innovative payment solutions, get paid before seeing your patient
            </li>
            <li>Empowering connections and expanding buisness opportuinites</li>
            <li>
              Allow patients to acess products sitting in your inventory without
              them expirying
            </li>
            <li>90% of people conduct intial searches via mobile devices</li>
          </ul>
          <Button styling={'accent'} onClick={() => navigate('/questionnaire')}>
            Claim your free listing
          </Button>
        </div>
        <img className="Women" src="./img/gossips.svg" alt="Women"></img>
      </div>
      <div className="Feedback Section">
        <h1>
          Share any feedback as to what
          <br /> types of features you think our
          <br /> app should have
        </h1>
        <form className="FeedbackForm" id="feedback-data" method="post">
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            autoComplete="on"
          ></input>
          <input
            type="text"
            id="mail"
            placeholder="Your Email"
            autoComplete="on"
          ></input>
          <textarea
            id="message"
            rows="5"
            cols="45"
            placeholder="Share your thoughts"
          ></textarea>
          <Button name="submit" styling={'white'}>
            Send Feedback
          </Button>
        </form>
      </div>
    </div>
  );
}

export default HomePage;
