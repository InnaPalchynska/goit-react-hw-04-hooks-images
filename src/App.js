import { useState, useEffect } from 'react';

import './App.css';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Modal from './components/modal/Modal';

import getImagesApi from './components/Services/api';

export default function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const handleAddQuery = q => {
    setQuery(q);
  };

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      toggleModal();
    }
  };

  const getImages = () => {
    getImagesApi(query, page)
      .then(data => setImages([...images, ...data.hits]))
      .finally(() => {
        setLoader(false);
        smoothScroll();
      });
  };

  const toNextPage = () => {
    setPage(prevState => prevState + 1);
  };

  const smoothScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  const toggleModal = () => {
    setOpenModal(prevState => !prevState);
  };

  const handleOnClick = e => {
    setModalImage(e);
    toggleModal();
  };

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!query) {
      return;
    }
    setImages([]);
    setPage(1);
    getImages(query, page);
  }, [query]);

  useEffect(() => {
    if (!query && page === 1) {
      return;
    }
    getImages(query, page);
  }, [page]);

  return (
    <>
      {loader && <Loader type="Bars" color="#3f51b5" height={80} width={80} />}
      <Searchbar onSubmit={handleAddQuery} />
      {images && <ImageGallery images={images} onClick={handleOnClick} />}
      {images.length > 0 && <Button onClick={toNextPage} />}
      {openModal && (
        <Modal onClick={handleBackdropClick} modalImage={modalImage} />
      )}
    </>
  );
}
