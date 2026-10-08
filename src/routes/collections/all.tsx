import {createFileRoute} from '@tanstack/react-router';
import {flavors,meta} from '@/lib/flavors';
import {ProductCard,Marquee} from '@/components/shop-parts';
import {RainbowHead} from '@/components/rainbow-head';
import {Doodle} from '@/components/doodle';
export const Route=createFileRoute('/collections/all')({head:()=>meta('Shop the fizz','Explore the FIZZDAY flavor crew: melon, grapefruit, blackberry, tropical mango and the discovery collection.'),component:Shop});
function Shop(){return <div className="page-content"><section className="section"><div className="product-grid">{flavors.map(f=><ProductCard key={f.slug} flavor={f}/>)}</div><p className="eyebrow center mt-12">ALL THE GOOD STUFF</p></section><section className="shop-banner"><RainbowHead as="h1" text="FILL YOUR FRIDGE"/><p>FIND YOUR FLAVOR. MAKE SOME ROOM FOR GOOD TIMES.</p><Doodle kind="smile"/><span className="vertical-word">FRIDGE GOALS</span></section><section className="section"><div className="product-grid shop-grid">{flavors.map(f=><ProductCard key={f.slug} flavor={f}/>)}</div></section><Marquee/></div>}
