import React from "react";
import ScheduleForm from "./components/ScheduleForm";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          Activity Scheduler with BMKG Weather
        </h1>
        <ScheduleForm />
      </div>
    </div>
  );
}

export default App;
