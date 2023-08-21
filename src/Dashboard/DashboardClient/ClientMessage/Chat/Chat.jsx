import React from "react";

const user = [
  {
    companyLogo:
      "https://seeklogo.com/images/H/hewlett-packard-company-logo-F5676A4E16-seeklogo.com.png",
    name: "John Doe",
    role: "Software Engineer",
    companyName: "TechCorp",
  },
  {
    companyLogo:
      "https://seeklogo.com/images/B/byd-company-logo-09B61DD0C4-seeklogo.com.png",
    name: "Jane Smith",
    role: "Product Manager",
    companyName: "InnoTech Solutions",
  },
  {
    companyLogo:
      "https://seeklogo.com/images/H/Hyundai_Motor_Company-logo-F02C4DDF50-seeklogo.com.png",
    name: "Alex Johnson",
    role: "Data Scientist",
    companyName: "Data Insights Inc.",
  },
  {
    companyLogo:
      "https://seeklogo.com/images/B/byd-company-logo-09B61DD0C4-seeklogo.com.png",
    name: "Emily Brown",
    role: "UX/UI Designer",
    companyName: "Design Innovators",
  },
  {
    companyLogo:
      "https://seeklogo.com/images/H/hewlett-packard-company-logo-F5676A4E16-seeklogo.com.png",
    name: "Michael Clark",
    role: "Marketing Specialist",
    companyName: "Globe Marketing Group",
  },
  {
    companyLogo:
      "https://seeklogo.com/images/H/Hyundai_Motor_Company-logo-F02C4DDF50-seeklogo.com.png",
    name: "Sophia Lee",
    role: "HR Manager",
    companyName: "TalentLink Enterprises",
  },
  {
    companyLogo:
      "https://seeklogo.com/images/B/byd-company-logo-09B61DD0C4-seeklogo.com.png",
    name: "William Turner",
    role: "Financial Analyst",
    companyName: "Capital Finance Corp.",
  },
];

const Chat = () => {
  return (
    <div className="mt-10 flex flex-col gap-10">
      {user.map((us, i) => (
        <div className="flex items-center justify-between hover:bg-red-50 cursor-pointer transition py-2 px-1" key={i}>
          <div className="flex gap-3 items-center">
            <div>
              <img className="w-12 h-12 object-contain" src={us.companyLogo} alt="" />
            </div>
            <div>
              <h2 className="font-semibold text-xl text-gray-800 transition">{us.name}</h2>
              <h3>{us.role}</h3>
            </div>
          </div>
          <div>
            <h2>{us.companyName}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chat;
