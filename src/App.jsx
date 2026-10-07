import {useEffect,useMemo,useRef,useState,useCallback} from 'react'
import {AnimatePresence,motion,MotionConfig,useReducedMotion} from 'framer-motion'
import {beats,REPLAY_QUOTE} from './data/story'
import CinematicScene from './components/CinematicScene'
import SceneText from './components/SceneText'
import StoryButton from './components/StoryButton'
import MusicToggle from './components/MusicToggle'

const CHAPTERS=['','CHAPTER ONE','CHAPTER TWO','CHAPTER THREE','CHAPTER FOUR']
// Chapter = number of chapter title cards seen so far (0 = intro, no label).
const chapterOf=idx=>beats.slice(0,idx+1).filter(x=>x.title).length
const pad=n=>String(n).padStart(2,'0')
const LOCK_MS=900 // ignore taps while a transition is still running

export default function App(){
  const [i,setI]=useState(0),[replay,setReplay]=useState(false),reduce=useReducedMotion()
  const lastNav=useRef(0)
  const beat=beats[i],last=i===beats.length-1,chapter=CHAPTERS[chapterOf(i)]
  const locked=()=>{const t=Date.now();if(t-lastNav.current<LOCK_MS)return true;lastNav.current=t;return false}
  const next=useCallback(()=>{if(locked())return;setI(v=>Math.min(v+1,beats.length-1))},[])
  const back=useCallback(()=>{if(locked())return;setI(v=>Math.max(v-1,0))},[])
  const again=useCallback(()=>{if(locked())return;setReplay(true)},[])
  // The only automatic transition: the replay quote is held briefly, then the story restarts.
  useEffect(()=>{if(!replay)return;const t=setTimeout(()=>{setI(0);setReplay(false)},4200);return()=>clearTimeout(t)},[replay])
  const particles=useMemo(()=>[...Array(22)].map((_,k)=>({l:(k*47)%100,d:10+(k*7)%12,s:(k*3)%10,z:1+(k%3)})),[])
  const big=!!beat.title // chapter cards get a slower, more dramatic transition
  const d=reduce?.4:big?1.4:1
  return <MotionConfig reducedMotion="user">
    <main className="stage" data-mood={replay?'dark':beat.mood}>
      <AnimatePresence mode="wait">
        {replay?<motion.div key="rp" className="beat" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:1.4}}>
          <div className="text center"><p className="big" style={{textTransform:'none'}}>"{REPLAY_QUOTE}"</p></div></motion.div>
        :<motion.div key={i} className="beat"
          initial={{opacity:0,filter:reduce?'none':big?'blur(18px)':'blur(10px)',scale:reduce?1:big?1.06:1.03}}
          animate={{opacity:1,filter:'blur(0px)',scale:1}}
          exit={{opacity:0,filter:reduce?'none':'blur(10px)',scale:reduce?1:.98}}
          transition={{duration:d,ease:'easeInOut'}}>
          <CinematicScene id={beat.scene}/><div className="scrim"/>
          <SceneText beat={beat}/>
        </motion.div>}
      </AnimatePresence>
      <div className="dust" aria-hidden="true">{particles.map((p,k)=><span key={k} style={{left:p.l+'%',animationDuration:p.d+'s',animationDelay:-p.s+'s',width:p.z,height:p.z}}/>)}</div>
      <div className="grain" aria-hidden="true"/><div className="vignette" aria-hidden="true"/>
      <nav className={'nav'+(replay?' off':'')} aria-label="Story navigation">
        <StoryButton className="nav-btn" onClick={back} disabled={replay||i===0} hidden={i===0} aria-label="Previous scene">← BACK</StoryButton>
        <div className="nav-info" aria-live="off">
          <span className="nav-chapter">{chapter}</span>
          <span className="nav-count" aria-label={`Scene ${i+1} of ${beats.length}`}>{pad(i+1)} / {pad(beats.length)}</span>
        </div>
        {last
          ?<StoryButton className="nav-btn" onClick={again} disabled={replay}>START AGAIN ❤️</StoryButton>
          :<StoryButton className="nav-btn" onClick={next} disabled={replay} aria-label="Next scene">NEXT →</StoryButton>}
      </nav>
      <MusicToggle/>
    </main></MotionConfig>}
