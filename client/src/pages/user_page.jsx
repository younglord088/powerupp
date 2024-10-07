import React, { useContext } from "react";
import { UserContext } from '../UserContext.jsx'; 
import Footer from "../components/layout/footer.jsx";

const Use = () => {
  const { user, activeSessionsCount, source } = useContext(UserContext); 

  
  if (!user) {
    return (
      <div className="flex justify-center items-center h-[80vh] w-full bg-[#e0f7fa] font-roboto">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-[80vh] w-full bg-[#e0f7fa] font-roboto">
      <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-xs md:max-w-md lg:max-w-lg text-center border border-[#0288d1]">
        
        <h2 className="text-2xl mb-6 text-[#0288d1]">User Profile</h2>
        <p className="text-lg mb-4 text-[#00796b]">
          <strong>ID:</strong> {user.id}
        </p>
        <p className="text-lg mb-4 text-[#00796b]">
          <strong>Name:</strong> {user.name || "Not provided"}
        </p>
        <p className="text-lg mb-4 text-[#00796b]">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="text-lg mb-4 text-[#00796b]">
          <strong>Username:</strong> {user.username}
        </p>
        <p className="text-lg mb-4 text-[#00796b]">
          <strong>Verification Status:</strong> {user.verificationStatus || "Not Verified"}
        </p>
        <p className="text-lg mb-4 text-[#00796b]">
          <strong>Active Sessions:</strong> {activeSessionsCount}
        </p>
        <p className="text-sm text-[#00796b]">
          <strong>Source:</strong> {source || "Unknown"}
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Use;
