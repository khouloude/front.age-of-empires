"use client";
import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import Link from "next/link";
/* Uncomment this code if you want to test Pagination
import Pagination from "./Pagination"; */
import { Civilization, Unit } from "../@types";
import "../styles/card.css";

type Props = {
  cardData: Civilization[] | Unit[];
  type: string;
};

export default function CardList({ cardData, type }: Props) {
  /* Uncomment this code if you want to test Pagination
   const [currentPage, setCurrentPage] = useState(1);
   const pageSize = 10;

   const onPageChange = (page: number) => {
     setCurrentPage(page);
   };

   const startIndex = (currentPage - 1) * pageSize;*/

  return (
    <>
      <div className="container card-list">
        {/* Uncomment this code if you want to test Pagination
        {cardData?.length > 0 && cardData?.slice(startIndex, startIndex + pageSize)?.map((el) => ( */}
        {cardData?.length > 0 &&
          cardData?.map((el) => (
            <Card key={el?.id}>
              <Card.Body>
                <Card.Title className="text-center">{el?.name}</Card.Title>
                <Link
                  href={
                    type === "civilization"
                      ? `/civilizations/${el?.name?.toLowerCase()}`
                      : `/units/${el?.name?.toLowerCase()}`
                  }
                >
                  <Button variant="primary">Discover more</Button>
                </Link>
              </Card.Body>
            </Card>
          ))}
      </div>
      {/* Uncomment this code if you want to test Pagination
      <Pagination
      items={cardData?.length} 
      currentPage={currentPage} 
      pageSize={pageSize} 
      onPageChange={onPageChange}
       /> */}
    </>
  );
}
