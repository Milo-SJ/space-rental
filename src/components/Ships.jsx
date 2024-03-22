import { useSelector } from "react-redux";
import { setShipData } from "../redux/shipSlice";

const Ships = () => {
  const shipData = useSelector((state) => state.ships.shipData);
  console.log(shipData);

  return (
    <>
      {shipData && shipData.length > 0 ? (
        shipData.map((ship) => {
          const shipCost = ship.mass_kg
            ? Math.round(Number(ship.mass_kg) * 16)
            : null;

          return (
            <div className="shipCard" key={ship.name}>
              <h2>Ship name: {ship.name}</h2>
              <p>Shit type: {ship.type}</p>
              <p>Ship role: {ship.roles}</p>
              <p>Home port: {ship.home_port}</p>
              <p>
                Rental price per week:{" "}
                {shipCost ? `£${shipCost}` : "please contact us for pricing"}
              </p>
            </div>
          );
        })
      ) : (
        <p>loading</p>
      )}
    </>
  );
};

export default Ships;
