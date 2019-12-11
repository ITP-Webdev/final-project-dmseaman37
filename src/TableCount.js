import React from 'react';
import PropTypes from 'prop-types';

export default function TableCount(props) {
  const { table, children } = props;
  const count = props.table.length;

  if (typeof(children) === 'function') {
    return children(table);
  } else {
    return (
      <p>{count} Entries</p>
    );
  }
}

TableCount.propTypes = {
  table: PropTypes.array.isRequired
};
