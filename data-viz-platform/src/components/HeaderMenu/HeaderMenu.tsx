const HeaderMenu = () => {
  return (
    <nav className="flex space-x-4">
      <button className="cursor-pointer text-white text-lg bg-transparent border border-transparent hover:bg-grey-200 hover:text-white hover:border-grey-100 rounded-[4px] font-medium px-4 h-[40px] transition transform duration-500 ease-in-out">
        Charging Stations
      </button>
      <button className="cursor-pointer text-white text-lg bg-transparent border border-transparent hover:bg-grey-200 hover:text-white hover:border-grey-100 rounded-[4px] font-medium px-4 h-[40px] transition transform duration-500 ease-in-out">
        Fleet Sizing
      </button>
      <button className="cursor-pointer text-white text-lg bg-transparent border border-transparent hover:bg-grey-200 hover:text-white hover:border-grey-100 rounded-[4px] font-medium px-4 h-[40px] transition transform duration-500 ease-in-out">
        Parking
      </button>
    </nav>
  );
};
export default HeaderMenu;
