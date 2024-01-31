import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient();

// export async function loader() {
//   let resData;
//   const response = await fetch(
//     `http://api.weatherapi.com/v1/forecast.json?key=ec11eb36620b4c63ade183922232806&q=London&days=7&aqi=yes&alerts=yes`
//   );

//   if (!response.ok) {
//     throw new Error({ message: "Fetching events failed !" });
//   } else {
//     resData = await response.json();
//     // console.log(resData);
//   }

//   return defer({
//     resData,
//   });
// }