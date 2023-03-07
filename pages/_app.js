import Layout from "@/component/Layout";
import UserLayout from "@/component/UserLayout";
import store from "@/Services/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminLayout from "../component/AdminLayout";

export default function App({ Component, pageProps }) {
  let adminToken =
    typeof window !== "undefined" ? localStorage.getItem("adminToken") : null;

  let userToken =
    typeof window !== "undefined" ? localStorage.getItem("userToken") : null;

  return (
    <>
      <Provider store={store}>
        <Layout>
          {adminToken !== null ? (
            <AdminLayout>
              <Component {...pageProps} />
            </AdminLayout>
          ) : userToken ? (
            <UserLayout>
              <Component {...pageProps} />
            </UserLayout>
          ) : (
            <Component {...pageProps} />
          )}
          <ToastContainer />
        </Layout>
      </Provider>
    </>
  );
}
