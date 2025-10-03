import "./styling/globals.css";

export const metadata = {
  title: "QuickPickups — Premium Transportation Services in Spain",
  description:
    "QuickPickups offers private transfers, airport & cruise-port pickups, city rides, corporate travel, weddings, and accessible transport across Spain. Book your ride now for comfort and reliability.",
  keywords: [
    "QuickPickups",
    "private transfers Spain",
    "airport transfers Barcelona",
    "cruise port transfers",
    "city rides Barcelona",
    "corporate chauffeur Spain",
    "wedding transport Spain",
    "accessible transportation Spain",
  ],
  openGraph: {
    title: "QuickPickups — Premium Transportation Services in Spain",
    description:
      "Book your reliable and comfortable private transfers, airport pickups, and city rides in Spain with QuickPickups.",
    url: "https://www.quickpickups.es/en",
    siteName: "QuickPickups",
    images: [
      {
        url: "https://www.quickpickups.es/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "QuickPickups transportation service",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.quickpickups.es/en",
    languages: {
      en: "https://www.quickpickups.es/en",
      es: "https://www.quickpickups.es/es", // Spanish version
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-lvh">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="w-[100vw] h-lvh overflow-x-hidden " wotdisconnected="true" suppressHydrationWarning>{children}</body>
    </html>
  );
}

