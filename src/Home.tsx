import "./Home.css";
import Sidenav from "./Navigation/Sidenav";
import Timeline from "./Timeline/Timeline";

function Home() {
  return (
    <div className="homepage">
      <div className="homepage__nav">
        <Sidenav />
      </div>
      <div className="homepage__timeline">
        <Timeline />
      </div>
    </div>
  );
}

export default Home;
