import { useState } from 'react';
import '../CSS/AestheticForm.css';

const aethProductsData = [
  {
    name: 'Gel One',
    manufacturer: 'Zimmer Biomet',
    price: 25.99,
    available: false,
    instock: true,
  },
  {
    name: 'Orthovisc',
    manufacturer: 'Anika Therapeutics',
    price: 25.99,
    available: true,
    instock: false,
  },
  {
    name: 'Monovisc',
    manufacturer: 'Anika Therapeutics',
    price: 15.99,
    available: false,
    instock: true,
  },
  {
    name: 'Hyalagan',
    manufacturer: 'Fidia Pharma USA Inc',
    price: 25.99,
    available: true,
    instock: false,
  },
  {
    name: 'Supartz FX',
    manufacturer: 'Bioventus',
    price: 15.99,
    available: true,
    instock: true,
  },
  {
    name: 'Euflexxa',
    manufacturer: 'Ferring B.V',
    price: 15.99,
    available: false,
    instock: true,
  },
  {
    name: 'Synvisc One',
    manufacturer: 'Sanofi-aventis U.S',
    price: 35.99,
    available: false,
    instock: false,
  },
  {
    name: 'Visco-3',
    manufacturer: 'Zimmer Biomet',
    price: 5.99,
    available: true,
    instock: false,
  },
  {
    name: 'Gelsyn-3',
    manufacturer: 'Bioventus',
    price: 10.99,
    available: true,
    instock: false,
  },
  {
    name: 'TriVisc',
    manufacturer: 'Avanos Medical, Inc',
    price: 55.99,
    available: false,
    instock: true,
  },
  {
    name: 'Durolane',
    manufacturer: 'Bioventus',
    price: 15.99,
    available: true,
    instock: true,
  },
  {
    name: 'Genvisc 850',
    manufacturer: 'Avanos Medical, Inc',
    price: 105.99,
    available: false,
    instock: false,
  },
  {
    name: 'Hymovis',
    manufacturer: 'Fidia Pharma USA Inc',
    price: 4.99,
    available: true,
    instock: false,
  },
  {
    name: 'Synojoynt',
    manufacturer: 'Arthrex, Inc',
    price: 32.99,
    available: false,
    instock: true,
  },
  {
    name: 'Triluron',
    manufacturer: 'Fidia Pharma USA Inc',
    price: 11.99,
    available: false,
    instock: false,
  },
];

const botoxTypeInjData = [
  {
    name: 'Botox',
    manufacturer: 'Allergan',
    price: 25.99,
    available: false,
    instock: true,
  },
  {
    name: 'Dysport',
    manufacturer: 'Galderma',
    price: 15.99,
    available: true,
    instock: false,
  },
  {
    name: 'Daxxify',
    manufacturer: 'Revance Therapeutics',
    price: 35.99,
    available: true,
    instock: true,
  },
  {
    name: 'Xeomine',
    manufacturer: 'Merz Therapeutics',
    price: 5.99,
    available: false,
    instock: false,
  },
];

