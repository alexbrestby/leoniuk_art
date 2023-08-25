import Masonry from 'react-masonry-css'
import { useState, useEffect } from 'react';

interface Image {
  id: string;
  url: string;
  title: string;
}

function ImageList() {
  const [images, setImages] = useState<Image[]>([]);
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  useEffect(() => {
    fetch('https://api.leoniuk.dev/images')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setImages(data);
      });
  }, []);

  return (

    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {images.map(image => (
        <img style={{ maxWidth: '100%' }} key={image.id} src={`https://api.leoniuk.dev/uploads/img_webp/${image.url}`} alt={image.title} />
      ))}
    </Masonry>
  );
}

export default ImageList
