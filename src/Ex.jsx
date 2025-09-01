import React, { useState } from "react";

export default function SubjectDropdown() {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [totalClasses, setTotalClasses] = useState(0);

  // Mapping subjects to their total classes
  const subjectData = {
    Math: 40,
    Physics: 35,
    Chemistry: 30,
    Biology: 28,
    English: 25,
  };

  const handleChange = (event) => {
    const subject = event.target.value;
    setSelectedSubject(subject);
    setTotalClasses(subjectData[subject] || 0); // update totalClasses
  };

  return (
    <div className="p-4">
      <label htmlFor="subjects" className="mr-2">
        Select Subject:
      </label>
      <select
        id="subjects"
        value={selectedSubject}
        onChange={handleChange}
        className="border rounded p-1"
      >
        <option value="">--Choose--</option>
        {Object.keys(subjectData).map((subject) => (
          <option key={subject} value={subject}>
            {subject}
          </option>
        ))}
      </select>

      {selectedSubject && (
        <p className="mt-3">
          {selectedSubject} has total <b>{totalClasses}</b> classes.
        </p>
      )}
    </div>
  );
}
