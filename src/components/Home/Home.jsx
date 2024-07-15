import SearchBar from "./SearchBar/SearchBar";
import Top from "./Top/Top";

function Home() {
    return (
        <div className="home">
            <Top/>
            <SearchBar/>
        </div>
  );
}

export default Home;