import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main/Main';
import { AppContainer } from 'react-hot-loader';

ReactDOM.render(<Main />, document.getElementById('main'));

if (module.hot) {
  module.hot.accept('./components/Main/Main', () => {
    const NextApp = require('./components/Main/Main').default;
    ReactDOM.render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
      document.getElementById('main')
    );
  });
}
