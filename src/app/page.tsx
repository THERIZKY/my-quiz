"use client";
import { FormEvent, Fragment } from "react";
import pages from "./page.module.css";
import { usePathname, useRouter } from "next/navigation";

const Main = () => {
	const router = useRouter();

	const submiteHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);
		const name = formData.get("name");

		router.push(`/quiz?name=${name}`);
	};
	return (
		<Fragment>
			<div className={pages.container}>
				<h1 className={pages.h1}>Masukan Nama Kamu</h1>
				<form
					onSubmit={submiteHandler}
					className={pages.form}
					method="post"
				>
					<label htmlFor="name">Nama: </label>
					<input
						className={pages.input}
						type="text"
						id="name"
						name="name"
					/>

					<button className={pages.buttonIn} type="submit">
						Masuk Ke Quiz
					</button>
				</form>
			</div>
		</Fragment>
	);
};

export default Main;
