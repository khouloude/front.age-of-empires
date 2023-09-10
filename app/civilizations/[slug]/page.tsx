import ListItem from "../../../components/ListItem";
require("dotenv").config();

export default async function Civilization({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const data = await getData(slug);
  return <ListItem cardData={data} type="civilization" />;
}

async function getData(slug: string) {
  // Fetch data from external API
  const res = await fetch(
    `${process.env.API_URL}/civilization/${slug?.toLowerCase()}`
  );
  const data = await res?.json();

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return data;
}
