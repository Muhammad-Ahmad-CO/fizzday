import {createFileRoute} from '@tanstack/react-router';
import {meta} from '@/lib/flavors';
import {LegalPage} from '@/components/legal-page';
export const Route=createFileRoute('/pages/refund')({head:()=>meta('Returns & Refunds','FIZZDAY refund and returns policy. Approved policy text is awaiting confirmation.'),component:()=> <LegalPage title="RETURNS & REFUNDS" kind="refund and returns policy"/>});
