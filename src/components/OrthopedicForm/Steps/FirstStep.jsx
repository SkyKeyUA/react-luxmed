import '../CSS/OrthopedicForm.css';

function FirstStep() {
  return (
    <div className="Content">
      <form id="client-data" method="post">
        <div className="ContentColumn">
          <p className="Label" id="firstName">
            First Name:
          </p>
          <input
            type="text"
            className="TextField"
            name="firstName"
            id="firstName"
            value=""
            onChange={(e) => console.log('Changed')}
            placeholder=""
            required
          />
          <p className="Label" id="position">
            Your Position:
          </p>
          <input
            type="text"
            className="TextField"
            name="position"
            id="position"
            value=""
            onChange={(e) => console.log('Changed')}
            placeholder=""
            required
          />
          <p className="Label" id="locations">
            How many Locations?
          </p>
          <input
            type="text"
            className="TextField"
            name="locations"
            id="locations"
            value=""
            onChange={(e) => console.log('Changed')}
            placeholder=""
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
            value=""
            onChange={(e) => console.log('Changed')}
            placeholder=""
            required
          />
          <p className="Label" id="practitioners">
            How many Practitioners?
          </p>
          <input
            type="text"
            className="TextField"
            name="practitioners"
            id="practitioners"
            value=""
            onChange={(e) => console.log('Changed')}
            placeholder=""
          />
          <p className="Label" id="websiteURL">
            Website URL:
          </p>
          <input
            type="text"
            className="TextField"
            name="websiteURL"
            id="websiteURL"
            value=""
            onChange={(e) => console.log('Changed')}
            placeholder=""
          />
        </div>
      </form>
    </div>
  );
}

export default FirstStep;
