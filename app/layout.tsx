"use client";
require("dotenv").config();
import Navbar from "../components/Navigation/Navbar";
import AppContext from "../context/ContextProvider";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getData();
  const units = await getUnitData();

  return (
    <html lang="en">
      <head />
      <body>
        <AppContext.Provider value={data.civilizations}>
          <div className="App">
            <Navbar civilizations={data.civilizations} units={units.units} />
            {children}
          </div>
        </AppContext.Provider>
      </body>
    </html>
  );
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

async function getUnitData() {
  // Fetch data from external API
  const res = await fetch(`${process.env.API_URL}/units`);
  const unitData = await res?.json();

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return unitData;
}
