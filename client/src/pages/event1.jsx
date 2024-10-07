import React, { useState } from 'react';

const EventForm = () => {
  const [formData, setFormData] = useState({
    eventName: '',
    eventDate: '',
    eventTime: '',
    eventLocation: '',
    organizerName: '',
    contactInfo: '',
    eventDescription: '',
    eventCategory: '',
    registrationLink: '',
    cost: '',
    eventWebsite: '',
    eventImage: null,
    socialMediaLinks: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: '800px',
        maxWidth: '800px',
        margin: '40px auto',
        padding: '30px',
        backgroundColor: '#e8f4f2', // Soft background color
        borderRadius: '12px',
        boxShadow: '0 2px 15px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif',
        color: '#2b6777',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          color: '#52ab98', // Consistent color for headings
          fontSize: '28px',
          marginBottom: '20px',
        }}
      >
        Event Submission Form
      </h2>

      {/* Event Details */}
      <div style={{ marginBottom: '20px' }}>
        <label style={labelStyle}>Event Name:</label>
        <input
          type="text"
          name="eventName"
          value={formData.eventName}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={labelStyle}>Date & Time:</label>
        <input
          type="datetime-local"
          name="eventDate"
          value={formData.eventDate}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={labelStyle}>Event Location:</label>
        <input
          type="text"
          name="eventLocation"
          value={formData.eventLocation}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={labelStyle}>Organizer's Name:</label>
        <input
          type="text"
          name="organizerName"
          value={formData.organizerName}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={labelStyle}>Organizer's Contact Info:</label>
        <input
          type="text"
          name="contactInfo"
          value={formData.contactInfo}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={labelStyle}>Event Description:</label>
        <textarea
          name="eventDescription"
          value={formData.eventDescription}
          onChange={handleChange}
          style={textareaStyle}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={labelStyle}>Event Category:</label>
        <select
          name="eventCategory"
          value={formData.eventCategory}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">Select Category</option>
          <option value="Workshop">Workshop</option>
          <option value="Conference">Conference</option>
          <option value="Webinar">Webinar</option>
        </select>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={labelStyle}>Registration Link:</label>
        <input
          type="url"
          name="registrationLink"
          value={formData.registrationLink}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={labelStyle}>Cost/Fee:</label>
        <input
          type="text"
          name="cost"
          value={formData.cost}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={labelStyle}>Event Website:</label>
        <input
          type="url"
          name="eventWebsite"
          value={formData.eventWebsite}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={labelStyle}>Event Image:</label>
        <input
          type="file"
          name="eventImage"
          onChange={handleFileChange}
          style={inputStyle}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={labelStyle}>Social Media Links:</label>
        <textarea
          name="socialMediaLinks"
          value={formData.socialMediaLinks}
          onChange={handleChange}
          style={textareaStyle}
        />
      </div>

      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <button
          type="submit"
          style={{
            backgroundColor: '#2b6777', // Consistent button color
            color: 'white',
            padding: '12px 24px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Submit Event
        </button>
      </div>
    </form>
  );
};

const labelStyle = {
  display: 'block',
  marginBottom: '5px',
  fontWeight: 'bold',
  color: '#2b6777',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  marginBottom: '20px',
  fontSize: '16px',
};

const textareaStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  marginBottom: '20px',
  fontSize: '16px',
  height: '100px',
};

export default EventForm;
