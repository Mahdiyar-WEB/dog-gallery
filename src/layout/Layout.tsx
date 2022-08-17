import { FC, ReactElement, Suspense } from "react";
import Header from "./Header/Header";
import Loading from "../assets/loading.svg";

interface IProps {
  children: ReactElement;
}

const Layout: FC<IProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <div style={{height:"calc(100vh - 56px)"}} className="d-flex justify-content-center align-items-center">
            <img src={Loading} />
          </div>
        }
      >
        {children}
      </Suspense>
    </>
  );
};

export default Layout;
