const Sidebar = () => {
  return (
    <div className="lg:w-[300px] md:w-[10%] hidden lg:flex flex-col h-screen bg-[#B2B2B2] items-center p-8 gap-4">
      <h1 className="text-3xl font-bold">WeHR</h1>
      <span className="w-full text-sm font-light ">MAIN MENU</span>
      <div className="flex flex-col w-full gap-4">
        <span>Dashboard</span>
        <span>Recruitment</span>
        <span>Schedule</span>
        <span>Employee</span>
        <span>Department</span>
      </div>
      <span className="w-full text-sm font-light ">OTHER</span>
      <div className="flex flex-col w-full gap-4">
        <span>Support</span>
        <span>Settings</span>
      </div>
    </div>
  );
};

export default Sidebar;
