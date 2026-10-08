import {createFileRoute,Link} from '@tanstack/react-router';
import {meta} from '@/lib/flavors';
import {Doodle} from '@/components/doodle';
import {RainbowHead} from '@/components/rainbow-head';
import {Button} from '@/components/ui/button';
export const Route=createFileRoute('/404')({head:()=>meta('Oops! Wrong turn','This can took a wrong turn. Get back to the good times with FIZZDAY.'),component:()=> <div className="not-found"><RainbowHead as="h1" text="OOPS!" rainbow/><Doodle kind="cloud"/><p>This can took a wrong turn. Let’s get you back.</p><Button variant="ink" asChild><Link to="/">Back to the good times</Link></Button></div>});
