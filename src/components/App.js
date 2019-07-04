import React, { Fragment } from 'react';

import '../styles/App.css';
import LinkList from '../components/Linklist';
import CreateLink from '../components/CreateLink';

function App() {
  return (
    <Fragment>
      <LinkList />
      <CreateLink />
    </Fragment>
  );
}

export default App;
