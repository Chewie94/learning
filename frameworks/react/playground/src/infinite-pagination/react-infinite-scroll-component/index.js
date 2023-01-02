import React, {useState, useEffect} from 'react';
import '../index.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';

function InfiniteScrollComponent() {
    const [photos, setPhotos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalCount, setTotalCount] = useState(0);

    console.log('photos length', photos.length);
    console.log('totalCount', totalCount);

    useEffect(() => {
          axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10&_page=1')
            .then(response => {
              setPhotos(response.data);
              setCurrentPage(2);
              setTotalCount(response.headers['x-total-count']);
            })
      }, []);

    const fetchMore = () => {
        axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${currentPage}`)
            .then(response => {
              setPhotos([...photos, ...response.data]);
              setCurrentPage(prevState => prevState + 1);
            })
    }

    return (
        <div>
            <InfiniteScroll
                dataLength={currentPage * 10}
                next={fetchMore}
                hasMore={photos.length < totalCount}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: "center" }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                {photos.map(({id, title, thumbnailUrl}) => <div key={`${id}-${title}`} className='photo'>
                    <div className='title'>{id}-{title}</div>
                    <img src={thumbnailUrl} alt=''/>
                </div>)}
            </InfiniteScroll>
        </div>
    );
}

export default InfiniteScrollComponent ;