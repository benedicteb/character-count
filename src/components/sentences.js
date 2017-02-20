import React from 'react';
import { Row, Column } from 'react-foundation';

import Histogram from './histogram';
import { stringToLetters, textToSentences } from '../utils';

const histogramPerSentence = (text) => (
  textToSentences(text).map(
    (sentence, index) => (
      <Column key={index} small={12} large={6}>
        <Histogram text={sentence} title={{
          display: true,
          text: sentence
        }}/>
      </Column>
  ))
);

const Sentences = ({ text }) => (
  <div>

    <Row className="display">
      <Column small={12} large={12}>
        <h3>Sentences</h3>

        <p>
          One histogram per sentence in the above text will appear here as you
          type.
        </p>

      </Column>
    </Row>

    <Row className="display">
      { histogramPerSentence(text) }
    </Row>

  </div>
);

export default Sentences;
