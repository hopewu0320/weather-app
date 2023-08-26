import List from "./components/List"
import Picture from "./components/Picture"
import {useEffect,useState} from "react"
const HomePage = () =>{
    const [data,setData] = useState({});
    
    const fetchData = async ()=>{
        const weatherResponse = await fetch('/weather')
        console.log("Fetch complete")
        const weatherData = await weatherResponse.json()
        setData(weatherData)
        //console.log(weatherData)
    }
    
    useEffect(()=>{
        fetchData()
    },[])
    

    return <div className="container">
        <List data={data.data}/>
        <Picture/>
    </div>
}
export default HomePage;