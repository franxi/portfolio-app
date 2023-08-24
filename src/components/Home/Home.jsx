import { homeData } from "../../data/homeData";

const Home = () => {
  return (
    <div>
      <h2>{homeData.title} </h2>
      <p>
        {homeData.name}
        <br />
        {homeData.desciption}
      </p>
    </div>
  );
};

export default Home;
