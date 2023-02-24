import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="page_content">
      {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
