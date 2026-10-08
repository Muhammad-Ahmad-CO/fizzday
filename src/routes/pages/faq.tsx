import {createFileRoute} from '@tanstack/react-router';
import {meta,faqGroups} from '@/lib/flavors';
import {RainbowHead} from '@/components/rainbow-head';
import {Accordion} from '@/components/shop-parts';
export const Route=createFileRoute('/pages/faq')({head:()=>meta('Questions? Answers!','Curious about FIZZDAY, yerba tea, delivery or subscriptions? Find all the little answers right here.'),component:FAQ});
function FAQ(){return <div className="faq-page"><RainbowHead as="h1" text="QUESTIONS? ANSWERS!" rainbow className="scattered"/><p className="eyebrow">A LITTLE LESS MYSTERY. A LITTLE MORE FIZZ.</p><div className="faq-list">{faqGroups.map(g=><section key={g.name}><h2>{g.name}</h2>{g.items.map(([q,a])=><Accordion key={q} question={q} answer={a}/>)}</section>)}</div></div>}
