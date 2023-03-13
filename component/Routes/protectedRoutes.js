import { appRoute } from '@/contants';
import { Router, useRouter } from 'next/router';
const isBrowser = () => typeof window !== "undefined";

const ProtectedRoutes = ({ children }) => {
   
  let adminToken = typeof window!=="undefined" ?  localStorage.getItem("adminToken"):null;
  let userToken = typeof window!=="undefined" ?  localStorage.getItem("userToken"):null;


   let path= useRouter();
   
    const unProtected = [
        appRoute.HOME,
        appRoute.ABOUT,
        appRoute.CONTACT,
        appRoute.ADMIN,
        appRoute.WOMEN,
        appRoute.USER,
        appRoute.SINGLEPRODUCT,
        appRoute.REGISTER,
        appRoute.EVERYTHINGS,
        appRoute.MEN,
        appRoute.ACCESSORIES
        // appRoute.CART
    ]
    const isUserProtected = [
        appRoute.HOME,
        appRoute.SINGLEPRODUCT,
        appRoute.USERDASHBOARD,
        appRoute.USERPROFILE,
        appRoute.USERLOGOUT,
        appRoute.USERCHANGEPASSWORD,
        appRoute.CART
    ]
    const isAdminProtected = [
        appRoute.ADMINDASHBOARD,
        appRoute.ALLUSER,
        appRoute.ADMINPROFILE,
        appRoute.ADMINSETTING,
        appRoute.ADDPRODUCT
    ]
    
    const pathIsUnProtected = unProtected.indexOf(path.pathname) === -1;
    const pathAdminProtected = isAdminProtected.indexOf(path.pathname) === -1;
    const pathUserProtected = isUserProtected.indexOf(path.pathname) === -1;


    if (isBrowser() && !adminToken && !userToken  && pathIsUnProtected) {
        path.push(appRoute.HOME)
      } else if (isBrowser() && adminToken && pathAdminProtected) {
        path.push(appRoute.ADMINDASHBOARD);
      }
      else if (isBrowser() && userToken && pathUserProtected) {
        path.push(appRoute.USERDASHBOARD);
      }
    return children;
}
export default ProtectedRoutes;