// QuickPickups — contenido de landing pages para Barcelona (es / en).
//
// Convención: todo lo que va entre «DATO: …» es un dato que debe confirmar QuickPickups
// antes de publicar (plazas, precios, licencias…). No publicar una página con «DATO» pendiente:
// usar `pendingData` de cada página como checklist.
//
// Hechos usados (verificados en los Términos de QuickPickups o en fuentes públicas):
//  - Espera gratuita: 60 min aeropuerto (desde llegada real del vuelo), 30 min puerto, 15 min hoteles/direcciones.
//  - Seguimiento de vuelo, recogida con cartel con el nombre, sillas infantiles bajo petición,
//    servicio por trayecto y por horas, facturas disponibles.
//  - Moll Adossat: terminales A, B, C, D (Palacruceros), E (Helix) y MSC; terminal WTC en el Moll de Barcelona (el puerto concentra los cruceros en el Moll Adossat).
//  - Circuit de Barcelona-Catalunya: Montmeló, ~30 km al noreste; accesos C-17 / AP-7; tren R2 Nord + lanzadera.
//  - Fira Gran Via (L'Hospitalet de Llobregat) y Fira Montjuïc (plaza d'Espanya); MWC se celebra en Fira Gran Via;
//    no hay transporte público directo del aeropuerto a Fira Gran Via.

export const PHONE = "+34 711 206 600";
export const EMAIL = "info@quickpickups.es";

