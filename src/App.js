import React,{useEffect,useState} from 'react';
import {Cards,Chart,CountryPicker} from './components';
import styles from './App.module.css'
import {fetchData} from "./api";
import covid19 from './images/covid19.png';

const App =()=> {

    const [data,setData] = useState({});
    const [country,setCountry] = useState("");

    useEffect(async()=>{
       setData(await fetchData());

    },[setData,setCountry])

    const handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        setCountry(country)
       setData(fetchedData);
        console.log(fetchedData);
    }
  return (
    <div className={styles.container}>
      <img className={styles.image} src={covid19} alt="Covid19"/>
      <Cards data={data}/>
        <CountryPicker handleCountryChange={handleCountryChange}/>
      <Chart data={data} country={country}/>
    </div>
  );
}

export default App;
