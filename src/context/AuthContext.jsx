import {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const AuthContext = createContext();

export const AuthProvide = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) setUser(savedUser);
  }, []);

  const signup = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    setUser(data);
  };

  const login = (data) => {
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (
      savedUser &&
      savedUser.email === data.email &&
      savedUser.password === data.password
    ) {
      setUser(savedUser);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    // localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
