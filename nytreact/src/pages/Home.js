import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const About = () => (
  <div>
    <Hero backgroundImage="https://cdn1.medicalnewstoday.com/content/images/articles/276/276714/red-and-white-onions.jpg">
      <h1>Onion Peeler</h1>
      <h2>Peel those stinky layers</h2>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Layer Pile</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <p>
            Eventually articles will appear underneath here...
          </p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default About;
