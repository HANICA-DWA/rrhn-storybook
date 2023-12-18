"use client";

import ItemPanel from "@/components/ItemPanel";
import { useState, useEffect } from "react";

export default function ItemPage({ params }) {
  const [item, setItem] = useState({});

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:3000/hn/topstories");
      const data = await response.json();
      console.log(data);
      Object.values(data).forEach((item) => {
        if ("" + item.id === params.id) {
          setItem(item);
        }
      });
    };
    getData();
  }, []);

  return <ItemPanel activeItem={item} />;
}
