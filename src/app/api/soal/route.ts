export async function GET() {
	const soal = [
		{
			no: 1,
			soal: "Apa nama tarian tradisional dari Bali yang sering dianggap sebagai simbol budaya Indonesia?",
			jawaban: ["Wayang", "Barong", "Reog", "Randai"],
			correct: "Barong",
			skor: 1,
		},
		{
			no: 2,
			soal: "Alat musik tradisional yang terbuat dari bambu dan sering digunakan dalam berbagai upacara adat di Indonesia adalah?",
			jawaban: ["Angklung", "Saron", "Gamelan", "Kendang"],
			correct: "Angklung",
			skor: 1,
		},
		{
			no: 3,
			soal: "Apa nama rumah adat suku Minangkabau yang memiliki atap bergoncang dan melambangkan tanduk kerbau?",
			jawaban: [
				"Rumah Gadang",
				"Rumah Panggung",
				"Rumah Betang",
				"Rumah Adat",
			],
			correct: "Rumah Gadang",
			skor: 1,
		},
		{
			no: 4,
			soal: "Upacara tradisional suku Dayak di Kalimantan yang melibatkan penggunaan hiasan kepala berbentuk rumah adalah?",
			jawaban: [
				"Malam Kelewang",
				"Malam Keris",
				"Gawai Dayak",
				"Malam Selametan",
			],
			correct: "Gawai Dayak",
			skor: 1,
		},
		{
			no: 5,
			soal: "Seni lukis tradisional yang menggambarkan cerita-cerita epik dalam bentuk gambar berurutan adalah?",
			jawaban: ["Wayang Kulit", "Batik", "Bas-relief", "Lukisan Kamasan"],
			correct: "Wayang Kulit",
			skor: 1,
		},
		{
			no: 6,
			soal: "Apa nama seni ukir tradisional dari daerah Jepara yang terkenal dengan ukiran kayunya yang indah?",
			jawaban: [
				"Ukiran Kalimantan",
				"Ukiran Bali",
				"Ukiran Minangkabau",
				"Ukiran Jepara",
			],
			correct: "Ukiran Jepara",
			skor: 1,
		},
		{
			no: 7,
			soal: "Tradisi karapan sapi biasanya dilakukan oleh msayarakat?",
			jawaban: ["Bima", "Dayak", "Madura"],
			correct: "Madura",
			skor: 1,
		},
		{
			no: 8,
			soal: "Apa nama senjata tradisional Indonesia yang berbentuk kipas dan sering digunakan dalam seni bela diri?",
			jawaban: ["Keris", "Parang", "Kujang", "Silek"],
			correct: "Silek",
			skor: 1,
		},
	];
	return Response.json({ soal });
}
