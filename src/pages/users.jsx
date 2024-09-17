import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import { useUser } from '../UserContext'; // Adjust the import path based on your file structure

const UserContribution = () => {
  const [selectedForm, setSelectedForm] = useState(null);
  const navigate = useNavigate();
  const { user, loading } = useUser(); // Destructure user and loading from context

  // Redirect if the user is not logged in
  // useEffect(() => {
  //   if (!loading && !user) {
  //     window.location.href = 'https://indiawaterportal-main-madrid.qtstage.io/sign-in'; // Redirect to sign-in page
  //   }
  // }, [loading, user]);

  // Function to return iframe source based on the selected form with dynamic topic_value
  const getIframeSrc = () => {
    const baseURL = "https://staging.metype.com//contribution-editor?account_id=1002996&amp;font_url=&amp;font_family=&amp;";
    switch (selectedForm) {
      case "event":
        return `${baseURL}&topic_type=contribution&topic_value=event`;
      case "article":
        return `${baseURL}&topic_type=contribution&topic_value=article`;
      case "opportunity":
        return `${baseURL}&topic_type=contribution&topic_value=opportunity`;
      default:
        return "";
    }
  };

  const handleSignInClick = () => {
    window.open('https://indiawaterportal-demo.madrid.quintype.io/sign-in', '_blank'); 
  };

  useEffect(() => {
    // Dynamically load the Metype script after component mount
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://www.metype.com/widget/v1.0/talktype.js';  // Path to the Metype talktype widget
    script.async = true;
    
    script.onload = () => {
      // Ensure Metype initializes after the script loads
      if (window.talktype) {
        window.talktype(() => {
          window.talktype.contributionWidgetIframe(document.getElementById('contribution-container'));
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>

      <h2>User Contributions</h2>
      {user ? (
        <>
          <div style={{ marginBottom: "20px" }}>
            <button onClick={() => setSelectedForm("event")} style={buttonStyle}>
              Contribute an Event
            </button>
            <button onClick={() => setSelectedForm("article")} style={buttonStyle}>
              Contribute an Article
            </button>
            <button onClick={() => setSelectedForm("opportunity")} style={buttonStyle}>
              Contribute an Opportunity
            </button>
            <button onClick={() => navigate('/use')} style={buttonStyle}>
              My Contribution
            </button>
          </div>

          {selectedForm && (
            <iframe
              src={getIframeSrc()}
              style={{ width: "100%", height: "600px", border: "none" }}
              title="Metype Contribution Form"
            ></iframe>
          )}

          {/* Metype container for contributions */}
          <div id='contribution-container' data-metype-account-id='1003992' data-metype-host='https://www.metype.com/'></div>
        </>
      ) : (
        <div>
          <p>Please sign in to contribute.</p>
          <button onClick={handleSignInClick} style={signInButtonStyle}>
            Sign In
          </button>
        </div>
      )}
    </div>
  );
};

// Inline CSS for buttons
const buttonStyle = {
  marginRight: "10px",
  padding: "10px 20px",
  backgroundColor: "#00796b",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
};

const signInButtonStyle = {
  marginTop: "20px",
  padding: "10px 20px",
  backgroundColor: "#d32f2f",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
};

export default UserContribution;
