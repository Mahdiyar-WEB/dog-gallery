import { useEffect, useState, lazy, Suspense } from "react";
import loading from "../../assets/loading.svg";
import styles from "./favorites.module.css";
const GalleryItem = lazy(
  () => import("../../components/GalleryItem/GalleryItem")
);


const Favorites = () => {
  const [links, setLinks] = useState<string[]>([]);

  useEffect(() => {
    // @ts-ignore
    const favoritesLinks = JSON.parse(localStorage.getItem("favorites")) || [];
    const removeDuplicate = new Set([...favoritesLinks]);
    setLinks([...removeDuplicate]);
  }, []);

  return (
    <main className={styles.container}>
      {links.map((link, index) => {
        return (
          <Suspense key={index} fallback={<img src={loading} />}>
            <GalleryItem urlProp={link} />
          </Suspense>
        );
      })}
    </main>
  );
};
export default Favorites;
