import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movies from "../components/Movies.js";
function Detail() {
    const[movie,setMovie] = useState([]);
    const {id} = useParams();
    const getDetail = async () => {
        const json = await (
          await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        console.log(json);
    };
    useEffect(()=> {
        getDetail()
    },[])
    
    return(
        <div>
            <h1>{movie.title}</h1>
            
       </div>
      
    )
}

export default Detail;