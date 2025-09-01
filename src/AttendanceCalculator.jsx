import React, { useState } from "react";
import "./AttendanceCalculator.css";

function AttendanceCalculator() {
  const [totalClasses, setTotalClasses] = useState(0);
  const [requiredPercent, setRequiredPercent] = useState("");
  const [attended, setAttended] = useState("");
  const [held, setHeld] = useState("");

  // Mapping subjects to their total classes
  const subjectData = {
    SEPM: 40,
    CN: 50,
    TOC: 50,
    AI: 40,
    RM: 40,
  };
  const handleChange = (event) => {
    const subject = event.target.value;
    setTotalClasses(subjectData[subject] || 0);
  };

  const calculate = () => {
    const t = parseInt(totalClasses) || 0;
    const rqPercent = parseInt(requiredPercent) || 0;
    const a = parseInt(attended) || 0;
    const h = parseInt(held) || 0;

    if (h === 0) return "Please enter classes held > 0.";
    const p = rqPercent / 100.0;
    const presentPer = (a / h) * 100;

    const remaining = t - h;
    const neededDouble = p * t - a;
    const needToAttend = Math.max(0, Math.ceil(neededDouble));

    if (needToAttend > remaining) {
      return `It's not possible to reach your required attendance percentage.
Attend all ${remaining} remaining classes to reach the maximum possible percentage, which is required.`;
    }

    return `Present % = ${presentPer.toFixed(2)}%
You can bunk Max ${
      remaining - needToAttend
    } classes & still maintain ${rqPercent}%`;
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1 className="title">Attendance Bunk Calculator</h1>
      <div className="inner-box">
        {/* DropDown  */}
        <div className="flex flex-col items-center justify-center min-l-screen text-white ">
          <div className=" p-6 w-80">
            <h1
              className="sm:text-2xl md:text-xl mb-4 text-center"
              style={{ fontSize: "25px" }}
            >
              Choose Subject
            </h1>
            <select
              onChange={handleChange}
              className="w-half p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <option value="">--Select Subject--</option>
              {Object.keys(subjectData).map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
            <div className="total-classesMan">
              <label htmlFor="total-classesId">Total Classes: </label>
              <input
                type="number"
                id="total-classesId"
                value={totalClasses}
                onChange={(e) => setTotalClasses(e.target.value)}
              />
            </div>

          </div>
        </div>

        <br />
        <div className="req">
          <label htmlFor="required-percent">Required Percentage (%): </label>
          <input
            id="required-percent"
            type="number"
            value={requiredPercent}
            onChange={(e) => setRequiredPercent(e.target.value)}
          />
        </div>
        <br />
        <div className="attended">
          <label htmlFor="class-attended">Classes Attended: </label>
          <input
            id="class-attended"
            type="number"
            value={attended}
            onChange={(e) => setAttended(e.target.value)}
          />
        </div>
        <br />
        <div className="held">
          <label htmlFor="class-held">Classes Held: </label>
          <input
            id="class-held"
            type="number"
            value={held}
            onChange={(e) => setHeld(e.target.value)}
          />
        </div>
        <br />
      </div>

      <h2
        className="text-lg  sm:text-xl  leading-relaxed p-4 mt-4 rounded-lg bg-gray-100 text-black"
        style={{ whiteSpace: "pre-line" }}
      >
        {calculate()}
      </h2>
      <h2 className="text-sm leading-relaxed p-4 mt-4 rounded-lg bg-black-100 text-white">This is a calculated number, it may varry to real-time scenario</h2>
    </div>
  );
}

export default AttendanceCalculator;
