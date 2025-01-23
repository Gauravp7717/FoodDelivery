import { use, useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlinestatus, setonlinestatus] = useState();

  useEffect(() => {
    window.addEventListener("online", () => {
      setonlinestatus(true);
    });
    window.addEventListener("offline", () => {
      setonlinestatus(false);
    });
  }, []);
  return onlinestatus;
};

export default useOnlineStatus;
