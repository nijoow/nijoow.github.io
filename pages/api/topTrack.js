// import { getTopTracks } from "./spotify";

// export default async (_, res) => {
//   const response = await getTopTracks();
//   const { items } = await response.json();
//   const tracks = items.slice(0, 10).map((track) => {
//     console.log(track);
//     return {
//       artist: track.artists.map((_artist) => _artist.name).join(", "),
//       songUrl: track.external_urls.spotify,
//       title: track.name,
//       albumImageUrl: track.album.images[0].url,
//     };
//   });

//   res.setHeader(
//     "Cache-Control",
//     "public, s-maxage=86400, stale-while-revalidate=43200"
//   );

//   return res.status(200).json({ tracks });
// };
