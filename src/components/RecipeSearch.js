import React, { useState } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { ImSearch } from 'react-icons/im';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import { PiBowlFoodBold } from 'react-icons/pi';
import "../App.css"


const RecipeSearch = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (

    <Navbar fixed="top"
      expand="md" className="NavMain container">
      <Container>
        
        <Navbar.Brand href="#">Meal Finder <PiBowlFoodBold style={{ marginBottom: "2px" }} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className='flex-column' id="navbarScroll ">
          <Nav
            className="me-auto my-2 my-lg-0" 
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex col-sm-5">
            <Form.Control
              type="search"
              placeholder="Enter a food name to search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <Button variant="dark" onClick={handleSearch}><ImSearch style={{ marginBottom: "2px" }} /></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default RecipeSearch;
