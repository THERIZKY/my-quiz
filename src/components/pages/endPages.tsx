import Link from "next/link";
import endPages from "./endPages.module.css";
import { useEffect, useState } from "react";
const EndPages = (props: { score: number; name: string }) => {
	const { score, name } = props;
	const [totalSoal, setTotalSoal] = useState(0);

	useEffect(() => {
		const getTotalSoal = async () => {
			const response = await fetch("/api/soal");
			const data = await response.json();

			const total = data.soal.length;
			setTotalSoal(total);
		};
		getTotalSoal();
	}, []);
	return (
		<div className={endPages.end}>
			<h1 className={endPages.h1}>Soal sudah habis</h1>
			<h2 className={endPages.name}>
				<span className={endPages.congrats}>Selamat</span> {name}
			</h2>
			<h2 className={endPages.h1}>
				Skor kamu adalah <span>{score}</span>/{totalSoal}
			</h2>
			<Link className={endPages.backToMenu} href={"/"}>
				Back To Main Menu
			</Link>
		</div>
	);
};

export default EndPages;
