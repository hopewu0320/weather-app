import List from "./components/List"
import WeatherData from "./components/WeatherData"
import {useEffect,useState} from "react"
const HomePage = () =>{
    const [data,setData] = useState({});
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b131fc95 (傳送成功)
    const [selectedItem, setSelectedItem] = useState([]);

    const fetchData = async ()=>{
        const weatherResponse = await fetch('/weather')
        console.log("Fetch complete")
        const weatherData = await weatherResponse.json()
        setData(weatherData)
        
=======
    
<<<<<<< HEAD
    const fetchData = (setData)=>{
        fetch('http://localhost:3000/posts/1')
        .then(res => res.json())
        .then(resdata =>{
            setData(resdata);
            console.log(resdata)
        })
>>>>>>> ae3eff55 (New branch)
=======
=======
    const [data2P, setData2P] = useState(null);

>>>>>>> d2f21de2 (儲存item in data)
    const fetchData = async ()=>{
        const weatherResponse = await fetch('/weather')
        console.log("Fetch complete")
        const weatherData = await weatherResponse.json()
        setData(weatherData)
<<<<<<< HEAD
        //console.log(weatherData)
>>>>>>> 6ae00057 (API connection OK)
=======
        
>>>>>>> d2f21de2 (儲存item in data)
    }
    
    useEffect(()=>{
        fetchData()
    },[])
    

<<<<<<< HEAD
    return <div className="container">
<<<<<<< HEAD
<<<<<<< HEAD
        <List data={data.data} setSelectedItem={setSelectedItem} />
        <WeatherData selectedItem={selectedItem}/>
=======
        <List data={data.data} setData={setData} />
        <div className="picture">
            <Picture  />
        </div>
>>>>>>> d2f21de2 (儲存item in data)
=======
        <List data={data.data} setSelectedItem={setSelectedItem} />
        <WeatherData selectedItem={selectedItem}/>
>>>>>>> b131fc95 (傳送成功)
=======
    return <div className="container" >
        <List data={data.data} setSelectedItem={setSelectedItem} />
        
        <WeatherData selectedItem={selectedItem} />
>>>>>>> 4ce8a225 (上下切版)
    </div>
}
export default HomePage;