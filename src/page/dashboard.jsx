import Schedule from "../components/dashboard/Banner";
import Profile from "../components/dashboard/Profile";
import IpkChart from "../components/dashboard/ipk";
import IpsChart from "../components/dashboard/ips";
import SksChart from "../components/dashboard/skscomponent";


const Dashboard = () => {
  return (
    <>
      <div className="dashboard  px-3.5 w-full h-full  flex flex-col items-center rounded-lg">
        <div className="profile-con w-full py-2 px-2.5 text-white border font-sans flex justify-between items-center">
          <Profile />
        </div>
        <Schedule />
        <IpkChart />
        <IpsChart />
        <SksChart />
      </div>
    </>
  );
};

export default Dashboard;
