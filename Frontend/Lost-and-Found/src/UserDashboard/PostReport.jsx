import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import L from "leaflet";

const bounds = L.latLngBounds(
  [23.820350, 90.424175], // Southwest corner
  [23.823490, 90.430537]  // Northeast corner
);

export default function PostReport() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const [formData, setFormData] = useState({
    ItemName: "",
    Title: "",
    Description: "",
    CategoryId: "",
    Status: "Lost",
    ImageURL: "",
    LocationName: "",
    Latitude: "",
    Longitude: "",
    ContactInfo: "",
    IsClaimed: false,
  });

  const categories = [
    { id: 1, name: "Phone" },
    { id: 2, name: "Wallet" },
    { id: 3, name: "Bag" },
    { id: 4, name: "Books" },
    { id: 5, name: "Keys" },
    { id: 6, name: "Clothing" },
    { id: 7, name: "Pets" },
    { id: 8, name: "Other" },
  ];

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };


  // Search locations inside defined bounds
  const handleSearch = async (e) => {
    const value = e.target.value;
    setSearch(value);

    if (!value.trim()) {
      setResults([]);
      return;
    }

    try {
      const params = new URLSearchParams({
        q: value,
        format: "json",
        bounded: 1,
        viewbox: [
          bounds.getWest(),
          bounds.getSouth(),
          bounds.getEast(),
          bounds.getNorth(),
        ].join(","),
      });

      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?${params.toString()}`
      );
      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Error fetching location", error);
    }
  };

  // Select a location result, Latitude and Longitude...
  const handleSelect = (r) => {
    setFormData((prev) => ({
      ...prev,
      LocationName: r.display_name,
      Latitude: r.lat,
      Longitude: r.lon,
    }));
    setSearch(r.display_name);
    setResults([]); // hide dropdown
  };

  // Submit form data
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://localhost:44335/api/report/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok)
        throw new Error(`HTTP Error Status: ${response.status}`);

      const data = await response.json();
      console.log("Post successful!", data);
      alert("Post submitted successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error submitting report:", error);
      alert("Failed to submit the report. Please try again.");
    }
  };

  return (
    <div
      style={{ backgroundColor: "oklch(27.8% 0.033 256.848)" }}
      className="min-h-screen flex items-center justify-center px-6 py-12"
    >
      <main className="w-full max-w-lg">
        <form
          onSubmit={handleSubmit}
          style={{ backgroundColor: "oklch(37.3% 0.034 259.733)" }}
          className="rounded-2xl p-6 shadow-2xl"
        >
          <h1 className="text-2xl font-bold text-white mb-1">Report Item</h1>
          <p className="text-gray-300 mb-6 text-sm">
            Fill in the details about the lost or found item
          </p>

          {/* Item Name */}
          <div className="mb-4">
            <label
              htmlFor="ItemName"
              className="block text-sm font-medium text-gray-200 mb-2"
            >
              Item Name *
            </label>
            <input
              type="text"
              id="ItemName"
              name="ItemName"
              value={formData.ItemName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="e.g., iPhone 13, Black Wallet"
            />
          </div>

          {/* Title */}
          <div className="mb-6">
            <label
              htmlFor="Title"
              className="block text-sm font-medium text-gray-200 mb-2"
            >
              Title *
            </label>
            <input
              type="text"
              id="Title"
              name="Title"
              value={formData.Title}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Brief title for the post"
            />
          </div>

          {/* Status */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-200 mb-2">
              Status *
            </label>
            <div className="flex gap-4">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="Status"
                  value="Lost"
                  checked={formData.Status === "Lost"}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-500 focus:ring-2 focus:ring-blue-400"
                />
                <span className="ml-2 text-white">Lost</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="Status"
                  value="Found"
                  checked={formData.Status === "Found"}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-500 focus:ring-2 focus:ring-blue-400"
                />
                <span className="ml-2 text-white">Found</span>
              </label>
            </div>
          </div>

          {/* Search Location */}
          <div className="mb-6">
            <label
              htmlFor="searchLocation"
              className="block text-sm font-medium text-gray-200 mb-2"
            >
              Search Location *
            </label>
            <input
              type="text"
              id="searchLocation"
              value={search}
              onChange={handleSearch}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Search for a place..."
            />
          </div>

          {/* Search Results Dropdown */}
          {results.length > 0 && (
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                background: "#222",
                color: "white",
                borderRadius: "8px",
                marginTop: "5px",
                maxHeight: "150px",
                overflowY: "auto",
              }}
            >
              {results.map((r, i) => (
                <li
                  key={i}
                  style={{
                    cursor: "pointer",
                    padding: "8px 10px",
                    borderBottom: "1px solid #444",
                  }}
                  onClick={() => handleSelect(r)}
                >
                  {r.display_name}  
                </li>
              ))}
            </ul>
          )}

          {/* Category */}
          <div className="mb-6">
            <label
              htmlFor="CategoryId"
              className="block text-sm font-medium text-gray-200 mb-2"
            >
              Category *
            </label>
            <select
              id="CategoryId"
              name="CategoryId"
              value={formData.CategoryId}
              onChange={handleChange}
              required
              style={{ backgroundColor: "#222" }}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div className="mb-6">
            <label
              htmlFor="Description"
              className="block text-sm font-medium text-gray-200 mb-2"
            >
              Description *
            </label>
            <textarea
              id="Description"
              name="Description"
              value={formData.Description}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none"
              placeholder="Provide detailed description..."
            />
          </div>

          {/* Image URL */}
          <div className="mb-6">
            <label
              htmlFor="ImageURL"
              className="block text-sm font-medium text-gray-200 mb-2"
            >
              Image URL
            </label>
            <input
              type="url"
              id="ImageURL"
              name="ImageURL"
              value={formData.ImageURL}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* Contact Info */}
          <div className="mb-6">
            <label
              htmlFor="ContactInfo"
              className="block text-sm font-medium text-gray-200 mb-2"
            >
              Contact Information *
            </label>
            <input
              type="text"
              id="ContactInfo"
              name="ContactInfo"
              value={formData.ContactInfo}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white"
              placeholder="Email or phone number"
            />
          </div>

          {/* Is Claimed */}
          <div className="mb-8">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="IsClaimed"
                checked={formData.IsClaimed}
                onChange={handleChange}
                className="w-4 h-4 rounded text-blue-500 focus:ring-2 focus:ring-blue-400"
              />
              <span className="ml-2 text-gray-200">
                Mark as claimed/resolved
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold"
          >
            Submit Report
          </button>
        </form>
      </main>
    </div>
  );
}
