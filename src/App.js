import { Global } from '@emotion/react';
import Router from './routes';
import { reset } from './styles/reset';
import DefaultLayout from './template/defaultLayout';

function App() {
  return (
    <div className="App">
      <Global styles={reset} />
      <DefaultLayout>
        <Router />
      </DefaultLayout>
    </div>
  );
}

export default App;
