import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";



export async function getServerSideProps(context) {

    const res = await fetch(`https://newsapi.org/v2/everything?q=cnn.com&language=en&apiKey=f688b40cbae84bbb9364589714dc2da6`);
    const value = await res.json();
    return {
        props: {
            news: value.articles,
        }, // will be passed to the page component as props
    }
}


const NewsTitle = ({ news }) => {

    

    return (
        <div>
            <Navbar />
            {Object.keys(news).map((id, index) => {
                return (
                    <div key={index} >
                        {/* {console.log("JJJ"+)} */}
                        <h2 className={styles.title}>{news[id].title}</h2>
                        <div className={styles.name_container}>
                            {/* var str = news[id].publishedAt.charAt(0,5); */}
                            <p className={styles.author}>{news[id].publishedAt.substring(0, 10)} || {news[id].publishedAt.substring(11, 16)} </p>
                            <p className={styles.source}><b>{news[id].source.name}</b></p>
                        </div>
                        {news[id].urlToImage === null ? <br /> : <img className={styles.image_1} src={news[id].urlToImage} alt="No image" />}
                        {/* <img className={styles.image_1} src={news[id].urlToImage} /> */}
                        <p className={styles.description}>{news[id].description}<a className="read-more" target="_blank" rel="noreferrer" href={news[id].url}>Read More</a></p>
                        <hr />
                    </div>
                )
            })}
        </div>
    );
}



export default NewsTitle;