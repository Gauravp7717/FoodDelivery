import { use, useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlinestatus, setonlinestatus] = useState();

  useEffect(() => {
    window.addEventListener("offline", () => {
      setonlinestatus(false);
    });
    window.addEventListener("online", () => {
      setonlinestatus(true);
    });
  }, []);
  return onlinestatus;
};

export default useOnlineStatus;
