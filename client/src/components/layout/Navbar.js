import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    // <ul>
      /* <li>
        <Link to='/profiles'>Developers</Link>
      </li>
       
      <li>
        <Link to='/dashboard'>
          <i className='fas fa-user' />{' '}
          <span className='hide-sm'>Dashboard</span>
        </Link>
      </li> */
      /* <li>
        <Link to='/profiles'>Donner</Link>
      </li>
      <li>
         <Link onClick={logout} to='#!'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Logout</span>
        </Link>
      </li>
    </ul> */

<nav class="navbar navbar-default">
<div class="container">
  <div class="navbar-header">
    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-navabar" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
       </button>
    <Link to="/" class="navbar-brand"  >Plasma for sure  </Link>
  </div>
</div>
  
  <div class="collapse navbar-collapse" id="bs-navabar">

<ul class="nav navbar-nav">
 <li  > <Link to="/">Home </Link>  </li>
 <li> <Link to="/faq">FAQ</Link>  </li>
 <li> <Link to="/about">About </Link>  </li>
 <li> <Link to="/contact">Contact </Link>  </li>
  
</ul>

<ul class="nav navbar-nav navbar-right">
<li> <Link to="/dashboard">My Account<i class="fa fa-user"></i> </Link>  </li>
  <li><Link onClick={logout} to='#!'>
           
          <span className='hide-sm'>Logout</span>
        </Link>
  </li>
 </ul>
  </div>
{/* </div>  */}
</nav>
  );

  const guestLinks = (
    // <ul>
    //   <li>
    //     <Link to='/profiles'>Donate</Link>
    //   </li>
    //   <li>
    //     <Link to='/register'>Register</Link>
    //   </li>
    //   <li>
    //     <Link to='/login'>Login</Link>
    //   </li>
    // </ul>
    <nav class="navbar navbar-default">
     <div class="container">
     	<div class="navbar-header">
     		<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-navabar" aria-expanded="false">
               <span class="sr-only">Toggle navigation</span>
               <span class="icon-bar"></span>
               <span class="icon-bar"></span>
               <span class="icon-bar"></span>
            </button>
     		<Link to="/" class="navbar-brand"  >Plasma for sure </Link>
     	</div>
     </div>
       
       <div class="collapse navbar-collapse" id="bs-navabar">

    <ul class="nav navbar-nav">
    	<li > <Link to="/">Home </Link>  </li>
    	<li> <Link to="/faq">FAQ </Link>  </li>
    	<li> <Link to="/about">About </Link>  </li>
    	<li> <Link to="/contact">Contact </Link>  </li>
     
    </ul>

    <ul class="nav navbar-nav navbar-right">
    	<li> <Link to="/register"> Sign Up <i class="fa fa-user-plus"></i></Link>  </li>
    	<li> <Link to="/login">Sign In <i class="fa fa-user"></i> </Link>  </li>
    	
    	</ul>
     	</div>
     {/* </div>  */}
    </nav> 
    
  );

  return (
    <Fragment>
    <nav className='navbar bg-dark' >
      <h1>
        {/* <Link to='/'>
          <i className='fas fa-code' /> Plasma Donner
        </Link> */}
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}
        
   {/* <footer style={{ textAlign: "center",
   position: "fixed",
   left: "0",
   bottom: "0",
   width: "100%",
  padding: "3px",
  marginTop:"20px",
  backgroundColor: "#8FBC8F",
  color: "white"}}>
     
  <p>Degined And Devloped By :<br/>
  	&copy;
  <a href="www.facebook.com/careerniketan"> Career Niketan</a></p>
    </footer> */}
       
        </Fragment>
      )}
     
    </nav>
     {/* <footer style={{ 
      textAlign: "center",
   position: "fixed",
 
   left: "0",
   bottom: "0",
   width: "100%",
  padding: "3px",
  marginTop:"20px",
  // backgroundColor: "#8FBC8F",
  // color: "white"
  // position: "sticky",
  minHeight: "50px",
    width: "85%",
    // display: "flex",
    margin: "0 auto",
    flexDirection: "columnReverse",
    padding: "30px 0",
    justifyContent: "center",
    alignItems: "center"
  }}>
     
  <p>Degined And Devloped By :<br/>
  	&copy;
  <a href="www.facebook.com/careerniketan"> Career Niketan</a></p>
    </footer> */}
    </Fragment>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
