"use client";
import React from "react";
import { Card, Button, ListGroup } from "react-bootstrap";
import { Civilization, Unit } from "../@types";
import "../styles/item.css";

type Props = {
  cardData?: Civilization | Unit | any;
  type?: string;
};

function ListItem({ cardData, type }: Props) {
  return (
    <Card className="card-item">
      <Card.Body>
        <Card.Img variant="top" src="/feetme.png" />
        <Card.Title>{cardData?.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Expansion: {cardData?.expansion}
        </Card.Subtitle>
        {type === "civilization" ? (
          <div className="unit-card">
            <Card.Text>Army Type: {cardData?.army_type}</Card.Text>
            <Card.Text>Team Bonus: {cardData?.team_bonus}</Card.Text>
            {cardData?.civilization_bonus?.length && (
              <ListGroup key={cardData?.id}>
                civilization bonus:{" "}
                {cardData?.civilization_bonus.map((el: string) => (
                  <ListGroup.Item>{el}</ListGroup.Item>
                ))}
              </ListGroup>
            )}

            <div className="button-set">
              {cardData?.unique_unit?.length &&
                cardData?.unique_unit?.map((el: string) => (
                  <Button variant="primary" href={el}>
                    Discover more
                  </Button>
                ))}
              {cardData?.unique_tech?.length &&
                cardData?.unique_tech?.map((el: string) => (
                  <Button variant="primary" href={el}>
                    Discover more
                  </Button>
                ))}
            </div>
          </div>
        ) : (
          <>
            <Card.Subtitle className="mb-2 text-muted">
              STRUCTURE:{" "}
              {cardData?.created_in
                ?.split("/")
                .pop()
                .toUpperCase()
                .replace("_", " ")}
            </Card.Subtitle>

            <div className="unit-card">
              <Card.Text>Description: {cardData?.description}</Card.Text>
              <Card.Text>Age: {cardData?.age}</Card.Text>
              {cardData?.cost?.Wood && (
                <Card.Text>Wood Cost: {cardData?.cost?.Wood}</Card.Text>
              )}
              {cardData?.cost?.Food && (
                <Card.Text>Cost Cost: {cardData?.cost?.Cost}</Card.Text>
              )}
              {cardData?.cost?.Stone && (
                <Card.Text>Stone Cost: {cardData?.cost?.Stone}</Card.Text>
              )}
              {cardData?.cost?.Gold && (
                <Card.Text>Gold Cost: {cardData?.cost?.Gold}</Card.Text>
              )}
              <Card.Text>Build Time: {cardData?.build_time}</Card.Text>
              <Card.Text>Reload Time: {cardData?.reload_time}</Card.Text>
              <Card.Text>Attack Delay: {cardData?.attack_delay}</Card.Text>
              <Card.Text>Movement Rate: {cardData?.movement_rate}</Card.Text>
              <Card.Text>Line Of Sight: {cardData?.line_of_sight}</Card.Text>
              <Card.Text>Hit Points: {cardData?.hit_points}</Card.Text>
              <Card.Text>Range: {cardData?.range}</Card.Text>
              <Card.Text>Attack: {cardData?.attack}</Card.Text>
              <Card.Text>Armor: {cardData?.armor}</Card.Text>
              <Card.Text>Attack: {cardData?.attack}</Card.Text>

              {cardData?.armor_bonus?.length && (
                <ListGroup key={cardData?.id}>
                  Armor Bonus:{" "}
                  {cardData?.attack_bonus.map((el: string) => (
                    <ListGroup.Item>{el}</ListGroup.Item>
                  ))}
                </ListGroup>
              )}

              <Card.Text>Search Radius: {cardData?.search_radius}</Card.Text>
              <Card.Text>Accuracy: {cardData?.accuracy}</Card.Text>
              <Card.Text>Blast Radius: {cardData?.blast_radius}</Card.Text>
            </div>

            {cardData?.attack_bonus?.length && (
              <ListGroup key={cardData?.id}>
                Attack Bonus:{" "}
                {cardData?.attack_bonus.map((el: string) => (
                  <ListGroup.Item>{el}</ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </>
        )}
      </Card.Body>
    </Card>
  );
}

export default ListItem;
