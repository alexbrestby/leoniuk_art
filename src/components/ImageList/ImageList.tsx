import Masonry from 'react-masonry-css'
import { useState, useEffect } from 'react';
import Styles from './ImageList.module.css';

const apiLink = import.meta.env.DEV ? 'http://localhost:5000' : 'https://api.leoniuk.dev';

interface Image {
  id: string;
  url: string;
  title: string;
}

function ImageList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [images, setImages] = useState<Image[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // Состояние для увеличенного изображения
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  const imagePopup = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  }

  useEffect(() => {
    if (fetching) {
      // console.log('fetching')
      fetch(`${apiLink}/images?page=${currentPage}&limit=12`)
        .then(res => {
          setTotalCount(parseInt(res.headers.get('x-total-count') as string));
          return res.json();
        })
        .then(data => {
          setImages([...images, ...data]);
          setCurrentPage(prevState => prevState + 1);
        })
        .finally(() => setFetching(false));
    }
  }, [fetching, currentPage, images]);


  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return function() {
      document.removeEventListener('scroll', scrollHandler)
    }
  })

  const scrollHandler = () => {
    if (document.documentElement.scrollHeight - (document.documentElement.scrollTop + window.innerHeight) < 100 &&
      images.length < totalCount) {
      setFetching(true);
    }
  }

  return (
    <div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map(image => (
          <img
            className={Styles.MyImages}
            key={image.id}
            src={`${apiLink}/uploads/img_webp/${image.url}`}
            alt={image.title}
            onClick={() => imagePopup(`${apiLink}/uploads/img_webp/${image.url}`)}
            width="500"
          />
        ))}
      </Masonry>
      {selectedImage && (
        <div className={Styles.ImagePopup}>
          <img
            src={selectedImage}
            alt="Popup"
            onClick={() => setSelectedImage(null)} // Закрыть попап по клику на увеличенное изображение
          />
        </div>
      )}
    </div>
  );
}

export default ImageList;