export const landings = [
  // ───────────────────────────── DESTINOS Y EVENTOS ─────────────────────────────
  {
    id: "airport",
    kind: "destination",
    priority: 2,
    slug: { es: "traslado-aeropuerto-barcelona", en: "barcelona-airport-transfer" },
    image: "/airport.webp",
    bookingService: { es: "Traslados al aeropuerto", en: "Airport Transfers" },
    related: ["cruise", "fira", "mwc", "minivan", "minibus"],
    pendingData: ["Precio desde (aeropuerto → centro) por tipo de vehículo", "Política de cancelación", "¿24/7 y sin recargo nocturno?"],
    keywords: {
      es: ["traslado aeropuerto Barcelona", "transfer aeropuerto El Prat", "traslado privado aeropuerto Barcelona", "taxi aeropuerto Barcelona reserva"],
      en: ["Barcelona airport transfer", "El Prat airport private transfer", "Barcelona airport to city transfer", "BCN airport pickup"],
    },
    es: {
      title: "Traslado Aeropuerto Barcelona El Prat (T1 y T2) | QuickPickups",
      description: "Traslado privado desde y hacia el aeropuerto de Barcelona El Prat, T1 y T2. Seguimiento de vuelo, conductor con cartel y 60 min de espera gratis.",
      h1: "Traslado privado al aeropuerto de Barcelona El Prat",
      intro: "Llegue a Barcelona sin colas en la parada de taxis. Su conductor le espera en la zona de llegadas de la T1 o la T2 con un cartel con su nombre y le lleva directamente a su hotel, al puerto de cruceros, a la Fira o a cualquier dirección de Barcelona y alrededores.",
      highlights: [
        { title: "60 minutos de espera gratis", text: "Contamos la espera desde la llegada real de su vuelo, para que recoja el equipaje con calma." },
        { title: "Seguimiento de vuelo", text: "Si su vuelo se adelanta o se retrasa, el conductor ajusta la recogida a la hora real." },
        { title: "Recogida con cartel", text: "Le esperamos dentro de la terminal con un cartel con su nombre." },
        { title: "Un vehículo para cada grupo", text: "Coches, minivans, vans XL y minibuses para viajeros solos, familias y grupos." },
      ],
      sections: [
        { h2: "Del aeropuerto El Prat a toda Barcelona", text: "El trayecto del aeropuerto al centro de Barcelona dura unos 20–30 minutos según el tráfico. Le llevamos a hoteles y domicilios de toda la ciudad, a las terminales de cruceros del Moll Adossat y del World Trade Center, a Fira Gran Via y Fira Montjuïc, a la estación de Sants y a otras ciudades de Cataluña." },
        { h2: "Traslado al aeropuerto para su vuelo de salida", text: "Para la vuelta, le recogemos en su hotel, domicilio u oficina a la hora acordada. Le recomendamos reservar con margen para facturar, sobre todo en temporada alta y durante grandes eventos como el MWC, cuando el tráfico hacia el aeropuerto aumenta." },
        { h2: "Familias y grupos", text: "Indique al reservar el número de pasajeros, maletas y si necesita sillas infantiles. Si viajan más de «DATO: plazas máximas de la minivan/van» personas o con mucho equipaje, le recomendamos una van XL o un minibús para que todo el grupo viaje junto." },
      ],
      faq: [
        { q: "¿Dónde me espera el conductor en el aeropuerto?", a: "En la zona de llegadas de su terminal (T1 o T2), con un cartel con su nombre." },
        { q: "¿Qué pasa si mi vuelo se retrasa?", a: "Seguimos su vuelo en tiempo real y el conductor adapta la recogida. Además, tiene 60 minutos de espera gratuita desde la llegada real del vuelo." },
        { q: "¿Puedo pedir sillas para niños?", a: "Sí. Selecciónelas en el formulario de reserva indicando cuántas necesita." },
        { q: "¿Cuánto cuesta el traslado del aeropuerto al centro?", a: "Depende del vehículo y del destino. Introduzca la recogida y el destino en el formulario y verá el precio antes de reservar. Precio orientativo: desde 35 € en categoría Economy." },
      ],
    },
    en: {
      title: "Barcelona Airport Transfer El Prat (T1 & T2) | QuickPickups",
      description: "Private transfer to and from Barcelona El Prat Airport, T1 and T2. Flight tracking, meet & greet with name sign and 60 minutes free waiting time.",
      h1: "Private Barcelona El Prat Airport Transfer",
      intro: "Skip the taxi queue when you land in Barcelona. Your driver waits for you in the arrivals hall of T1 or T2 with a name sign and takes you straight to your hotel, the cruise port, Fira Barcelona or any address in and around the city.",
      highlights: [
        { title: "60 minutes free waiting", text: "Waiting time starts from your flight's actual arrival, so you can collect your luggage without rushing." },
        { title: "Flight tracking", text: "If your flight is early or delayed, your driver adjusts the pickup to the real arrival time." },
        { title: "Meet & greet", text: "We wait for you inside the terminal holding a sign with your name." },
        { title: "The right vehicle for every group", text: "Cars, minivans, XL vans and minibuses for solo travellers, families and groups." },
      ],
      sections: [
        { h2: "From El Prat Airport to anywhere in Barcelona", text: "The drive from the airport to central Barcelona takes around 20–30 minutes depending on traffic. We drive you to hotels and homes across the city, to the cruise terminals at Moll Adossat and the World Trade Center, to Fira Gran Via and Fira Montjuïc, to Sants station and to other towns in Catalonia." },
        { h2: "Transfer to the airport for your departure", text: "On your way back, we pick you up at your hotel, home or office at the agreed time. Book with enough margin to check in, especially in high season and during major events such as MWC, when traffic to the airport increases." },
        { h2: "Families and groups", text: "When booking, tell us the number of passengers, suitcases and any child seats you need. If you are more than «DATO: max seats minivan/van» people or carry a lot of luggage, we recommend an XL van or a minibus so the whole group travels together." },
      ],
      faq: [
        { q: "Where will the driver meet me at the airport?", a: "In the arrivals hall of your terminal (T1 or T2), holding a sign with your name." },
        { q: "What if my flight is delayed?", a: "We track your flight in real time and the driver adjusts the pickup. You also get 60 minutes of free waiting time from the actual arrival of your flight." },
        { q: "Can I request child seats?", a: "Yes. Select them in the booking form and tell us how many you need." },
        { q: "How much is a transfer from the airport to the city centre?", a: "It depends on the vehicle and destination. Enter your pickup and destination in the booking form to see the price before you book. Guide price: from €35 in our Economy category." },
      ],
    },
  },

  {
    id: "cruise",
    kind: "destination",
    priority: 2,
    slug: { es: "traslado-puerto-cruceros-barcelona", en: "barcelona-cruise-port-transfer" },
    image: "/car.webp",
    bookingService: { es: "Traslados al puerto de cruceros", en: "Cruise Port Transfers" },
    related: ["airport", "vanxl", "minibus", "minivan"],
    pendingData: ["Precio desde aeropuerto ↔ puerto (opcional)", "Precio desde hotel centro ↔ puerto (opcional)"],
    keywords: {
      es: ["traslado puerto cruceros Barcelona", "transfer Moll Adossat", "traslado aeropuerto puerto Barcelona", "taxi terminal cruceros Barcelona"],
      en: ["Barcelona cruise port transfer", "Moll Adossat transfer", "Barcelona airport to cruise port", "Barcelona cruise terminal taxi"],
    },
    es: {
      title: "Traslado Cruceros Barcelona y Moll Adossat | QuickPickups",
      description: "Traslado privado a las terminales de cruceros de Barcelona: Moll Adossat y World Trade Center. Desde el aeropuerto o su hotel, con 30 min de espera gratis.",
      h1: "Traslados al puerto de cruceros de Barcelona y al Moll Adossat",
      intro: "Empiece y termine su crucero sin estrés. Le llevamos con todo su equipaje desde el aeropuerto de El Prat, su hotel o cualquier dirección hasta la puerta de la terminal de su barco, y le recogemos al desembarcar.",
      highlights: [
        { title: "Hasta la puerta de su terminal", text: "Sin cargar maletas en autobuses ni lanzaderas: le dejamos en la terminal de su naviera." },
        { title: "30 minutos de espera gratis", text: "En el puerto le esperamos 30 minutos sin coste, ideal para los desembarques." },
        { title: "Aeropuerto ↔ puerto el mismo día", text: "El trayecto entre el puerto y el aeropuerto dura unos 20–30 minutos según el tráfico." },
        { title: "Espacio para el equipaje", text: "Vans XL y minibuses para familias y grupos con maletas grandes de crucero." },
      ],
      sections: [
        { h2: "Terminales de cruceros del Moll Adossat", text: "La mayoría de los grandes cruceros atracan en el Moll Adossat, al pie de Montjuïc (Moll Adossat, 1 – 08039 Barcelona). Allí se encuentran las terminales A, B y C, la terminal D (Palacruceros), la terminal E (Helix) y la terminal de MSC. Indique su naviera o su terminal al reservar y el conductor le llevará a la entrada correcta." },
        { h2: "Terminal del World Trade Center", text: "Algunos barcos, normalmente más pequeños, atracan en la terminal del World Trade Center, en el Moll de Barcelona, junto al final de la Rambla. El puerto está concentrando los cruceros en el Moll Adossat, así que confirme siempre su terminal con la naviera. Cubrimos todas las terminales, tanto para el embarque como para el regreso al aeropuerto o a su hotel después del crucero." },
        { h2: "Mejor que la lanzadera para viajar con equipaje", text: "El bus lanzadera del puerto solo llega hasta el monumento a Colón, y desde allí tendría que seguir con todas sus maletas. Con un traslado privado va puerta a puerta, sin esperas ni transbordos, aunque el barco llegue temprano por la mañana." },
      ],
      faq: [
        { q: "¿A qué terminal me llevan?", a: "A la terminal de su naviera. Escríbala en los comentarios al reservar (por ejemplo, «Terminal E – Helix» o «MSC»). Si no la conoce todavía, indique el nombre del barco." },
        { q: "¿Puedo ir directamente del barco al aeropuerto?", a: "Sí. Reserve el traslado del puerto al aeropuerto para el día del desembarque e indique en los comentarios su número de vuelo." },
        { q: "¿Hay sitio para todas las maletas?", a: "Indique el número de maletas al reservar. Para familias o grupos con mucho equipaje le recomendamos una van XL o un minibús." },
        { q: "¿Qué pasa si el desembarque se retrasa?", a: "Tiene 30 minutos de espera gratuita en el puerto. Si prevé un retraso mayor, contacte con nosotros en el +34 711 206 600." },
      ],
    },
    en: {
      title: "Barcelona Cruise Port & Moll Adossat Transfer | QuickPickups",
      description: "Private transfer to Barcelona cruise terminals at Moll Adossat and the World Trade Center. From the airport or your hotel, with 30 minutes free waiting.",
      h1: "Barcelona Cruise Port and Moll Adossat Transfers",
      intro: "Start and end your cruise stress-free. We take you and all your luggage from El Prat Airport, your hotel or any address to the door of your ship's terminal, and pick you up when you disembark.",
      highlights: [
        { title: "To your terminal's door", text: "No dragging suitcases onto buses or shuttles: we drop you at your cruise line's terminal." },
        { title: "30 minutes free waiting", text: "We wait 30 minutes free of charge at the port, ideal for disembarkation days." },
        { title: "Airport ↔ port on the same day", text: "The drive between the port and the airport takes around 20–30 minutes depending on traffic." },
        { title: "Room for your luggage", text: "XL vans and minibuses for families and groups with large cruise suitcases." },
      ],
      sections: [
        { h2: "Moll Adossat cruise terminals", text: "Most large cruise ships berth at Moll Adossat, at the foot of Montjuïc (Moll Adossat, 1 – 08039 Barcelona). This is where terminals A, B and C, Terminal D (Palacruceros), Terminal E (Helix) and the MSC terminal are located. Tell us your cruise line or terminal when booking and your driver will take you to the right entrance." },
        { h2: "World Trade Center terminal", text: "Some ships, usually smaller ones, berth at the World Trade Center terminal on Moll de Barcelona, at the bottom of La Rambla. The port is concentrating cruise traffic at Moll Adossat, so always confirm your terminal with your cruise line. We cover every terminal, both for embarkation and for your return to the airport or hotel after the cruise." },
        { h2: "Better than the shuttle when you have luggage", text: "The port shuttle bus only goes as far as the Columbus Monument, and from there you would have to continue with all your suitcases. A private transfer takes you door to door, with no waiting or changes, even when your ship arrives early in the morning." },
      ],
      faq: [
        { q: "Which terminal will you take me to?", a: "Your cruise line's terminal. Write it in the comments when booking (for example, \"Terminal E – Helix\" or \"MSC\"). If you don't know it yet, give us your ship's name." },
        { q: "Can I go straight from the ship to the airport?", a: "Yes. Book a port-to-airport transfer for your disembarkation day and add your flight number in the comments." },
        { q: "Is there room for all our luggage?", a: "Tell us how many suitcases you have when booking. For families or groups with a lot of luggage we recommend an XL van or a minibus." },
        { q: "What if disembarkation is delayed?", a: "You get 30 minutes of free waiting time at the port. If you expect a longer delay, contact us on +34 711 206 600." },
      ],
    },
  },

  {
    id: "montmelo",
    kind: "event",
    priority: 1,
    slug: { es: "traslado-circuito-montmelo", en: "montmelo-circuit-transfer" },
    image: "/image.webp",
    bookingService: { es: "Circuit de Montmeló", en: "Montmelo Circuit" },
    related: ["minibus", "vanxl", "airport", "hourly"],
    pendingData: ["Precio desde Barcelona centro ↔ Circuit (ida y vuelta)", "¿Servicio por horas disponible en días de carrera?"],
    keywords: {
      es: ["traslado circuito Montmeló", "cómo llegar circuito Montmeló", "transfer Fórmula 1 Barcelona", "transporte MotoGP Montmeló"],
      en: ["Montmelo circuit transfer", "Circuit de Barcelona-Catalunya transfer", "Barcelona F1 transfer", "MotoGP Barcelona transport"],
    },
    es: {
      title: "Traslado al Circuit de Montmeló desde Barcelona | QuickPickups",
      description: "Traslado privado al Circuit de Barcelona-Catalunya en Montmeló para Fórmula 1, MotoGP y otros eventos. Ida y vuelta desde Barcelona, el aeropuerto o su hotel.",
      h1: "Traslados al Circuit de Barcelona-Catalunya (Montmeló)",
      intro: "Disfrute de la Fórmula 1, MotoGP o cualquier evento del Circuit sin pelearse con el tráfico, el aparcamiento o los trenes llenos. Le llevamos desde Barcelona, el aeropuerto o su hotel hasta Montmeló y le recogemos al terminar.",
      highlights: [
        { title: "Ida y vuelta", text: "Reserve la ida y la vuelta y olvídese de buscar transporte al salir del circuito." },
        { title: "Sin aparcar ni hacer transbordos", text: "Sin tren de cercanías, sin lanzaderas y sin buscar sitio en los aparcamientos." },
        { title: "Grupos de aficionados", text: "Minivans, vans XL y minibuses para que todo el grupo vaya junto." },
        { title: "Desde el aeropuerto o su hotel", text: "Vaya directamente del aeropuerto de El Prat al circuito si llega el mismo día." },
      ],
      sections: [
        { h2: "Cómo llegar al Circuit de Montmeló sin estrés", text: "El Circuit de Barcelona-Catalunya está en Montmeló, a unos 30 km al noreste de Barcelona, con accesos por la C-17 y la AP-7. En transporte público hay que tomar el tren R2 Nord hasta Montmeló y después la lanzadera hasta el circuito. En los fines de semana de gran premio, carreteras, trenes y aparcamientos se saturan; con un traslado privado sale a la hora que le convenga y vuelve sin esperar colas." },
        { h2: "Fórmula 1, MotoGP y eventos de empresa", text: "Llevamos a aficionados, grupos de amigos, agencias y empresas con invitados en zonas de hospitality. En los fines de semana de carrera la demanda de vehículos es muy alta, sobre todo de vehículos grandes: le recomendamos reservar con la máxima antelación." },
      ],
      faq: [
        { q: "¿Me recogen al final de la carrera?", a: "Sí. Reserve el trayecto de vuelta con una hora aproximada e indique en los comentarios su punto de encuentro preferido. Al salir del circuito hay mucho tráfico, así que conviene acordar el punto con antelación." },
        { q: "¿Puedo ir del aeropuerto directamente al circuito?", a: "Sí. Indique el aeropuerto como recogida y el Circuit de Barcelona-Catalunya como destino; seguimos su vuelo como en cualquier traslado de aeropuerto." },
        { q: "¿Con cuánta antelación debo reservar?", a: "Para los fines de semana de Fórmula 1 o MotoGP, lo antes posible. Los vehículos grandes y los minibuses son los primeros en agotarse." },
        { q: "¿Cuánto cuesta el traslado a Montmeló?", a: "Depende del punto de recogida y del vehículo. Precio orientativo desde el centro de Barcelona: desde «DATO: precio desde» €." },
      ],
    },
    en: {
      title: "Montmeló Circuit Transfer from Barcelona | QuickPickups",
      description: "Private transfer to the Circuit de Barcelona-Catalunya in Montmeló for Formula 1, MotoGP and other events. Return trips from Barcelona, the airport or your hotel.",
      h1: "Circuit de Barcelona-Catalunya (Montmeló) Transfers",
      intro: "Enjoy Formula 1, MotoGP or any event at the Circuit without fighting traffic, parking or packed trains. We drive you from Barcelona, the airport or your hotel to Montmeló and pick you up when it's over.",
      highlights: [
        { title: "Return trips", text: "Book both ways and forget about finding transport when you leave the circuit." },
        { title: "No parking, no changes", text: "No commuter train, no shuttle buses and no hunting for a parking space." },
        { title: "Fan groups", text: "Minivans, XL vans and minibuses so the whole group travels together." },
        { title: "From the airport or your hotel", text: "Go straight from El Prat Airport to the circuit if you arrive on race day." },
      ],
      sections: [
        { h2: "Getting to the Montmeló circuit without stress", text: "The Circuit de Barcelona-Catalunya is in Montmeló, around 30 km northeast of Barcelona, reached via the C-17 and AP-7 roads. By public transport you need the R2 Nord train to Montmeló and then the shuttle to the circuit. On Grand Prix weekends roads, trains and car parks are packed; with a private transfer you leave when it suits you and return without queuing." },
        { h2: "Formula 1, MotoGP and corporate events", text: "We drive fans, groups of friends, agencies and companies with guests in hospitality areas. Demand for vehicles is very high on race weekends, especially for large vehicles, so we recommend booking as early as possible." },
      ],
      faq: [
        { q: "Will you pick us up after the race?", a: "Yes. Book the return trip with an approximate time and add your preferred meeting point in the comments. Traffic is heavy when leaving the circuit, so it's best to agree the meeting point in advance." },
        { q: "Can I go from the airport straight to the circuit?", a: "Yes. Enter the airport as pickup and the Circuit de Barcelona-Catalunya as destination; we track your flight as with any airport transfer." },
        { q: "How far in advance should I book?", a: "For Formula 1 or MotoGP weekends, as early as possible. Large vehicles and minibuses sell out first." },
        { q: "How much is a transfer to Montmeló?", a: "It depends on your pickup point and vehicle. Guide price from central Barcelona: from €«DATO: price from»." },
      ],
    },
  },

  {
    id: "fira",
    kind: "event",
    priority: 1,
    slug: { es: "traslados-fira-barcelona", en: "fira-barcelona-transfer" },
    image: "/home.webp",
    bookingService: { es: "Fira de Barcelona", en: "Fira Barcelona" },
    related: ["mwc", "hourly", "vanxl", "minibus", "airport"],
    pendingData: ["Precio desde aeropuerto ↔ Fira Gran Via", "Precio por hora del chófer"],
    keywords: {
      es: ["traslados Fira Barcelona", "transfer Fira Gran Via", "traslado aeropuerto Fira Gran Via", "chófer ferias Barcelona"],
      en: ["Fira Barcelona transfer", "Fira Gran Via transfer", "Barcelona airport to Fira Gran Via", "Barcelona trade fair chauffeur"],
    },
    es: {
      title: "Traslados Fira de Barcelona (Gran Via y Montjuïc) | QuickPickups",
      description: "Traslados privados a Fira Gran Via y Fira Montjuïc para ferias y congresos. Desde el aeropuerto o su hotel, y chófer por horas para expositores y empresas.",
      h1: "Traslados a la Fira de Barcelona para ferias y congresos",
      intro: "Llegue puntual a su feria, a su stand o a sus reuniones. Ofrecemos traslados privados a los dos recintos de la Fira de Barcelona, Gran Via y Montjuïc, desde el aeropuerto, su hotel o su oficina, para visitantes, expositores y empresas.",
      highlights: [
        { title: "Gran Via y Montjuïc", text: "Cubrimos los dos recintos y le dejamos en la entrada que nos indique." },
        { title: "Directo desde el aeropuerto", text: "No hay transporte público directo del aeropuerto a Fira Gran Via: con nosotros va sin transbordos." },
        { title: "Chófer por horas", text: "Un conductor a su disposición entre la feria, el hotel y sus reuniones." },
        { title: "Equipos y material", text: "Vans XL y minibuses para equipos de stand, delegaciones y material de exposición." },
      ],
      sections: [
        { h2: "Fira Gran Via y Fira Montjuïc", text: "Fira Gran Via está en L'Hospitalet de Llobregat, entre el centro de Barcelona y el aeropuerto, y acoge las ferias y los congresos más grandes. Fira Montjuïc está junto a la plaza d'Espanya. Indique el recinto y, si la conoce, la puerta o el acceso al reservar." },
        { h2: "Chófer por horas para expositores y empresas", text: "Si necesita moverse entre la feria, el hotel, cenas y reuniones con clientes, elija el servicio por horas y disponga del vehículo y del conductor durante el tiempo que necesite. Es la opción ideal para directivos, clientes VIP y equipos comerciales. Si necesita factura para su empresa, indíquelo al reservar." },
        { h2: "Ferias con mucha demanda", text: "Durante las grandes ferias y congresos, como el MWC, la ciudad se llena y los vehículos se agotan. Reserve con antelación, sobre todo si necesita vehículos grandes o varios traslados para su equipo." },
      ],
      faq: [
        { q: "¿Qué recinto de la Fira debo indicar?", a: "El de su evento: Fira Gran Via (L'Hospitalet de Llobregat) o Fira Montjuïc (plaza d'Espanya). Lo encontrará en su acreditación o en la web de la feria." },
        { q: "¿Puedo contratar un conductor para toda la jornada?", a: "Sí. Elija la opción «Por hora» en el formulario de reserva e indique cuántas horas necesita." },
        { q: "¿Llevan a equipos de stand con material?", a: "Sí. Indique el número de personas y el tipo de material; para equipos con mucho material le recomendamos una van XL." },
        { q: "¿Emiten factura?", a: "Sí, puede solicitar factura de su traslado." },
      ],
    },
    en: {
      title: "Fira Barcelona Transfers (Gran Via & Montjuïc) | QuickPickups",
      description: "Private transfers to Fira Gran Via and Fira Montjuïc for trade fairs and congresses. From the airport or your hotel, plus hourly chauffeurs for exhibitors.",
      h1: "Fira Barcelona Transfers for Trade Fairs and Congresses",
      intro: "Arrive on time for your fair, your stand or your meetings. We offer private transfers to both Fira Barcelona venues, Gran Via and Montjuïc, from the airport, your hotel or your office, for visitors, exhibitors and companies.",
      highlights: [
        { title: "Gran Via and Montjuïc", text: "We cover both venues and drop you at the entrance you choose." },
        { title: "Direct from the airport", text: "There is no direct public transport from the airport to Fira Gran Via: with us there are no changes." },
        { title: "Hourly chauffeur", text: "A driver at your disposal between the fair, your hotel and your meetings." },
        { title: "Teams and equipment", text: "XL vans and minibuses for stand teams, delegations and exhibition materials." },
      ],
      sections: [
        { h2: "Fira Gran Via and Fira Montjuïc", text: "Fira Gran Via is in L'Hospitalet de Llobregat, between central Barcelona and the airport, and hosts the largest trade fairs and congresses. Fira Montjuïc is next to Plaça d'Espanya. Tell us the venue and, if you know it, the gate or entrance when booking." },
        { h2: "Hourly chauffeur for exhibitors and companies", text: "If you need to move between the fair, your hotel, dinners and client meetings, choose our hourly service and keep the vehicle and driver for as long as you need. It's the ideal option for executives, VIP clients and sales teams. If your company needs an invoice, just let us know when booking." },
        { h2: "High-demand fairs", text: "During major fairs and congresses such as MWC, the city fills up and vehicles sell out. Book in advance, especially if you need large vehicles or several transfers for your team." },
      ],
      faq: [
        { q: "Which Fira venue should I choose?", a: "The one hosting your event: Fira Gran Via (L'Hospitalet de Llobregat) or Fira Montjuïc (Plaça d'Espanya). You'll find it on your badge or on the fair's website." },
        { q: "Can I hire a driver for the whole day?", a: "Yes. Choose the \"Per Hour\" option in the booking form and tell us how many hours you need." },
        { q: "Do you transport stand teams with equipment?", a: "Yes. Tell us the number of people and the type of equipment; for teams with a lot of material we recommend an XL van." },
        { q: "Do you issue invoices?", a: "Yes, you can request an invoice for your transfer." },
      ],
    },
  },

  {
    id: "mwc",
    kind: "event",
    priority: 1,
    slug: { es: "traslados-mwc-barcelona", en: "mwc-barcelona-transfer" },
    image: "/home2.webp",
    bookingService: { es: "MWC Barcelona", en: "MWC Barcelona" },
    related: ["fira", "hourly", "airport", "minibus", "vanxl"],
    pendingData: ["Precio por hora / jornada completa durante el MWC", "Fechas oficiales del MWC 2027 (cuando se publiquen, añadir al title: «MWC 2027»)", "¿Conductores con inglés/chino?"],
    keywords: {
      es: ["traslados MWC Barcelona", "chófer MWC Barcelona", "transporte Mobile World Congress", "MWC 2027 transfer"],
      en: ["MWC Barcelona transfer", "MWC chauffeur service", "Mobile World Congress transport", "MWC 2027 car service"],
    },
    es: {
      title: "Traslados MWC Barcelona (Mobile World Congress) | QuickPickups",
      description: "Traslados privados y chófer por horas para el MWC Barcelona en Fira Gran Via. Aeropuerto, hotel y reuniones sin colas de taxi. Reserve con antelación.",
      h1: "Traslados y chófer privado para el MWC Barcelona",
      intro: "Durante el Mobile World Congress Barcelona llegan a la ciudad visitantes de todo el mundo y la demanda de taxis y transporte se dispara. Reserve con antelación su traslado privado entre el aeropuerto, su hotel y Fira Gran Via, o un chófer a su disposición durante todo el congreso.",
      highlights: [
        { title: "Sin colas de taxi", text: "Su conductor le espera a la hora acordada, también en las horas punta de entrada y salida del congreso." },
        { title: "Aeropuerto – hotel – Fira Gran Via", text: "Todos los trayectos del congreso con un solo proveedor." },
        { title: "Chófer por horas o por jornada", text: "Un vehículo y un conductor a su disposición para reuniones, cenas y eventos." },
        { title: "Delegaciones y equipos", text: "Coches para directivos y vans XL o minibuses para equipos completos." },
      ],
      sections: [
        { h2: "Moverse por Barcelona durante el MWC", text: "El MWC se celebra en Fira Gran Via, en L'Hospitalet de Llobregat, entre el aeropuerto y el centro de Barcelona. En las horas de apertura y cierre se forman largas colas de taxis y el transporte público va lleno. Con un traslado reservado, su conductor le espera en la puerta acordada y le lleva directamente a su hotel, a su próxima reunión o al aeropuerto." },
        { h2: "Servicio para empresas y delegaciones", text: "Coordinamos traslados para delegaciones, equipos comerciales y clientes invitados. Combine coches para directivos con vans XL y minibuses para equipos, y solicite factura para su empresa. Si su delegación necesita varios vehículos a la misma hora, indíquelo al reservar y le propondremos la mejor combinación." },
        { h2: "Reserve cuanto antes", text: "Las semanas antes del congreso la disponibilidad de vehículos en Barcelona se reduce muchísimo. Cuanto antes reserve, más opciones tendrá de vehículo y de horario." },
      ],
      faq: [
        { q: "¿Cuándo debo reservar para el MWC?", a: "Lo antes posible. En las semanas previas al congreso la disponibilidad de vehículos, sobre todo de los grandes, se reduce mucho." },
        { q: "¿Puedo tener un chófer todo el día?", a: "Sí. Elija la opción «Por hora» e indique las horas que necesita cada día del congreso." },
        { q: "¿Me llevan también a cenas y eventos fuera de la Fira?", a: "Sí. Con el servicio por horas, el conductor le lleva a donde necesite durante el tiempo contratado." },
        { q: "¿Tienen conductores que hablen otros idiomas?", a: "«DATO: idiomas que hablan los conductores (inglés, chino…)»." },
      ],
    },
    en: {
      title: "MWC Barcelona Transfers & Chauffeur Service | QuickPickups",
      description: "Private transfers and hourly chauffeurs for MWC Barcelona at Fira Gran Via. Airport, hotel and meetings without taxi queues. Book early.",
      h1: "MWC Barcelona Transfers and Private Chauffeur",
      intro: "During Mobile World Congress Barcelona, visitors arrive from all over the world and demand for taxis and transport soars. Book your private transfer between the airport, your hotel and Fira Gran Via early, or have a chauffeur at your disposal throughout the congress.",
      highlights: [
        { title: "No taxi queues", text: "Your driver waits at the agreed time, even at peak opening and closing hours." },
        { title: "Airport – hotel – Fira Gran Via", text: "All your congress journeys with a single provider." },
        { title: "Hourly or full-day chauffeur", text: "A vehicle and driver at your disposal for meetings, dinners and events." },
        { title: "Delegations and teams", text: "Cars for executives, and XL vans or minibuses for whole teams." },
      ],
      sections: [
        { h2: "Getting around Barcelona during MWC", text: "MWC takes place at Fira Gran Via in L'Hospitalet de Llobregat, between the airport and central Barcelona. Long taxi queues form at opening and closing times and public transport is packed. With a pre-booked transfer, your driver waits at the agreed gate and takes you straight to your hotel, your next meeting or the airport." },
        { h2: "Service for companies and delegations", text: "We coordinate transfers for delegations, sales teams and invited clients. Combine cars for executives with XL vans and minibuses for teams, and request an invoice for your company. If your delegation needs several vehicles at the same time, tell us when booking and we will suggest the best combination." },
        { h2: "Book as early as possible", text: "In the weeks before the congress, vehicle availability in Barcelona drops dramatically. The earlier you book, the more choice of vehicles and times you'll have." },
      ],
      faq: [
        { q: "When should I book for MWC?", a: "As early as possible. In the weeks before the congress, vehicle availability, especially for large vehicles, drops sharply." },
        { q: "Can I have a chauffeur all day?", a: "Yes. Choose the \"Per Hour\" option and tell us how many hours you need on each congress day." },
        { q: "Will you also take me to dinners and events outside Fira?", a: "Yes. With the hourly service, your driver takes you wherever you need during the booked time." },
        { q: "Do your drivers speak other languages?", a: "«DATO: languages spoken by drivers (English, Chinese…)»." },
      ],
    },
  },

  {
    id: "stadiums",
    kind: "event",
    priority: 3,
    slug: { es: "traslados-camp-nou-conciertos-barcelona", en: "camp-nou-concert-transfer-barcelona" },
    image: "/car2.webp",
    bookingService: { es: "Eventos especiales", en: "Special Events" },
    related: ["minibus", "vanxl", "minivan", "hourly"],
    pendingData: ["Precio desde centro ↔ estadio"],
    keywords: {
      es: ["traslado Camp Nou", "transporte concierto Estadi Olímpic", "traslado Palau Sant Jordi", "van grupos partido Barça"],
      en: ["Camp Nou transfer", "Barcelona concert transfer", "Palau Sant Jordi transport", "Barcelona football match transfer group"],
    },
    es: {
      title: "Traslados a Camp Nou, Estadi Olímpic y Conciertos | QuickPickups",
      description: "Traslados privados para partidos y conciertos en Barcelona: Spotify Camp Nou, Estadi Olímpic y Palau Sant Jordi. Ida y vuelta para grupos.",
      h1: "Traslados a partidos y conciertos en Barcelona",
      intro: "Vaya al partido o al concierto con su grupo y vuelva sin pelearse con el metro abarrotado ni con la falta de taxis a la salida. Le llevamos desde su hotel, el aeropuerto o cualquier punto de Barcelona hasta el Spotify Camp Nou, el Estadi Olímpic Lluís Companys o el Palau Sant Jordi.",
      highlights: [
        { title: "Ida y vuelta", text: "Reserve también la vuelta y evite la búsqueda de taxis al terminar el evento." },
        { title: "Todo el grupo junto", text: "Minivans, vans XL y minibuses para grupos de amigos y familias." },
        { title: "Desde el aeropuerto", text: "¿Viene a Barcelona solo para el evento? Le llevamos del avión al estadio." },
        { title: "Eventos de empresa", text: "Transporte para invitados a palcos y zonas VIP." },
      ],
      sections: [
        { h2: "Spotify Camp Nou, Estadi Olímpic y Palau Sant Jordi", text: "En días de partido o de gran concierto, los alrededores de los estadios se colapsan y conseguir un taxi a la salida puede llevar mucho tiempo. Con un traslado privado acordamos el punto de recogida antes del evento y su conductor le espera allí al terminar." },
        { h2: "Para grupos y aficionados que vienen de fuera", text: "Si viaja a Barcelona para ver a su equipo o a su artista favorito, combine el traslado del aeropuerto con el del evento y el de vuelta. Indique en los comentarios el evento y la hora prevista de salida." },
      ],
      faq: [
        { q: "¿Dónde nos recogen al terminar?", a: "En el punto que acordemos al reservar. Indíquelo en los comentarios; en días de evento algunas calles se cortan al tráfico, por lo que el punto puede estar a unos minutos a pie del estadio." },
        { q: "¿Puedo reservar solo la vuelta?", a: "Sí, puede reservar solo la ida, solo la vuelta o ambas." },
        { q: "¿Qué vehículo necesito para mi grupo?", a: "Indique el número de personas al reservar y el formulario le mostrará los vehículos disponibles para su grupo." },
      ],
    },
    en: {
      title: "Camp Nou, Estadi Olímpic & Concert Transfers | QuickPickups",
      description: "Private transfers for football matches and concerts in Barcelona: Spotify Camp Nou, Estadi Olímpic and Palau Sant Jordi. Return trips for groups.",
      h1: "Football Match and Concert Transfers in Barcelona",
      intro: "Go to the match or concert with your group and get back without fighting packed metros or the lack of taxis afterwards. We drive you from your hotel, the airport or anywhere in Barcelona to Spotify Camp Nou, the Estadi Olímpic Lluís Companys or the Palau Sant Jordi.",
      highlights: [
        { title: "Return trips", text: "Book the return too and avoid hunting for a taxi after the event." },
        { title: "The whole group together", text: "Minivans, XL vans and minibuses for groups of friends and families." },
        { title: "From the airport", text: "Coming to Barcelona just for the event? We take you from the plane to the stadium." },
        { title: "Corporate events", text: "Transport for guests in boxes and VIP areas." },
      ],
      sections: [
        { h2: "Spotify Camp Nou, Estadi Olímpic and Palau Sant Jordi", text: "On match days or big concert nights, the streets around the stadiums are gridlocked and getting a taxi afterwards can take a long time. With a private transfer we agree the pickup point before the event and your driver waits for you there when it ends." },
        { h2: "For groups and fans travelling from abroad", text: "If you're coming to Barcelona to see your team or favourite artist, combine your airport transfer with your event and return transfers. Add the event and expected finishing time in the comments." },
      ],
      faq: [
        { q: "Where will you pick us up afterwards?", a: "At the point we agree when you book. Add it in the comments; on event days some streets are closed to traffic, so the pickup point may be a few minutes' walk from the stadium." },
        { q: "Can I book just the return trip?", a: "Yes, you can book just the outbound trip, just the return, or both." },
        { q: "Which vehicle do I need for my group?", a: "Enter the number of people when booking and the form will show the vehicles available for your group." },
      ],
    },
  },

  {
    id: "hourly",
    kind: "service",
    priority: 2,
    slug: { es: "chofer-por-horas-barcelona", en: "hourly-chauffeur-barcelona" },
    image: "/back.webp",
    bookingService: { es: "Viajes de negocios y corporativos", en: "Business & Corporate Travel" },
    related: ["fira", "mwc", "minibus", "stadiums"],
    pendingData: ["Precio por hora por tipo de vehículo", "Mínimo de horas", "Km incluidos por hora"],
    keywords: {
      es: ["chófer por horas Barcelona", "coche con conductor por horas Barcelona", "alquiler coche con chófer Barcelona", "conductor privado Barcelona"],
      en: ["hourly chauffeur Barcelona", "car with driver by the hour Barcelona", "private driver Barcelona", "chauffeur hire Barcelona"],
    },
    es: {
      title: "Chófer por Horas en Barcelona | QuickPickups",
      description: "Coche, van o minibús con conductor por horas en Barcelona: reuniones, ferias, compras, bodas y excursiones. Usted decide el recorrido y el tiempo.",
      h1: "Chófer privado por horas en Barcelona",
      intro: "Cuando tiene varias paradas en un mismo día, un traslado no basta. Con el servicio por horas, un conductor profesional y su vehículo quedan a su disposición durante el tiempo que necesite: reuniones, visitas, compras, eventos o excursiones.",
      highlights: [
        { title: "Usted marca el ritmo", text: "Tantas paradas como necesite durante las horas contratadas." },
        { title: "Coche, van o minibús", text: "Elija el vehículo según el número de personas." },
        { title: "Ideal para empresas", text: "Reuniones con clientes, ferias y congresos, con factura." },
        { title: "También para ocio", text: "Visitas por Barcelona, bodas, cenas o excursiones por Cataluña." },
      ],
      sections: [
        { h2: "¿Cómo funciona el servicio por horas?", text: "En el formulario de reserva elija la opción «Por hora», indique el punto de recogida, la fecha, la hora y la duración. El conductor le recoge a la hora acordada y le acompaña durante todo el servicio. Mínimo de «DATO: horas mínimas» horas." },
        { h2: "Para qué lo usan nuestros clientes", text: "Directivos con varias reuniones en un día, expositores durante el MWC o las ferias de la Fira, grupos que quieren conocer Barcelona a su ritmo, bodas que necesitan llevar a los novios y a los invitados entre la ceremonia y el banquete, o excursiones a Montserrat, Sitges o la Costa Brava." },
      ],
      faq: [
        { q: "¿Cuál es el mínimo de horas?", a: "«DATO: horas mínimas y km incluidos»." },
        { q: "¿Puedo cambiar el recorrido durante el servicio?", a: "Sí, dentro del tiempo contratado el conductor le lleva a donde necesite." },
        { q: "¿Puedo ampliar el tiempo el mismo día?", a: "«DATO: política de horas extra»." },
      ],
    },
    en: {
      title: "Hourly Chauffeur in Barcelona | QuickPickups",
      description: "Car, van or minibus with driver by the hour in Barcelona: meetings, trade fairs, shopping, weddings and day trips. You choose the route and the time.",
      h1: "Private Chauffeur by the Hour in Barcelona",
      intro: "When you have several stops in one day, a single transfer isn't enough. With our hourly service, a professional driver and vehicle are at your disposal for as long as you need: meetings, sightseeing, shopping, events or day trips.",
      highlights: [
        { title: "You set the pace", text: "As many stops as you need during the booked hours." },
        { title: "Car, van or minibus", text: "Choose the vehicle based on the size of your group." },
        { title: "Ideal for business", text: "Client meetings, trade fairs and congresses, with an invoice." },
        { title: "Leisure too", text: "Barcelona sightseeing, weddings, dinners or day trips around Catalonia." },
      ],
      sections: [
        { h2: "How does the hourly service work?", text: "In the booking form choose \"Per Hour\", then enter your pickup point, date, time and duration. Your driver picks you up at the agreed time and stays with you for the whole service. Minimum of «DATO: minimum hours» hours." },
        { h2: "What our clients use it for", text: "Executives with several meetings in one day, exhibitors at MWC or Fira trade fairs, groups who want to see Barcelona at their own pace, weddings that need to move the couple and guests between ceremony and reception, or day trips to Montserrat, Sitges or the Costa Brava." },
      ],
      faq: [
        { q: "What is the minimum number of hours?", a: "«DATO: minimum hours and included km»." },
        { q: "Can I change the route during the service?", a: "Yes, within the booked time your driver takes you wherever you need." },
        { q: "Can I extend the time on the day?", a: "«DATO: extra hours policy»." },
      ],
    },
  },

  // ───────────────────────────── FLOTA ─────────────────────────────
  {
    id: "minibus",
    kind: "vehicle",
    priority: 1,
    slug: { es: "alquiler-minibus-con-conductor-barcelona", en: "minibus-hire-barcelona" },
    image: null, // «DATO: foto real del minibús»
    bookingService: { es: "Minibús", en: "Minibus" },
    related: ["vanxl", "minivan", "montmelo", "mwc", "cruise"],
    pendingData: [
      "Tamaños de minibús disponibles (p. ej. 16, 19, 23 plazas) — crear una sección o página por tamaño",
      "Modelo (p. ej. Mercedes Sprinter) y capacidad de maletero; ¿remolque?",
      "Autorización VD (propia o de colaborador) — mencionarla genera confianza",
      "Precio desde (aeropuerto → centro) y por horas (4 h / 8 h, km incluidos)",
      "Fotos reales",
    ],
    keywords: {
      es: ["alquiler minibús con conductor Barcelona", "minibús aeropuerto Barcelona", "minibús 16 plazas Barcelona", "minibús 19 plazas Barcelona", "microbús con conductor Barcelona"],
      en: ["minibus hire Barcelona", "minibus with driver Barcelona", "Barcelona airport minibus", "16 seater minibus Barcelona", "group transfer Barcelona"],
    },
    es: {
      title: "Alquiler de Minibús con Conductor en Barcelona | QuickPickups",
      description: "Minibús con conductor en Barcelona para grupos: aeropuerto, cruceros, Fira, MWC, Montmeló, bodas y excursiones. Traslados y servicio por horas.",
      h1: "Alquiler de minibús con conductor en Barcelona",
      intro: "Viajar en grupo es más sencillo cuando todos van juntos en un mismo vehículo. Nuestros minibuses con conductor profesional son la solución para grupos de amigos, equipos de empresa, congresistas, invitados de boda y excursiones, con espacio para el equipaje.",
      highlights: [
        { title: "Todo el grupo en un vehículo", text: "Nadie se queda esperando un segundo coche: llegan todos juntos a la misma hora." },
        { title: "Minibuses de 13 a 22 plazas", text: "Elija el tamaño según su grupo: «DATO: lista de tamaños disponibles»." },
        { title: "Traslados o por horas", text: "Un trayecto concreto o el minibús a su disposición durante la jornada." },
        { title: "Conductor profesional", text: "Todos nuestros vehículos incluyen conductor." },
      ],
      sections: [
        { h2: "¿Para qué puede usar un minibús?", text: "Traslados de grupo desde el aeropuerto de El Prat o el puerto de cruceros, transporte de asistentes a ferias y congresos como el MWC, días de carrera en el Circuit de Montmeló, partidos y conciertos, bodas y celebraciones, cenas de empresa, despedidas o excursiones a Montserrat, Sitges y la Costa Brava." },
        { h2: "¿Minibús, van XL o minivan?", text: "Las vans y minivans llevan hasta «DATO: plazas máximas de la van» pasajeros. A partir de ese número, el minibús es la opción para que el grupo no se divida. Indique el número de pasajeros y de maletas al reservar y le mostraremos los vehículos adecuados. Si su grupo es muy numeroso, consúltenos y le propondremos la combinación de vehículos más práctica." },
        { h2: "Qué incluye el servicio por horas", text: "El servicio por horas incluye el minibús, el conductor y «DATO: combustible / km incluidos». Es ideal para excursiones, bodas y eventos de empresa con varias paradas." },
      ],
      faq: [
        { q: "¿Cuántas personas caben en el minibús?", a: "Disponemos de minibuses de 13 a 22 plazas. Indique el número de pasajeros y de maletas al reservar y le asignaremos el tamaño adecuado." },
        { q: "¿El minibús incluye conductor?", a: "Sí, todos nuestros vehículos se ofrecen con conductor profesional." },
        { q: "¿Pueden recoger al grupo en el aeropuerto?", a: "Sí, con seguimiento de vuelo y 60 minutos de espera gratuita desde la llegada real del vuelo." },
        { q: "¿Puedo contratar el minibús por horas?", a: "Sí. Elija la opción «Por hora» en el formulario de reserva." },
        { q: "¿Cuánto cuesta alquilar un minibús con conductor?", a: "Depende del tamaño, del trayecto y de la duración. Precio orientativo: traslado aeropuerto–centro desde «DATO» €; por horas desde «DATO» €." },
      ],
    },
    en: {
      title: "Minibus Hire with Driver in Barcelona | QuickPickups",
      description: "Minibus with driver in Barcelona for groups: airport, cruise port, Fira, MWC, Montmeló, weddings and day trips. Transfers and hourly hire.",
      h1: "Minibus Hire with Driver in Barcelona",
      intro: "Group travel is simpler when everyone rides together in one vehicle. Our minibuses with professional drivers are the solution for groups of friends, company teams, congress delegates, wedding guests and day trips, with room for luggage.",
      highlights: [
        { title: "The whole group in one vehicle", text: "Nobody waits for a second car: everyone arrives together at the same time." },
        { title: "Minibuses with 13 to 22 seats", text: "Choose the size for your group: «DATO: list of available sizes»." },
        { title: "Transfers or hourly hire", text: "A single journey or the minibus at your disposal for the day." },
        { title: "Professional driver", text: "All our vehicles come with a driver." },
      ],
      sections: [
        { h2: "What can you use a minibus for?", text: "Group transfers from El Prat Airport or the cruise port, transport for delegates at fairs and congresses such as MWC, race days at the Montmeló circuit, football matches and concerts, weddings and celebrations, company dinners, stag and hen parties, or day trips to Montserrat, Sitges and the Costa Brava." },
        { h2: "Minibus, XL van or minivan?", text: "Vans and minivans carry up to «DATO: max van seats» passengers. Beyond that, a minibus keeps your group together. Enter the number of passengers and suitcases when booking and we will show you the right vehicles. For very large groups, contact us and we'll suggest the most practical combination of vehicles." },
        { h2: "What hourly hire includes", text: "Hourly hire includes the minibus, the driver and «DATO: fuel / included km». It's ideal for day trips, weddings and corporate events with several stops." },
      ],
      faq: [
        { q: "How many people fit in the minibus?", a: "Our minibuses have 13 to 22 seats. Enter the number of passengers and suitcases when booking and we will assign the right size." },
        { q: "Does the minibus come with a driver?", a: "Yes, all our vehicles come with a professional driver." },
        { q: "Can you pick up our group at the airport?", a: "Yes, with flight tracking and 60 minutes of free waiting time from the actual arrival of the flight." },
        { q: "Can I hire the minibus by the hour?", a: "Yes. Choose the \"Per Hour\" option in the booking form." },
        { q: "How much does it cost to hire a minibus with driver?", a: "It depends on size, route and duration. Guide price: airport–city centre transfer from €«DATO»; hourly from €«DATO»." },
      ],
    },
  },

  {
    id: "vanxl",
    kind: "vehicle",
    priority: 1,
    slug: { es: "van-xl-con-conductor-barcelona", en: "xl-van-transfer-barcelona" },
    image: null, // «DATO: foto real de la van XL»
    bookingService: { es: "Van XL", en: "XL Van" },
    related: ["minibus", "minivan", "cruise", "fira"],
    pendingData: ["Modelo (p. ej. Mercedes Clase V / Vito larga)", "Plazas (máx. 8 pasajeros si es VTC) y maletas", "Precio desde aeropuerto → centro", "Fotos reales"],
    keywords: {
      es: ["van con conductor Barcelona", "van 8 plazas Barcelona", "van XL aeropuerto Barcelona", "furgoneta con conductor Barcelona"],
      en: ["XL van Barcelona", "8 seater van Barcelona", "van with driver Barcelona airport", "large van transfer Barcelona"],
    },
    es: {
      title: "Van XL con Conductor en Barcelona | QuickPickups",
      description: "Van XL con conductor en Barcelona para grupos con mucho equipaje: aeropuerto, cruceros, ferias, equipos deportivos y eventos. Reserve online.",
      h1: "Van XL con conductor en Barcelona",
      intro: "Cuando el grupo viaja con mucho equipaje —maletas grandes de crucero, carritos de bebé, equipamiento deportivo o material de stand— la van XL ofrece el espacio que necesita sin renunciar a la comodidad de un traslado privado.",
      highlights: [
        { title: "Hasta «DATO» pasajeros", text: "Todo el grupo junto en un solo vehículo." },
        { title: "Máximo espacio para el equipaje", text: "La mejor opción para cruceristas y familias con muchas maletas." },
        { title: "Material de feria y deporte", text: "Para expositores, equipos deportivos y producciones." },
        { title: "Traslados o por horas", text: "Un trayecto o la van a su disposición durante la jornada." },
      ],
      sections: [
        { h2: "Para cruceristas y viajeros con mucho equipaje", text: "Los pasajeros de crucero suelen viajar con maletas grandes para toda la semana. La van XL lleva al grupo y su equipaje del aeropuerto al Moll Adossat, o del barco al hotel, sin necesidad de un segundo vehículo." },
        { h2: "Equipos, expositores y empresas", text: "Equipos que viajan a competiciones, expositores con material para su stand en la Fira o empresas que trasladan a su personal: la van XL combina espacio y comodidad para trayectos por Barcelona y por toda Cataluña." },
      ],
      faq: [
        { q: "¿Cuánto equipaje cabe en la van XL?", a: "«DATO: capacidad de maletas con el máximo de pasajeros»." },
        { q: "¿Van XL o minibús?", a: "La van XL es ideal hasta «DATO» pasajeros con mucho equipaje. Para grupos más grandes, elija un minibús." },
        { q: "¿Puedo reservar la van XL por horas?", a: "Sí. Elija la opción «Por hora» en el formulario de reserva." },
      ],
    },
    en: {
      title: "XL Van with Driver in Barcelona | QuickPickups",
      description: "XL van with driver in Barcelona for groups with lots of luggage: airport, cruise port, trade fairs, sports teams and events. Book online.",
      h1: "XL Van with Driver in Barcelona",
      intro: "When your group travels with a lot of luggage —large cruise suitcases, prams, sports equipment or stand materials— the XL van gives you the space you need with all the comfort of a private transfer.",
      highlights: [
        { title: "Up to «DATO» passengers", text: "The whole group together in a single vehicle." },
        { title: "Maximum luggage space", text: "The best option for cruise passengers and families with lots of suitcases." },
        { title: "Trade fair and sports equipment", text: "For exhibitors, sports teams and productions." },
        { title: "Transfers or hourly hire", text: "A single journey or the van at your disposal for the day." },
      ],
      sections: [
        { h2: "For cruise passengers and travellers with lots of luggage", text: "Cruise passengers usually travel with large suitcases for the whole week. The XL van takes your group and luggage from the airport to Moll Adossat, or from the ship to your hotel, without needing a second vehicle." },
        { h2: "Teams, exhibitors and companies", text: "Teams travelling to competitions, exhibitors carrying stand materials to Fira Barcelona or companies moving their staff: the XL van combines space and comfort for journeys around Barcelona and across Catalonia." },
      ],
      faq: [
        { q: "How much luggage fits in the XL van?", a: "«DATO: luggage capacity with maximum passengers»." },
        { q: "XL van or minibus?", a: "The XL van is ideal for up to «DATO» passengers with lots of luggage. For larger groups, choose a minibus." },
        { q: "Can I book the XL van by the hour?", a: "Yes. Choose the \"Per Hour\" option in the booking form." },
      ],
    },
  },

  {
    id: "minivan",
    kind: "vehicle",
    priority: 2,
    slug: { es: "minivan-con-conductor-barcelona", en: "minivan-transfer-barcelona" },
    image: null, // «DATO: foto real de la minivan»
    bookingService: { es: "Minivan", en: "Minivan" },
    related: ["vanxl", "airport", "cruise", "bigcar"],
    pendingData: ["Modelo", "Plazas y maletas", "Precio desde aeropuerto → centro", "Fotos reales"],
    keywords: {
      es: ["minivan con conductor Barcelona", "taxi 6 plazas Barcelona", "traslado aeropuerto Barcelona familia", "minivan aeropuerto Barcelona"],
      en: ["minivan transfer Barcelona", "6 seater taxi Barcelona", "Barcelona airport family transfer", "people carrier Barcelona"],
    },
    es: {
      title: "Minivan con Conductor en Barcelona para Familias | QuickPickups",
      description: "Minivan privada con conductor en Barcelona para familias y grupos pequeños. Traslados al aeropuerto El Prat, al puerto de cruceros y por toda la ciudad.",
      h1: "Minivan con conductor en Barcelona",
      intro: "La minivan es la opción ideal para familias y grupos pequeños que quieren viajar juntos con su equipaje, sin repartirse en dos coches. Más espacio que un coche convencional y toda la comodidad de un traslado privado.",
      highlights: [
        { title: "Hasta «DATO» pasajeros", text: "Toda la familia en un solo vehículo." },
        { title: "Sillas infantiles bajo petición", text: "Indíquelas en el formulario al reservar." },
        { title: "Precio por trayecto", text: "Paga por el vehículo, no por persona." },
        { title: "Aeropuerto, cruceros y ciudad", text: "Para llegar, moverse por Barcelona y volver." },
      ],
      sections: [
        { h2: "Ideal para familias y grupos pequeños", text: "Viajar con niños significa carritos, sillas y más maletas. La minivan le da espacio para todo y le evita tener que coger dos taxis. Pida las sillas infantiles que necesite al reservar y el conductor las llevará instaladas." },
        { h2: "Traslados en minivan por Barcelona", text: "Del aeropuerto de El Prat a su hotel, del hotel al puerto de cruceros, a la Fira de Barcelona, al Circuit de Montmeló o a otras ciudades de Cataluña." },
      ],
      faq: [
        { q: "¿Tienen sillas para niños?", a: "Sí. Puede solicitarlas en el formulario de reserva indicando cuántas necesita." },
        { q: "¿Qué diferencia hay entre una minivan y una van XL?", a: "La van XL ofrece más espacio para pasajeros y equipaje. Si viaja con muchas maletas, equipamiento deportivo o carritos, le recomendamos la van XL." },
        { q: "¿El precio es por persona?", a: "No, el precio es por trayecto y vehículo." },
      ],
    },
    en: {
      title: "Minivan with Driver in Barcelona for Families | QuickPickups",
      description: "Private minivan with driver in Barcelona for families and small groups. Transfers to El Prat Airport, the cruise port and anywhere in the city.",
      h1: "Minivan with Driver in Barcelona",
      intro: "A minivan is the ideal choice for families and small groups who want to travel together with their luggage instead of splitting into two cars. More space than a standard car, with all the comfort of a private transfer.",
      highlights: [
        { title: "Up to «DATO» passengers", text: "The whole family in a single vehicle." },
        { title: "Child seats on request", text: "Add them in the booking form." },
        { title: "Price per trip", text: "You pay for the vehicle, not per person." },
        { title: "Airport, cruise port and city", text: "To arrive, get around Barcelona and head home." },
      ],
      sections: [
        { h2: "Ideal for families and small groups", text: "Travelling with children means prams, seats and extra suitcases. A minivan gives you room for everything and saves you taking two taxis. Request the child seats you need when booking and your driver will have them fitted." },
        { h2: "Minivan transfers around Barcelona", text: "From El Prat Airport to your hotel, from your hotel to the cruise port, to Fira Barcelona, the Montmeló circuit or other towns in Catalonia." },
      ],
      faq: [
        { q: "Do you provide child seats?", a: "Yes. Request them in the booking form and tell us how many you need." },
        { q: "What's the difference between a minivan and an XL van?", a: "The XL van offers more space for passengers and luggage. If you're travelling with lots of suitcases, sports equipment or prams, we recommend the XL van." },
        { q: "Is the price per person?", a: "No, the price is per trip and vehicle." },
      ],
    },
  },

  {
    id: "bigcar",
    kind: "vehicle",
    priority: 2,
    // ⚠️ LEGAL: confirmar el tipo de licencia antes de usar «taxi». Si es VTC, cambiar el slug
    // por «coche-grande-con-conductor-barcelona» y quitar «taxi» del title y del H1.
    slug: { es: "taxi-grande-barcelona", en: "big-taxi-barcelona" },
    image: "/car2.webp",
    bookingService: { es: "Coche grande", en: "Large Car" },
    related: ["minivan", "vanxl", "minibus", "airport"],
    pendingData: ["⚠️ Tipo de licencia (VTC / taxi AMB) antes de usar la palabra «taxi»", "Qué es exactamente un «coche grande» (modelo, plazas, maletas)", "Precio desde"],
    keywords: {
      es: ["taxi grande Barcelona", "big taxi Barcelona", "taxi 7 plazas Barcelona", "coche grande con conductor Barcelona"],
      en: ["big taxi Barcelona", "large taxi Barcelona", "7 seater taxi Barcelona", "large car with driver Barcelona"],
    },
    es: {
      title: "Big Taxi Barcelona: Coches Grandes con Conductor | QuickPickups",
      description: "¿Necesita un taxi grande en Barcelona? Reserve un coche grande, minivan o van con conductor para grupos y equipaje: aeropuerto, puerto y toda la ciudad.",
      h1: "Coches grandes con conductor en Barcelona",
      intro: "Encontrar un taxi grande en la parada no siempre es fácil, sobre todo en el aeropuerto, en el puerto o durante los grandes eventos. Con QuickPickups reserva con antelación un coche grande, una minivan o una van XL con conductor y se asegura de que todo el grupo y el equipaje viajan juntos.",
      highlights: [
        { title: "Reserva previa", text: "Su vehículo le espera a la hora acordada, sin colas en la parada." },
        { title: "Más espacio", text: "Más sitio para piernas y maletas que en un coche estándar." },
        { title: "Del coche grande al minibús", text: "Elija el tamaño según su grupo." },
        { title: "Espera gratuita incluida", text: "60 min en el aeropuerto, 30 min en el puerto y 15 min en hoteles y direcciones." },
      ],
      sections: [
        { h2: "Coches grandes con conductor", text: "Si un coche estándar se queda corto para su grupo o su equipaje, un coche grande le da el espacio extra que necesita. «DATO: modelo, plazas y maletas del coche grande»." },
        { h2: "¿Qué vehículo grande elegir?", text: "Coche grande para grupos pequeños con equipaje extra; minivan para familias; van XL para grupos con mucho equipaje; minibús para grupos más numerosos. Indique el número de pasajeros y maletas al reservar y le mostraremos las opciones disponibles." },
      ],
      faq: [
        { q: "¿En qué se diferencia de pedir un taxi en la calle?", a: "QuickPickups es un servicio de traslados privados con reserva previa: reserva online, conoce los detalles de su viaje de antemano y el conductor le espera a la hora acordada." },
        { q: "¿Con cuánta antelación debo reservar?", a: "Le recomendamos reservar con antelación, sobre todo en temporada alta y durante el MWC, las grandes ferias o los grandes premios en Montmeló." },
        { q: "¿Puedo reservar un vehículo grande para el aeropuerto?", a: "Sí, con seguimiento de vuelo y 60 minutos de espera gratuita." },
      ],
    },
    en: {
      title: "Big Taxi Barcelona: Large Cars with Driver | QuickPickups",
      description: "Need a big taxi in Barcelona? Book a large car, minivan or van with driver for groups and luggage: airport, cruise port and anywhere in the city.",
      h1: "Large Cars with Driver in Barcelona",
      intro: "Finding a large taxi at the rank isn't always easy, especially at the airport, the port or during major events. With QuickPickups you pre-book a large car, minivan or XL van with driver and make sure the whole group and its luggage travel together.",
      highlights: [
        { title: "Pre-booked", text: "Your vehicle waits for you at the agreed time, no rank queues." },
        { title: "More space", text: "More legroom and luggage space than a standard car." },
        { title: "From large car to minibus", text: "Choose the size for your group." },
        { title: "Free waiting included", text: "60 min at the airport, 30 min at the port and 15 min at hotels and addresses." },
      ],
      sections: [
        { h2: "Large cars with driver", text: "If a standard car is too small for your group or luggage, a large car gives you the extra room you need. «DATO: large car model, seats and luggage»." },
        { h2: "Which large vehicle should I choose?", text: "A large car for small groups with extra luggage; a minivan for families; an XL van for groups with lots of luggage; a minibus for larger groups. Enter the number of passengers and suitcases when booking and we'll show you the available options." },
      ],
      faq: [
        { q: "How is this different from hailing a taxi?", a: "QuickPickups is a pre-booked private transfer service: you book online, know your trip details in advance and your driver waits for you at the agreed time." },
        { q: "How far in advance should I book?", a: "We recommend booking ahead, especially in high season and during MWC, major trade fairs or Grand Prix weekends at Montmeló." },
        { q: "Can I book a large vehicle for the airport?", a: "Yes, with flight tracking and 60 minutes of free waiting time." },
      ],
    },
  },
];

