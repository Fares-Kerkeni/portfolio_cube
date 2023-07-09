import React from "react";

interface NoMatchProps {
  status: number;
}

const NoMatch: React.FC<NoMatchProps> = ({ status }) => {
  return (
    <div>
      <h2>Error: {status}</h2>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};

export default NoMatch;
