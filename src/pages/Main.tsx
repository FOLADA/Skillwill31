import { useQuery } from "@apollo/client";
import React from "react";
import { GET_COMMS } from "../GQL/get-comments";
import { IComm } from "../GQL/GQL.interfaces";
import Another from "./Another";

interface QueryData {
  comments: IComm[];
}

const Main: React.FC = () => {
  const { loading, error, data } = useQuery<QueryData>(GET_COMMS);

  if (loading) return <h1>LOADING . . .</h1>;
  if (error) return <h2>Error: {error.message}</h2>;

  console.log(data?.comments);
  return <Another comms={data?.comments} />;
};

export default Main;
