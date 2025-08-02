import OurProduct from "./components/OurProduct";
import YourCard from "./components/YourCard";
import "./index.css";

export default function App() {
  return (
    <div className="mainContent">
      <OurProduct />

      {/* cart */}
      <YourCard />
    </div>
  );
}
