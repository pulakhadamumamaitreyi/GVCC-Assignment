import ReactPlayer from "react-player";
import { useEffect,useRef,useState } from "react";
import axios from "axios";

function VideoPlayer({videoId}){

const playerRef=useRef();

const [video,setVideo]=useState({});

const [bookmarks,setBookmarks]=useState([]);

const [name,setName]=useState("");

useEffect(()=>{

axios.get("http://localhost:5000/videos")
.then(res=>{

const data=res.data.find(v=>v._id===videoId);

setVideo(data);

});

loadBookmarks();

},[]);

const loadBookmarks=()=>{

axios.get(`http://localhost:5000/bookmarks/${videoId}`)
.then(res=>{

setBookmarks(res.data);

});

};

const addBookmark=()=>{

const current=playerRef.current.getCurrentTime();

axios.post("http://localhost:5000/bookmarks",{

videoId,

bookmarkName:name,

timestamp:current

}).then(()=>{

loadBookmarks();

setName("");

});

};

const seekVideo=(time)=>{

playerRef.current.seekTo(time);

};

return(

<div>

<h2>{video.title}</h2>

<ReactPlayer

ref={playerRef}

url={video.videoUrl}

controls

width="900px"

height="500px"

/>

<br/>

<input

placeholder="Bookmark Name"

value={name}

onChange={(e)=>setName(e.target.value)}

/>

<button onClick={addBookmark}>

Add Bookmark

</button>

<h3>

Bookmarks

</h3>

{

bookmarks.map((b)=>(

<div key={b._id}>

<button onClick={()=>seekVideo(b.timestamp)}>

{b.bookmarkName || "Bookmark"}

-

{Math.floor(b.timestamp/60)}:

{Math.floor(b.timestamp%60)
.toString()
.padStart(2,"0")}

</button>

</div>

))

}

</div>

);

}

export default VideoPlayer;
