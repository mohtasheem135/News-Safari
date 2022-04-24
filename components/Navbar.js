import { useEffect, useState } from "react";
import styles from "../styles/Navbar.module.css"
import { useRouter } from 'next/router';

const Navbar = () => {

    const router = useRouter()

    const home=()=>{
        router.push(`/`)
    }

    return (
        <div>
            <nav className={styles.navContainer}>
                <p onClick={home} className={styles.headText}>News Safari</p>

            </nav>
            
        </div>
    );
}

export default Navbar;