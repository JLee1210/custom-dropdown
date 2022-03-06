import PropTypes from 'prop-types';

export const DropdownOption = ({
  isSelected,
  label,
  onClick,
  showCheckBox,
}) => {
  const SELECTED_CLASS_NAME = isSelected
    ? 'dd-select-option selected'
    : 'dd-select-option';

  return (
    <li className={SELECTED_CLASS_NAME} onClick={onClick}>
      {showCheckBox && (
        <input
          type="checkbox"
          className="dd-select-option-checkbox"
          defaultChecked={isSelected}
        />
      )}
      <span className="dd-select-label">{label}</span>
    </li>
  );
};

DropdownOption.defaultProps = {
  showCheckBox: false,
};

DropdownOption.propTypes = {
  isSelected: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  showCheckBox: PropTypes.bool,
};
