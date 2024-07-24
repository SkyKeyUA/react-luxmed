import { useNavigate } from 'react-router-dom';
import Button from '../../Button/Button';
import '../Popup.css';
import '../../OrthopedicForm/CSS/OrthopedicForm.css';

function ReferContent({ togglePopup }) {
  const navigate = useNavigate();

  const submitForm = () => {
    navigate('/');
  };

  return (
    <div className="Popup">
      <div className="ClosePopup" onClick={() => togglePopup()}></div>
      <h1>Refer a Friend</h1>
      <form className="Content" id="friend-data" method="post">
        <div className="ContentColumn">
          <p className="Label" id="fullName">
            Full Name:
          </p>
          <input
            type="text"
            className="TextField"
            name="fullName"
            id="fullName"
            value=""
            onChange={(e) => console.log('Changed')}
            placeholder=""
          />
          <p className="Label" id="phoneNumber">
            Tel no.:
          </p>
          <input
            type="text"
            className="TextField"
            name="phoneNumber"
            id="phoneNumber"
            value=""
            onChange={(e) => console.log('Changed')}
            placeholder=""
          />
          <p className="Label" id="emailAddress">
            Email Address:
          </p>
          <input
            type="text"
            className="TextField"
            name="emailAddress"
            id="emailAddress"
            value=""
            onChange={(e) => console.log('Changed')}
            placeholder=""
          />
        </div>
      </form>
      <div className="Buttons">
        <Button id={'cancel'} styling={'basic'} onClick={() => togglePopup()}>
          Cancel
        </Button>
        <Button id={'submit'} styling={'accent'} onClick={() => submitForm()}>
          Submit
        </Button>
      </div>
    </div>
  );
}

export default ReferContent;
