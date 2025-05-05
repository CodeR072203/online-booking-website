// src/components/BookingForm.jsx
import React from 'react';

const BookingForm = () => {
  return (
    <div className="p-4 bg-light border rounded">
      <h3>Booking Form</h3>
      <form>
        <div className="mb-3">
          <label>Name</label>
          <input type="text" className="form-control" placeholder="Enter your name" />
        </div>
        <div className="mb-3">
          <label>Check-in Date</label>
          <input type="date" className="form-control" />
        </div>
        <div className="mb-3">
          <label>Check-out Date</label>
          <input type="date" className="form-control" />
        </div>
        <button className="btn btn-primary" type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookingForm;

