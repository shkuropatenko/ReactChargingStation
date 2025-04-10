import { CheckboxButton } from "../CheckboxButton/CheckboxButton";

export const CheckboxGroup = ({
  options,
  selected,
  setSelected,
  onHover: handleHover,
}: {
  options: string[];
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
  onHover: (label: string) => void;
}) => {
  const toggle = (label: string) => {
    setSelected((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };

  return (
    <div className="flex gap-4 flex-wrap">
      {options.map((label) => (
        <div
          key={label}
          onMouseEnter={
            label === "CO₂ Distribution" ? () => handleHover(label) : undefined
          }
          onMouseLeave={
            label === "CO₂ Distribution" ? () => handleHover("") : undefined
          }
        >
          <CheckboxButton
            label={label}
            checked={selected.includes(label)}
            onChange={() => toggle(label)}
          />
        </div>
      ))}
    </div>
  );
};
