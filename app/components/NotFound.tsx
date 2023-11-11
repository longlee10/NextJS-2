import Link from "next/link";
import React from "react";

interface Props {
  message: string;
  buttonMessage: string;
  href: string;
}

const NotFound = ({ message, buttonMessage, href }: Props) => {
  return (
    <>
      <div className="mb-2">{message}</div>
      <button className="btn btn-primary">
        <Link href={href}>{buttonMessage}</Link>
      </button>
    </>
  );
};

export default NotFound;
