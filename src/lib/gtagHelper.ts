export const pageview = (NEXT_GOOGLE_ANALYTICS_ID : string, url : string) => {
    window.gtag("config", NEXT_GOOGLE_ANALYTICS_ID, {
        page_path: url,
    });
};