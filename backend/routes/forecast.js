const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/", async (req, res) => {
  const { activity, location, date } = req.body;
  const bmkgUrl = `https://api.bmkg.go.id/publik/prakiraan-cuaca?adm4=${location}`;

  try {
    const response = await axios.get(bmkgUrl);
    const data = response.data;

    const suitableSlots = [];

    if (data.data?.[0]?.cuaca) {
      data.data[0].cuaca.forEach((day) => {
        day.forEach((slot) => {
          const weather = slot.weather_desc?.toLowerCase();
          if (weather.includes("cerah") || weather.includes("berawan")) {
            suitableSlots.push({
              datetime: slot.local_datetime,
              weather_desc: slot.weather_desc,
              temperature: slot.t,
            });
          }
        });
      });
    }

    res.json({ suggestions: suitableSlots });
  } catch (error) {
    console.error("BMKG API Error:", error.message);
    res.status(500).json({ message: "BMKG data fetch failed" });
  }
});

module.exports = router;
