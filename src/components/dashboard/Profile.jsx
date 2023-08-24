const Profile = () => {
  return (
    <>
      <div className="flex justify-start items-center">
        <div className="biodata-img w-[45px] h-[45px] border  rounded-full">
          <img src="/src/assets/img/_DSC0024.JPG" alt="" />
        </div>
        <div className="ml-1.5 profile-headline text-black">
          <h1 className="text-base font-semibold">Daniel Kurnia</h1>
          <p className="text-xs opacity-75 font-light font-semibold mt-[-3px]">
            1462200071
          </p>
        </div>
      </div>
      <div className="notif rounded-full flex justify-center items-center ">
        <i className="fa-regular fa-bell" />
      </div>
    </>
  );
};

export default Profile;
