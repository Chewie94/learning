import React, { useEffect } from 'react';
import { render } from 'react-dom';

const C1 = ({ children }) => {
    console.log(1);

    useEffect(() => {
        console.log(2);
    });

    return <div ref={element => console.log(5)}>{children}</div>
};

const C2 = ({ children }) => {
    console.log(3);

    useEffect(() => {
        console.log(4);
    });
};

const App = () => <C1><C2/></C1>
render(<App />, document.getElementById('root'));

// 1 - 3 - 4 - 2

// with ref:
// 1 - 3 - 5 - 4 - 2