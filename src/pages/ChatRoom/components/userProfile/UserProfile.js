import React, { Component } from "react";
import "./userProfile.css";

export default class UserProfile extends Component {
  toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  render() {
    return (
      <div className='main__userprofile'>
        <div className='profile__card user__profile__image'>
          <div className='profile__image'>
            <img
              style={{ height: "100%" }}
              src='https://doko.dwit.edu.np/images/studentProfile/Pratyush%20Acharya.jpg
'
            />
          </div>
          <h4>Pratyush Dai</h4>
          <p className='text-center'>Control you bp when you see my dp.</p>
        </div>
      </div>
    );
  }
}
