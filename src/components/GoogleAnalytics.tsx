'use client';

import Script from 'next/script';
import {usePathname, useSearchParams} from 'next/navigation'
import { useEffect } from "react";
import {pageview} from "@/lib/gtagHelper"

export default function GoogleAnalytics({NEXT_GOOGLE_ANALYTICS_ID} : {NEXT_GOOGLE_ANALYTICS_ID : string}){
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {

        if(searchParams){
        const url = pathname + searchParams.toString()
    
        pageview(NEXT_GOOGLE_ANALYTICS_ID, url);

        }
        
        
    }, [pathname, searchParams, NEXT_GOOGLE_ANALYTICS_ID]);

    return (
        <>
            <Script strategy="afterInteractive" 
                src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_GOOGLE_ANALYTICS_ID}`}/>
            <Script id='google-analytics' strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('consent', 'default', {
                    'analytics_storage': 'denied'
                });
                
                gtag('config', '${NEXT_GOOGLE_ANALYTICS_ID}', {
                    page_path: window.location.pathname,
                });
                `,
                }}
            />
        </>
)}