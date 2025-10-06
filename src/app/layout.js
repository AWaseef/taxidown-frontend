import "./styling/globals.css";

export const metadata = {
  title: "QuickPickups — Private Airport Transfers & Premium Chauffeur Services Across Spain",
  description:
    "Travel in comfort with QuickPickups. We offer reliable private airport transfers, cruise port pickups, city-to-city rides, corporate chauffeur services, wedding transportation, and accessible vehicles across Spain. Book your premium transfer in Barcelona, Madrid, Valencia, or anywhere in Spain today!",
  keywords: [
    "QuickPickups",
    "private transfers Spain",
    "airport transfers Spain",
    "Barcelona airport transfers",
    "Madrid airport transfers",
    "cruise port transfers Spain",
    "city rides Spain",
    "corporate chauffeur Spain",
    "business travel Spain",
    "wedding transport Spain",
    "accessible transportation Spain",
    "luxury car service Spain",
    "private driver Spain",
    "door-to-door transfers Spain",
    "premium transfers Spain",
  ],
  openGraph: {
    title: "QuickPickups — Private Airport Transfers & Premium Chauffeur Services in Spain",
    description:
      "Book premium private transfers, airport pickups, and chauffeur-driven rides across Spain with QuickPickups. Comfort, punctuality, and professional service guaranteed.",
    url: "https://www.quickpickups.es/en",
    siteName: "QuickPickups",
    images: [
      {
        url: "https://www.quickpickups.es/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "QuickPickups premium transportation service in Spain",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.quickpickups.es/en",
    languages: {
      en: "https://www.quickpickups.es/en",
      es: "https://www.quickpickups.es/es",
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

