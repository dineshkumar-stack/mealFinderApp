import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const RecipeDetail = ({ recipe }) => {
  if (!recipe) {
    return null;
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {recipe.strMeal}
          <h6 className="card-subtitle mb-2 text-muted">
            Category: {recipe.strCategory}
          </h6>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example">
        <Container>
          <Row>
            <Col xs={12} md={8}>
              <p className="card-text">
                Instructions: {recipe.strInstructions}
              </p>            </Col>
            <Col xs={6} md={4}>
              <img
                src={recipe.strMealThumb}
                className="card-img-top"
                alt={recipe.strMeal}
              />            </Col>
          </Row>
          <h6 className="card-subtitle mb-2 text-muted">Ingredients:</h6>
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
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>













  );
};

export default RecipeDetail;
