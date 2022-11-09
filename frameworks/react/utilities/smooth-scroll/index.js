import React, { forwardRef, useRef } from 'react';

const ComponentWhereToScroll = forwardRef((_, ref) => <div ref={ref}/>);

export const MyComponent = () => {
    const ref = useRef();
    const smoothScrollTo = () => {
        ref.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        });
    };

    return (
        <>
            <button onClick={() => smoothScrollTo()} />
            <ComponentWhereToScroll ref={ref} />
        </>
    );
};
