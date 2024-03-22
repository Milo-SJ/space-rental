import React, { useEffect } from "react";
import axios from "axios";
import Interface from "./components/Interface";
import { useDispatch } from "react-redux";
import { setShipData } from "./redux/shipSlice";

const App = () => {
  const dispatch = useDispatch();

  const getInitialShipData = async () => {
    const { data: shipData } = await axios.get(
      `https://api.spacexdata.com/v4/ships`
    );
    console.log(shipData);
    dispatch(setShipData(shipData));
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
