import Title from "./Title/Title";
import Item from "./Item/Item";
import Recommendations from "../Movie/Recommendations/Recommendations";
import useFectchRecommendations from '../../useFetchRecommendations.js';
function History() {
    let historyList = localStorage.getItem("historyList");
    const movieIds = (historyList != null && historyList != "") ? historyList.split(",").filter(Number).reverse() : [];
    const recommendationsClass = movieIds.length > 0 ? "d-none" : "d-block";

    const recommendationsParameters = useFectchRecommendations();

    if (movieIds != undefined) return (
        <div className="mt-4 d-flex bg-black--gradient-middle justify-content-center">
            <div className="w-50" >
                <Title />
                <div className="custom-scrollbar" style={{overflowX:"hidden", overflowY:"scroll", maxHeight:"70vh"}}>
                {
                    movieIds.map((movieId) => {
                        return (
                            <div key={ movieId}>
                                <Item parameters={{movieId :movieId}} />
                            </div>
                        )
                    })
                    }  
                </div>
                <div className={recommendationsClass}>
                    <p className="h6 text-start"><b>Looks like your history is empty... Go and watch some movies</b></p>
                    {recommendationsParameters && <Recommendations parameters={recommendationsParameters} />}
                </div >
            </div>
        </div>
    );
}
    

export default History;