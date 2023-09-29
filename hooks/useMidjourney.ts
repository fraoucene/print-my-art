import axios from "axios";
import useFetch from "./useFetch";
import { MidjourneyItem } from "@/types";

// https://www.midjourney.com/_next/data/chlEHaZ66ABW-AUWIhDjH/showcase/recent.json

let cachedItems: any = {};
const fetchMidjourney = async (type: "top" | "recent") => {
  const id = `-${type}`;
  if (cachedItems[id]) return cachedItems[id];
  const response = await fetch(
    // "/api/recent"
    // "https://www.midjourney.com/showcase/recent/"
    `http://localhost:8010/proxy/_next/data/chlEHaZ66ABW-AUWIhDjH/showcase/${type}.json`
  );
  const data = await response.json();
  console.log(data);
  cachedItems[id] = data?.pageProps?.jobs || [];
  return cachedItems[id];
};

export const useMidjourney = (type: "top" | "recent") => {
  let results = useFetch<MidjourneyItem[]>(fetchMidjourney, [type], type);
  return results;
};
