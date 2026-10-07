import Figure from './CharacterIllustration'
import {rain,memories} from './SceneParts'
const D='#07040a',F=Figure
const Win=({x,y,w,h,o=.35})=><rect x={x} y={y} width={w} height={h} rx="3" fill="var(--glow)" opacity={o}/>
const Floor=({y=430,c='#0d0710'})=><rect y={y} width="400" height={600-y} fill={c}/>
const Bench=({x,y,w=130})=><g fill="#1a0f12"><rect x={x} y={y} width={w} height="10"/><rect x={x+8} y={y+10} width="8" height="40"/><rect x={x+w-16} y={y+10} width="8" height="40"/></g>
const Gear=({cx,cy,r})=><g className="spin" style={{transformOrigin:`${cx}px ${cy}px`}} fill="none" stroke="var(--glow)" strokeOpacity=".5"><circle cx={cx} cy={cy} r={r}/><circle cx={cx} cy={cy} r={r*.4}/><circle cx={cx} cy={cy} r={r+5} strokeWidth="9" strokeDasharray="7 7" opacity=".6"/></g>
const Blue=()=><g stroke="var(--glow)" strokeOpacity=".28" fill="none"><path d="M30 80h120v90H30zM30 125h120M90 80v90"/><circle cx="60" cy="150" r="14"/></g>
const Pillars=({n=4,gap=100})=>[...Array(n)].map((_,i)=><rect key={i} x={10+i*gap} y="60" width="34" height="380" fill="#120a10"/>)
const Desks=()=>[0,1,2].map(r=><g key={r} fill="#160c10"><rect x={20+r*10} y={380+r*22} width="170" height="10"/><rect x={210-r*10} y={380+r*22} width="170" height="10"/></g>)
const Sun=()=><circle className="rise" cx="200" cy="330" r="60" fill="var(--glow)"/>
const S={
 spark:()=><><circle className="pulse" cx="200" cy="270" r="46" fill="url(#g)"/><circle cx="200" cy="270" r="2.5" fill="#fff"/></>,
 black:()=>null,
 workshop:()=><><Win x={250} y={90} w={110} h={150}/><Blue/><Gear cx={90} cy={290} r={30}/><Floor/><F he x={200} y={470} s={2}/></>,
 hero:()=><g className="push"><Win x={40} y={70} w={320} h={200} o={.25}/><Gear cx={330} cy={140} r={40}/><Floor y={470}/><F he x={200} y={560} s={3.4}/></g>,
 walk:()=><><Sun/><Floor y={400}/><F className="walk" he x={200} y={480} s={1.7}/></>,
 bakery:()=><><rect x="60" y="70" width="280" height="40" rx="4" fill="var(--glow)" opacity=".5"/><Win x={40} y={140} w={320} h={150} o={.2}/><F x={130} y={470} s={1.7}/><rect y="400" width="400" height="200" fill="#1c0e0b"/><rect x="40" y="330" width="320" height="70" fill="#fff" opacity=".08"/>{[80,140,200,260,310].map(x=><circle key={x} cx={x} cy="375" r="14" fill="#e9a0a8" opacity=".7"/>)}</>,
 bakeryHe:()=><><rect x="60" y="70" width="280" height="40" rx="4" fill="var(--glow)" opacity=".5"/><rect x="270" y="150" width="90" height="270" fill="var(--glow)" opacity=".35"/><F x={110} y={470} s={1.6}/><F he x={315} y={470} s={1.8}/><rect y="400" width="400" height="200" fill="#1c0e0b"/>{[60,110,160].map(x=><circle key={x} cx={x} cy="375" r="14" fill="#e9a0a8" opacity=".7"/>)}</>,
 corridor:()=><><Pillars/><Floor y={440}/><Win x={60} y={90} w={60} h={160} o={.3}/><F he x={292} y={470} s={1.9}/><rect x="238" y="60" width="54" height="400" fill="#120a10"/></>,
 corridorFar:()=><><Pillars/><Floor y={440}/><Win x={300} y={90} w={60} h={160} o={.25}/><F x={90} y={480} s={1.6}/><F he x={310} y={445} s={.7}/></>,
 chamber:()=><><rect x="30" y="100" width="120" height="340" fill="var(--glow)" opacity=".4"/><Floor y={440}/><F he x={90} y={470} s={1.9}/><F x={310} y={480} s={1.5}/><Bench x={250} y={440} w={120}/></>,
 chamberSmile:()=><g className="push2"><rect x="30" y="80" width="140" height="360" fill="var(--glow)" opacity=".55"/><Floor y={440}/><F he x={100} y={480} s={2.3}/><circle cx="100" cy="258" r="60" fill="url(#g)"/><F x={330} y={500} s={1.5}/></g>,
 bench:()=><><rect x="60" y="80" width="280" height="130" fill="#0d0710" stroke="var(--glow)" strokeOpacity=".3"/><Win x={20} y={250} w={60} h={90} o={.25}/><Desks/><F x={110} y={470} s={1.6}/><F he x={290} y={470} s={1.7}/><Bench x={50} y={480} w={300}/></>,
 campus:()=><><Win x={40} y={110} w={30} h={40}/><Win x={100} y={110} w={30} h={40} o={.2}/><Win x={260} y={110} w={30} h={40}/><Floor/><F x={80} y={480} s={1.6}/><F he x={300} y={450} s={.8}/>{rain(14)}</>,
 empty:()=><><Pillars/><Floor y={440}/><Bench x={140} y={440}/><circle cx="200" cy="200" r="90" fill="url(#g)" opacity=".4"/></>,
 memory:()=>memories(),
 rain:()=><><Floor/><Bench x={140} y={440}/><F x={70} y={470} s={1.3}/>{rain(60)}</>,
 milestone:()=><><Win x={250} y={80} w={110} h={140} o={.3}/><Blue/><rect y="440" width="400" height="160" fill="#1a0f0c"/><rect x="110" y="400" width="130" height="40" fill="#0b0710" stroke="var(--glow)" strokeOpacity=".5"/><rect x="270" y="410" width="60" height="30" fill="#2a1710"/><rect x="275" y="395" width="55" height="15" fill="#3a2016"/><F he x={190} y={440} s={1.8}/></>,
 sunrise:()=><><Sun/><Floor y={400}/><F he x={110} y={470} s={1.5}/></>,
 apart:()=><><Floor y={430}/><circle className="pulse" cx="200" cy="360" r="30" fill="url(#g)"/><F x={50} y={470} s={1.7}/><F he x={350} y={470} s={1.8}/></>,
 newlight:()=><><circle className="pulse" cx="200" cy="260" r="160" fill="url(#g)"/>{memories(.3)}<Floor y={430}/><F x={90} y={470} s={1.7}/><F he x={310} y={470} s={1.8}/></>,
 together:()=><><Sun/><Floor y={430}/><F x={170} y={480} s={1.7}/><F he x={232} y={480} s={1.8}/></>,
}
export default function CinematicScene({id}){
  const C=S[id]||S.black
  return <svg className="scene" viewBox="0 0 400 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style={{stopColor:'var(--s1)'}}/><stop offset="1" style={{stopColor:'var(--s2)'}}/></linearGradient>
    <radialGradient id="g"><stop offset="0" style={{stopColor:'var(--glow)',stopOpacity:.9}}/><stop offset="1" style={{stopColor:'var(--glow)',stopOpacity:0}}/></radialGradient></defs>
    <rect width="400" height="600" fill="url(#sky)"/><C/></svg>}
