export const rain=n=>[...Array(n)].map((_,i)=><line key={i} className="drop" x1={(i*53)%400} y1={(i*97)%300} x2={(i*53)%400-5} y2={(i*97)%300+22} stroke="#9fb7e0" strokeOpacity=".35" style={{animationDelay:`${(i%9)*.2}s`}}/>)
export const memories=(o=1)=>[[40,90,-6],[200,60,4],[110,250,3],[250,230,-4]].map(([x,y,r],i)=>
  <rect key={i} className="mem" x={x} y={y} width="110" height="140" rx="4" fill="var(--glow)" stroke="var(--glow)" opacity={o*.2} transform={`rotate(${r} ${x+55} ${y+70})`} style={{animationDelay:`${i*1.4}s`}}/>)
