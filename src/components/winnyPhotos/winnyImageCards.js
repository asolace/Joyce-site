import React from 'react';
import {
  Card, CardImg, CardText, CardBlock, CardTitle, CardSubtitle,
  Container, Row, Col } from 'reactstrap';

import img1 from '../../photos/winnyPics/IMG_4299.PNG'
import img2 from '../../photos/winnyPics/IMG_4300.PNG'
import img3 from '../../photos/winnyPics/IMG_4301.PNG'
import img4 from '../../photos/winnyPics/IMG_4303.PNG'
import img5 from '../../photos/winnyPics/IMG_4306.PNG'
import img6 from '../../photos/winnyPics/IMG_4351.JPG'
import img7 from '../../photos/winnyPics/IMG_7228.PNG'
import img8 from '../../photos/winnyPics/IMG_7229.PNG'

const WinnyImageCards = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <CardImg top width="100%" src={img1} alt="Card image cap" />
            <CardBlock>
              <CardTitle>WINNY!</CardTitle>
              <CardSubtitle>My friend/sister Winny</CardSubtitle>
              <CardText>Some of the best moments of my life was spent with this derp.</CardText>
            </CardBlock>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardImg top width="100%" src={img2} alt="Card image cap" />
            <CardBlock>
              <CardTitle>WINNY!</CardTitle>
              <CardSubtitle>My friend/sister Winny</CardSubtitle>
              <CardText>Some of the best moments of my life was spent with this derp.</CardText>
            </CardBlock>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardImg top width="100%" src={img3} alt="Card image cap" />
            <CardBlock>
              <CardTitle>WINNY!</CardTitle>
              <CardSubtitle>My friend/sister Winny</CardSubtitle>
              <CardText>Some of the best moments of my life was spent with this derp.</CardText>
            </CardBlock>
          </Card>
        </Col>
      </Row>

      <br/>

      <Row>
        <Col>
          <Card>
            <CardImg top width="100%" src={img4} alt="Card image cap" />
            <CardBlock>
              <CardTitle>WINNY!</CardTitle>
              <CardSubtitle>My friend/sister Winny</CardSubtitle>
              <CardText>Some of the best moments of my life was spent with this derp.</CardText>
            </CardBlock>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardImg top width="100%" src={img5} alt="Card image cap" />
            <CardBlock>
              <CardTitle>WINNY!</CardTitle>
              <CardSubtitle>My friend/sister Winny</CardSubtitle>
              <CardText>Some of the best moments of my life was spent with this derp.</CardText>
            </CardBlock>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardImg top width="100%" src={img6} alt="Card image cap" />
            <CardBlock>
              <CardTitle>WINNY!</CardTitle>
              <CardSubtitle>My friend/sister Winny</CardSubtitle>
              <CardText>Some of the best moments of my life was spent with this derp.</CardText>
            </CardBlock>
          </Card>
        </Col>
      </Row>

      <br />

      <Row>
        <Col>
          <Card>
            <CardImg top width="100%" src={img7} alt="Card image cap" />
            <CardBlock>
              <CardTitle>WINNY!</CardTitle>
              <CardSubtitle>My friend/sister Winny</CardSubtitle>
              <CardText>Some of the best moments of my life was spent with this derp.</CardText>
            </CardBlock>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardImg top width="100%" src={img8} alt="Card image cap" />
            <CardBlock>
              <CardTitle>WINNY!</CardTitle>
              <CardSubtitle>My friend/sister Winny</CardSubtitle>
              <CardText>Some of the best moments of my life was spent with this derp.</CardText>
            </CardBlock>
          </Card>
        </Col>
      </Row>

    </Container>
  );
};

export default WinnyImageCards;
