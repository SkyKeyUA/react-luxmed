import Button from '../../components/Button/Button';
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = () => location.pathname === '/';
  const { register, handleSubmit } = useForm({
    defaultValues: {},
  });

  const submit = (data) => {
    //You need do dispatch here
    console.log('Those form data were submitted:');
    console.log(data);
  };

  return (
    <div className="Footer">
      <div className={`Contact Section ${isHome() ? 'Light' : 'Dark'}`}>
        <div className="Claim">
          <img className="Logo" src="./logo.svg" alt="Logo"></img>
          <p>
            LUXMED uses cutting edge AI technology
            <br /> to drive patients to your practice
          </p>
          <Button styling={'accent'} onClick={() => navigate('/questionnaire')}>
            Claim your free listing
          </Button>
        </div>
        <div className="Subscribe">
          <h3>Stay in Touch</h3>
          <div>
            <form
              className="MailInput"
              id="subscribe-data"
              method="post"
              onSubmit={handleSubmit(submit)}
            >
              <input
                type="text"
                id="email"
                placeholder="Your email address"
                {...register('email')}
              ></input>
              <Button styling={'light'}>Subscribe</Button>
            </form>
          </div>
        </div>
      </div>
      <div className={`Copyright ${isHome() ? 'Dark' : 'Light'}`}>
        <p>Copyright © 2024. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
