import React from "react";
import Card from "../../../Card/Card";

type Props = {};

export default function CatalogBody({}: Props) {
  const items = [1, 2, 3, 4, 5, 6];

  return (
    <div className="row">
      {items.map((item) => (
        <></>
      ))}
    </div>
  );
}
