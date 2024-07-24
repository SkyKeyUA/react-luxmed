import '../CSS/OrthopedicForm.css';

function ThirdStep() {
  return (
    <div className="Content">
      <form id="questionaire-data" method="post">
        <div className="ContentColumn">
          <div className="QuestItem">
            <p className="Question">
              Are you willing to share with potential clients your clinic's
              appointment availabilities?
            </p>
            <div className="RadioGroup">
              <label className="RadioLabel">
                <input
                  type="radio"
                  className="RadioField"
                  name="shareAppointment"
                  value=""
                  onChange={(e) => console.log('Changed')}
                  placeholder=""
                />
                Yes
              </label>
              <label className="RadioLabel">
                <input
                  type="radio"
                  className="RadioField"
                  name="shareAppointment"
                  value=""
                  onChange={(e) => console.log('Changed')}
                  placeholder=""
                />
                No
              </label>
            </div>
          </div>
          <div className="QuestItem">
            <p className="Question">
              Do you offer special promotions on products/ procedures throughout
              the year?
            </p>
            <div className="RadioGroup">
              <label className="RadioLabel">
                <input
                  type="radio"
                  className="RadioField"
                  name="specialPromotions"
                  value=""
                  onChange={(e) => console.log('Changed')}
                  placeholder=""
                />
                Yes
              </label>
              <label className="RadioLabel">
                <input
                  type="radio"
                  className="RadioField"
                  name="specialPromotions"
                  value=""
                  onChange={(e) => console.log('Changed')}
                  placeholder=""
                />
                No
              </label>
            </div>
          </div>
          <div className="QuestItem">
            <p className="Question">Are referrals from doctors mandatory?</p>
            <div className="RadioGroup">
              <label className="RadioLabel">
                <input
                  type="radio"
                  className="RadioField"
                  name="referrals"
                  value=""
                  onChange={(e) => console.log('Changed')}
                  placeholder=""
                />
                Yes
              </label>
              <label className="RadioLabel">
                <input
                  type="radio"
                  className="RadioField"
                  name="referrals"
                  value=""
                  onChange={(e) => console.log('Changed')}
                  placeholder=""
                />
                No
              </label>
            </div>
          </div>
          <div className="QuestItem">
            <p className="Question">
              Do you offer same-day Injectable Treatments, if not typically how
              long in advance do you require an appointment?
            </p>
            <div className="RadioGroup">
              <label className="RadioLabel">
                <input
                  type="radio"
                  className="RadioField"
                  name="injectableTreatments"
                  value=""
                  onChange={(e) => console.log('Changed')}
                  placeholder=""
                />
                Yes
              </label>
              <label className="RadioLabel">
                <input
                  type="radio"
                  className="RadioField"
                  name="injectableTreatments"
                  value=""
                  onChange={(e) => console.log('Changed')}
                  placeholder=""
                />
                No
              </label>
            </div>
          </div>
          <div className="QuestItem">
            <p className="Question">Do you offer telemedicine consulting?</p>
            <div className="RadioGroup">
              <label className="RadioLabel">
                <input
                  type="radio"
                  className="RadioField"
                  name="telemedicine"
                  value=""
                  onChange={(e) => console.log('Changed')}
                  placeholder=""
                />
                Yes
              </label>
              <label className="RadioLabel">
                <input
                  type="radio"
                  className="RadioField"
                  name="telemedicine"
                  value=""
                  onChange={(e) => console.log('Changed')}
                  placeholder=""
                />
                No
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ThirdStep;
