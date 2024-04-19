import { useMovies } from "@/hooks/useMovies";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Shelf } from "@/components/Shelf";

function Home() {
	const { items, isLoading } = useMovies();

	const shelfItems = items.map(({ id, image, price, title }) => ({
		id: String(id),
		price,
		title,
		imageUrl: image,
	}));

	return (
		<Container>
			<Header />
			<Shelf items={shelfItems} isLoading={isLoading} />
		</Container>
	);
}

export default Home;
