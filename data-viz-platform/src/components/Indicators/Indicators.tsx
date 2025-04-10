import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
export interface IndicatorProps {
  title: string;
  text: string;
  cost: string;
}
const Indicator: React.FC<IndicatorProps> = ({ title, text, cost }) => {
  return (
    <div className="bg-grey-900 border border-grey-1000 px-7 py-7 rounded-[6px] shadow-lg h-[100%]">
      <div>
        <strong className="font-medium text-[18px] flex items-center justify-between mb-[8px]">
          <span>{title}</span>
          <HelpOutlineIcon className="text-[#BBBBBB] !w-[16px] h-![16px]" />
        </strong>
      </div>
      <p className="text-[12px] text-[#BBBBBB] mb-[34px]">{text}</p>
      <span className="cost text-[32px] block text-right font-bold">
        {cost}
      </span>
    </div>
  );
};

export default Indicator;
