import React from 'react';
import { Row, Column } from 'react-foundation';

import TextField from './textField';
import Histogram from './histogram';
import Sentences from './sentences';
import Stats from './stats';

const App = ({ text, onTextChange }) => (
  <div>

    <Row className="display">
      <Column small={12} large={12}>
        <h1>Character count</h1>

        <p>Count the occurence of characters in your text.</p>
      </Column>
    </Row>

    <Row className="display">
      <Column small={12} large={6}>
        <TextField onTextChange={onTextChange} />
        <Stats text={text} />
      </Column>
      <Column small={12} large={6}>
        <Histogram text={text} title={{
          display: true,
          text: 'All text'
        }} />
      </Column>
    </Row>

    <Row className="display">
      <Column small={12} large={12}>
        <hr />
      </Column>
    </Row>

    <Sentences text={text} />

  </div>
);

export default App;
