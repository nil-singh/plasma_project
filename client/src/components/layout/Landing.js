import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  // if (isAuthenticated) {
  //   return <Redirect to='/dashboard' />;
  // }

  return (
    <Fragment>
    <div id="content" style={{ backgroundImage: `url(${require("./plasmaforsure.png")})` ,opacity:"0.6" }}>
    	<h1 style={{  backgroundColor:"#eee", margin:"0 auto  ", width:"200px",borderRadius:"9px" ,weight:"600"}}>Plasma 4 Life</h1>
    	<br/>
      <h3 style={{color:"red" ,backgroundColor:"#eee", margin:"0 auto", width:"200px",borderRadius:"9px" ,weight:"600"}}>Save The Humanity</h3>
    	<br/>
    	<button className="btn btn-default btn-lg"><i className="fa fa-paw"></i>Discover Here !!</button>
    </div>
     
    <div id="jumbotron">
    	
      <h3>Choose The Category </h3>

      <button className="btn btn-default btn-lg"><i className="fa fa-search"></i><b><Link to="/profiles">Find a Plasma Donar !! </Link> </b></button>

      <br/>
      <br/>

      <button className="btn btn-success"  className="open-button" onclick="openForm()"><i className="fa fa-heart-o" aria-hidden="true"></i><Link to ="/register"> Donate Plasma</Link></button>
      <br/>
      <br/>
      <Link to="/faq" className="btn btn-info">Read FAQ</Link> 

    </div>
    {/* <footer style={{ textAlign: "center",
  //  position: "fixed",
   left: "0",
   bottom: "0",
   width: "100%",
  padding: "3px",
  marginTop:"20px",
  backgroundColor: "#8FBC8F",
  color: "white"}}>
     
  <p>Degined And Devloped By :<br/>
  	&copy;
  <a to="www.facebook.com/careerniketan"> Career Niketan</a></p>
    </footer> */}
    </Fragment>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
