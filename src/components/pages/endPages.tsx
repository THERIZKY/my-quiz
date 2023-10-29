import Link from "next/link";
import endPages from "./endPages.module.css";
const EndPages = (props: { score: number }) => {
	const { score } = props;
	return (
		<div className={endPages.end}>
			<h1 className={endPages.h1}>Soal sudah habis</h1>
			<h2 className={endPages.h1}>
				Skor kamu adalah <span>{score}</span>/10
			</h2>
			<Link className={endPages.backToMenu} href={"/"}>
				Back To Main Menu
			</Link>
		</div>
	);
};

export default EndPages;
