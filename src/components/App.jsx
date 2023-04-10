import { useState } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';

export function App() {
  const [searchImg, setSearchImg] = useState(null);

  const setSearchText = data => {
    setSearchImg(data);
  };

  return (
    <>
      <Searchbar liftData={setSearchText} />
      <ImageGallery searchByInputData={searchImg} />
    </>
  );
}
