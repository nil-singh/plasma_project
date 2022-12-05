import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    bloodGroup,
    addmittedDate,
    location,
    district,
    pinCode,
  }
}) => {
  return (
    <div className='profile bg-light' style ={{ margin: "10px 30px",
      padding: "10px 30px",
      background: "#eee",
      borderRadius: "20px",float:"left"}}>
      <img src={avatar} alt='' className='round-img' / >
      <div>
        <h2>{name}</h2>
        <p>
          Blood Group {bloodGroup}
        </p>
        
        
      </div>
      <p> {district}</p>
      <p> {pinCode}</p>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
