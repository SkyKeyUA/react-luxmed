import './CompletedPage.css';
import Button from '../../components/Button/Button';
import Popup from '../../components/Popup/Popup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SkipContent from '../../components/Popup/Content/SkipContent';
import ReferContent from '../../components/Popup/Content/ReferContent';

function CompletedPage() {
  const navigate = useNavigate();
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isReferPopupVisible, setIsReferPopupVisible] = useState(false);

  const togglePopup = () => {
    if (isPopupVisible) navigate('/');
    setIsPopupVisible(!isPopupVisible);
  };

  const toggleReferPopup = () => {
    setIsReferPopupVisible(!isReferPopupVisible);
  };

  return (
    <>
      {isPopupVisible && (
        <Popup>
          <SkipContent togglePopup={togglePopup}></SkipContent>
        </Popup>
      )}
      {isReferPopupVisible && (
        <Popup>
          <ReferContent togglePopup={toggleReferPopup}></ReferContent>
        </Popup>
      )}
      <div className="CompletedPage">
        <h2>
          Congratulations <img src="./img/firework.svg" alt="Firework"></img>
        </h2>
        <p>
          You have completed the first part of your profile. We will reach out
          to your clinic/practice in the near future and provide you with
          another link to start building your FREE online profile{' '}
        </p>
        <p>
          Considering referring up to 5 colleagues to LUXMED and have the
          possibility to be rewarded with free advertising opportunities.
        </p>
        <div className="Buttons">
          <Button id={'skip'} styling={'basic'} onClick={() => togglePopup()}>
            Skip
          </Button>
          <Button
            id={'refer'}
            styling={'accent'}
            onClick={() => toggleReferPopup()}
          >
            Refer
          </Button>
        </div>
      </div>
    </>
  );
}

export default CompletedPage;
