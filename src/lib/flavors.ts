import melon from '@/assets/melon.png';
import grapefruit from '@/assets/grapefruit.png';
import blackberry from '@/assets/blackberry.png';
import tropical from '@/assets/tropical.png';
import lineup from '@/assets/can-lineup.png';
import picnic from '@/assets/picnic.jpg';
import court from '@/assets/court.jpg';
import leaves from '@/assets/leaves.jpg';
export { picnic, court, leaves, lineup };
export const flavors = [
 {slug:'melon',name:'Melon & Mint',color:'melon',image:melon,description:'A little watermelon daydream. A minty plot twist. Meet the bright green member of the FIZZDAY crew.'},
 {slug:'grapefruit',name:'Pink Grapefruit',color:'grapefruit',image:grapefruit,description:'For the citrus people. The big-laugh people. The people who like their sunny days with a little zing.'},
 {slug:'blackberry',name:'Wild Blackberry',color:'blackberry',image:blackberry,description:'A berry-blue daydream with a wild side. Take the scenic route. Bring a little fizz.'},
 {slug:'tropical',name:'Tropical Mango',color:'tropical',image:tropical,description:'An out-of-office state of mind. Mango-colored moments, spontaneous adventures, and a very good excuse to go outside.'},
 {slug:'discovery',name:'The Discovery Crew',color:'discovery',image:lineup,description:'Can’t pick a favorite? Neither can we. Meet all four colorful characters in one discovery collection.'},
];
export type Flavor = typeof flavors[number];
export const benefits = [
 {title:'Big little moments',text:'The park bench. The picnic blanket. That very long lunch. Make a little room for the good stuff.',icon:'flower',color:'leaf'},
 {title:'A fresh perspective',text:'Yerba tea is our starting point. Curiosity is the rest. Here’s to a different kind of drink.',icon:'leaf',color:'coral'},
 {title:'Flavor comes first',text:'Four colorful personalities. One fizzy little universe. Your taste buds get the deciding vote.',icon:'spark',color:'navy'},
 {title:'Made for your day',text:'Put your phone down. Take the long way home. Bring your favorite can along for the ride.',icon:'smile',color:'sage'},
];
export const faqGroups = [
 {name:'THE FIZZ',items:[['What is FIZZDAY?','FIZZDAY is our playful sparkling yerba tea concept. Final product specifications will be added before the shop launches.'],['What is yerba mate?','Yerba mate is a plant traditionally brewed as a tea in South America. It naturally contains caffeine.'],['How much caffeine is in a can?','The exact caffeine content is awaiting the final approved product label.'],['Which flavors can I explore?','Meet Melon & Mint, Pink Grapefruit, Wild Blackberry and Tropical Mango.'],['Is it suitable for everyone?','Yerba mate contains caffeine. Product suitability and warnings must be confirmed on the final label.'],['Where can I read the ingredients?','Ingredients and nutrition are marked as awaiting confirmation on each product page.']]},
 {name:'YOUR ORDER',items:[['Can I order right now?','You can explore products and build a cart. Purchasing will open once prices, product details and payment processing are confirmed.'],['Where do you deliver?','Delivery regions will be confirmed before orders open.'],['How much does shipping cost?','Shipping rates and any free-shipping threshold are awaiting confirmation.'],['Can I track my order?','Tracking information will be available when the delivery service is connected.'],['Can I change an order?','The order amendment policy is awaiting confirmation.'],['What if my parcel is damaged?','A contact destination and delivery support policy will be added before launch.']]},
 {name:'THE REGULARS CLUB',items:[['How do subscriptions work?','Choose a flavor and add a subscription preference to your cart. Final delivery intervals and recurring billing are not yet configured.'],['Is there a subscription discount?','The subscription offer is awaiting confirmation. No discount has been assumed.'],['Can I pause or cancel?','Subscription management terms will be published before recurring purchases are enabled.'],['Can I mix my flavors?','Available subscription combinations will be confirmed before launch.'],['When will I be charged?','Billing dates and frequency are not yet configured.'],['Can I change delivery frequency?','Available delivery intervals will be shown once the subscription program is finalized.']]},
 {name:'RETURNS & RETAIL',items:[['What is the return policy?','The approved return policy is still pending. Please see the refund page for the current status.'],['Where can I find you in stores?','The store locator is ready for confirmed retailer locations. No stores have been invented.'],['Can my shop stock FIZZDAY?','We’d love to hear about your shop. The contact form can prepare your inquiry while our contact destination is pending.'],['Are collaborations open?','Send a collaboration inquiry from the contact page once the destination has been configured.'],['Where are the legal policies?','Terms, refund and privacy pages are available from the footer. Approved policy text is still required.'],['How do I get in touch?','Our contact page prepares a message for you. The official contact email is awaiting confirmation.']]},
];
export function meta(title:string,description:string){return {meta:[{title:`${title} | FIZZDAY`},{name:'description',content:description},{property:'og:title',content:`${title} | FIZZDAY`},{property:'og:description',content:description},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]};}
