import React from "react";
import { IComm } from "../GQL/GQL.interfaces";

interface ForDynamicProps {
    comms?: IComm[];
  }
  
const ForDynamic: React.FC<ForDynamicProps> = ({ comms }) => {
  return (
    <div>
      <h1>This user is really mysterious because his/her name is {comms?.map(({name}) => name)}</h1>
    </div>
  );
};

export default ForDynamic;
