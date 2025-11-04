import Cookies from "js-cookie";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import LoginModal from "../PublicDashboard/LoginModal.jsx";
import ItemCard from "./ItemCard.jsx";
import ItemModal from "./ItemModal.jsx";
import MyMap from "./Mymap.jsx";
import Stats from "./Stats.Jsx";

function Maincontainer() {
  const Token = Cookies.get("token");
  const Name = Cookies.get("name");

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);

  // Define the specific area bounds and position
  const bounds = [
    [23.82035, 90.424175], // Southwest corner
    [23.82349, 90.430537], // Northeast corner
  ];
  const position = [23.822151, 90.427399];
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const url = searchTerm
          ? `https://localhost:44335/api/report/search?search=${encodeURIComponent(
              searchTerm
            )}`
          : "https://localhost:44335/api/report/feedlist";

        const response = await fetch(url);
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching items:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [searchTerm]);

  return (
    <>
      {/* Main content pushed down below header */}
      <main className="px-6 py-8 relative z-0 pt-[80px]">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Find What You've Lost, {Name}!
          </h2>
          <p className="text-gray-400 text-lg mb-6">
            Connect with others to recover lost items or help return found
            belongings
          </p>

          {/* Search box centered in hero section */}
          <div className="flex justify-center mb-6">
            <div className="w-full max-w-md">
              <div
                className="rounded-lg px-4 py-2 flex items-center gap-3"
                style={{ backgroundColor: "oklch(37.3% 0.034 259.733)" }}
              >
                <Search className="text-gray-400" size={14} />
                <input
                  type="text"
                  placeholder="Search for items..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 outline-none bg-transparent text-white placeholder-gray-400 text-sm"
                />
              </div>
            </div>
          </div>

          {/* <Link to="/report" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition flex items-center gap-2 mx-auto">
            <Plus size={20} />
            Report Item
          </Link> */}
        </div>

        <Stats items={items} setSearchTerm={setSearchTerm} />

        {/* Content Layout */}

        <div className="flex gap-6">
          {/* Left Side - Map */}
          <div
            className="rounded-3xl shadow-lg overflow-hidden relative z-0"
            style={{
              backgroundColor: "oklch(21% 0.006 285.885)",
              width: "75%",
              height: "70vh",
            }}
          >
            <div className="h-full flex items-center justify-center relative z-0">
              <div className="absolute inset-0 rounded-3xl overflow-hidden z-0">
                <MyMap
                  position={position}
                  zoom={18}
                  minZoom={17}
                  style={{ height: "100%", width: "100%" }}
                  maxBounds={bounds}
                  maxBoundsViscosity={1.0} // prevents moving outside
                  scrollWheelZoom={false}
                  whenCreated={(map) => {
                    map.on("focus", function () {
                      map.scrollWheelZoom.enable();
                    });
                    map.on("blur", function () {
                      map.scrollWheelZoom.disable();
                    });
                  }}
                  items={items}
                />
              </div>

              <div
                className="absolute top-85 left-4 px-4 py-2 rounded-lg shadow-md z-[500]"
                style={{ backgroundColor: "oklch(21% 0.006 285.885)" }}
              >
                <p className="text-sm font-semibold text-white">
                  📍 Showing {items.length} items
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Items List */}
          <div
            className="rounded-3xl overflow-y-auto"
            style={{
              backgroundColor: "oklch(37.3% 0.034 259.733)",
              width: "25%",
              maxHeight: "85vh",
            }}
          >
            <div className="p-4">
              <div className="space-y-2">
                {loading ? (
                  <p className="text-center text-white mt-10">
                    Loading Items...
                  </p>
                ) : (
                  items.map((item) => (
                    <ItemCard
                      key={item.ItemId}
                      item={item}
                      onView={() => setSelectedItem(item)}
                    />
                  ))
                )}
              </div>

              {!loading && items.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-400">No items found.</p>
                </div>
              )}

              {!loading && items.length > 0 && (
                <button className="w-full bg-sky-400/10 hover:bg-sky-400/20 text-white font-semibold py-3 rounded-lg transition mt-4">
                  Load More
                </button>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Item Modal */}
      {selectedItem && (
        <>
          {Token && (
            <ItemModal
              item={selectedItem}
              onClose={() => setSelectedItem(null)}
            />
          )}
          {!Token && <LoginModal onClose={() => setSelectedItem(null)} />}
        </>
      )}
    </>
  );
}

export default Maincontainer;
