import React from 'react';
import {Link} from 'react-router-dom';
import ProfilePicture from "./ProfilePicture";

function Header() {
  return (
    <div
      className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <h5 className="my-0 mr-md-auto font-weight-normal">Certification Exam Quizzer</h5>
      <nav className="my-2 my-md-0 mr-md-3">
        <Link className="p-2 text-dark" to="/welcome">Home</Link>
      </nav>
      <ProfilePicture/>
    </div>
  );
}

export default Header;





