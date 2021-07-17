import React from 'react';

export const Link = props => {
  return <a href={props.to}>{props.children}</a>;
};
