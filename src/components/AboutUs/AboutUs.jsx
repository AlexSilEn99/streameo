import Description from "./Description/Description";
import Title from "./Title/Title";
import Recommendations from "../Movie/Recommendations/Recommendations";
import useFectchRecommendations from '../../useFetchRecommendations.js';


function AboutUs() {
    const recommendationsParameters = useFectchRecommendations();

    return (
        <div className="d-flex bg-black-transparent-fade justify-content-center">
            <div className="w-50">
                <Title />
                <Description />
                <div className="mb-4 mt-4">
                    <p className="h6 text-start"><b>Enough talking, here you have some recommended movies</b></p>
                    {recommendationsParameters && <Recommendations parameters={recommendationsParameters} />}
                </div>
            </div>
        </div>
    );
}

export default AboutUs;