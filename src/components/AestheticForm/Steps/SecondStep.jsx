import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllLanguages } from '../../../redux/Slices/getAllLanguagesSlice';
import MultipleDropdown from '../../MultipleDropdown/MultipleDropdown';
import '../CSS/AestheticForm.css';

function AesSecondStep({ register }) {
  const dispatch = useDispatch();

  const { error, isLoading } = useSelector((state) => state.allLanguages);

  useEffect(() => {
    dispatch(getAllLanguages());
  }, []);

  return (
    <div className="Content">
      {error ? (
        <>
          <h3 className="ErrorMessage">Sorry! We found some error!</h3>
          <p>{error}</p>
        </>
      ) : (
        <></>
      )}
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <div className="ContentColumn">
            <p className="Label" id="clinicsName">
              Clinic's Name:
            </p>
            <input
              type="text"
              className="TextField"
              name="clinicsName"
              id="clinicsName"
              placeholder=""
              autoComplete="on"
              {...register('clinicsName')}
            />
            <p className="Label" id="city">
              City:
            </p>
            <input
              type="text"
              className="TextField"
              name="city"
              id="city"
              placeholder=""
              autoComplete="on"
              {...register('city')}
            />
            <p className="Label" id="email">
              Email:
            </p>
            <input
              type="text"
              className="TextField"
              name="email"
              id="email"
              placeholder=""
              autoComplete="on"
              {...register('email')}
            />
            <p className="Label" id="languages">
              Languages Spoken:
            </p>
            <MultipleDropdown {...register('languages')}></MultipleDropdown>
            <p className="Label" id="officeManager">
              Office Manager:
            </p>
            <input
              type="text"
              className="TextField"
              name="officeManager"
              id="officeManager"
              placeholder=""
              {...register('officeManager')}
            />
            <p className="Label" id="officeManagerPhone">
              Office Manager's Tel no.:
            </p>
            <input
              type="text"
              className="TextField"
              name="officeManagerPhone"
              id="officeManagerPhone"
              placeholder=""
              autoComplete="on"
              {...register('officeManagerPhone')}
            />
            <p className="Label" id="managementEmail">
              Purchasing Management Email Address:
            </p>
            <input
              type="text"
              className="TextField"
              name="managementEmail"
              id="managementEmail"
              placeholder=""
              autoComplete="on"
              {...register('managementEmail')}
            />
          </div>
          <div className="ContentColumn">
            <p className="Label" id="address">
              Address:
            </p>
            <input
              type="text"
              className="TextField"
              name="address"
              id="address"
              placeholder=""
              autoComplete="on"
              {...register('address')}
            />
            <p className="Label" id="postal">
              Postal/Zip code:
            </p>
            <input
              type="text"
              className="TextField"
              name="postal"
              id="postal"
              placeholder=""
              autoComplete="on"
              {...register('postal')}
            />
            <p className="Label" id="phone">
              Phone:
            </p>
            <input
              type="text"
              className="TextField"
              name="phone"
              id="phone"
              placeholder=""
              autoComplete="on"
              {...register('phone')}
            />
            <p className="Label" id="headPractitioner">
              Head Practitioner:
            </p>
            <input
              type="text"
              className="TextField"
              name="headPractitioner"
              id="headPractitioner"
              placeholder=""
              autoComplete="on"
              {...register('headPractitioner')}
            />
            <p className="Label" id="officeManagerEmail">
              Office Manager’s Email Address
            </p>
            <input
              type="text"
              className="TextField"
              name="officeManagerEmail"
              id="officeManagerEmail"
              placeholder=""
              autoComplete="on"
              {...register('officeManagerEmail')}
            />
            <p className="Label" id="purchasingManagement">
              Purchasing Management:
            </p>
            <input
              type="text"
              className="TextField"
              name="purchasingManagement"
              id="purchasingManagement"
              placeholder=""
              autoComplete="on"
              {...register('purchasingManagement')}
            />
            <p className="Label" id="managementPhone">
              Purchasing Management Tel no.:
            </p>
            <input
              type="text"
              className="TextField"
              name="managementPhone"
              id="managementPhone"
              placeholder=""
              autoComplete="on"
              {...register('managementPhone')}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default AesSecondStep;