// Textos comunes de la plantilla de landing.
export const ui = {
  es: {
    bookNow: "Reservar ahora",
    callUs: "Llámenos",
    highlightsTitle: "Por qué elegir QuickPickups",
    faqTitle: "Preguntas frecuentes",
    relatedTitle: "También le puede interesar",
    ctaTitle: "¿Listo para reservar su traslado?",
    ctaText: "Indique la recogida y el destino y vea su precio en segundos.",
    breadcrumbHome: "Inicio",
    hubTitle: "Flota y destinos en Barcelona",
    hubVehicles: "Nuestra flota",
    hubDestinations: "Destinos y eventos",
  },
  en: {
    bookNow: "Book now",
    callUs: "Call us",
    highlightsTitle: "Why choose QuickPickups",
    faqTitle: "Frequently asked questions",
    relatedTitle: "You may also be interested in",
    ctaTitle: "Ready to book your transfer?",
    ctaText: "Enter your pickup and destination and see your price in seconds.",
    breadcrumbHome: "Home",
    hubTitle: "Fleet and destinations in Barcelona",
    hubVehicles: "Our fleet",
    hubDestinations: "Destinations and events",
  },
};

// ───────────────────────────── helpers ─────────────────────────────

// A page is publishable in a language once every «DATO» placeholder has been filled in.
// Drafts are rendered (noindex, with a banner) but kept out of the sitemap and of internal links.
// Set LANDINGS_INCLUDE_DRAFTS=1 to preview drafts as if they were ready.
const includeDrafts = process.env.LANDINGS_INCLUDE_DRAFTS === "1";

export const isReady = (page, lang) => includeDrafts || !JSON.stringify(page[lang]).includes("«DATO");

export const findLanding = (lang, slug) => landings.find((l) => l.slug[lang] === slug);

export const landingById = (id) => landings.find((l) => l.id === id);

export const readyLandings = (lang) => landings.filter((l) => isReady(l, lang));

export const landingPaths = (page) =>
  Object.fromEntries(Object.entries(page.slug).map(([lang, slug]) => [lang, `/${slug}`]));
