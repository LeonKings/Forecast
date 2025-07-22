import React, { useState } from "react";
import axios from "axios";

function ScheduleForm() {
  const [formData, setFormData] = useState({
    activity: "",
    location: "",
    date: "",
  });

  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/forecast",
        formData
      );
      setSuggestions(res.data.suggestions);
    } catch (err) {
      console.error("Error fetching forecast:", err);
      setError(
        "Gagal mengambil data cuaca. Pastikan backend berjalan dan respons valid."
      );
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-medium mb-1">Activity Name</label>
          <input
            type="text"
            name="activity"
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">
            Sub-district/Village Code
          </label>
          <input
            type="text"
            name="location"
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Preferred Date</label>
          <input
            type="date"
            name="date"
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Get Weather Suggestions
        </button>
      </form>

      {error && <p className="mt-4 text-red-600 font-semibold">{error}</p>}

      {suggestions.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-2 text-green-700">
            Recommended Time Slots
          </h3>
          <ul className="space-y-2">
            {suggestions.map((slot, i) => (
              <li
                key={i}
                className="border border-gray-200 p-3 rounded-lg bg-gray-50 shadow-sm"
              >
                <span className="font-semibold">{slot.datetime}</span> -{" "}
                {slot.weather_desc} ({slot.temperature}°C)
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ScheduleForm;
