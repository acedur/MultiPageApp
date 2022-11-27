import { Link, Outlet } from "react-router-dom";
import "./app.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
