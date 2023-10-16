import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  label: string;
  icon?: string;
  variant: string;
  full?: boolean;
};

const Button = ({ type, label, icon, variant, full }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border ${variant} ${
        full && "w-full"
      }`}
    >
      {icon && <Image src={icon} alt={label} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">
        {label}
      </label>
    </button>
  );
};

export default Button;
