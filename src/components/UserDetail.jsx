import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UserDetail() {
  const navigate = useNavigate();
  const backHandler = () => {
    navigate("/user");
  };
  const { name } = useParams();

  return (
    <div>
      <p>hi {name}</p>
      <button onClick={backHandler}>Go Back</button>
    </div>
  );
}
