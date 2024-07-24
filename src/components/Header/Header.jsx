import Button from '../Button/Button';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = () => location.pathname === '/';
  const isMobileView = () => window.innerWidth < '640px';

  const scrollTo = (e) => {
    e.preventDefault();
    const element = document.getElementById('about');
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className="Header">
      <img className="Logo" src="./logo.svg" alt="Logo"></img>
      <div className="Buttons">
        {isHome() ? (
          <>
            <Button styling={'basic'} onClick={(e) => scrollTo(e)}>
              {isMobileView ? 'About' : 'About us'}
            </Button>
            <Button
              className="ClaimButton"
              styling={'accent'}
              onClick={() => navigate('/questionnaire')}
            >
              {isMobileView
                ? 'Claim Free Listing'
                : 'Claim Your Free Listing Now!'}
            </Button>
          </>
        ) : (
          <Button
            className="ReturnButton"
            styling={'white'}
            onClick={() => navigate('/')}
          >
            {isMobileView ? 'Return' : 'Return to Homepage'}
          </Button>
        )}
      </div>
    </div>
  );
}

export default Header;
