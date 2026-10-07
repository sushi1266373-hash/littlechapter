import {useEffect,useRef,useState} from 'react'
import {Volume2,VolumeX} from 'lucide-react'
// Optional: place your own file at public/audio/story-music.mp3. If missing, this stays hidden.
export default function MusicToggle(){
  const a=useRef(null),[ok,setOk]=useState(false),[on,setOn]=useState(false)
  useEffect(()=>{const el=new Audio('/audio/story-music.mp3');el.loop=true;el.volume=.5
    el.addEventListener('canplaythrough',()=>setOk(true),{once:true});el.addEventListener('error',()=>setOk(false));a.current=el;return()=>el.pause()},[])
  if(!ok)return null
  const t=()=>{on?a.current.pause():a.current.play().catch(()=>{});setOn(!on)}
  return <button className="music" onClick={t} aria-label={on?'Mute music':'Play music'}>{on?<Volume2 size={18}/>:<VolumeX size={18}/>}</button>}
