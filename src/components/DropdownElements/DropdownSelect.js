import PropTypes from 'prop-types';

import Dropdown from './arrowdown.png';
import Dropup from './arrowup.png';
import { Labels } from '../../constants/labels.js';

export const DropdownSelect = ({
  children,
  isOpen,
  label,
  title,
  toggleDropdown,
}) => {
  const DROPDOWN_ICON = isOpen ? Dropup : Dropdown;

  const CLASSNAME =
    label === Labels.NONE ? 'dd-select-label italicized' : 'dd-select-label';

  return (
    <div className="dd-select">
      <fieldset tabIndex="0" className="dd-select-fieldset">
        <legend align="left">{title}</legend>
        <div className="dd-select-button" onClick={toggleDropdown}>
          <span className={CLASSNAME}>{label}</span>
          <img src={DROPDOWN_ICON} alt="arrow down icon" />
        </div>
      </fieldset>
      {isOpen && (
        <ul tabIndex="1" className="dd-select-options">
          {children}
        </ul>
      )}
    </div>
  );
};

DropdownSelect.defaultProps = {
  isOpen: false,
  label: Labels.NONE,
  title: '',
};

DropdownSelect.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  isOpen: PropTypes.bool,
  label: PropTypes.string,
  title: PropTypes.string,
  toggleDropdown: PropTypes.func.isRequired,
};
