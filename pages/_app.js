import Layout from "@/component/Layout";
import store from "@/Services/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminLayout from "./admin/Layout/adminlayout";

export default function App({ Component, pageProps }) {
  let adminToken = typeof window!=="undefined" ?  localStorage.getItem("adminToken"):null;

  return (
    <>
      <Provider store={store}>
        <Layout>
          {adminToken !== null ? <AdminLayout>
          <Component {...pageProps} />
          </AdminLayout>
          
        :          <Component {...pageProps} />
      }
          <ToastContainer />
        </Layout>
      </Provider>
    </>
  );
}
