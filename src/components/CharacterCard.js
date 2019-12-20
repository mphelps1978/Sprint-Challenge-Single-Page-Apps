import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
export default function CharacterCard(props) {
  console.log("Props On CharacterCard ", props);
  return (
    <Container>
      <Row>
        <Col xs="6" sm="4">
          <Card body inverse color="primary">
            <CardImg top width="100%" src={props.character.image} />
            <CardBody>
              <CardTitle>{props.character.name}</CardTitle>
              <CardSubtitle>{props.character.status}</CardSubtitle>
              <CardText>{props.character.gender}</CardText>
              <CardText>{props.character.species}</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
