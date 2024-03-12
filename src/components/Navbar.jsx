import { Bell, MessageSquareMore, ChevronDown } from "lucide-react";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full h-20 px-4 py-4 shadow-lg">
      <input
        type="text"
        className="h-10 px-4 border shadow-md w-80"
        placeholder="Search"
      />
      <div className="flex items-center gap-4 mr-12">
        <Bell />
        <MessageSquareMore />
        <span className="w-8 h-8 bg-black rounded-full" />
        <span className="flex items-center">
          Admirra John <ChevronDown size={16} />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
