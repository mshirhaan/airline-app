import React from "react";
import { connect } from "react-redux";
import * as passengerActions from "../../redux/actions/passengerActions";
import { Form, Button, Row, Col } from "react-bootstrap";
import { bindActionCreators } from "redux";
/* eslint react/prop-types: 0 */

class PassengerAddPage extends React.Component {
  state = {
    passenger: {
      id: "",
      flightNumber: "",
      firstName: "",
      lastName: "",
      address: "",
      dob: "",
      passportNumber: "",
    },
    firstNameEmpty: false,
    lastNameEmpty: false,
  };

  handleChangeEvent = (event) => {
    const passenger = {
      ...this.state.passenger,
      [event.target.name]: event.target.value,
    };
    this.setState({ passenger });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      firstNameEmpty: false,
      lastNameEmpty: false,
    });
    if (
      this.state.passenger.firstName !== "" &&
      this.state.passenger.lastName !== ""
    ) {
      this.setState(
        {
          passenger: {
            ...this.state.passenger,
            id: Object.keys(this.props.passengers).length + 1,
            flightNumber: this.props.match.params.flightNumber,
          },
        },
        () => {
          this.props.actions.addPassenger(this.state.passenger);
          this.setState(({ passenger }) => ({
            passenger: {
              ...passenger,
              flightNumber: "",
              firstName: "",
              lastName: "",
              address: "",
              dob: "",
              passportNumber: "",
            },
          }));
          this.props.history.goBack();
        }
      );
    } else if (
      this.state.passenger.firstName === "" &&
      this.state.passenger.lastName === ""
    ) {
      this.setState({
        firstNameEmpty: true,
        lastNameEmpty: true,
      });
    } else if (this.state.passenger.firstName === "") {
      this.setState({
        firstNameEmpty: true,
      });
    } else {
      this.setState({
        lastNameEmpty: true,
      });
    }
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Row>
          <Col>
            <Form.Label>First Name *</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              placeholder="Enter first name"
              onChange={this.handleChangeEvent}
              value={this.state.passenger.firstName}
            />
            {this.state.firstNameEmpty ? (
              <p style={{ color: "red" }}>First name cannot be empty</p>
            ) : null}
          </Col>
          <Col>
            <Form.Label>Last Name *</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              placeholder="Enter last name"
              onChange={this.handleChangeEvent}
              value={this.state.passenger.lastName}
            />
            {this.state.lastNameEmpty ? (
              <p style={{ color: "red" }}>Last name cannot be empty</p>
            ) : null}
          </Col>
        </Row>
        <br />
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          name="address"
          placeholder="Enter address"
          onChange={this.handleChangeEvent}
          value={this.state.passenger.address}
        />
        <br />
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control
          type="text"
          name="dob"
          placeholder="Enter date of birth"
          onChange={this.handleChangeEvent}
          value={this.state.passenger.dob}
        />
        <br />
        <Form.Label>Passport Number</Form.Label>
        <Form.Control
          type="text"
          name="passportNumber"
          placeholder="Enter passport number"
          onChange={this.handleChangeEvent}
          value={this.state.passenger.passportNumber}
        />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return {
    passengers: state.passengers,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      addPassenger: bindActionCreators(passengerActions.addPassenger, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(PassengerAddPage);
