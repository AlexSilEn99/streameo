import { useEffect, useState } from "react";
const useFectchRecommendations = () => {
    let result = {};
    const [recommendationsParameters, setRecommendationsParameters] = useState({});

    const fetchData = async () => {
        let options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjc3ZTFhMGRhYmZjNzAxZTcwOTkxZWJmNzdkNmE5YiIsIm5iZiI6MTcyMDY0ODM2OS4xMjc0NSwic3ViIjoiNjM5MTRiMTEwNDg2MzgwMGZiZDcwZjc3Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.8fok5dw4s6GdfA82W4px9B3ULfZJEn-ujpJc1B8zElk'
            }
        };

        await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
            .then(response => response.json())
            .then(response => result = response.results);
        setRecommendationsParameters(result);
    }

    useEffect(() => {
        fetchData();
    }, []);
    console.log(recommendationsParameters);
    return recommendationsParameters;
}

export default useFectchRecommendations;
    