import axios from "axios";
import { FC, useEffect, useState } from "react";
import styles from "./galleryItem.module.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

interface IImages {
  url: string;
  error: string;
}
interface IPorps {
  urlProp?: any;
}

const GalleryItem: FC<IPorps> = ({ urlProp }) => {
  const [imageURL, setImageURL] = useState<IImages>({ url: "", error: "" });
  const [isLiked, setIsLiked] = useState(false);

  const activeURL = urlProp || imageURL.url;

  const fetchImage = async () => {
    await axios
      .get("https://random.dog/woof.json")
      .then((res) => {
        setImageURL({ url: res.data.url, error: "" });
      })
      .catch((err) => {
        setImageURL({ url: "", error: err.message });
      });
  };

  const checkImageFormat = (url: string) => {
    if (url.endsWith(".mp4") || url.endsWith(".gif") || url.endsWith(".webm")) {
      fetchImage();
    } else {
      return (
        <img onDoubleClick={handleLike} src={url} className={styles.image} />
      );
    }
  };

  const handleLike = () => {
    // @ts-ignore
    const clonedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    
    if (!isLiked ) {
      localStorage.setItem(
        "favorites",
        JSON.stringify([...clonedFavorites, activeURL])
      );
      setIsLiked(true);
    } else {
      const filteredFavorites = clonedFavorites.filter(
        (item: string) => item !== activeURL
      );
      localStorage.setItem("favorites", JSON.stringify([...filteredFavorites]));
      setIsLiked(false);
    }
  };

  useEffect(() => {
    if (!imageURL.url && !urlProp) {
      fetchImage();
    }
  }, []);

  useEffect(() => {
    urlProp && setIsLiked(true);
  }, []);

  return (
    <section className={styles.imageContainer}>
      {imageURL.error && (
        <p className="bg-danger text-white">{imageURL.error}</p>
      )}
      {checkImageFormat(activeURL)}
      <button onClick={handleLike} className={styles.like}>
        {isLiked ? <AiFillHeart size={25} /> : <AiOutlineHeart size={25} />}
      </button>
    </section>
  );
};
export default GalleryItem;
