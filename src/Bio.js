import React from 'react';

export default function Bio(props) {
  const { name } = props.match.params;

  if (name === 'morrell') {
    return <p>Morrell Bio</p>
  }
  else if (name === 'becknell') {
    return <p>Becknell Bio</p>
  }
  else {
    return <p>Select a faculty member</p>
  }
}
