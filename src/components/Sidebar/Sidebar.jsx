const Sidebar = () => {
  return (
    <div className="lg:w-[300px] md:w-[10%] hidden lg:flex flex-col h-screen bg-[#FAFAFA] items-center p-8 gap-4">
      <h1 className="text-3xl font-bold">WeHR</h1>
      <span className="w-full text-sm font-light ">MAIN MENU</span>
      <div className="flex flex-col w-full gap-4">
        <span className="text-[#B2B2B2]">Dashboard</span>
        <span className="text-[#B2B2B2]">Recruitment</span>
        <span className="text-[#B2B2B2]">Schedule</span>
        <span className="text-[#B2B2B2]">Employee</span>
        <span className="text-[#B2B2B2]">Department</span>
      </div>
      <span className="w-full text-sm font-light ">OTHER</span>
      <div className="flex flex-col w-full gap-4">
        <span className="text-[#B2B2B2]">Support</span>
        <span className="text-[#B2B2B2]">Settings</span>
      </div>
    </div>
  );
};

export default Sidebar;
