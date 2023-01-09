import React from "react";

const Experience = () => {
  const Mydata = [
    {
      id:1,
      education: "1. Masai School, Banglore",
      duration: "May, 2022 - Present",
    },
    {
      id:2,
      education: "2. MDU University, Rohtak",
      duration: "Aug, 2018 - July, 2021",
    },
    {
      id:3,
      education: "3. Government Sr. Sec. School, Bahadurgarh",
      duration: "APr, 2016 - 2017",
    },
  ];

  return (
    <div>
      {Mydata.map((data) => (
        <div key={data.id} className="MainExpDiv">
          <p style={{fontSize:'1.2rem', fontWeight:"600"}}>{data.education}</p>
          <p>{data.duration}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;
