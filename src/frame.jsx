import NavBottom from "./components/navbar";
import Dashboard from "./page/dashboard";
import ProfilePage from "./page/profilepage";
import { useState } from "react";

function PhoneFrame() {
  const [activeElement, setActiveElement] = useState("dashboard"); // State untuk melacak elemen yang aktif

  // Fungsi untuk menampilkan elemen Dashboard
  const showDashboard = () => {
    setActiveElement("dashboard");
  };

  // Fungsi untuk menampilkan elemen ProfilePage
  const showProfilePage = () => {
    setActiveElement("profile");
  };

  return (
    <div className="relative mx-auto my-1 border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] ">
      <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
      <div className="body rounded-[1.7rem] overflow-hidden w-[272px] h-[570px] dark:bg-white-800 py-5 overflow-hidden ">
        <div className="content h-[90%] rounded border-black  ">
          {activeElement === "dashboard" && <Dashboard />}{" "}
          {activeElement === "profile" && <ProfilePage />}{" "}
        </div>
        <div className="bottomnav w-full px-3.5">
          <NavBottom
            showDashboard={showDashboard}
            showProfilePage={showProfilePage}
          />
        </div>
      </div>
    </div>
  );
}

export default PhoneFrame;
