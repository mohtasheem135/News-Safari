import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const NewsTitle = () => {

    const [data, setData] = useState("");

    useEffect(() => {
        fetch(`https://newsapi.org/v2/everything?q=cnn.com&language=en&apiKey=f688b40cbae84bbb9364589714dc2da6`).then((res) => res.json())
            .then((json) => {
                setData(json.articles)
                console.log(json.articles)
            })
    }, [])

    console.log("ggg : - "+data)

    return ( 
        <div>
            <Navbar />
            <h1>Hello.....</h1>
        </div>
     );
}
 
export default NewsTitle;