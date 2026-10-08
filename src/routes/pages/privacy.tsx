import {createFileRoute} from '@tanstack/react-router';
import {meta} from '@/lib/flavors';
import {LegalPage} from '@/components/legal-page';
export const Route=createFileRoute('/pages/privacy')({head:()=>meta('Your Privacy','FIZZDAY privacy policy. Approved policy text is awaiting confirmation.'),component:()=> <LegalPage title="YOUR PRIVACY" kind="privacy policy"/>});
