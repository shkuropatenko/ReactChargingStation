type TabButtonProps = {
  label: string;
  route: string;
  active: boolean;
  onClick: (route: string) => void;
};

const TabButton = ({ label, route, active, onClick }: TabButtonProps) => {
  return (
    <button
      onClick={() => onClick(route)}
      className={`cursor-pointer text-white text-lg font-medium px-4 h-[40px] rounded-[4px] border transition-all
        ${
          active
            ? "bg-grey-200 border-grey-100"
            : "bg-transparent border-transparent hover:bg-grey-200 hover:border-grey-100"
        }`}
    >
      {label}
    </button>
  );
};

export default TabButton;
