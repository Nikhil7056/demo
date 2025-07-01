import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Service() {
  const [dataz, setData] = useState([]);

  useEffect(() => {
    console.log("component is created");
    onDataFetch();

    return () => {
      console.log("component is destroyed");
    };
  }, []);

  const onDataFetch = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => {
        setData(response.data); // ✅ Corrected this line
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h3>Data:</h3>
      <ul>
        {dataz.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}