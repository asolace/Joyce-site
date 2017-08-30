import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Header = props => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3 rainbow-animation joyce-header">Joyce Wang</h1>
          <p className="lead weird-april">April is soooo WEIRD!</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Header;
