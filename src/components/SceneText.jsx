import {motion} from 'framer-motion'
// The whole scene's text fades in together as one block, then stays until the reader moves on.
export default function SceneText({beat}){
  return <motion.div className={'text'+(beat.title||beat.scene==='spark'?' center':'')} aria-live="polite"
    initial={{opacity:0,y:12,filter:'blur(6px)'}} animate={{opacity:1,y:0,filter:'blur(0px)'}} transition={{delay:.5,duration:1.4,ease:'easeOut'}}>
    {beat.lines.map((l,i)=>{const big=l.startsWith('#'),t=big?l.slice(1):l
      return <p key={i} className={big?'big':beat.title?'kicker':''}>{t}</p>})}
  </motion.div>}
