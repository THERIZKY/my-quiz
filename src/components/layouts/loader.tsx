import Image from "next/image";
const Loader = () => {
	return (
		<>
			<Image src={"/loader.svg"} width={500} height={500} alt={""} />
		</>
	);
};

export default Loader;
