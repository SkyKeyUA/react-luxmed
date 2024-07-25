import '../CSS/AestheticForm.css';

function AesFirstStep({ register }) {
  return (
    <div className="Content">
      <div className="ContentColumn">
        <p className="Label" id="firstName">
          First Name:
        </p>
        <input
          type="text"
          className="TextField"
          name="firstName"
          id="firstName"
          placeholder=""
          {...register('firstName')}
        />
        <p className="Label" id="position">
          Your Position:
        </p>
        <input
          type="text"
          className="TextField"
          name="position"
          id="position"
          placeholder=""
          {...register('position')}
        />
        <p className="Label" id="locations">
          How many Locations?
        </p>
        <input
          type="text"
          className="TextField"
          name="locations"
          id="locations"
          placeholder=""
          {...register('locations')}
        />
      </div>
      <div className="ContentColumn">
        <p className="Label" id="lastName">
          Last Name:
        </p>
        <input
          type="text"
          className="TextField"
          name="lastName"
          id="lastName"
          placeholder=""
          {...register('lastName')}
        />
        <p className="Label" id="practitioners">
          How many Practitioners?
        </p>
        <input
          type="text"
          className="TextField"
          name="practitioners"
          id="practitioners"
          placeholder=""
          {...register('practitioners')}
        />
        <p className="Label" id="websiteURL">
          Website URL:
        </p>
        <input
          type="text"
          className="TextField"
          name="websiteURL"
          id="websiteURL"
          placeholder=""
          {...register('websiteURL')}
        />
      </div>
    </div>
  );
}

export default AesFirstStep;
