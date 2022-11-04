// https://reactjs.org/docs/code-splitting.html#avoiding-fallbacks

// In case of tab switching we may not won't to show suspense fallback, but rather old ui - for that use React.startTransition(callback) API
import React, { Suspense } from 'react';
import Tabs from './Tabs';
import Glimmer from './Glimmer';

const Comments = React.lazy(() => import('./Comments'));
const Photos = React.lazy(() => import('./Photos'));

function MyComponent() {
  const [tab, setTab] = React.useState('photos');
  
  function handleTabSelect(tab) {
    setTab(tab);
  };

  return (
    <div>
      <Tabs onTabSelect={handleTabSelect} />
      <Suspense fallback={<Glimmer />}>
        {tab === 'photos' ? <Photos /> : <Comments />}
      </Suspense>
    </div>
  );
}

// Should use
function handleTabSelect(tab) {
    startTransition(() => {
      setTab(tab);
    });
  }