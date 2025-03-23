import HomeSection from "./components/HomeSection";
import OutProjectSection from "./components/OurProjectSection";
import OutTeamSection from "./components/OurTeamSection";

const App = () => {
  return (
    <main className="container m-auto pb-96 bg-white">
      <HomeSection />
      <OutProjectSection />
      <OutTeamSection />
    </main>
  );
};

export default App;
