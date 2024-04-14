import "./list.scss";

import { listData } from "../../lib/dummyData";
import Filter from "../../components/Filter/Filter";
import Card from "../../components/Card/Card";
import Map from "../../components/Map/Map";

const Lists = () => {
  const data = listData;
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data.map((data) => (
            <Card item={data} key={data.id} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map item={data} />
      </div>
    </div>
  );
};

export default Lists;
