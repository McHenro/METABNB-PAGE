import Hero from "./images/Group-photos.svg";
import CardOne from "./CardOne";
import Sponsor1 from "./images/Group-Token.svg";
import Sponsor2 from "./images/Group-Mask.svg";
import Sponsor3 from "./images/Frame-Sea.svg";
import GroupImage from "./images/group-image.svg";





const Home = () => {
    return (
      <div className="home">
        <section className="bg-white flex flex-col md:flex-row justify-between px-5 lg:px-20 mt-14 md:pt-10 ">
          <div className=" w-full md:w-2/3 md:px-5 mb-">
            <h1 className="text-4xl lg:text-6xl leading-snug">
              Rent a <span className="text-span font-bold">Place</span> away
              from <span className="text-span font-semibold">Home</span> in the{" "}
              <span className="text-span font-semibold">Metaverse</span>
            </h1>
            <p className="py-10 text-xl max-w-xl">
              we provide you access to luxury and affordable houses in the
              metaverse, get a chance to turn your imagination to reality at
              your comfort zone
            </p>
            <div className="flex relative overflow-hidden">
              <input
                type="search"
                className="outline-none border border-[#A3A3A3] px-1 lg:px-7 w-4/5 md:w-3/4 py-3 rounded-l-lg"
                id=""
                placeholder="Search for location"
              />
              <button className="bg-span absolute md:relative right-0 text-white py-4 px-3 md:px-8 rounded-r-lg">
                Search
              </button>
            </div>
          </div>
          <div className="flex flex-row w-full lg:w-1/2 gap-2 mt-16 md:mt-0 px-4">
            <img src={Hero} alt="A Metabnb" className="w-full" />
          </div>
        </section>

        <div className="bg-span mt-16">
          <div className="px-5 md:px-24 flex justify-between py-4">
            <img
              src={Sponsor1}
              alt="Profile"
              className="object-contain w-24 md:w-auto h-auto"
            />
            <img
              src={Sponsor2}
              alt="Profile"
              className="object-contain w-24 md:w-auto h-auto"
            />
            <img
              src={Sponsor3}
              alt="Profile"
              className="object-contain w-24 md:w-auto h-auto"
            />
          </div>
        </div>

        <div className="text-center text-3xl md:text-5xl font-bold py-10 px-3">
          <p>Inspiration for your next adventure</p>
        </div>

        <CardOne />

        <div className="after-cards1">
          <div className="metabnb-group">
            <div className="metabnb">
              <div className="meta">
                <h1>Metabnb NFTS</h1>
              </div>
              <div className="meta-text">
                <p>Discocer our NFT gift cards collection. Loyal</p>
                <p>customers get amazing gift cards which are</p>
                <p>traded as NFTs. These NFTs give our customer</p>
                <p>access to loads of our exclusive services</p>
              </div>
              <div className="learn-button">
                <button id="learn-but">
                  <span>Learn more</span>
                </button>
              </div>
            </div>
            <div className="group">
              <div className="group-image">
                <img src={GroupImage} alt="Profile" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default Home;