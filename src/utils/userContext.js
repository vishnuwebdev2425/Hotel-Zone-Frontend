import { createContext } from "react";

const userContext = createContext({
  user: {
    username: "",
    number: "",
  },
  setUser: () => {},
});

export default userContext;
