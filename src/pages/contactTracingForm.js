import React from 'react';
import '../App.css';
import Input from "@material-ui/core/Input";
import { Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css'
import CustomTextField from '../resources/customs.js';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function ContactTracingForm() {
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [contact, setContact] = useState("")

  const [list, setList] = useState([]);

  const nameInput = React.useRef();
  const addressInput = React.useRef();
  const contactInput = React.useRef();

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

    nameInput.current.value = "";
    addressInput.current.value = "";
    contactInput.current.value = "";
  }

  return (
    <Form onSubmit={onSubmitForm}>
        <Container>
            <h4>Contact Tracing Form</h4>
            <Row>
                <CustomTextField label="Name" onChange={event => setName(event.target.value)} ref={nameInput}/>
            </Row>
            <br/>
                <Row><CustomTextField label="Address" onChange={event => setAddress(event.target.value)} ref={addressInput}/></Row>
            <br/>
                <Row><CustomTextField type="number" label="Contact" onChange={event => setContact(event.target.value)} ref={contactInput}/></Row>
            <br/>
            <Row>
              <Input variant="filled" type="submit" value="Submit" />
            </Row>
            <br/>
            <Link to={{pathname: "/list", state: { data: list}}}>Go to list</Link>
        </Container>
    </Form>
  );
}

export default ContactTracingForm;