const D='#07040a'
// Original silhouette characters. he = broad shoulders, she = long hair.
export default function Figure({x,y,s=1,he,className}){
  return <g className={className} transform={`translate(${x} ${y}) scale(${s})`} fill={D} stroke="var(--glow)" strokeOpacity=".4" strokeWidth="1.2">
    <circle cy="-94" r="13"/>
    {he?<><path d="M-27 0 L-23 -74 Q0 -90 23 -74 L27 0Z"/><path d="M-13 -102 Q0 -112 13 -102 L12 -98 Q0 -104 -12 -98Z"/></>
       :<><path d="M-17 0 L-14 -78 Q0 -84 14 -78 L17 0Z"/><path d="M-15 -101 Q-23 -62 -12 -50 L-3 -84Z"/></>}
  </g>}
