export default function StoryButton({children,className='',hidden,...rest}){
  return <button type="button" className={('btn '+className).trim()} style={hidden?{visibility:'hidden'}:undefined} tabIndex={hidden?-1:undefined} aria-hidden={hidden||undefined} {...rest}>{children}</button>}
