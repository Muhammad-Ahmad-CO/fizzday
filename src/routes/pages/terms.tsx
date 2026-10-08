import {createFileRoute} from '@tanstack/react-router';
import {meta} from '@/lib/flavors';
import {LegalPage} from '@/components/legal-page';
export const Route=createFileRoute('/pages/terms')({head:()=>meta('The Small Print','FIZZDAY terms of service. Approved policy text is awaiting confirmation.'),component:()=> <LegalPage title="THE SMALL PRINT" kind="terms of service"/>});
