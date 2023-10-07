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
    fetch(`${apiLink}/images`)
      .then(res => res.json())
      .then(data => {
        setImages(data);
      });
  }, []);

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

