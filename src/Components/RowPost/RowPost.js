import React, { useEffect, useState } from 'react'
import {imageUrl,API_KEY} from '../../constants/constants'
import "./RowPost.css"
import axios from '../../Components/axios'
import YouTube from 'react-youtube'



function RowPost(props) {
  const [poster, setPoster] = useState([])
  const [urlId, setUrlId] = useState("")
    useEffect(() => {
       axios.get(props.url).then(response => {
           console.log(response.data)
           setPoster(response.data.results)
          
       })
    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay:1,
        },
      };
      const clickMovie= (id)=>{
          axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
              if(response.data.results.length!==0){
                  setUrlId(response.data.results[0])
                  console.log(response.data)
              }
          })

      }
    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="posters">
                {poster.map((obj)=>
                <img onClick={()=>clickMovie(obj.id)}  className={props.isSmall ? "smallposter":"poster"} src={`${imageUrl+obj.backdrop_path}`} alt="" />
                
                )}
                
                
                

            </div>
         { urlId  &&  <YouTube videoId={urlId.key} opts={opts}/>}
            
        </div>
    )
}

export default RowPost
