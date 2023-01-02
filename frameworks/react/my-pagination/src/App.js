import React, {useEffect, useState} from 'react';
import './index.css';
import axios from 'axios';

function App() {
  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    if(fetching) {
      console.log('fetching')
      axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${currentPage}`)
        .then(response => { 
          setPhotos([...photos, ...response.data]);
          setCurrentPage(prevState => prevState + 1);
          setTotalCount(response.headers['x-total-count']);
        })
        .finally(() => setFetching(false));
    }
  }, [fetching]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return () => document.removeEventListener('scroll', scrollHandler);
  }, []);

  const scrollHandler = (e) => {
    // total page height including scroll
    // console.log('scrollHeight', e.target.documentElement.scrollHeight);
    // current scrollbar position starting from top of a page
    // console.log('scrollTop', e.target.documentElement.scrollTop);
    // the height of visible part of a page - "height of browser"
    // console.log('innerHeight', window.innerHeight);

    if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 && photos.length < totalCount) {
      setFetching(true);
    }
  }

  return (
    <div className="container">
      {photos.map(({id, title, thumbnailUrl}) => <div className='photo'>
        <div className='title'>{id}-{title}</div>
        <img src={thumbnailUrl} alt=''/>
      </div>)}
    </div>
  );
}

export default App;
 