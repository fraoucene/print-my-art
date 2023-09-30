import axios from "axios";
import useFetch from "./useFetch";
import { MidjourneyItem } from "@/types";

let cachedItems: any = {};
const fetchMidjourney = async (type: "top" | "recent") => {
  const id = `-${type}`;
  if (cachedItems[id]) return cachedItems[id];
  const response = await axios.get(
    "/api/showcase"
    // `https://www.midjourney.com/_next/data/chlEHaZ66ABW-AUWIhDjH/showcase/${type}.json`
  );
  cachedItems[id] = response?.data?.pageProps?.jobs || [];
  return cachedItems[id];
};

export const useMidjourney = (type: "top" | "recent") => {
  let results = useFetch<MidjourneyItem[]>(fetchMidjourney, [type], type);
  return results;
};
