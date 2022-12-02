import { useEffect, useState } from "react";

const useVerified = (email) => {
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    if (email) {
      fetch(`https://assignment-12-resale-product-server.vercel.app/seller/verified/${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsVerified(data.isVerified); // true or false
        });
    }
  }, [email]);
  return [isVerified];
};

export default useVerified;
