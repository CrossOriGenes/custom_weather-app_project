import { redirect } from "react-router";

export async function action({ request }) {
    const data = await request.formData();
    const cityName = data.get('cityName');
    let resData;
    const response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=ec11eb36620b4c63ade183922232806&q=${cityName}&days=7&aqi=yes&alerts=yes`
    );

    resData = await response.json();
    // console.log(resData);
    localStorage.setItem('initialCityData', JSON.stringify(resData));

    return redirect('weather');
}