import { useLoaderData } from "react-router";
import Slider from "../Component/Slider";
import Event from "../Component/Event";
import JoinEvent from "../Component/JoinEvent";

const Home = () => {
  const eventData = useLoaderData();
  return (
    <div className="py-10">
      <Slider />
      {/* all events */}
      <div className="py-10 ">
        <div className="text-center">
          <h1 className="font-extrabold text-5xl heading-fonts text-blue-500">
            Explore The Upcoming Events
          </h1>
          <p className="pt-5 font-medium text-2xl">
            Banners rise, crowds cheer, dreams ignite—moments bloom beneath the
            festive light.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4 py-10">
          {eventData.map((event) => (
            <Event key={event.id} event={event}></Event>
          ))}
        </div>
      </div>
      {/* have to created 2 section  */}

      <JoinEvent></JoinEvent>
    </div>
  );
};

export default Home;
