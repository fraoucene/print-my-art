"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import React from "react";

export default function Admin() {
  const save = async () => {
    console.log("on click...");
    await axios.post("/api/import", {
      image:
        "https://cdn.midjourney.com/9e914429-5350-4518-8ec0-2e407577ab04/0_0.png",
      prompt: "marlena midnite ec comics horror art",
      fullPrompt: "marlena midnite ec comics horror art --s 250 --ar 2:3",
      description: "desc",
      aspect: "2:3",
    });
  };
  return (
    <div className="p-5 flex gap-6 w-full h-full">
      <div className="text-2xl font-bold">Page d'aministation</div>
      <Button variant={"destructive"} onClick={() => save()}>
        Importer les images
      </Button>
    </div>
  );
}
