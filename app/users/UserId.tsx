import React from "react";

interface Props {
  id: number;
}

const UserId = ({ id }: Props) => {
  return <div>UserId {id}</div>;
};

export default UserId;
