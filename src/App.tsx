import OurProduct from "./components/OurProduct";
import YourCard from "./components/YourCard";
import { ShoesCardContextProvider } from "./context/ShoesCardContext";
import "./index.css";

export default function App() {
  return (
    <div className="mainContent">
      <ShoesCardContextProvider>
        <OurProduct />

        {/* cart */}
        <YourCard />
      </ShoesCardContextProvider>
    </div>
  );
}
