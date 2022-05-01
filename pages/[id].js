import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import styles from "../styles/NewsSrc.module.css"

const NewsSrc = () => {

    const [data, setData] = useState("");
    const router = useRouter()
    const newsSrc = router.query.id;

    useEffect(() => {
        fetch(`https://newsapi.org/v2/everything?q=${newsSrc}&language=en&apiKey=f688b40cbae84bbb9364589714dc2da6`).then((res) => res.json())
            .then((json) => {
                setData(json.articles)
                console.log(json.articles)
            })
    }, [])

    return (
        <div>
            <Navbar />
            <br /><br /><br /><br /><br />
            {Object.keys(data).map((id, index) => {
                return (
                    <div key={index} >
                        {/* <FontAwesomeIcon icon="fa-solid fa-user" /> */}
                        
                        <h1 className={styles.title}>{data[id].title}</h1>
                        <div className={styles.name_container}>
                            <p className={styles.author}>{data[id].publishedAt.substring(0,10)} || {data[id].publishedAt.substring(11,16)}</p>
                            <p className={styles.src}><b>{data[id].source.name}</b></p>

                        </div>

                        {/* <img className='image-1' src={data[id].urlToImage} /> */}
                        {data[id].urlToImage === null ? <br /> : <img className={styles.image_1} src={data[id].urlToImage} />}
                        <p className={styles.content}>{data[id].description}<a className="read-more" target="_blank" href={data[id].url}>Read More</a></p>
                        {/* <p className={styles.content}>{data[id].description}<a className="read-more"  href={data[id].url}>Read More</a></p> */}
                        {/* <p>{data[id].content}<a className="read-more" target="_blank" href={data[id].url}>Read More</a></p> */}
                        <hr />
                    </div>
                )
            })}
        </div>
    );
}

export default NewsSrc;