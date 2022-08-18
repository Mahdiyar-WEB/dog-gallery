import { lazy, Suspense, useState } from "react";
import styles from "./home.module.css";
import loading from "../../assets/loading.svg"
const GalleryItem = lazy(
  () => import("../../components/GalleryItem/GalleryItem")
);

const Home = () => {
  const [repeats, setRepeats] = useState<number>(6);
  const elements = [];
  for (let i = 0; i < repeats; ++i) elements[i] = i;

  return (
    <main className={styles.container}>
      {elements.map((element) => {
        return (
          <Suspense key={element} fallback={<img src={loading} />}>
            <GalleryItem  />
          </Suspense>
        );
      })}
      <button
        className="btn btn-primary"
        onClick={() => setRepeats((prev) => prev + 6)}
      >
        Show More
      </button>
    </main>
  );
};

export default Home;
