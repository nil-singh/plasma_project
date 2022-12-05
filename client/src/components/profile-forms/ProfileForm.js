import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';

const initialState = {
  phoneNum:'',
  gender:'',
  age:'',
  bloodGroup:'',
  addmittedDate:'',
  location:'', 
  district:'',
  pinCode:'',
  anySuggestion:''
};

const ProfileForm = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history
}) => {
  const [formData, setFormData] = useState(initialState);

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  useEffect(() => {
    if (!profile) getCurrentProfile();
    if (!loading && profile) {
      const profileData = { ...initialState };
      for (const key in profile) {
        if (key in profileData) profileData[key] = profile[key];
      }
      
      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const {
    phoneNum ,
  gender ,
  age ,
    bloodGroup,
    addmittedDate,
    location, 
    district,
    pinCode,
    anySuggestion
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history, profile ? true : false);
  };

  return (
    <Fragment style={{textAlign: "center"}}>
      <h1 className="large text-primary" style={{textAlign: "center"}}>Edit Your Profile</h1>
      <p className="lead">
        <i className="fas fa-user" style={{textAlign: "center"}} /> Add some changes to your profile
      </p>
      <small >* = required field</small>
      <div class="container contact">
      <form className="form" onSubmit={onSubmit}>
      <div className="form-group">
          <input
           type = "text"
            placeholder="phone Number"
            name="phoneNum"
            value={phoneNum}
            onChange={onChange}
          />
          {/* <small className="form-text">Date when you got recovered from <b>COVID-19 </b>19-07-2020</small> */}
        </div>

      <div className="form-group">
          <select name="gender" value={gender} onChange={onChange}>
            <option>* Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
         
        </div>
        <div className="form-group">
          <input
           type = "Number"
            placeholder="age"
            name="age"
            value={age}
            onChange={onChange}
          />
          {/* <small className="form-text">Date when you got recovered from <b>COVID-19 </b>19-07-2020</small> */}
        </div>
        <div className="form-group">
          <select name="bloodGroup" value={bloodGroup} onChange={onChange}>
            <option>* Select Blood Group</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
         
        </div>
        
        <div className="form-group">
          <input
           type = "Date"
            placeholder=" Recovered Date"
            name="addmittedDate"
            value={ addmittedDate}
            onChange={onChange}
          />
          <small className="form-text">Date when you got recovered from <b>COVID-19 </b>19-07-2020</small>
        </div>
        
        {/* <div className="form-group">
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={onChange}
          />
          <small className="form-text">
            City & state suggested (eg. Boston, MA)
          </small>
        </div> */}
        <div className="form-group">
          <select name="location" value={location} onChange={onChange}>
            <option>* Select State</option>
            <option value="Bihar">Bihar</option>
          </select>
         
        </div>
        
        {/* <div className="form-group">
          <input
            type="text"
            placeholder="district"
            name="district"
            value={district}
            onChange={onChange}
          /> */}

          {/* ========================= */}
          <div className="form-group">
          <select name="district" value={district} onChange={onChange}>
            <option>* District</option>
            <option value="Araria">Araria</option>
            <option value="Arwal">Arwal</option>
            <option value="Aurangabad">Aurangabad</option>
            <option value="Banka">Banka</option>
            <option value="Begusarai">Begusarai</option>
            <option value="Bhagalpur">Bhagalpur</option>
            <option value="Bhojpur">Bhojpur</option>
            <option value="Buxar">Buxar</option>
            <option value="Darbhanga">Darbhanga</option>
            <option value="East Champaran">East Champaran</option>
            <option value="Gaya">Gaya</option>
            <option value="Gopalganj">Gopalganj</option>
            <option value="Jamui">Jamui</option>
            <option value="Jehanabad">Jehanabad</option>
            <option value="Khagaria">Khagaria</option>
            <option value="Kishanganj">Kishanganj</option>
            <option value="Kaimur">Kaimur</option>
            <option value="Katihar">Katihar</option>
            <option value="Lakhisarai">Lakhisarai</option>
            <option value="Lakhisarai">Lakhisarai</option>
            <option value="Madhubani">Madhubani</option>
            <option value="Munger">Munger</option>
            <option value="Madhepura">Madhepura</option>
            <option value="Muzaffarpur">Muzaffarpur</option>
            <option value="Nalanda">Nalanda</option>
            <option value="Nawada">Nawada</option>
            <option value="Patna">Patna</option>
            <option value="Purnia">Purnia</option>
            <option value="Rohtas">Rohtas</option>
            <option value="Saharsa">Saharsa</option>
            <option value="Samastipur">Samastipur</option>
            <option value="Sheohar">Sheohar</option>
            <option value="Sheikhpura">Sheikhpura</option>
            <option value="Saran">Saran</option>
            <option value="Sitamarhi">Sitamarhi</option>
            <option value="Supaul">Supaul</option>
            <option value="Siwan">Siwan</option>
            <option value="Vaishali">Vaishali</option>
            <option value="West Champaran">West Champaran</option>
            
          </select>
         
        </div>
          {/* ===================== */}
          <small className="form-text">
            Lakhisarai
          </small>
        {/* </div> */}
        <div className="form-group">
          <input
            placeholder="pinCode"
            name="pinCode"
            value={pinCode}
            onChange={onChange}
          />
          <small className="form-text">i.e 811311</small>
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
      </div>
    </Fragment>
  );
};

ProfileForm.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(ProfileForm)
);
