import React from 'react';
import { Link } from 'react-router-dom';


const Team = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Our Team</h2>
      <div className="row">
        {["Alice", "Bob", "Charlie"].map((name, i) => (
          <div className="col-md-4" key={i}>
            <div className="card mb-4 shadow-sm">
              <img
                src={`https://i.pravatar.cc/300?img=${i + 10}`}
                className="card-img-top"
                alt="team"
              />
              <div className="card-body text-center">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Front-End Developer</p>
              </div>
            </div>
            <Link to="/Team"></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
