import { FormEvent, useState } from "react";
import { getShortenLink } from "../../api";
import { Button } from "../Button/Button";
import { Result } from "../Result/Result";
import "./UrlForm.scss";

type Result = {
  longUrl: string;
  shortUrl: string;
};

export const UrlForm = () => {
  const [url, setUrl] = useState<string>("");
  const [results, setResults] = useState<Result[]>([]);
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getShortenLink(url).then((res) => {
      setResults([
        ...results,
        {
          longUrl: url,
          shortUrl: res,
        },
      ]);
    });
    setUrl("");
  };

  return (
    <>
      <form className="url-form" onSubmit={submitHandler}>
        <input
          placeholder="Shorten a link here..."
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button text="Shorten It!" type="submit" />
      </form>
      {results.map((result, index) => (
        <Result
          key={index}
          longUrl={result.longUrl}
          shortUrl={result.shortUrl}
        />
      ))}
    </>
  );
};
