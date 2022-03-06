import PropTypes from 'prop-types';
import { Fragment, useState } from 'react';

import '../styling/Dropdown.css';
import { DropdownOption } from './DropdownElements/DropdownOption';
import { DropdownSelect } from './DropdownElements/DropdownSelect';
import { Labels } from '../constants/labels.js';

export const CustomDropdown = ({
  currValue,
  isMultiple,
  onChange,
  options,
  title,
}) => {
  const [selected, setSelected] = useState(currValue || '');

  // trust user that currValue is either array/set if they provide isMultiple prop
  const [selectedSet, setSelectedSet] = useState(currValue || new Set());

  const [isOpen, setIsOpen] = useState(false);

  const label = isMultiple
    ? [...selectedSet].map((option) => option.label).join(', ') || undefined
    : selected.label;

  const isSelectedAll = selectedSet.size === options.length;

  const handleClick = (option) => {
    // custom on change function if provided
    onChange(option);

    if (!isMultiple) {
      setSelected(option);
      setIsOpen((prev) => !prev);
    } else {
      setSelectedSet((prev) => {
        const newSet = new Set(prev);
        if (newSet.has(option)) {
          newSet.delete(option);
        } else {
          newSet.add(option);
        }
        return newSet;
      });
    }
  };

  const handleSelectAll = () => {
    // custom on change function if provided
    onChange(options);

    if (selectedSet.size === options.length) {
      setSelectedSet(new Set());
    } else {
      setSelectedSet(new Set(options));
    }
  };

  const OptionsList = () =>
    options.map((option) => {
      const isSelected = isMultiple
        ? selectedSet.has(option)
        : selected.value === option.value;

      return (
        <DropdownOption
          isSelected={isSelected}
          key={option.value}
          label={option.label}
          onClick={() => handleClick(option)}
          showCheckBox={isMultiple}
        />
      );
    });

  const DefaultDropdownOption = () =>
    isMultiple ? (
      <span className="italicized">
        <DropdownOption
          isSelected={isSelectedAll}
          label={Labels.SELECT_ALL}
          onClick={() => handleSelectAll()}
          showCheckBox={isMultiple}
        />
      </span>
    ) : (
      <span className="italicized">
        <DropdownOption
          isSelected={!selected}
          label={Labels.NONE}
          onClick={() => handleClick('')}
          showCheckBox={isMultiple}
        />
      </span>
    );

  return (
    <Fragment>
      <DropdownSelect
        isOpen={isOpen}
        label={label}
        title={title}
        toggleDropdown={() => setIsOpen((prev) => !prev)}
      >
        <DefaultDropdownOption />
        <OptionsList />
      </DropdownSelect>
    </Fragment>
  );
};

CustomDropdown.defaultProps = {
  currValue: '',
  isMultiple: false,
  onChange: () => {},
  title: '',
};

CustomDropdown.propTypes = {
  currValue: PropTypes.any,
  isMultiple: PropTypes.bool,
  onChange: PropTypes.func,
  options: PropTypes.array.isRequired,
  title: PropTypes.string,
};
