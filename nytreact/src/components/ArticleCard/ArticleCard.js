import React from "react";
import "./ArticleCard.css";
import Container from "../Container";

export const ArticleCard = props => (
    <li className="list-group-item">
      <Container>
          <Row>
              <Col size="md-9">
              <h3>{props.title}</h3>
              <a
              href={props.link}
              >
              {props.title}
              </a>
              <p>{props.summary}</p>
              </Col>
          </Row>
      </Container>    
    </li>
);