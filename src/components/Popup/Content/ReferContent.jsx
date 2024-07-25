import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Button from '../../Button/Button';
import '../Popup.css';
import '../../OrthopedicForm/CSS/OrthopedicForm.css';

function ReferContent({ togglePopup }) {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm({
    defaultValues: {},
  });

  const submit = (data) => {
    //You need do dispatch here
    console.log('Those form data were submitted:');
    console.log(data);
    navigate('/');
  };

  return (
    <div className="Popup">
      <div className="ClosePopup" onClick={() => togglePopup()}></div>
      <h1>Refer a Friend</h1>
      <form
        className="PopupForm Content"
        id="friend-data"
        method="post"
        onSubmit={handleSubmit(submit)}
      >
        <div className="ContentColumn">
          <p className="Label" id="fullName">
            Full Name:
          </p>
          <input
            type="text"
            className="TextField"
            name="fullName"
            id="fullName"
            placeholder=""
            {...register('fullName')}
          />
          <p className="Label" id="phoneNumber">
            Tel no.:
          </p>
          <input
            type="text"
            className="TextField"
            name="phoneNumber"
            id="phoneNumber"
            placeholder=""
            {...register('phoneNumber')}
          />
          <p className="Label" id="emailAddress">
            Email Address:
          </p>
          <input
            type="text"
            className="TextField"
            name="emailAddress"
            id="emailAddress"
            placeholder=""
            {...register('emailAddress')}
          />
        </div>
        <div className="Buttons">
          <Button id={'cancel'} styling={'basic'} onClick={() => togglePopup()}>
            Cancel
          </Button>
          <Button id={'submit'} styling={'accent'}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ReferContent;
