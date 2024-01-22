import Script from "next/script";

export default function Head() {
  return (
    <>
      <title>GENZ Technologies</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="This is the official Web Site of GENZ Technologies Pvt) Ltd. Built with Next.js and TypeScript" />
      <link rel="icon" href="/images/favicon.ico" />

     
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-DCZ074FP07"></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag("config", "G-DCZ074FP07");
        `}
      </Script>
    </>
  );
}
