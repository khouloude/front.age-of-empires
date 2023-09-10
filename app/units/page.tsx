"use client";
import CardList from "../../components/CardList";
require("dotenv").config();

export default async function Units() {
  const data = await getData();

  return <CardList cardData={data.units} type="unit" />;
}

async function getData() {
  // Fetch data from external API
  const res = await fetch(`${process.env.API_URL}/units`);
  const data = await res?.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return data;
}
