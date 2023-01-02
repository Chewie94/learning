import React, { useState, useRef, useCallback } from 'react';
import useBookSearch from './useBookSearch';

function IntersectionObserverVer() {
    const [query, setQuery] = useState('');
    const [pageNumber, setPageNumber] = useState(1);

    const observer = useRef();
    const {books, hasMore, loading, error} = useBookSearch(query, pageNumber);

    const lastBookElementRef = useCallback(node => {
        if (loading) {
            return;
        }

        if (observer.current) {
            observer.current.disconnect();
        }

        observer.current = new IntersectionObserver(entries => {
            console.log('entries', entries);
            if (entries[0].isIntersecting && hasMore) {
                console.log('last book element is visible!');
                setPageNumber(prevState => prevState + 1);
            }
        });

        if (node) {
            observer.current.observe(node);
        }
    }, [loading, hasMore])


    const handleSearch = (e) => {
        setQuery(e.target.value);
        setPageNumber(1);
    }

    return (
        <>
            <input type="text" value={query} onChange={handleSearch}></input>
            {books.map((book, index) => {
                if (books.length === index + 1) {
                return <div ref={lastBookElementRef} key={book}>{book}</div>
                } else {
                return <div key={book}>{book}</div>
                }
            })}
            <div>{loading && 'Loading...'}</div>
            <div>{error && 'Error'}</div>
        </>
    );
}

export default IntersectionObserverVer;