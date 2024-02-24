import { createContext, useReducer, useEffect } from "react";

// Define the context
const AuthContext = createContext();

// Define the reducer
const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      // Save user info to local storage (stringify before saving)
      localStorage.setItem("user", JSON.stringify(action.payload));
      console.log("User, returning from  from context", action.payload);
      return { ...state, isAuthenticated: true, user: action.payload };
    case "LOGOUT":
      // Clear user info from local storage
      localStorage.removeItem("user");
      return { ...state, isAuthenticated: false, user: null };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

// Define the provider
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    isAuthenticated: false,
    user: null,
  });

  useEffect(() => {
    // Load user info from local storage when the component mounts
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      // Parse the stored user string back into an object
      dispatch({ type: "LOGIN", payload: JSON.parse(storedUser) });
    }
  }, []);

  const login = (credentials) => {
    // No need to stringify here, assuming credentials are already an object
    dispatch({ type: "LOGIN", payload: credentials });
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider value={{ state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
