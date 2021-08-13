import React from 'react';
import '../App.css';
import Input from "@material-ui/core/Input";
import { Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css'
import CustomTextField from '../resources/customs.js';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function ContactTracingForm() {
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [contact, setContact] = useState("")

  const [list, setList] = useState([]);

  function onSubmitForm(e) {
    e.preventDefault();

    console.log(name);
    console.log(address);
    console.log(contact);

    setList(list.concat({ name: name, address: address, contact: contact }));

    clearInputs();
  }

  function clearInputs() {
    setName("");
    setAddress("");
    setContact("");
  }

  return (
    <Form onSubmit={onSubmitForm}>
        <Container>
            <h4>Contact Tracing Form</h4>
            <Row>
                <CustomTextField label="Name" value={name} onChange={event => setName(event.target.value)}/>
            </Row>
            <br/>
                <Row><CustomTextField label="Address" value={address} onChange={event => setAddress(event.target.value)}/></Row>
            <br/>
                <Row><CustomTextField label="Contact" value={contact} onChange={event => setContact(event.target.value)}/></Row>
            <br/>
            <Row>
              <Input variant="filled" type="submit" value="Submit" />
            </Row>
            <br/>
              <h5>List count: { list.length }</h5>
            <br/>
            <Link to={{pathname: "/list", state: { data: list}}}>Go to list</Link>
        </Container>
    </Form>
  );
}

export default ContactTracingForm;