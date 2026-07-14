import { useParams } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";

function WatchVideo(){

const {id}=useParams();

return(

<div>

<VideoPlayer videoId={id}/>

</div>

);

}

export default WatchVideo;
