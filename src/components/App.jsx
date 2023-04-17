import '../index.css';
import {useState,useEffect} from 'react';
import { fetchImages } from './api';
import { Searchbar, ImageGallery, Button, Modal } from './index';
import { MagnifyingGlass } from 'react-loader-spinner';

const App = () => {
  const [value, setValue] = useState('');
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = value => {
    setValue(value);
  };
  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
  };
  useEffect(() => {
    if (value !== '') {
      setIsLoading(true);
      setTimeout(() => {
        fetchImages(value, 1)
          .then(data => {
            setData(data);
            setIsLoading(false);
          })
          .catch(error => console.log(error));
      }, 2000);
    }
  }, [value]);

  useEffect(() => {
    if (page !== 1) {
      setIsLoading(true);
      fetchImages(value, page)

        .then(data => { 
          setData(prevState => [...prevState, ...data]);
          setIsLoading(false);  
        })
        .catch(error => console.log(error));
    }
  }, [page, value]);       

  const  handleModalClick = largeImageURL => {
    setLargeImageURL(largeImageURL);
    setModalOpen(true);
  };
  const onModalClose = () => {
    setModalOpen(false);
  };
    return (
      <>
        <Searchbar onSubmit={handleSubmit} />
        {isLoading && (
          <MagnifyingGlass visible={true} glassColor="#c0efff" />
        )}
        <ImageGallery
          data={data}
          modalClick={handleModalClick}
        />
        {data.length > 0 ? (
          <Button handleLoadMore={handleLoadMore} />
        ) : null}
        {modalOpen && (
          <Modal
            largeImageURL={largeImageURL}
            onClose={onModalClose}
          />
        )}
      </>
    );
  }

export default App;
