import React from 'react';

function Link(props) {
  return (
    <div>
      {props.link.description} {props.link.url}{' '}
    </div>
  );
}

export default Link;
