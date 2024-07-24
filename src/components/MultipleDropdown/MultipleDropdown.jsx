import './MultipleDropdown.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleOption,
  removeOption,
} from '../../redux/Slices/getSelectedOptionsSlice';

function MultipleDropdown() {
  const dispatch = useDispatch();
  const { list } = useSelector((store) => store.allLanguages);
  const { options } = useSelector((store) => store.selectedOptions);
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilled, setIsFilled] = useState(false);
  const [isNoResults, setIsNoResults] = useState(false);

  const handleClearButtonClick = () => {
    setSearchQuery('');
    setIsNoResults(false);
    setIsFilled(false);
  };

  const handleRemoveTag = (currentTag) => {
    document
      .querySelector(
        `div.DropdownOptions div.Option[data-value="${currentTag}"]`
      )
      .classList.remove('Active');
    dispatch(removeOption(currentTag));
  };

  const handleOptionClick = (currentTarget) => {
    currentTarget.target.classList.toggle('Active');
    const newOption = currentTarget.target.textContent;
    dispatch(toggleOption(newOption));
  };

  const handleOpenButtonClick = () => {
    const customSelect = document.querySelector('.CustomSelect');
    customSelect.classList.toggle('Open');
  };

  useEffect(() => {
    const hiddenArray = list.filter(
      (item) => !item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const hiddenSet = new Set(hiddenArray);
    const showedArray = list.filter((item) => !hiddenSet.has(item));

    hiddenArray.map((hiddenItem) => {
      document
        .querySelector(
          `div.DropdownOptions div.Option[data-value="${hiddenItem.name}"]`
        )
        .classList.add('Hidden');
    });
    showedArray.map((hiddenItem) => {
      document
        .querySelector(
          `div.DropdownOptions div.Option[data-value="${hiddenItem.name}"]`
        )
        .classList.remove('Hidden');
    });
    setIsFilled(true);
  }, [searchQuery]);

  return (
    <div className="MultipleDropdown">
      <div className="CustomSelect">
        <div className="SelectedBox TextField">
          <input
            type="text"
            className="TagsInput"
            name="tags"
            id="tags"
            hidden
          />
          <div className="SelectedOptions">
            {options.map((option) => {
              return (
                <div key={option}>
                  <span className="Tag">
                    {option}
                    <span
                      className="RemoveTag"
                      onClick={() => handleRemoveTag(option)}
                    >
                      &times;
                    </span>
                  </span>
                </div>
              );
            })}
          </div>
          <div className="DropdownArrow">
            <FontAwesomeIcon
              icon={faAngleDown}
              onClick={handleOpenButtonClick}
            />
          </div>
        </div>
        <div className="DropdownOptions">
          <div className="OptionSearchTags">
            <input
              type="text"
              className="SearchTags"
              id="search"
              placeholder="Enter your language..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="button"
              className="ClearTags"
              onClick={(e) => handleClearButtonClick(e.currentTarget)}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
          <div className="OptionsList">
            {list.map((option) => {
              return (
                <div
                  className="Option"
                  title={option.name}
                  data-value={option.name}
                  key={option.code}
                  onClick={handleOptionClick}
                >
                  {option.name.split(',')[0]}
                </div>
              );
            })}
          </div>
          {isNoResults && (
            <div className="Option NoResult">No result match</div>
          )}
        </div>
        {!isFilled && (
          <span className="TagError ErrorMessage">This field is required</span>
        )}
      </div>
    </div>
  );
}

export default MultipleDropdown;
