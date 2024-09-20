import s from "./styles.module.css";

export default function Home() {
	return (
		<main className={s.main}>
			<h1 className={s.title}>Oi mozi</h1>
			<h2 className={s.subtitle}>
				Eu sei que está tarde, mas queria te lembrar que tu tem pessoas que te
				amam muito muito muito nessa vida... como eu e o boltinha!
			</h2>
			<div className={s.hearts}>
				<span className={s.heart} />
				<span className={s.heart} />
				<span className={s.heart} />
				<span className={s.heart} />
				<span className={s.heart} />
				<span className={s.heart} />
				<span className={s.heart} />
				<span className={s.heart} />
				<span className={s.heart} />
				<span className={s.heart} />
				<span className={s.heart} />
				<span className={s.heart} />
				<span className={s.heart} />
				<span className={s.heart} />
				<span className={s.heart} />
				<span className={s.heart} />
				<span className={s.heart} />
				<span className={s.heart} />
				<span className={s.heart} />
				<span className={s.heart} />
				<span className={s.heart} />
				<span className={s.heart} />
				<span className={s.heart} />
				<span className={s.heart} />
				<span className={s.heart} />
				<span className={s.heart} />
				...
			</div>
			<p className={s.description}>
				Essa mensagem faz parte do desafio do curso
			</p>

			<img src="../assets/images/euebolota.jpeg" alt="eu e o boltinha" />
		</main>
	);
}
