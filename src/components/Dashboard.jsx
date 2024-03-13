import Navbar from "./Navbar";
import { Ellipsis } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="w-[calc(100vw-300px)] h-full">
      <Navbar />
      <main className="p-8">
        <h3 className="mb-4">Dashboard</h3>
        <div className="flex gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="flex-col flex gap-4 h-40 bg-[#FF5151]/30 px-4 py-4 rounded-md w-60">
                <h2 className="text-xl font-semibold">Available Position</h2>
                <h1 className="text-3xl font-bold">24</h1>
                <p className="text-[#FF5151] font-semibold">
                  4 Urgently needed
                </p>
              </div>
              <div className="flex-col flex gap-4 h-40 bg-[#3786F1]/30 px-4 py-4 rounded-md w-60">
                <h2 className="text-xl font-semibold">Job Open</h2>
                <h1 className="text-3xl font-bold">24</h1>
                <p className="text-[#3786F1] font-semibold">4 Department</p>
              </div>
              <div className="flex-col flex gap-4 h-40 bg-[#EE61CF]/30 px-4 py-4 rounded-md w-60">
                <h2 className="text-xl font-semibold">New Employees</h2>
                <h1 className="text-3xl font-bold">10</h1>
                <p className="text-[#EE61CF] font-semibold">4 Department</p>
              </div>
            </div>
            <div className="flex justify-between w-full gap-4">
              <div className="flex justify-between w-full h-40 p-2 border rounded-md">
                <div className="flex flex-col gap-4">
                  <h2 className="text-xl font-semibold">Total Employees</h2>
                  <h1 className="text-3xl font-bold">216</h1>
                  <div>
                    <p className="text-[#B2B2B2] text-sm">120 Men</p>
                    <p className="text-[#B2B2B2] text-sm">96 Men</p>
                  </div>
                </div>
                <img src="graph.png" className="h-32" />
              </div>
              <div className="flex justify-between w-full h-40 p-2 border rounded-md">
                <div className="flex flex-col gap-4">
                  <h2 className="text-xl font-semibold">Total Employees</h2>
                  <h1 className="text-3xl font-bold">216</h1>
                  <div>
                    <p className="text-[#B2B2B2] text-sm">120 Men</p>
                    <p className="text-[#B2B2B2] text-sm">96 Men</p>
                  </div>
                </div>
                <img src="graph.png" className="h-32" />
              </div>
            </div>
            <div className="flex flex-col w-full p-2 border rounded-md">
              <span className="mb-2 text-lg font-semibold">Announcement</span>
              <div className="flex flex-col w-full gap-2">
                <div className="flex items-center justify-between bg-[#FAFAFA] px-4 py-2 rounded-md">
                  <div className="flex flex-col">
                    <h4 className="text-lg font-medium">
                      Outing schedule for every department
                    </h4>
                    <p className="text-sm font-medium">5 minutes ago</p>
                  </div>
                  <Ellipsis />
                </div>
                <div className="flex items-center justify-between bg-[#FAFAFA] px-4 py-2 rounded-md">
                  <div className="flex flex-col">
                    <h4 className="text-lg font-medium">
                      Meeting HR department
                    </h4>
                    <p className="text-sm font-medium">Yesterday 12:30 PM</p>
                  </div>
                  <Ellipsis />
                </div>
                <div className="flex items-center justify-between bg-[#FAFAFA] px-4 py-2 rounded-md">
                  <div className="flex flex-col">
                    <h4 className="text-lg font-medium">
                      IT Department need two more talents
                    </h4>
                    <p className="text-sm font-medium">Yesterday 9:15 AM</p>
                  </div>
                  <Ellipsis />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full gap-4">
            <div className="flex flex-col w-full">
              <div className="w-full bg-[#161E54] px-4 py-2 rounded-t-md">
                <h2 className="text-lg font-semibold text-white">
                  Recent Activity
                </h2>
              </div>
              <div className="w-full bg-[#1B204A] px-4 py-2 rounded-b-md flex flex-col gap-2">
                <span className="text-[#FAFAFA]/60 text-xs">
                  10:40 AM, Fri 10 Sept 2021
                </span>
                <h3 className="text-lg font-semibold text-white">
                  You posted a New Job
                </h3>
                <p className="text-[#FAFAFA]/80 text-sm font-medium max-w-sm">
                  Kindly check the requirements and terms of work and make sure
                  everything is right
                </p>
                <div className="flex justify-between my-4">
                  <p className="text-white/80">Schedule a call</p>
                  <button className="px-8 py-2 text-white bg-red-500 rounded-md">
                    Schedule
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full p-2 border rounded-md">
              <span className="mb-2 text-lg font-semibold">
                Upcoming schedule
              </span>
              <div className="flex flex-col w-full gap-2">
                <span className="text-sm text-gray-500">Priority</span>
                <div className="flex items-center justify-between bg-[#FAFAFA] px-4 py-2 rounded-md">
                  <div className="flex flex-col">
                    <h4 className="text-lg font-medium">
                      Review Candidate applications
                    </h4>
                    <p className="text-sm font-medium">Today 11:30 AM</p>
                  </div>
                  <Ellipsis />
                </div>
                <span className="text-sm text-gray-500">Other</span>
                <div className="flex items-center justify-between bg-[#FAFAFA] px-4 py-2 rounded-md">
                  <div className="flex flex-col">
                    <h4 className="text-lg font-medium">
                      Interview other candidates
                    </h4>
                    <p className="text-sm font-medium">Today 10:30 AM</p>
                  </div>
                  <Ellipsis />
                </div>
                <div className="flex items-center justify-between bg-[#FAFAFA] px-4 py-2 rounded-md">
                  <div className="flex flex-col">
                    <h4 className="text-lg font-medium">
                      Short meeting with product designer
                    </h4>
                    <p className="text-sm font-medium">Today 9:15 AM</p>
                  </div>
                  <Ellipsis />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
