import axios from "axios";

const baseUrl = "https://api.shrtco.de/v2/";

type ShortenResponse = {
  data: {
    ok: boolean;
    result: {
      code: string;
      short_link: string;
      full_short_link: string;
      short_link2: string;
      full_short_link2: string;
      share_link: string;
      full_share_link: string;
      original_link: string;
    };
  };
};

export const getShortenLink = async (longUrl: string) => {
  const response: ShortenResponse = await axios.get(`${baseUrl}/shorten?url=${longUrl}`);
  return response.data.result.full_short_link;
};