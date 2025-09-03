import React, { useState } from "react";
import "./AttendanceCalculator.css";

function AttendanceCalculator() {
  const [totalClasses, setTotalClasses] = useState(0);
  const [requiredPercent, setRequiredPercent] = useState(70);
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
      return (
      <>
        It's not possible to reach your required attendance %<br />
        Attend all <span className="font-bold">{remaining}</span> remaining classes to reach the minimum possible percentage.
      </>
      );
    }
    if((remaining-needToAttend) === 0){
      return(
        <>No more classes to bunk & not in any danger.<br/> <span className="font-bold">Attend regularly</span></>
      )
    }
    return (
      <>
      Present % = {presentPer.toFixed(2)}%<br/>
You can bunk Max <span className="font-bold">{
  remaining - needToAttend
}</span> classes & still maintain {rqPercent}%
</>
  )
  };

  return (
    <div className="flex flex-col items-center justify-center h-100vh" style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1 className="title"> Attendance-Bunk Calculator</h1>
      <div className="inner-box">
        {/* DropDown  */}
        <div className="flex flex-col items-center justify-center min-l-screen text-white">
          <div className=" p-6 w-80">
            <h1
              className="sm:text-2xl md:text-xl mb-3 -mt-2 text-center text-black"
              style={{ fontSize: "30px" }}
            >
              Choose Subject
            </h1>
            <select
              onChange={handleChange}
              className="w-half p-2 rounded-lg text-black bg-white focus:outline-black focus:ring-2 focus:ring-white border border-black"
            >
              <option value="" className="text-black">-Subject-</option>
              {Object.keys(subjectData).map((subject) => (
                <option key={subject} value={subject} className="bg-white text-black">
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
        className="text-lg  sm:text-xl  leading-relaxed p-4 mt-0 rounded-lg bg-green-200 text-black"
        style={{ whiteSpace: "pre-line" }}
      >
        {calculate()}
      </h2>
      <h2 className="text-sm leading-relaxed p-4 -mt-2 rounded-lg bg-black-100 text-white">This is a calculated number, it may varry to real-time scenario</h2>
    </div>
  );
}

export default AttendanceCalculator;
