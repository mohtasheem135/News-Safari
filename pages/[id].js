import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css"

const NewsTitle = () => {

    const [data, setData] = useState("");

    useEffect(() => {
        fetch(`https://newsapi.org/v2/everything?q=cnn.com&language=en&apiKey=f688b40cbae84bbb9364589714dc2da6`).then((res) => res.json())
            .then((json) => {
                setData(json.articles)
                console.log(json.articles)
            })
    }, [])


    return (
        <div>
            <Navbar />
            {Object.keys(data).map((id, index) => {
                console.log(id)
                return (
                    <div key={index} >
                        {/* {console.log("JJJ"+)} */}
                        <h2 className={styles.title}>{data[id].title}</h2>
                        <div className={styles.name_container}>
                            {/* var str = data[id].publishedAt.charAt(0,5); */}
                            <p className={styles.author}>{data[id].publishedAt.substring(0, 10)} || {data[id].publishedAt.substring(11, 16)} </p>
                            <p className={styles.source}><b>{data[id].source.name}</b></p>
                        </div>
                        {data[id].urlToImage === null ? <br /> : <img className={styles.image_1} src={data[id].urlToImage} alt="No image" />}
                        {/* <img className={styles.image_1} src={data[id].urlToImage} /> */}
                        <p className={styles.description}>{data[id].description}<a className="read-more" target="_blank" rel="noreferrer" href={data[id].url}>Read More</a></p>
                        <hr />
                    </div>
                )
            })}
        </div>
    );
}

export default NewsTitle;