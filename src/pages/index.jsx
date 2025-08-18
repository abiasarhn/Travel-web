import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Stats from "../components/Stats";

const MainPage = () => {
  return (
    <>
      <main className="h-screen">
        <Navbar />
        <div className="p-9">
          <div className="mt-20">
            <h1 className="text-3xl text-white">
              Discover The Hidden Gem of Nature
            </h1>
            <p className="text-base font-medium text-white mt-5">
              Vista Eloria where majestic cliffs embrace the sky, and lush
              forests stretch endlessly below.
            </p>
            <div className="flex gap-5 mt-9">
              <Button Class="cta-button">Plan Your Journey</Button>
              <Button variant="transparent">Explore</Button>
            </div>
          </div>
          <div className="flex gap-5 mt-16">
            <Stats amount="700+" description="Happy visiter" />
            <Stats amount="700+" description="Happy visiter" />
          </div>
        </div>
      </main>
    </>
  );
};

export default MainPage;
