import Button from '../../Button/Button';
import '../Popup.css';

function SkipContent({ togglePopup }) {
  return (
    <div className="Popup">
      <img className="Logo" src="./logo.svg" alt="Logo"></img>
      <p>
        Someone will reach out again to you shortly to assist you in filling out
        your business profile.
      </p>
      <Button id={'ok'} styling={'accent'} onClick={() => togglePopup()}>
        Ok
      </Button>
    </div>
  );
}

export default SkipContent;
