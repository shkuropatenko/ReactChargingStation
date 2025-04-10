import CheckIcon from "@mui/icons-material/Check";
import AddIcon from "@mui/icons-material/Add";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
export const CheckboxButton = ({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) => {
  return (
    <label className="relative group cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="peer hidden"
      />
      <div
        className={`px-5 py-2 rounded-full border transition-all text-sm font-medium
        ${
          checked
            ? "border-lime-400 text-lime-300"
            : "border-zinc-600 text-zinc-300 group-hover:border-lime-400 group-hover:bg-white/5 group-hover:text-lime-300"
        }`}
      >
        {label} <AutoAwesomeIcon />
        {!checked && <AddIcon />}
        {checked && <CheckIcon />}
      </div>

      {/* hover */}
      <span className="absolute bottom-[-1px] left-[18px] right-[18px] h-[2px] bg-gradient-to-r from-[#3BFF72] to-[#C9FF3B] blur-[4.7px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </label>
  );
};
