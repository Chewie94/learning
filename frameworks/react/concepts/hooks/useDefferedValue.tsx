// React 18
// https://reactjs.org/docs/hooks-reference.html#usedeferredvalue
// https://academind.com/tutorials/react-usetransition-vs-usedeferredvalue

// useDeferredValue accepts a value and returns a new copy of the value that will defer to more urgent updates. 
// If the current render is the result of an urgent update, like user input, React will return the previous value and then render the new value after the urgent render has completed.
// works as smart "debounce", based on high and low priority tasks happening in react

// Difference is that useTransition() wraps the state updating code, whilst useDeferredValue() wraps a value that's affected by the state update. You don't need to (and shouldn't) use both together, since they achieve the same goal in the end.
// Instead, it makes sense to prefer useTransition(), if you have some state update that should be treated with a lower priority and you have access to the state updating code. If you don't have that access, use useDeferredValue().

// App.tst
import React, { useDeferredValue, useState } from 'react';
import { Products } from './List';

function App() {
  const [value, setValue] = useState('');
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const deferredValue = useDeferredValue(value);
  const isStale = deferredValue !== value;

  return (
    <div>
      <input 
        style={{ color: isStale ? 'dimgray' : 'black' }} value={value} onChange={handleChange} />
      <Products searchTerm={deferredValue} />
    </div>
  );
}

export default App;

// List.tsx
import { useMemo } from 'react';

const COUNT = 10000; // Tweak based on your machine performance to get some lag

export function Products({ searchTerm }: { searchTerm: string }) {
  const items = useMemo(() => {
    return [...Array(COUNT)].map(
      () => (searchTerm ? (searchTerm + ' ') : '')
        + Math.floor(Math.random() * COUNT)
    );
  }, [searchTerm]);

  return <List items={items} />
}


/** 
 * This component is intentionally designed to be slow 
 * - bad keys
 * - inline styles
 */
function List({ items }: { items: string[] }) {
  return (
    <div>
      {items.map((product, i) => (
        <div key={i + product} style={{
          margin: '1rem 0',
          backgroundColor: 'lightskyblue',
          borderRadius: '4px',
          boxShadow: '0 1px 4px rgba(0, 0, 0, 0.25)',
          padding: '10px',
        }}>{product}</div>
      ))}
    </div>
  );
}