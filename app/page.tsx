"use client";
import React, { useContext } from "react";
require("dotenv").config();
import CardList from "../components/CardList";

export default async function Home() {
  const dataApp = await getData();

  return <CardList cardData={dataApp.civilizations} type="civilization" />;
}

async function getData() {
  // Fetch data from external API
  const res = await fetch(`${process.env.API_URL}/civilizations`);
  const data = await res?.json();

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return data;
}
