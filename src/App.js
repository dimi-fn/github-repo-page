import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import { Layout } from './layout';
// import * as Pages from './pages';

import { SearchForm,  SearchUser} from './components';


const App = () => {
    return (
      <>
      {/* <Routes> */}
        <SearchForm />
        <SearchUser />
      {/* </Routes> */}
      </>
    );
  };

export default App;
