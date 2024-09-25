import React, { createContext, useContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch user data
  const checkUserLogin = async () => {
    try {
      const response = await fetch('https://psychic-adventure-5wppx6w64xvcv5v4-5003.app.github.dev/api/auth/v1/users/me', {
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

  // Check user login when the component mounts
  useEffect(() => {
    checkUserLogin();
  }, []);

  return (
    <UserContext.Provider value={{ user, loading }}>
      {children}
    </UserContext.Provider>
  );
};
