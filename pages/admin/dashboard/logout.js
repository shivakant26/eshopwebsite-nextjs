import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

export const Logout = () => {
  const router = useRouter();
  
  useEffect(()=>{
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminId");
      router.push("/");
  },[router])

  return (
    <div>logout</div>
  )
}
export default Logout;