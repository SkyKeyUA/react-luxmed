import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllLanguages } from '../../../redux/Slices/getAllLanguagesSlice';
import MultipleDropdown from '../../MultipleDropdown/MultipleDropdown';
import '../CSS/OrthopedicForm.css';

function SecondStep() {
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
        <form id="clinic-data" method="post">
          <div className="ContentColumn">
            <p className="Label" id="clinicsName">
              Clinic's Name:
            </p>
            <input
              type="text"
              className="TextField"
              name="clinicsName"
              id="clinicsName"
              value=""
              onChange={(e) => console.log('Changed')}
              placeholder=""
              autoComplete="on"
            />
            <p className="Label" id="city">
              City:
            </p>
            <input
              type="text"
              className="TextField"
              name="city"
              id="city"
              value=""
              onChange={(e) => console.log('Changed')}
              placeholder=""
              autoComplete="on"
            />
            <p className="Label" id="email">
              Email:
            </p>
            <input
              type="text"
              className="TextField"
              name="email"
              id="email"
              value=""
              onChange={(e) => console.log('Changed')}
              placeholder=""
              autoComplete="on"
            />
            <p className="Label" id="languages">
              Languages Spoken:
            </p>
            <MultipleDropdown></MultipleDropdown>
            <p className="Label" id="officeManager">
              Office Manager:
            </p>
            <input
              type="text"
              className="TextField"
              name="officeManager"
              id="officeManager"
              value=""
              onChange={(e) => console.log('Changed')}
              placeholder=""
            />
            <p className="Label" id="officeManagerPhone">
              Office Manager's Tel no.:
            </p>
            <input
              type="text"
              className="TextField"
              name="officeManagerPhone"
              id="officeManagerPhone"
              value=""
              onChange={(e) => console.log('Changed')}
              placeholder=""
              autoComplete="on"
            />
            <p className="Label" id="managementEmail">
              Purchasing Management Email Address:
            </p>
            <input
              type="text"
              className="TextField"
              name="managementEmail"
              id="managementEmail"
              value=""
              onChange={(e) => console.log('Changed')}
              placeholder=""
              autoComplete="on"
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
              value=""
              onChange={(e) => console.log('Changed')}
              placeholder=""
              autoComplete="on"
            />
            <p className="Label" id="postal">
              Postal/Zip code:
            </p>
            <input
              type="text"
              className="TextField"
              name="postal"
              id="postal"
              value=""
              onChange={(e) => console.log('Changed')}
              placeholder=""
              autoComplete="on"
            />
            <p className="Label" id="phone">
              Phone:
            </p>
            <input
              type="text"
              className="TextField"
              name="phone"
              id="phone"
              value=""
              onChange={(e) => console.log('Changed')}
              placeholder=""
              autoComplete="on"
            />
            <p className="Label" id="headPractitioner">
              Head Practitioner:
            </p>
            <input
              type="text"
              className="TextField"
              name="headPractitioner"
              id="headPractitioner"
              value=""
              onChange={(e) => console.log('Changed')}
              placeholder=""
              autoComplete="on"
            />
            <p className="Label" id="officeManagerEmail">
              Office Manager’s Email Address
            </p>
            <input
              type="text"
              className="TextField"
              name="officeManagerEmail"
              id="officeManagerEmail"
              value=""
              onChange={(e) => console.log('Changed')}
              placeholder=""
              autoComplete="on"
            />
            <p className="Label" id="purchasingManagement">
              Purchasing Management:
            </p>
            <input
              type="text"
              className="TextField"
              name="purchasingManagement"
              id="purchasingManagement"
              value=""
              onChange={(e) => console.log('Changed')}
              placeholder=""
              autoComplete="on"
            />
            <p className="Label" id="managementPhone">
              Purchasing Management Tel no.:
            </p>
            <input
              type="text"
              className="TextField"
              name="managementPhone"
              id="managementPhone"
              value=""
              onChange={(e) => console.log('Changed')}
              placeholder=""
              autoComplete="on"
            />
          </div>
        </form>
      )}
    </div>
  );
}

export default SecondStep;
