import React from "react";
import { Copyright } from "../atoms/Copyright";

export const TailwindFooter: React.FC<{}> = () => {
  return (
    <footer className='py-4'>
      <Copyright tailwind={true} />
    </footer>
  );
};
