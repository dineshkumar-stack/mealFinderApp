import React from 'react';
import { Modal, Button, Row, Col, Container } from 'react-bootstrap';
import { GiForkKnifeSpoon } from 'react-icons/gi';
import { BiSolidCategoryAlt } from 'react-icons/bi';


const RecipeDetail = ({ recipe, onClose }) => {
  if (!recipe) {
    return null; 
  }

  const handleClose = () => {
    onClose(); 
  };

  return (
    <Modal show={!!recipe} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{recipe.strMeal}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example">
        <Container>

          <Row>
            <Col xs={12} md={8}>
              <h6 className="card-subtitle mb-2 text-muted"><BiSolidCategoryAlt style={{ marginBottom: "2px" }}/> Category: {recipe.strCategory}
              </h6>
              <img
                src={recipe.strMealThumb}
                className="img-fluid"
                alt={recipe.strMeal} />
            </Col>
            <Col xs={12} md={4} >
              <h6 className="card-subtitle mb-2 text-muted"><strong><GiForkKnifeSpoon style={{ marginBottom: "2px" }}/> Ingredients:</strong></h6>
              <ul>
                {Array.from({ length: 20 }, (_, i) => i + 1).map((index) => {
                  const ingredient = recipe[`strIngredient${index}`];
                  const measure = recipe[`strMeasure${index}`];
                  if (ingredient && measure) {
                    return (
                      <li key={index}>
                        {measure} {ingredient}
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
            </Col>
          </Row>
          <p className="card-text"><strong>Instructions: </strong><br/> {recipe.strInstructions}</p>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RecipeDetail;
