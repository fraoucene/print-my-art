import data from "@/data/showcase.json";
export const GET = async () => {
  try {
    if (!data)
      return new Response("Recent showcase Not Found", { status: 404 });

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    // console.log(error);
    return new Response(JSON.stringify({}), { status: 500 });
  }
};
