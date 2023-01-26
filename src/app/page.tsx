import {Inter} from '@next/font/google'
import styles from "./home.module.css";
import Table from "@/component/table";


export default function Home() {
	return (
		<main className={styles.main}>
			<Table/>
		</main>
	)
}