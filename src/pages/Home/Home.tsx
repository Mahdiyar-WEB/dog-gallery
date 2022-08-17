import { useState } from "react";
import GalleryItem from "../../components/GalleryItem/GalleryItem";
import styles from "./home.module.css";



const Home = () => {
  const [repeats, setRepeats] = useState<number>(6);
  const elements = [];
  for (let i = 0; i < repeats; ++i) elements[i] = i;

  return (
    <main className={styles.container}>
      {elements.map((element) => {
        return <GalleryItem key={element} />;
      })}
      <button className="btn btn-primary" onClick={()=> setRepeats(prev=> prev+6)}>Show More</button>
    </main>
  );
};

export default Home;
