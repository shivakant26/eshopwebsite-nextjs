import ProtectedRoutes from "../Routes/protectedRoutes";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="page_content">
        <ProtectedRoutes>{children}</ProtectedRoutes>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
