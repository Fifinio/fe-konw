import React from "react";
import "./TopBar.css";

export const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="logo">Logo</div>
      <div className="nav">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
};
