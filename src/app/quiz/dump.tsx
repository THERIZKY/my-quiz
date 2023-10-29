const Quiz = () => {
	const [nomorSoal, setNomorSoal] = useState(1);
	const [poin, setPoin] = useState(0);

	const soalYangCocok: any = soal.find((soal) => soal.no === nomorSoal);

	const cekJawabanBenar = (jawaban: string) => {
		if (soalYangCocok.correct === jawaban) {
			setPoin(poin + soalYangCocok.skor);
		}
	};

	return (
		<>
			<div>
				{soalYangCocok && (
					<div>
						<h1>{soalYangCocok.no}</h1>
						<h3>{soalYangCocok.soal}</h3>
						<div>
							{soalYangCocok.jawaban.map(
								(jawaban: string, index: number) => (
									<form key={index}>
										<input
											type="radio"
											name="jawaban"
											id={jawaban}
										/>
										<label htmlFor={jawaban}>
											{jawaban}
										</label>
									</form>
								),
							)}
						</div>
					</div>
				)}
				<button
					onClick={() => {
						setNomorSoal(nomorSoal + 1);
						cekJawabanBenar(soalYangCocok.correct);
					}}
				>
					Next Soal
				</button>
			</div>
		</>
	);
};
