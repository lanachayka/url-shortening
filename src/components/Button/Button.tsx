import "./Button.scss";

type Props = {
  type?: "button" | "submit" | "reset" | undefined;
  text: string;
  onClick?: () => void;
  className?: string;
};

export const Button: React.FC<Props> = ({ text, type, onClick, className }) => {
  return (
    <button className={"btn" + " " + className} type={type} onClick={onClick} >
      {text}
    </button>
  );
};
