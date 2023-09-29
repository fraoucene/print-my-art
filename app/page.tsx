"use client";
import ArtCard from "@/components/artCard";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useMidjourney } from "@/hooks/useMidjourney";
import { wait } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function Home() {
  const [type, setType] = useState<"recent" | "top">("recent");
  const { results, loading: loadingData } = useMidjourney(type);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    wait(1000).then(() => setLoading(false));
  }, [results, type]);

  return (
    <div className=" p-2">
      <div className="flex gap-2 justify-between items-center py-4">
        <h1 className="sm:flex w-[120px] items-center grow h-16 text-3xl sm:visible hidden font-medium text-white">
          {type === "top" ? "Top" : "Ajouter Récemment"}
        </h1>
        <Tabs defaultValue="recent" className="mb-2 w-[300px]">
          <TabsList className="grid grid-cols-2">
            <TabsTrigger onClick={() => setType("recent")} value="recent">
              Récent
            </TabsTrigger>
            <TabsTrigger onClick={() => setType("top")} value="top">
              Top
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="grid lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {!loading &&
          results
            ?.reverse()
            ?.map((item) => <ArtCard item={item} key={item.id} />)}
        {loading &&
          Array.from(Array(52).keys()).map((item: any) => (
            <Skeleton key={item} className="w-full h-[420px]" />
          ))}
      </div>
    </div>
  );
}
