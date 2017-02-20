import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';

import store from './store';
import App from './components';

const mapDispatchToProps = (dispatch) => (
  {
    onTextChange: (event) => {
      dispatch({
        type: 'TEXT_FIELD_CHANGED',
        value: event.target.value
      });
    }
  }
);

const mapStateToProps = (state) => (
  {
    text: state.text
  }
);

const StateAwareApp = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
  <Provider store={store}>
    <StateAwareApp />
  </Provider>
  , document.getElementById('main'));
