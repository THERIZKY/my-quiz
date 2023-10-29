export async function GET() {
	const soal = [
		{
			no: 1,
			soal: "siapa presiden pertama indonesia?",
			jawaban: ["jokowi", "soekarno", "suharto"],
			correct: "soekarno",
			skor: 1,
		},
		{
			no: 2,
			soal: "siapa presiden ketujuh indonesia?",
			jawaban: ["jokowi", "soekarno", "suharto"],
			correct: "jokowi",
			skor: 1,
		},
	];
	return Response.json({ soal });
}
