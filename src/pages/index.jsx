import Navbar from "../components/fragments/Navbar";
import Button from "../components/elements/Button";
import Paragraf from "../components/elements/Paragraf";
import Stats from "../components/fragments/Stats";
import ProductCard from "../components/fragments/ProductCard";

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
            <Paragraf size="standard" Class="opacity-80 mt-5">
              Vista Eloria where majestic cliffs embrace the sky, and lush
              forests stretch endlessly below.
            </Paragraf>
            <div className="flex gap-5 mt-9">
              <Button Class="cta-button">Plan Journey</Button>
              <Button variant="transparent">Explore</Button>
            </div>
          </div>
          <div className="flex gap-5 mt-16">
            <Stats
              Class="bg-black/10 backdrop-blur-sm w-36"
              color="white"
              amount="700+"
              description="Happy visiter"
            />
            <Stats
              Class="bg-black/10 backdrop-blur-sm w-36"
              color="white"
              amount="700+"
              description="Happy visiter"
            />
          </div>
        </div>
      </main>
      <section className="relative bg-gray-100 h-screen w-full">
        <div className="absolute -top-16 inset-x-0 w-full p-4">
          <div className="bg-white h-screen w-full rounded-3xl p-5">
            <div className="flex flex-col gap-10">
              <div>
                <h3 className="text-xl text-slate-950 w-52">
                  Nature Beyond The Horizons
                </h3>
                <Paragraf size="standard" color="blacl" Class="opacity-50">
                  Nature beyond horizons.
                </Paragraf>
              </div>
              <Paragraf
                size="standard"
                color="black"
                Class="text-slate-950 opacity-50"
              >
                Hidden beyond the bustling cities, Vista Eloria is a sactuary of
                nature untouched, beuty. Carved by time, its towering cliffs
                rise above endless.
              </Paragraf>
            </div>
            <div className="mt-10">
              <img
                src="/images/people.png"
                alt="people"
                className="rounded-2xl"
              />
            </div>
            <div className="flex gap-5 mt-10">
              <Stats
                Class="bg-gray-100 h-36 w-[50%] flex flex-col justify-center"
                color="black"
                amount="700+"
                description="Happy visiter"
              />
              <Stats
                Class="bg-gray-100 h-36 w-[50%] flex flex-col justify-center"
                color="black"
                amount="700+"
                description="Happy visiter"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen p-9">
        <div>
          <div className="flex flex-col justify-center items-center">
            <ProductCard image="/images/gajebo.png" />
            <div className="mt-10">
              <h4 className="text-2xl font-semibold text-slate-950">
                Explore Eloria Destination
              </h4>
              <Paragraf color="black">
                Experience golden skies melting golden melting experience.
              </Paragraf>
              <Button Class="cta-button mt-10">Find More</Button>
            </div>
            <div className="flex gap-5 mt-16">
              <ProductCard image="/images/gajebo.png" />
              <ProductCard image="/images/gajebo.png" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainPage;
