import React, { createContext, useMemo, useContext } from "react";
import { io } from "socket.io-client";
console.log(process.env.REACT_APP_BACKEND);

const SocketContext = createContext(null);

export const useSocket = () => {
  const socket = useContext(SocketContext);
  return socket;
};

export const SocketProvider = (props) => {
  // const socket = useMemo(() => io("https://rtc-project.vercel.app/"), []);
  const socket = useMemo(() => io("https://rtc-project-9yds.onrender.com/"), []);

  return (
    <SocketContext.Provider value={socket}>
      {props.children}
    </SocketContext.Provider>
  );
};
