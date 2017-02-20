import React from 'react';

const TextField = ({ onTextChange }) => (
  <textarea rows="12" placeholder="Type any text..." onChange={onTextChange}>
  </textarea>
);

export default TextField;
