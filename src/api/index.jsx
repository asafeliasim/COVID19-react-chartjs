import axios from 'axios';

const url = 'http://covid19.mathdro.id/api';

export const fetchData = async (country) => {
   let changeableUrl = url;

   if(country){
       changeableUrl = `${url}/countries/${country}`;
   }

   try{
      const {data:{confirmed,recovered,deaths,lastUpdate}}  = await axios.get(changeableUrl);
      return {
          confirmed,
          recovered,
          deaths,
          lastUpdate
      }
   }catch (error) {

   }
}
export const fetchDailyData = async () => {
    try{
        const {data} = await axios.get(`${url}/daily`);
        return data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));
    }catch (error) {

    }
}
export const fetchCountries = async () => {
    try{
        console.log("get countries")
        const {data:{countries}}  = await axios.get(`${url}/countries`);

        console.log(countries.map(c=>c.name));
        return countries.map(c => c.name);

    }catch (error) {
        console.log(error)
    }
}
