import React from 'react';
import { Link } from 'react-router-dom';

export default function Books() {
  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" placeholder="Enter your name"/>
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" placeholder="Enter your email"/>
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea className="form-control" rows="4" placeholder="Your message"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
      <Link to="/Contact"></Link>
    </div>
  );
};

