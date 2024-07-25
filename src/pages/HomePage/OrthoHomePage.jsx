import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Button from '../../components/Button/Button';
import './HomePage.css';

function OrthoHomePage() {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm({
    defaultValues: {},
  });

  const submit = (data) => {
    //You need do dispatch here
    console.log('Those form data were submitted:');
    console.log(data);
  };

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
        <Button styling={'accent'} onClick={() => navigate('/questionnaire')}>
          Signup today for Free
        </Button>
      </div>
      <div className="Video">
        <iframe
          width="100%"
          height="100%"
          src={'./video/Luxmed Intro.webm'}
          className="VideoPlayer"
          title="Video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          frameBorder={0}
        ></iframe>
      </div>
      <div className="Promotion Section">
        <img className="Phone" src="./img/ortho-phone.svg" alt="Phone"></img>
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
            <li className="ListItem">
              LUXMED utilizes cutting-edge AI Technology
            </li>
            <li className="ListItem">
              Get worldwide exposure for products & services being offered by
              your clinic
            </li>
            <li className="ListItem">
              Deliver a premium expeirence for your existing and new patients
            </li>
            <li className="ListItem">
              Innovative payment solutions, get paid before seeing your patient
            </li>
            <li className="ListItem">
              Empowering connections and expanding buisness opportuinites
            </li>
            <li className="ListItem">
              Allow patients to acess products sitting in your inventory without
              them expirying
            </li>
            <li className="ListItem">
              90% of people conduct intial searches via mobile devices
            </li>
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
        <form
          className="FeedbackForm"
          id="feedback-data"
          method="post"
          onSubmit={handleSubmit(submit)}
        >
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            autoComplete="on"
            {...register('name')}
          ></input>
          <input
            type="text"
            id="email"
            placeholder="Your Email"
            autoComplete="on"
            {...register('email')}
          ></input>
          <textarea
            id="message"
            rows="5"
            cols="45"
            placeholder="Share your thoughts"
            {...register('thoughts')}
          ></textarea>
          <Button name="submit" styling={'white'}>
            Send Feedback
          </Button>
        </form>
      </div>
    </div>
  );
}

export default OrthoHomePage;
