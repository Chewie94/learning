// https://reactjs.org/docs/code-splitting.html
// Why needed? - in SPA all code is in one bundle, so in case of large project initial load page time can be long.
// The solution is to use code-splitting technique - lazy load components, routes that are not necessary needed once user load page.
// Most likely it's gonna be routes - no need for user to load all page content if he's gonna just see blogposts, etc.
// Remember to wrap app with ErrorBoundary, so in case module fails to load it will be handled

// Simple example:
import React, { Suspense } from 'react';
import MyErrorBoundary from './MyErrorBoundary';

const OtherComponent = React.lazy(() => import('./OtherComponent'));
const AnotherComponent = React.lazy(() => import('./AnotherComponent'));

const MyComponent = () => (
  <div>
    <MyErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <section>
          <OtherComponent />
          <AnotherComponent />
        </section>
      </Suspense>
    </MyErrorBoundary>
  </div>
);

// Route-based code splitting example
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Suspense>
  </Router>
);