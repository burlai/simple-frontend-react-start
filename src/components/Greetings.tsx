import React from "react";

interface GreetingsProps {
  name: string;
  surname?: string | undefined;
}

const Greetings: React.FC<GreetingsProps> = ({ name, surname }) => {
  return (
    <h4>
      Привіт, {name} {surname}!
    </h4>
  );
};

export default Greetings;
