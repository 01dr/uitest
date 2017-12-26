import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Root from './components/Root';

const render = (App) => {
  ReactDOM.render(
    <AppContainer>
      <App/>
    </AppContainer>,
    document.getElementById('root')
  );
};

render(Root);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    render(Root);
  });
}
