// App.jsx
import { Outlet } from "react-router-dom";
import Footer from "./UserDashboard/Footer.jsx";
import Header from "./UserDashboard/Header.Jsx";

function App() {
  return (
    <div
      className="min-h-screen relative"
      style={{ backgroundColor: "oklch(27.8% 0.033 256.848)" }}
    >
      <div className="relative z-[1000]">
        <Header />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
