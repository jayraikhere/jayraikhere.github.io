// import logo from './logo.svg';
import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavLink } from "react-router-dom";

import Header from './MyComponents/header';
import Footer from './MyComponents/footer';

import Home from './MyComponents/home';
import Blog from './MyComponents/blog';
import Videos from './MyComponents/videos';
import Contact from './MyComponents/contact';

// const Home = lazy(() => import('../routes/Home'));
// const About = lazy(() => import('../routes/About'));

function App() {
  return (
<>

    <Router>
    <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/videos" component={Videos} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Suspense>
    </Router>

    <Footer />
</>
  );
}

export default App;
