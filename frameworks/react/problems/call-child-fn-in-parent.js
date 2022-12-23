// https://bobbyhadz.com/blog/react-call-function-in-child-component

// To call a child's function from a parent component in React:

// Direct approach:
// 1. Wrap the Child component in a forwardRef.
// 2. Use the useImperativeHandle hook in the child to add a function to the Child.
// 3. Call the Child's function from the Parent using the ref, e.g. childRef.current.childFunction().

import {forwardRef, useImperativeHandle, useRef} from 'react';

const Child1 = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    childFunction1() {
      console.log('child function 1 called');
    },
    childFunction2() {
      console.log('child function 2 called');
    },
  }));

  return (
    <div>
      <h2>child content</h2>
    </div>
  );
});

export default function Parent() {
  const childRef = useRef(null);

  const handleClick = () => {
    childRef.current.childFunction1();

    childRef.current.childFunction2();
  };

  return (
    <div>
      <Child ref={childRef} />

      <h2>parent content</h2>

      <button onClick={handleClick}>Call child functions</button>
    </div>
  );
}

// Indirect approach:
// 1. Declare a count state variable in the Parent component.
// 2. Add the count variable to the dependencies of the useEffect hook in the Child.
// 3. Increment the count in the Parent to re-run the child's useEffect.

import {useEffect, useState} from 'react';

const Child2 = ({count}) => {
  useEffect(() => {
    const childFunction1 = () => {
      console.log('child function 1 called');
    };

    const childFunction2 = () => {
      console.log('child function 2 called');
    };

    // 👇️ don't run on initial render
    if (count !== 0) {
      childFunction1();

      childFunction2();
    }
  }, [count]);

  return (
    <div>
      <h2>child content</h2>
    </div>
  );
};

export default function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(current => current + 1);
  };

  return (
    <div>
      <Child count={count} />

      <h2>parent content</h2>

      <button onClick={handleClick}>Call child functions</button>
    </div>
  );
}
