import React from "react";
import { IComm } from "../GQL/GQL.interfaces";
import ForAnother from "./ForAnother";

interface NextComm {
  comms?: IComm[];
}

const Another: React.FC<NextComm> = ({ comms }) => {
  return (
    <div
      style={{
        display: "block",
        justifyContent: "center",
        alignItems:"center",
        flexWrap: "wrap"
      }}
    >
      {comms?.map(({ id, name, email }) => (
        <ForAnother key={id} email={email} id={id} name={name} />
      ))}
    </div>
  );
};

export default Another;
