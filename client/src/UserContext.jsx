import React, { createContext, useContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch user data
const checkUserLogin = async () => {
    try {
      const response = await fetch('https://your-server-domain.com/api/auth/v1/users/me', {
        credentials: 'include', // Ensures cookies are sent along
      });
      const data = await response.json();
      console.log('User data:', data);
      if (data.user) {
        setUser(data.user); // Set the user data in your frontend
      } else {
        setUser(null); // Handle case where user data is not returned
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      setUser(null);
    } finally {
      setLoading(false); // Set loading state to false after completion
    }
};

  

  useEffect(() => {
    checkUserLogin();
  }, []);

  return (
    <UserContext.Provider value={{ user, loading }}>
      {children}
    </UserContext.Provider>
  );
};
