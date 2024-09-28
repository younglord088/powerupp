import React, { createContext, useContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch user data
  const checkUserLogin = async () => {
    try {
      const response = await fetch('https://powerup-server.vercel.app/api/auth/v1/users/me', {
        credentials: 'include',
      });
      const data = await response.json();
      console.log('User data:', data);
      if (data.user) {
        setUser(data.user);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      setUser(null);
    } finally {
      setLoading(false);
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
