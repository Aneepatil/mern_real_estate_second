import SearchBar from "../../components/searchBar/SearchBar";
import "./HomePage.scss";
const HomePage = () => {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            molestias officia, optio explicabo repudiandae fugit iure atque.
            Accusamus, tenetur reprehenderit? Lorem ipsum dolor sit amet
            consectetur.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imageContainer">
        <img src="/bg.png" alt="banner-image" />
      </div>
    </div>
  );
};

export default HomePage;
