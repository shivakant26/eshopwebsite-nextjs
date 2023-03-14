import { useRouter } from "next/router";
import { useEffect } from "react";

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userId");
    router.push("/");
  }, [router]);
  return <></>;
};

export default Logout;
