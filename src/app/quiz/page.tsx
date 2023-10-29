"use client";
// Importing Library
import { useState, FormEvent, useEffect } from "react";
import Image from "next/image";

// Importing Package
import "animate.css";

// Importing Components
import Loader from "Rizh/components/layouts/loader";
import EndPages from "Rizh/components/pages/endPages";

// Interface
interface Soal {
	no: number;
	soal: string;
	jawaban: string[];
	correct: string;
	skor: number;
	image?: string;
}

const Quiz = () => {
	// Use State
	const [isLoading, setIsLoading] = useState(true);
	const [soal, setSoal] = useState<Soal[]>([]);
	const [nomorSoal, setNomorSoal] = useState(1);
	const [poin, setPoin] = useState(0);

	const soalYangCocok: any = soal.find((soal) => soal.no === nomorSoal);

	useEffect(() => {
		const getSoal = async () => {
			const res = await fetch(`/api/soal`);
			const data = await res.json();

			setIsLoading(false);
			setSoal(data.soal);
		};
		getSoal();
	}, []);

	const submitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsLoading(true);

		const formData = new FormData(e.currentTarget);
		const pilihan = formData.get("pilihan");

		if (soalYangCocok.correct === pilihan) {
			setPoin(poin + soalYangCocok.skor);
			setNomorSoal(nomorSoal + 1);
		} else {
			setNomorSoal(nomorSoal + 1);
		}

		setIsLoading(false);
	};
	return isLoading ? (
		<div className="loader">
			<Loader />
		</div>
	) : (
		<div className="fragment">
			{soalYangCocok && (
				<div>
					<h1 className="animate__animated animate__bounceIn">
						Tebak Tokoh OSIS dan Kebudayaan
					</h1>
					<div className="score animate__animated animate__lightSpeedInRight">
						Skor: <span id="score">{poin}</span>
					</div>
				</div>
			)}
			{soalYangCocok ? (
				<div>
					<div className="question animate__animated animate__fadeInDown">
						{soalYangCocok.image && (
							<Image
								src={soalYangCocok.image}
								width={500}
								height={500}
								alt="Contoh gambar"
							/>
						)}
						<p id="question-text">{soalYangCocok.soal}</p>
					</div>
					<form method="post" onSubmit={submitHandler}>
						<div className="choice">
							{soalYangCocok.jawaban.map(
								(jwb: string, index: number) => (
									<label htmlFor="pilihan1" key={index}>
										<input
											type="radio"
											id={jwb}
											name="pilihan"
											defaultValue={jwb}
										/>{" "}
										{jwb}
									</label>
								),
							)}
						</div>
						<button id="start-button" type="submit">
							Next
						</button>
					</form>
				</div>
			) : (
				<div>
					<EndPages score={poin} />
				</div>
			)}
		</div>
	);
};

export default Quiz;
