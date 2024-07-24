import Button from '../../components/Button/Button';
import { useNavigate, useLocation } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = () => location.pathname === '/';

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
          <div className="MailInput">
            <input
              type="text"
              id="mail"
              placeholder="Your email address"
            ></input>
            <Button styling={'accent'}>Subscribe</Button>
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
