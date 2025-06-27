import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
// import OutProjectSection from "./components/OurProjectSection";
import OutTeamSection from "./components/OurTeamSection";

const App = () => {
	return (
		<main className="container m-auto pb-96 bg-white">
			<HomeSection />
			<AboutSection />
			{/* <OutProjectSection /> */}
			<OutTeamSection />
		</main>
	);
};

export default App;
