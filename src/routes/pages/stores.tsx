import {createFileRoute} from '@tanstack/react-router';
import {useState} from 'react';
import {Search} from 'lucide-react';
import {meta} from '@/lib/flavors';
import {RainbowHead} from '@/components/rainbow-head';
import {Doodle} from '@/components/doodle';
export const Route=createFileRoute('/pages/stores')({head:()=>meta('Find your fizz','Find FIZZDAY near you. Confirmed retail locations will be listed here as the crew grows.'),component:Stores});
function Stores(){const [city,setCity]=useState('');return <section className="utility-page"><RainbowHead as="h1" text="FIND YOUR FIZZ" className="page-title"/><div className="stores-layout"><div><label htmlFor="city" className="flex items-center gap-2 mb-3"><Search size={20}/>Your city</label><input className="store-search" id="city" placeholder="Where are you hanging out?" value={city} onChange={e=>setCity(e.target.value)}/><div className="stores-empty"><h2>{city?`No confirmed stores in ${city}`:'GOOD THINGS ARE COMING.'}</h2><p>Our retailer list is awaiting confirmation. No store locations have been added yet.</p></div></div><div className="illustrated-map" aria-label="Decorative illustrated neighborhood, not a geographic map"><Doodle kind="smile"/><span>THE NEIGHBORHOOD IS GETTING FIZZIER.</span></div></div></section>}
