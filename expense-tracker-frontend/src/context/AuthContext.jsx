import { createContext, useState, useContext } from 'react';
import authService from '../services/authService'; // Import your service correctly

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
const [user, setUser] = useState({ username: "testuser" });


  // Handle login
  const login = async (formData) => {
    try {
      const response = await authService.login(formData);
      setUser(response.data); // Make sure response.data is set
    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
      throw error;
    }
  };

  // Handle signup
  const signup = async (formData) => {
    try {
      const response = await authService.signup(formData);
      setUser(response.data);
    } catch (error) {
      console.error('Signup failed:', error.response?.data || error.message);
      throw error;
    }
  };

  // Handle logout
  const logout = () => {
    setUser(null);
    // Optionally call a logout API if needed
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext easily
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
