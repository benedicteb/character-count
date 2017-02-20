import React from 'react';

import { stringToLetters, textToSentences } from '../utils';

const Stats = ({ text }) => (
  <table className="hover">
    <tbody>
      <tr>
        <td>Characters</td>
        <td>{ text.length }</td>
      </tr>
      <tr>
        <td>Letters</td>
        <td>{ stringToLetters(text).length }</td>
      </tr>
      <tr>
        <td>Sentences</td>
        <td>{ textToSentences(text).length }</td>
      </tr>
    </tbody>
  </table>
);

export default Stats;
