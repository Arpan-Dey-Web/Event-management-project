import { useLoaderData } from "react-router";
import Slider from "../Component/Slider";
import Event from "../Component/Event";

const Home = () => {
  const eventData = useLoaderData();
  console.log(eventData);
  return (
    <div className="py-10">
      <Slider />
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4 py-10">
        {eventData.map((event) => (
          <Event key={event.id} event={event}></Event>
        ))}
      </div>

      
    </div>
  );
};

export default Home;
