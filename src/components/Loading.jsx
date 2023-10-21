import React from "react";

const Loading = ({ children, loading, error }) => {
  if (loading) {
    return <p>loading please waiting</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  return <div>{children}</div>;
};

export default Loading;
