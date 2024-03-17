import React, { useEffect } from "react";
import axios from "axios";
import Interface from "./components/Interface";

const App = () => {
  const getInitialShipData = async () => {
    const { data } = await axios.get(`https://api.spacexdata.com/v4/ships`);
    console.log(data);
  };

  useEffect(() => {
    getInitialShipData();
  }, []);

  return (
    <>
      <Interface />
    </>
  );
};

export default App;
