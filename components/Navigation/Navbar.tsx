"use client";
import React from "react";
import Link from "next/link";
import "../../styles/navigation.css";
import { Civilization, Unit } from "../../@types";

type Props = {
  civilizations: Civilization[];
  units: Unit[];
};

export default function Navbar({ civilizations, units }: Props) {
  return (
    <div className="navbar">
      <div className="dropdown">
        <button className="dropbtn">Civilizations</button>
        <div className="dropdown-content">
          {civilizations?.length > 0 &&
            civilizations?.map(({ name }) => (
              <Link href={`/civilizations/${name?.toLowerCase()}`}>{name}</Link>
            ))}
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn">Units</button>
        <div className="dropdown-content">
          {units?.length > 0 &&
            units?.map(({ name }) => (
              <Link href={`/units/${name?.toLowerCase()}`}>{name}</Link>
            ))}
        </div>
      </div>
    </div>
  );
}
