import React from "react";
import Card from "../../Card/Card";
import { useAppSelector } from "../../../models/hook";

type Props = {};

export default function CatalogBody({}: Props) {
  const items = useAppSelector((state) => state.categoryItems);
  return (
    <div className="row">
      {items.map((item) => (
        <Card item={item} key={item.id + item.title} />
      ))}
    </div>
  );
}
