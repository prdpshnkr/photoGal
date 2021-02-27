import React from "react";

const Title = ({ handleLogOut }) => {
  return (
    <div className="title">
      <div className="nav">
        <h1>ImageGallery</h1>
        <p onClick={handleLogOut}>Log Out</p>
      </div>
      <div className="hero">
        <h2>Pictures</h2>
        <p>Upload your favourite images.</p>
      </div>
    </div>
  );
};

export default Title;
