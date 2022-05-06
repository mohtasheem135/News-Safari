import { useState } from 'react';
import Navbar from '../components/Navbar';
import styles from "../styles/Home.module.css";
import { useRouter } from 'next/router';

export default function Users({ initialData }) {

    const router = useRouter();
    const [data, setData] = useState(initialData);

    const fetchData = async (e) => {
        const req = await fetch(`https://newsapi.org/v2/top-headlines?q=${e.target.value}&language=en&apiKey=f688b40cbae84bbb9364589714dc2da6`);
        const newData = await req.json();

        return setData(newData.articles);
    };

    const handelClick_fliter = (e) => {
        e.preventDefault();
        fetchData(e);
    };

    const handelClick_src = (e) => {
        console.log(e.target.value)
    
        router.push('/hello')
    
      }

    return (
        <div>
            <Navbar />

            <div className={styles.container_3}>

                <button value="business" onClick={handelClick_fliter} className={styles.btn_1}>Business</button>
                <button value="technology" onClick={handelClick_fliter} className={styles.btn_1}>Technology</button>
                <button value="entertainment" onClick={handelClick_fliter} className={styles.btn_1}>Entertainment</button>
                <button value="general" onClick={handelClick_fliter} className={styles.btn_1}>general</button>
                <button value="health" onClick={handelClick_fliter} className={styles.btn_1}>Health</button>
                <button value='science' onClick={handelClick_fliter} className={styles.btn_1}>Science</button>
                <button value='sports' onClick={handelClick_fliter} className={styles.btn_1}>Sports</button>
                <button value='covid' onClick={handelClick_fliter} className={styles.btn_1}>Covid</button>
                <button value='russia' onClick={handelClick_fliter} className={styles.btn_1}>Russia</button>
                {/* <button value='ukraine' onClick={handelClick_fliter} className={styles.btn_1}>Covid</button> */}
            </div>

            <div className={styles.container_1} >
                {data != null ?
                    Object.keys(data).map((id, index) => {
                        // console.log("ggg : - " + id)
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
                            
                        );
                    })
                    :
                    <h1>Loading...</h1>}

            </div>

            <div className={styles.container_2}>
                <button className={styles.news_src_btn} value='nytimes.com' onClick={handelClick_src} >New York Times</button>
                <button className={styles.news_src_btn} value='cnn.com' onClick={handelClick_src} >CNN</button>
                <button className={styles.news_src_btn} value='cnbc.com' onClick={handelClick_src} >CNBC</button>
                <button className={styles.news_src_btn} value='wsj.com' onClick={handelClick_src} >The Wall Street Journal</button>
                <button className={styles.news_src_btn} value='techradar.com' onClick={handelClick_src} >TechRadar</button>
                <button className={styles.news_src_btn} value='hindustantimes.com' onClick={handelClick_src} >Hindustan Times</button>
                <button className={styles.news_src_btn} value='www.theguardian.com' onClick={handelClick_src} >The Guardian</button>
                <button className={styles.news_src_btn} value='indianexpress.com' onClick={handelClick_src} >The Indian Express</button>
                <button className={styles.news_src_btn} value='ndtv.com' onClick={handelClick_src} >NDTV</button>
                <button className={styles.news_src_btn} value='timesofindia.indiatimes.com' onClick={handelClick_src} >The Times of India</button>
                <button className={styles.news_src_btn} value='news18.com' onClick={handelClick_src} >News 18</button>
                <button className={styles.news_src_btn} value='gadgetsnow.com' onClick={handelClick_src} >Gadgets Now</button>
                <button className={styles.news_src_btn} value='dnaindia.com' onClick={handelClick_src} >DNA India</button>
                <button className={styles.news_src_btn} value='youtube.com' onClick={handelClick_src} >Youtube</button>
                <button className={styles.news_src_btn} value='livemint.com' onClick={handelClick_src} >Live Mint</button>
            </div>


        </div>
    );
}

Users.getInitialProps = async () => {
    const req = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=f688b40cbae84bbb9364589714dc2da6');
    const data = await req.json();
    return { initialData: data.articles };
};