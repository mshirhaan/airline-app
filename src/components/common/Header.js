import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import Auth from "../Auth";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as loginDetailActions from "../../redux/actions/loginDetailActions";

/* eslint react/prop-types: 0 */

const Header = (props) => {
  const signOutHandler = () => {
    let loginDetails = {
      isLoggedIn: false,
      loggedInRole: "",
      loggedInEmail: "",
      loggedInName: "",
    };
    props.actions.logout(loginDetails);
    props.history.push("/");
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top">
        <img
          src="../../../../favicon.ico"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="AH Airlines logo"
        />
        <Navbar.Brand>AH Airlines</Navbar.Brand>
        <Nav className="mr-auto">
          <NavLink className="d-inline p-2 bg-dark text-white" to="/">
            Home
          </NavLink>
          {props.loginDetails.loggedInRole === "admin" ? (
            <NavLink className="d-inline p-2 bg-dark text-white" to="/admin">
              Admin Portal
            </NavLink>
          ) : props.loginDetails.loggedInRole === "staff" ? (
            <NavLink className="d-inline p-2 bg-dark text-white" to="/staff">
              Staff Portal
            </NavLink>
          ) : null}
        </Nav>
        {props.loginDetails.isLoggedIn ? (
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: {props.loginDetails.loggedInName}
            </Navbar.Text>
          </Navbar.Collapse>
        ) : null}
        {" | "}
        {!props.loginDetails.disableGoogleLogin ? (
          <Auth />
        ) : (
          <button className="btn btn-primary btn-lg" onClick={signOutHandler}>
            Sign out!
          </button>
        )}
      </Navbar>
    </>
  );
};

function mapStateToProps(state) {
  return {
    loginDetails: state.loginDetails,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      logout: bindActionCreators(loginDetailActions.logout, dispatch),
    },
  };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
