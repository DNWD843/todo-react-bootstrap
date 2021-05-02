import classNames from 'classnames';
import React from 'react';

import './ItemStatusFilter.css';

const ItemStatusFilter = ({ filterMode, setFilterMode }) => {
  const buttons = [
    {
      name: 'all',
      label: 'All',
    },
    {
      name: 'active',
      label: 'Active',
    },
    {
      name: 'done',
      label: 'Done',
    },
  ];

  return buttons.map(({ name, label }) => {
    const isActive = filterMode === name;
    const buttonClassName = classNames('btn', {
      'btn-info': isActive,
      'btn-outline-secondary': !isActive,
    });
    return (
      <button
        onClick={() => setFilterMode(name)}
        key={name}
        type="button"
        className={buttonClassName}
      >
        {label}
      </button>
    );
  });
};

export default ItemStatusFilter;
