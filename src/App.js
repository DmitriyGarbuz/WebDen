import React from 'react';
import Header from './header/Header';
import Plus from './plus/Plus';
import Services from './services/Services';
import Work from './work/Work';
import Portfolio from './portfolio/Portfolio';
import Test from './test/Test';
import Contact from './contact/Contact';

const App = (props) => {
  return (
  <div>
<Header/>
<Plus/>
<Services/>
<Work/>
<Portfolio/>
<Test/>
<Contact/>
  </div>
  )};

export default App;
