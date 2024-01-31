
export function getFormattedHourlyData(data) {
    const hourlyData = data.forecast.forecastday[0].hour;
    const hh = new Date().getHours().toString();

    const hourlyForecast = [];
    for (const key in hourlyData) {
        const { time, condition: { icon }, temp_c } = hourlyData[key];

        // extract the time 
        const tmp = time.split(" ");
        const temp = tmp[1].split(':');
        const newTime = temp[0] === hh ? 'Now' : tmp[1];
        hourlyForecast.push({
            timeslot: newTime,
            icon: icon,
            temperature: Math.round(temp_c)
        });
    }
    return { hourlyForecast };
}

export function getFormattedWeeklyData(data) {
    const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const today = weekdays[new Date().getDay()];
    const forecastArray = data.forecast.forecastday;

    const weeklyForecast = [];
    for (const key in forecastArray) {
        const { date, day: { condition: { icon }, maxtemp_c, mintemp_c } } = forecastArray[key];

        //extract the day
        const dd = new Date(date).getDay();
        const weekDay = weekdays[dd] === today ? 'Today' : weekdays[dd];

        weeklyForecast.push({
            id: Math.random().toString(),
            day: weekDay,
            icon: icon,
            maxTemp: Math.round(maxtemp_c),
            minTemp: Math.round(mintemp_c)
        });
    }
    return { weeklyForecast };
}



