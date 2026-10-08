import {useEffect,useRef} from 'react';
export function RainbowHead({text,rainbow=false,className='',as='h2'}:{text:string;rainbow?:boolean;className?:string;as?:'h1'|'h2'|'div'}){
 const ref=useRef<HTMLHeadingElement>(null);
 useEffect(()=>{const el=ref.current;if(!el)return; const letters=el.querySelectorAll<HTMLElement>('.letter');letters.forEach((l,i)=>{l.style.transitionDelay=`${i*25}ms`;l.style.animationDelay=`${i*60}ms`});const observer=new IntersectionObserver(([entry])=>{if(entry.isIntersecting){el.classList.add('in-view');observer.disconnect()}},{threshold:.3});observer.observe(el);return()=>observer.disconnect()},[text]);
 const Tag=as;
 return <Tag ref={ref} aria-label={text} className={`rainbow-head ${rainbow?'rainbow':''} ${className}`}>{text.split(' ').map((word,i)=><span className="word" aria-hidden="true" key={i}>{Array.from(word).map((l,j)=><span className="letter" key={j}>{l}</span>)}{i<text.split(' ').length-1?'\u00a0':''}</span>)}</Tag>
}
