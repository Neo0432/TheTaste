import { useEffect, useState } from "react";
import { HeaderMain } from "./modules/HeaderMain";
import { Welcome } from "./index/widgets/Welcome";
import { Cards } from "./index/widgets/Cards";
import { Offers } from "./index/widgets/Offers";
import { Featuares } from "./index/widgets/Features";
import { About } from "./index/widgets/About";
import { Footer } from "./modules/Footer";
import styles from "./App.module.css";

export function App() {
  const [details, setDetails] = useState({
    isLoading: true,
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDetails((details) => ({ ...details, isLoading: false }));
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div>
      {details.isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <HeaderMain />
          <main className={styles.main}>
            <Welcome />
            <Cards />
            <Offers />
            <Featuares />
            <About />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
