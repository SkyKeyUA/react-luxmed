import '../CSS/AestheticForm.css';

function AesThirdStep({ register }) {
  return (
    <div className="Content">
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
                {...register('shareAppointment')}
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
                {...register('shareAppointment')}
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
                {...register('specialPromotions')}
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
                {...register('specialPromotions')}
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
                {...register('referrals')}
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
                {...register('referrals')}
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
                {...register('injectableTreatments')}
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
                {...register('injectableTreatments')}
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
                {...register('telemedicine')}
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
                {...register('telemedicine')}
              />
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AesThirdStep;
