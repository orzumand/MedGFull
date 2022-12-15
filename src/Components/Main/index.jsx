import React from "react";
import Consult from "./Consult";
import Service from "./Service";
import FAQ from "./FAQ";
import Group from "./Group";
import Partner from "./Partner";
import Blog from "./Blog";
import TakeControl from "./TakeControl";
const Main = () => {
  return (
    <div>
      <Consult />
      <Service />
      <Blog />
      <Group />
      <Partner />
      <FAQ />
      <TakeControl />
    </div>
  );
};

export default Main;
