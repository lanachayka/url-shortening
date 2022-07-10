import { useState } from "react";
import { Button } from "../Button/Button";
import "./Result.scss";

type Props = {
  longUrl: string;
  shortUrl: string;
};

export const Result: React.FC<Props> = ({ longUrl, shortUrl }) => {
  const [isCopied, setIsCopied] = useState(false);
  const copyHandler = () => {
    navigator.clipboard.writeText(shortUrl);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 10000);
  };
  return (
    <div className="result-container">
      <p className="longUrl">{longUrl}</p>
      <p className="shortUrl">{shortUrl}</p>
      <Button
        text={isCopied ? "Copied!" : "Copy"}
        type="button"
        onClick={copyHandler}
        className={isCopied ? "active" : ""}
      />
    </div>
  );
};