function AesFourthStep({ register }) {
  const [skincareCream, seSkincareCream] = useState(false);
  const [otherProducts, setOtherProducts] = useState(false);
  const [checkedState, setCheckedState] = useState(
    new Array(aethProductsData.length + botoxTypeInjData.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  const handlePriceChange = (value) => {
    console.log('Price changed');
    console.log(value);
  };

  return (
    <div className="Content">
      <div className="ContentColumn">
        <h2>Aesthetics Medicine</h2>
        <div className="ContentTable">
          <table className="Table" id="orthopedicsProducts">
            <thead>
              <tr>
                <th className="LongCell">Product Name</th>
                <th className="LongCell">Manufacturer</th>
                <th className="ShortCell">Price</th>
                <th className="ShortCell InputCell">Available</th>
                <th className="ShortCell InputCell">In Stock</th>
              </tr>
            </thead>
            <tbody>
              {aethProductsData.map((item, index) => {
                return (
                  <tr key={index} className="TableRow">
                    <td className="LongCell">{item.name}</td>
                    <td className="LongCell">{item.manufacturer}</td>
                    <td className="ShortCell PriceCell">
                      <span className="CurrencySign">$</span>
                      <input
                        type="number"
                        className="TextInputCell"
                        defaultValue={item.price}
                        onChange={(e) => handlePriceChange(e.target.value)}
                        {...register('ortPrice')}
                      ></input>
                    </td>
                    <td className="ShortCell InputCell">
                      <input
                        type="checkbox"
                        className="CheckboxField"
                        name="available"
                        value={item.available}
                        defaultChecked={item.available}
                        onChange={() => handleOnChange(index)}
                        placeholder=""
                        autoComplete="on"
                        {...register('available')}
                      />
                    </td>
                    <td className="ShortCell InputCell">
                      <input
                        type="checkbox"
                        className="CheckboxField"
                        name="instock"
                        value={item.instock}
                        defaultChecked={item.instock}
                        onChange={() => handleOnChange(index)}
                        placeholder=""
                        autoComplete="on"
                        {...register('instock')}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <h2>Botox Type Injections</h2>
        <div className="ContentTable">
          <table className="Table" id="aestheticProducts">
            <thead>
              <tr>
                <th className="LongCell">Product Name</th>
                <th className="LongCell">Manufacturer</th>
                <th className="ShortCell">Price</th>
                <th className="ShortCell InputCell">Available</th>
                <th className="ShortCell InputCell">In Stock</th>
              </tr>
            </thead>
            <tbody>
              {botoxTypeInjData.map((item, index) => {
                return (
                  <tr key={index} className="TableRow">
                    <td className="LongCell">{item.name}</td>
                    <td className="LongCell">{item.manufacturer}</td>
                    <td className="ShortCell PriceCell">
                      <span className="CurrencySign">$</span>
                      <input
                        type="number"
                        className="TextInputCell"
                        defaultValue={item.price}
                        onChange={(e) => handlePriceChange(e.target.value)}
                        {...register('otherPrice')}
                      ></input>
                    </td>
                    <td className="ShortCell InputCell">
                      <input
                        type="checkbox"
                        className="CheckboxField"
                        name="available"
                        value={item.available}
                        defaultChecked={item.available}
                        onChange={() => handleOnChange(index)}
                        placeholder=""
                        autoComplete="on"
                        {...register('available')}
                      />
                    </td>
                    <td className="ShortCell InputCell">
                      <input
                        type="checkbox"
                        className="CheckboxField"
                        name="instock"
                        value={item.instock}
                        defaultChecked={item.instock}
                        onChange={() => handleOnChange(index)}
                        placeholder=""
                        autoComplete="on"
                        {...register('instock')}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="QuestItem">
          <h2>Skin care</h2>
          <p className="Question">
            Q: Do your sell medical skincare creams in your office?
          </p>
          <div className="RadioGroup">
            <label className="RadioLabel">
              <input
                type="radio"
                className="RadioField"
                name="skincareCream"
                value={skincareCream}
                onChange={() => seSkincareCream(true)}
                placeholder=""
                {...register('skincareCream')}
              />
              Yes
            </label>
            <label className="RadioLabel">
              <input
                type="radio"
                className="RadioField"
                name="skincareCream"
                value={skincareCream}
                onChange={() => seSkincareCream(false)}
                placeholder=""
                {...register('skincareCream')}
              />
              No
            </label>
          </div>
          {skincareCream && (
            <textarea
              id="skincareCream"
              className="TextField AdditionalData"
              placeholder="Please add which brand"
              {...register('skincareCreamBrand')}
            ></textarea>
          )}
        </div>
        <div className="QuestItem">
          <p className="Question">
            Q: Are there any other products or services that your office
            sells/promotes?
          </p>
          <div className="RadioGroup">
            <label className="RadioLabel">
              <input
                type="radio"
                className="RadioField "
                name="shareAppointment"
                value={otherProducts}
                onChange={() => setOtherProducts(true)}
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
                value={otherProducts}
                onChange={() => setOtherProducts(false)}
                placeholder=""
                {...register('shareAppointment')}
              />
              No
            </label>
          </div>
          {otherProducts && (
            <textarea
              id="otherProducts"
              className="TextField AdditionalData"
              placeholder="Please add which one"
              {...register('otherProductsDetails')}
            ></textarea>
          )}
        </div>
      </div>
    </div>
  );
}

export default AesFourthStep;
