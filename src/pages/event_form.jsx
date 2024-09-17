import React from 'react';
import FormHeader from '../components/formHeader';
import EventDetails from '../components/event_components/event_details';
import EventObjective from '../components/event_components/event_ojective';
import TargetAudience from '../components/event_components/target_audience';
import WorkshopContent from '../components/event_components/workshop_content';
import ResourcePerson from '../components/event_components/resource_person';
import ParticipationFees from '../components/event_components/participation_fees';
import ContactInfo from '../components/event_components/contact_info';
import AdditionalInfo from '../components/event_components/additional_info';
import SubmitSection from '../components/submit_section';

const EventForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Your event has been successfully submitted!');
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: '800px',
        margin: '40px auto',
        padding: '30px',
        backgroundColor: '#e8f4f2',
        borderRadius: '12px',
        boxShadow: '0 2px 15px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif',
        color: '#333',
      }}
    >
      <FormHeader
        title="Event Submission Form"
        subtitle="Fill in the details to submit your event to our portal."
        style={{
          textAlign: 'center',
          color: '#2b6777',
          fontSize: '32px', // Larger font for better readability
          marginBottom: '20px',
        }}
      />
      <div style={{ color: '#52ab98', marginBottom: '20px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '24px' }}>Event Details</h2>
      </div>
      <EventDetails />
      <div style={{ color: '#52ab98', marginBottom: '20px' }}>
        <h3 style={{ fontSize: '20px', textAlign: 'center' }}>Event Objective</h3>
      </div>
      <EventObjective />
      <div style={{ color: '#52ab98', marginBottom: '20px' }}>
        <h3 style={{ fontSize: '20px', textAlign: 'center' }}>Target Audience</h3>
      </div>
      <TargetAudience />
      <div style={{ color: '#52ab98', marginBottom: '20px' }}>
        <h3 style={{ fontSize: '20px', textAlign: 'center' }}>Workshop Content</h3>
      </div>
      <WorkshopContent />
      <div style={{ color: '#52ab98', marginBottom: '20px' }}>
        <h3 style={{ fontSize: '20px', textAlign: 'center' }}>Resource Person</h3>
      </div>
      <ResourcePerson />
      <div style={{ color: '#52ab98', marginBottom: '20px' }}>
        <h3 style={{ fontSize: '20px', textAlign: 'center' }}>Participation Fees</h3>
      </div>
      <ParticipationFees />
      <div style={{ color: '#52ab98', marginBottom: '20px' }}>
        <h3 style={{ fontSize: '20px', textAlign: 'center' }}>Contact Info</h3>
      </div>
      <ContactInfo />
      <div style={{ color: '#4a4a4a', fontStyle: 'italic', marginBottom: '20px' }}>
        <AdditionalInfo />
      </div>
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <SubmitSection
          style={{
            backgroundColor: '#2b6777',
            color: 'white',
            padding: '12px 24px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        />
        
      </div>
    </form>
    
  );
};

export default EventForm;

