import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const Home = () => (
  <div>
    <Hero backgroundImage="https://img00.deviantart.net/4854/i/2013/352/8/1/newspaper_collage_texture_by_flordeneu-d6yeuvs.jpg">
      <h1>New York Times Scraper</h1>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Your Articles</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <p>
            Eventually saved articles will appear underneath here...
          </p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Home;
