import React from "react";
import {useNavigate } from "react-router-dom";

interface CommentsIn {
  id: number;
  name: string;
  email: string;
}

const ForAnother: React.FC<CommentsIn> = ({ id, name, email }) => {
    const navigate = useNavigate()
  return (
    <div
    onClick={() => navigate(`/${id}`)}
    style={{border:"1px solid black", padding:"10px", fontSize:"13px", justifyContent:"center", alignItems:"center", marginBottom:"13px", cursor:"crosshair"}}>
      <h1>Name is: {name}</h1>
      <h1>Email is: {email}</h1>
      <h1>Secret number is: {id}</h1>
    </div>
  );
};

export default ForAnother;
