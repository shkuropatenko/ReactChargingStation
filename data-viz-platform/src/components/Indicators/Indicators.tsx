import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
export interface IndicatorProps {
  title: string;
  text: string;
  cost: string;
}
const Indicator: React.FC<IndicatorProps> = ({ title, text, cost }) => {
  return (
    <div className="bg-grey-900 border border-grey-1000 p-6 rounded-2xl shadow-lg h-[100%]">
      <div>
        <strong className="">
          <span>{title}</span>
          <HelpOutlineIcon />
        </strong>
      </div>
      <p>{text}</p>

      <span className="cost">{cost}</span>
    </div>
  );
};

export default Indicator;
