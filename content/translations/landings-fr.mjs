// QuickPickups — landings Barcelona, français (fr).
// Registre : vouvoiement. Terminologie : chófer → chauffeur ; minivan → monospace ;
// van XL → van XL ; minibús → minibus (invariable) ; servicio por horas → service à l'heure.
// Les marqueurs «DATO: …» sont conservés et doivent être confirmés avant publication.

export const lang = "fr";
export const hreflang = "fr";
export const dir = "ltr";

export const ui = {
  bookNow: "Réserver maintenant",
  callUs: "Appelez-nous",
  highlightsTitle: "Pourquoi choisir QuickPickups",
  faqTitle: "Questions fréquentes",
  relatedTitle: "Cela pourrait aussi vous intéresser",
  ctaTitle: "Prêt à réserver votre transfert ?",
  ctaText: "Indiquez le lieu de prise en charge et la destination, et découvrez votre prix en quelques secondes.",
  breadcrumbHome: "Accueil",
  hubTitle: "Flotte et destinations à Barcelone",
  hubVehicles: "Notre flotte",
  hubDestinations: "Destinations et événements",
};

export const pages = {
  // ───────────────────────────── DESTINATIONS ET ÉVÉNEMENTS ─────────────────────────────
  airport: {
    slug: "transfert-aeroport-barcelone",
    keywords: [
      "transfert aéroport Barcelone",
      "navette aéroport Barcelone hôtel",
      "transfert privé aéroport El Prat",
      "taxi aéroport Barcelone réservation",
      "chauffeur privé aéroport Barcelone",
    ],
    title: "Transfert Aéroport Barcelone El Prat (T1 et T2) | QuickPickups",
    description: "Transfert privé depuis et vers l'aéroport de Barcelone El Prat, T1 et T2. Suivi de vol, chauffeur avec pancarte et 60 min d'attente offertes.",
    h1: "Transfert privé à l'aéroport de Barcelone El Prat",
    intro: "Arrivez à Barcelone sans faire la queue à la station de taxis. Votre chauffeur vous attend dans le hall des arrivées du T1 ou du T2 avec une pancarte à votre nom et vous conduit directement à votre hôtel, au port de croisière, à la Fira ou à toute adresse de Barcelone et de ses environs.",
    highlights: [
      { title: "60 minutes d'attente offertes", text: "Le temps d'attente est décompté à partir de l'arrivée réelle de votre vol, pour que vous récupériez vos bagages en toute tranquillité." },
      { title: "Suivi de vol", text: "Si votre vol arrive en avance ou en retard, le chauffeur adapte la prise en charge à l'heure réelle." },
      { title: "Accueil avec pancarte", text: "Nous vous attendons à l'intérieur du terminal avec une pancarte à votre nom." },
      { title: "Un véhicule pour chaque groupe", text: "Voitures, monospaces, vans XL et minibus pour les voyageurs seuls, les familles et les groupes." },
    ],
    sections: [
      { h2: "De l'aéroport El Prat à tout Barcelone", text: "Le trajet entre l'aéroport et le centre de Barcelone dure environ 20 à 30 minutes selon la circulation. Nous vous conduisons dans les hôtels et à toute adresse de la ville, aux terminaux de croisière du Moll Adossat et du World Trade Center, à Fira Gran Via et Fira Montjuïc, à la gare de Sants et dans d'autres villes de Catalogne." },
      { h2: "Transfert vers l'aéroport pour votre vol retour", text: "Au retour, nous venons vous chercher à votre hôtel, à votre domicile ou à votre bureau à l'heure convenue. Prévoyez une marge suffisante pour l'enregistrement, surtout en haute saison et lors de grands événements comme le MWC, lorsque la circulation vers l'aéroport s'intensifie." },
      { h2: "Familles et groupes", text: "Lors de la réservation, indiquez le nombre de passagers et de valises, et si vous avez besoin de sièges enfant. Si vous êtes plus de «DATO: places maximales du monospace/van» personnes ou si vous voyagez avec beaucoup de bagages, nous vous recommandons un van XL ou un minibus pour que tout le groupe voyage ensemble." },
    ],
    faq: [
      { q: "Où le chauffeur m'attend-il à l'aéroport ?", a: "Dans le hall des arrivées de votre terminal (T1 ou T2), avec une pancarte à votre nom." },
      { q: "Que se passe-t-il si mon vol est retardé ?", a: "Nous suivons votre vol en temps réel et le chauffeur adapte la prise en charge. Vous bénéficiez en outre de 60 minutes d'attente gratuite à partir de l'arrivée réelle du vol." },
      { q: "Puis-je demander des sièges enfant ?", a: "Oui. Sélectionnez-les dans le formulaire de réservation en indiquant le nombre souhaité." },
      { q: "Combien coûte le transfert de l'aéroport au centre-ville ?", a: "Cela dépend du véhicule et de la destination. Saisissez le lieu de prise en charge et la destination dans le formulaire pour voir le prix avant de réserver. Prix indicatif : à partir de 42 € en catégorie Economy." },
    ],
  },

  cruise: {
    slug: "transfert-port-croisiere-barcelone",
    keywords: [
      "transfert port croisière Barcelone",
      "transfert Moll Adossat",
      "transfert aéroport port de Barcelone",
      "taxi terminal croisière Barcelone",
      "navette port croisière Barcelone",
    ],
    title: "Transfert Croisière Barcelone et Moll Adossat | QuickPickups",
    description: "Transfert privé vers les terminaux de croisière de Barcelone : Moll Adossat et World Trade Center. Depuis l'aéroport ou l'hôtel, 30 min d'attente offertes.",
    h1: "Transferts vers le port de croisière de Barcelone et le Moll Adossat",
    intro: "Commencez et terminez votre croisière sans stress. Nous vous conduisons avec tous vos bagages depuis l'aéroport d'El Prat, votre hôtel ou toute autre adresse jusqu'à la porte du terminal de votre navire, et venons vous chercher à votre débarquement.",
    highlights: [
      { title: "Jusqu'à la porte de votre terminal", text: "Pas de valises à hisser dans les bus ou les navettes : nous vous déposons au terminal de votre compagnie de croisière." },
      { title: "30 minutes d'attente offertes", text: "Au port, nous vous attendons 30 minutes sans frais, idéal les jours de débarquement." },
      { title: "Aéroport ↔ port le même jour", text: "Le trajet entre le port et l'aéroport dure environ 20 à 30 minutes selon la circulation." },
      { title: "De la place pour vos bagages", text: "Vans XL et minibus pour les familles et les groupes avec de grandes valises de croisière." },
    ],
    sections: [
      { h2: "Terminaux de croisière du Moll Adossat", text: "La plupart des grands navires de croisière accostent au Moll Adossat, au pied de Montjuïc (Moll Adossat, 1 – 08039 Barcelona). On y trouve les terminaux A, B et C, le terminal D (Palacruceros), le terminal E (Helix) et le terminal MSC. Indiquez votre compagnie ou votre terminal lors de la réservation et le chauffeur vous conduira à la bonne entrée." },
      { h2: "Terminal du World Trade Center", text: "Certains navires, généralement plus petits, accostent au terminal du World Trade Center, sur le Moll de Barcelona, au bas de la Rambla. Le port regroupe de plus en plus les croisières au Moll Adossat : confirmez donc toujours votre terminal auprès de votre compagnie de croisière. Nous desservons tous les terminaux, pour l'embarquement comme pour le retour vers l'aéroport ou votre hôtel après la croisière." },
      { h2: "Mieux que la navette quand on a des bagages", text: "Le bus navette du port ne va que jusqu'au monument à Christophe Colomb ; de là, vous devriez continuer avec toutes vos valises. Avec un transfert privé, vous voyagez de porte à porte, sans attente ni correspondance, même si votre navire arrive tôt le matin." },
    ],
    faq: [
      { q: "À quel terminal m'emmenez-vous ?", a: "Au terminal de votre compagnie de croisière. Indiquez-le dans les commentaires lors de la réservation (par exemple « Terminal E – Helix » ou « MSC »). Si vous ne le connaissez pas encore, indiquez le nom du navire." },
      { q: "Puis-je aller directement du navire à l'aéroport ?", a: "Oui. Réservez le transfert du port à l'aéroport pour le jour du débarquement et indiquez votre numéro de vol dans les commentaires." },
      { q: "Y a-t-il de la place pour toutes les valises ?", a: "Indiquez le nombre de valises lors de la réservation. Pour les familles ou les groupes avec beaucoup de bagages, nous recommandons un van XL ou un minibus." },
      { q: "Que se passe-t-il si le débarquement prend du retard ?", a: "Vous bénéficiez de 30 minutes d'attente gratuite au port. Si vous prévoyez un retard plus important, contactez-nous au +34 711 206 600." },
    ],
  },

  montmelo: {
    slug: "transfert-circuit-montmelo",
    keywords: [
      "transfert circuit Montmeló",
      "comment aller au circuit de Montmeló",
      "transfert Formule 1 Barcelone",
      "navette Grand Prix Barcelone Montmeló",
      "transport MotoGP Montmeló",
    ],
    title: "Transfert au Circuit de Montmeló depuis Barcelone | QuickPickups",
    description: "Transfert privé au Circuit de Barcelona-Catalunya à Montmeló pour la F1, le MotoGP et d'autres événements. Aller-retour depuis Barcelone, l'aéroport ou l'hôtel.",
    h1: "Transferts au Circuit de Barcelona-Catalunya (Montmeló)",
    intro: "Profitez de la Formule 1, du MotoGP ou de tout autre événement au Circuit sans subir la circulation, le stationnement ou les trains bondés. Nous vous conduisons de Barcelone, de l'aéroport ou de votre hôtel jusqu'à Montmeló et venons vous chercher à la fin.",
    highlights: [
      { title: "Aller-retour", text: "Réservez l'aller et le retour, et ne vous souciez plus de trouver un moyen de transport à la sortie du circuit." },
      { title: "Ni parking ni correspondance", text: "Pas de train de banlieue, pas de navette et pas de place de parking à chercher." },
      { title: "Groupes de fans", text: "Monospaces, vans XL et minibus pour que tout le groupe voyage ensemble." },
      { title: "Depuis l'aéroport ou votre hôtel", text: "Rendez-vous directement de l'aéroport d'El Prat au circuit si vous arrivez le jour même." },
    ],
    sections: [
      { h2: "Se rendre au Circuit de Montmeló sans stress", text: "Le Circuit de Barcelona-Catalunya se trouve à Montmeló, à environ 30 km au nord-est de Barcelone, et il est accessible par la C-17 et l'AP-7. En transports en commun, il faut prendre le train R2 Nord jusqu'à Montmeló, puis la navette jusqu'au circuit. Les week-ends de Grand Prix, routes, trains et parkings sont saturés ; avec un transfert privé, vous partez à l'heure qui vous convient et rentrez sans faire la queue." },
      { h2: "Formule 1, MotoGP et événements d'entreprise", text: "Nous transportons des fans, des groupes d'amis, des agences et des entreprises accompagnant leurs invités dans les espaces hospitality. Les week-ends de course, la demande de véhicules est très forte, surtout pour les grands véhicules : nous vous conseillons de réserver le plus tôt possible." },
    ],
    faq: [
      { q: "Venez-vous nous chercher à la fin de la course ?", a: "Oui. Réservez le trajet retour avec une heure approximative et indiquez votre point de rendez-vous préféré dans les commentaires. La circulation est dense à la sortie du circuit : mieux vaut convenir du point de rendez-vous à l'avance." },
      { q: "Puis-je aller directement de l'aéroport au circuit ?", a: "Oui. Indiquez l'aéroport comme lieu de prise en charge et le Circuit de Barcelona-Catalunya comme destination ; nous suivons votre vol comme pour tout transfert aéroport." },
      { q: "Combien de temps à l'avance dois-je réserver ?", a: "Pour les week-ends de Formule 1 ou de MotoGP, le plus tôt possible. Les grands véhicules et les minibus sont les premiers à être complets." },
      { q: "Combien coûte le transfert à Montmeló ?", a: "Cela dépend du lieu de prise en charge et du véhicule. Prix indicatif depuis le centre de Barcelone : à partir de «DATO: prix à partir de» €." },
    ],
  },

  fira: {
    slug: "transferts-fira-barcelona",
    keywords: [
      "transfert Fira Barcelona",
      "transfert Fira Gran Via",
      "transfert aéroport Fira Gran Via",
      "chauffeur salon Barcelone",
      "navette salon professionnel Barcelone",
    ],
    title: "Transferts Fira Barcelona (Gran Via et Montjuïc) | QuickPickups",
    description: "Transferts privés vers Fira Gran Via et Fira Montjuïc pour salons et congrès. Depuis l'aéroport ou l'hôtel, et chauffeur à l'heure pour les exposants.",
    h1: "Transferts vers la Fira de Barcelona pour salons et congrès",
    intro: "Arrivez à l'heure à votre salon, sur votre stand ou à vos rendez-vous. Nous proposons des transferts privés vers les deux sites de la Fira de Barcelona, Gran Via et Montjuïc, depuis l'aéroport, votre hôtel ou votre bureau, pour les visiteurs, les exposants et les entreprises.",
    highlights: [
      { title: "Gran Via et Montjuïc", text: "Nous desservons les deux sites et vous déposons à l'entrée de votre choix." },
      { title: "Direct depuis l'aéroport", text: "Il n'existe pas de transport public direct entre l'aéroport et Fira Gran Via : avec nous, aucune correspondance." },
      { title: "Chauffeur à l'heure", text: "Un chauffeur à votre disposition entre le salon, l'hôtel et vos rendez-vous." },
      { title: "Équipes et matériel", text: "Vans XL et minibus pour les équipes de stand, les délégations et le matériel d'exposition." },
    ],
    sections: [
      { h2: "Fira Gran Via et Fira Montjuïc", text: "Fira Gran Via se trouve à L'Hospitalet de Llobregat, entre le centre de Barcelone et l'aéroport, et accueille les plus grands salons et congrès. Fira Montjuïc est située à côté de la plaça d'Espanya. Lors de la réservation, indiquez le site et, si vous les connaissez, la porte ou l'accès." },
      { h2: "Chauffeur à l'heure pour exposants et entreprises", text: "Si vous devez vous déplacer entre le salon, l'hôtel, des dîners et des rendez-vous clients, choisissez le service à l'heure et disposez du véhicule et du chauffeur aussi longtemps que nécessaire. C'est l'option idéale pour les dirigeants, les clients VIP et les équipes commerciales. Si vous avez besoin d'une facture pour votre entreprise, précisez-le lors de la réservation." },
      { h2: "Salons à forte affluence", text: "Pendant les grands salons et congrès, comme le MWC, la ville est pleine et les véhicules sont vite complets. Réservez à l'avance, surtout si vous avez besoin de grands véhicules ou de plusieurs transferts pour votre équipe." },
    ],
    faq: [
      { q: "Quel site de la Fira dois-je indiquer ?", a: "Celui de votre événement : Fira Gran Via (L'Hospitalet de Llobregat) ou Fira Montjuïc (plaça d'Espanya). Vous le trouverez sur votre badge ou sur le site web du salon." },
      { q: "Puis-je réserver un chauffeur pour toute la journée ?", a: "Oui. Choisissez l'option « À l'heure » dans le formulaire de réservation et indiquez le nombre d'heures souhaité." },
      { q: "Transportez-vous les équipes de stand avec leur matériel ?", a: "Oui. Indiquez le nombre de personnes et le type de matériel ; pour les équipes avec beaucoup de matériel, nous recommandons un van XL." },
      { q: "Émettez-vous des factures ?", a: "Oui, vous pouvez demander une facture pour votre transfert." },
    ],
  },

  mwc: {
    slug: "transferts-mwc-barcelone",
    keywords: [
      "transfert MWC Barcelone",
      "chauffeur MWC Barcelone",
      "transport Mobile World Congress",
      "navette aéroport MWC Barcelone",
      "MWC 2027 transfert",
    ],
    title: "Transferts MWC Barcelona (Mobile World Congress) | QuickPickups",
    description: "Transferts privés et chauffeur à l'heure pour le MWC Barcelona à Fira Gran Via. Aéroport, hôtel et rendez-vous sans file de taxis. Réservez tôt.",
    h1: "Transferts et chauffeur privé pour le MWC Barcelona",
    intro: "Pendant le Mobile World Congress Barcelona, des visiteurs du monde entier affluent dans la ville et la demande de taxis et de transports explose. Réservez à l'avance votre transfert privé entre l'aéroport, votre hôtel et Fira Gran Via, ou un chauffeur à votre disposition pendant tout le congrès.",
    highlights: [
      { title: "Sans file d'attente aux taxis", text: "Votre chauffeur vous attend à l'heure convenue, même aux heures de pointe, à l'ouverture comme à la fermeture du congrès." },
      { title: "Aéroport – hôtel – Fira Gran Via", text: "Tous vos trajets pendant le congrès avec un seul prestataire." },
      { title: "Chauffeur à l'heure ou à la journée", text: "Un véhicule et un chauffeur à votre disposition pour vos rendez-vous, dîners et événements." },
      { title: "Délégations et équipes", text: "Des voitures pour les dirigeants, et des vans XL ou des minibus pour les équipes au complet." },
    ],
    sections: [
      { h2: "Se déplacer à Barcelone pendant le MWC", text: "Le MWC se tient à Fira Gran Via, à L'Hospitalet de Llobregat, entre l'aéroport et le centre de Barcelone. Aux heures d'ouverture et de fermeture, de longues files d'attente se forment aux stations de taxis et les transports en commun sont bondés. Avec un transfert réservé, votre chauffeur vous attend à la porte convenue et vous conduit directement à votre hôtel, à votre prochain rendez-vous ou à l'aéroport." },
      { h2: "Un service pour les entreprises et les délégations", text: "Nous coordonnons les transferts des délégations, des équipes commerciales et des clients invités. Associez des voitures pour les dirigeants à des vans XL et des minibus pour les équipes, et demandez une facture pour votre entreprise. Si votre délégation a besoin de plusieurs véhicules à la même heure, précisez-le lors de la réservation et nous vous proposerons la meilleure combinaison." },
      { h2: "Réservez le plus tôt possible", text: "Dans les semaines qui précèdent le congrès, la disponibilité des véhicules à Barcelone chute considérablement. Plus vous réservez tôt, plus vous aurez le choix des véhicules et des horaires." },
    ],
    faq: [
      { q: "Quand dois-je réserver pour le MWC ?", a: "Le plus tôt possible. Dans les semaines précédant le congrès, la disponibilité des véhicules, surtout des grands, diminue fortement." },
      { q: "Puis-je avoir un chauffeur toute la journée ?", a: "Oui. Choisissez l'option « À l'heure » et indiquez le nombre d'heures nécessaires pour chaque jour du congrès." },
      { q: "M'emmenez-vous aussi aux dîners et événements en dehors de la Fira ?", a: "Oui. Avec le service à l'heure, le chauffeur vous conduit où vous le souhaitez pendant la durée réservée." },
      { q: "Vos chauffeurs parlent-ils d'autres langues ?", a: "«DATO: langues parlées par les chauffeurs (anglais, chinois…)»." },
    ],
  },

  stadiums: {
    slug: "transferts-camp-nou-concerts-barcelone",
    keywords: [
      "transfert Camp Nou",
      "transport concert Estadi Olímpic Barcelone",
      "transfert Palau Sant Jordi",
      "navette match Barça groupe",
      "transport concert Barcelone",
    ],
    title: "Transferts Camp Nou, Estadi Olímpic et concerts | QuickPickups",
    description: "Transferts privés pour les matchs et concerts à Barcelone : Spotify Camp Nou, Estadi Olímpic et Palau Sant Jordi. Aller-retour pour les groupes.",
    h1: "Transferts pour matchs et concerts à Barcelone",
    intro: "Allez au match ou au concert avec votre groupe et rentrez sans subir le métro bondé ni le manque de taxis à la sortie. Nous vous conduisons depuis votre hôtel, l'aéroport ou n'importe quel point de Barcelone jusqu'au Spotify Camp Nou, à l'Estadi Olímpic Lluís Companys ou au Palau Sant Jordi.",
    highlights: [
      { title: "Aller-retour", text: "Réservez aussi le retour et évitez de chercher un taxi à la fin de l'événement." },
      { title: "Tout le groupe ensemble", text: "Monospaces, vans XL et minibus pour les groupes d'amis et les familles." },
      { title: "Depuis l'aéroport", text: "Vous venez à Barcelone uniquement pour l'événement ? Nous vous conduisons de l'avion au stade." },
      { title: "Événements d'entreprise", text: "Transport des invités en loges et espaces VIP." },
    ],
    sections: [
      { h2: "Spotify Camp Nou, Estadi Olímpic et Palau Sant Jordi", text: "Les jours de match ou de grand concert, les abords des stades sont saturés et trouver un taxi à la sortie peut prendre beaucoup de temps. Avec un transfert privé, nous convenons du point de prise en charge avant l'événement et votre chauffeur vous y attend à la fin." },
      { h2: "Pour les groupes et les fans venus d'ailleurs", text: "Si vous venez à Barcelone pour voir votre équipe ou votre artiste préféré, combinez le transfert aéroport avec celui de l'événement et celui du retour. Indiquez dans les commentaires l'événement et l'heure de sortie prévue." },
    ],
    faq: [
      { q: "Où venez-vous nous chercher à la fin ?", a: "Au point convenu lors de la réservation. Indiquez-le dans les commentaires ; les jours d'événement, certaines rues sont fermées à la circulation, le point de rendez-vous peut donc se trouver à quelques minutes à pied du stade." },
      { q: "Puis-je réserver uniquement le retour ?", a: "Oui, vous pouvez réserver uniquement l'aller, uniquement le retour, ou les deux." },
      { q: "Quel véhicule me faut-il pour mon groupe ?", a: "Indiquez le nombre de personnes lors de la réservation et le formulaire vous proposera les véhicules disponibles pour votre groupe." },
    ],
  },

  hourly: {
    slug: "chauffeur-a-l-heure-barcelone",
    keywords: [
      "chauffeur privé Barcelone",
      "voiture avec chauffeur à l'heure Barcelone",
      "location voiture avec chauffeur Barcelone",
      "mise à disposition chauffeur Barcelone",
      "chauffeur à la journée Barcelone",
    ],
    title: "Chauffeur privé à l'heure à Barcelone | QuickPickups",
    description: "Voiture, van ou minibus avec chauffeur à l'heure à Barcelone : rendez-vous, salons, shopping, mariages et excursions. Vous choisissez l'itinéraire et la durée.",
    h1: "Chauffeur privé à l'heure à Barcelone",
    intro: "Lorsque vous avez plusieurs arrêts dans la même journée, un simple transfert ne suffit pas. Avec le service à l'heure, un chauffeur professionnel et son véhicule restent à votre disposition aussi longtemps que nécessaire : rendez-vous, visites, shopping, événements ou excursions.",
    highlights: [
      { title: "Vous donnez le rythme", text: "Autant d'arrêts que nécessaire pendant les heures réservées." },
      { title: "Voiture, van ou minibus", text: "Choisissez le véhicule en fonction du nombre de personnes." },
      { title: "Idéal pour les entreprises", text: "Rendez-vous clients, salons et congrès, avec facture." },
      { title: "Pour les loisirs aussi", text: "Visites de Barcelone, mariages, dîners ou excursions en Catalogne." },
    ],
    sections: [
      { h2: "Comment fonctionne le service à l'heure ?", text: "Dans le formulaire de réservation, choisissez l'option « À l'heure », puis indiquez le lieu de prise en charge, la date, l'heure et la durée. Le chauffeur vient vous chercher à l'heure convenue et reste avec vous pendant toute la durée du service. Minimum de «DATO: nombre d'heures minimum» heures." },
      { h2: "Pourquoi nos clients le choisissent", text: "Des dirigeants qui enchaînent plusieurs rendez-vous dans la journée, des exposants pendant le MWC ou les salons de la Fira, des groupes qui veulent découvrir Barcelone à leur rythme, des mariages où il faut conduire les mariés et les invités de la cérémonie à la réception, ou des excursions à Montserrat, à Sitges ou sur la Costa Brava." },
    ],
    faq: [
      { q: "Quel est le nombre minimum d'heures ?", a: "«DATO: nombre d'heures minimum et km inclus»." },
      { q: "Puis-je modifier l'itinéraire pendant le service ?", a: "Oui, pendant la durée réservée, le chauffeur vous conduit où vous le souhaitez." },
      { q: "Puis-je prolonger la durée le jour même ?", a: "«DATO: politique des heures supplémentaires»." },
    ],
  },

  // ───────────────────────────── FLOTTE ─────────────────────────────
  minibus: {
    slug: "location-minibus-avec-chauffeur-barcelone",
    keywords: [
      "location minibus avec chauffeur Barcelone",
      "minibus aéroport Barcelone",
      "minibus 16 places Barcelone",
      "minibus 19 places Barcelone",
      "transfert groupe Barcelone",
    ],
    title: "Location de minibus avec chauffeur à Barcelone | QuickPickups",
    description: "Minibus avec chauffeur à Barcelone pour les groupes : aéroport, croisières, Fira, MWC, Montmeló, mariages et excursions. Transferts et location à l'heure.",
    h1: "Location de minibus avec chauffeur à Barcelone",
    intro: "Voyager en groupe est plus simple quand tout le monde se déplace dans le même véhicule. Nos minibus avec chauffeur professionnel sont la solution idéale pour les groupes d'amis, les équipes d'entreprise, les congressistes, les invités de mariage et les excursions, avec de la place pour les bagages.",
    highlights: [
      { title: "Tout le groupe dans un seul véhicule", text: "Personne n'attend une deuxième voiture : tout le monde arrive ensemble, à la même heure." },
      { title: "Minibus de 13 à 22 places", text: "Choisissez la taille adaptée à votre groupe : «DATO: liste des tailles disponibles»." },
      { title: "Transferts ou à l'heure", text: "Un trajet précis ou le minibus à votre disposition pour la journée." },
      { title: "Chauffeur professionnel", text: "Tous nos véhicules sont fournis avec chauffeur." },
    ],
    sections: [
      { h2: "À quoi peut servir un minibus ?", text: "Transferts de groupe depuis l'aéroport d'El Prat ou le port de croisière, transport des participants aux salons et congrès comme le MWC, jours de course au Circuit de Montmeló, matchs et concerts, mariages et fêtes, dîners d'entreprise, enterrements de vie de célibataire ou excursions à Montserrat, à Sitges et sur la Costa Brava." },
      { h2: "Minibus, van XL ou monospace ?", text: "Les vans et les monospaces transportent jusqu'à «DATO: places maximales du van» passagers. Au-delà, le minibus permet de ne pas diviser le groupe. Indiquez le nombre de passagers et de valises lors de la réservation et nous vous proposerons les véhicules adaptés. Pour un groupe très nombreux, contactez-nous : nous vous suggérerons la combinaison de véhicules la plus pratique." },
      { h2: "Ce que comprend la location à l'heure", text: "La location à l'heure comprend le minibus, le chauffeur et «DATO: carburant / km inclus». C'est la formule idéale pour les excursions, les mariages et les événements d'entreprise avec plusieurs arrêts." },
    ],
    faq: [
      { q: "Combien de personnes peuvent voyager dans le minibus ?", a: "Nous disposons de minibus de 13 à 22 places. Indiquez le nombre de passagers et de valises lors de la réservation et nous vous attribuerons la taille adaptée." },
      { q: "Le minibus est-il fourni avec chauffeur ?", a: "Oui, tous nos véhicules sont proposés avec un chauffeur professionnel." },
      { q: "Pouvez-vous accueillir le groupe à l'aéroport ?", a: "Oui, avec suivi de vol et 60 minutes d'attente gratuite à partir de l'arrivée réelle du vol." },
      { q: "Puis-je louer le minibus à l'heure ?", a: "Oui. Choisissez l'option « À l'heure » dans le formulaire de réservation." },
      { q: "Combien coûte la location d'un minibus avec chauffeur ?", a: "Cela dépend de la taille, du trajet et de la durée. Prix indicatif : transfert aéroport–centre-ville à partir de «DATO» € ; à l'heure à partir de «DATO» €." },
    ],
  },

  vanxl: {
    slug: "van-xl-avec-chauffeur-barcelone",
    keywords: [
      "van avec chauffeur Barcelone",
      "van 8 places Barcelone",
      "van XL aéroport Barcelone",
      "transfert van aéroport Barcelone",
      "minibus 8 places avec chauffeur Barcelone",
    ],
    title: "Van XL avec chauffeur à Barcelone | QuickPickups",
    description: "Van XL avec chauffeur à Barcelone pour les groupes avec beaucoup de bagages : aéroport, croisières, salons, équipes sportives et événements. Réservez en ligne.",
    h1: "Van XL avec chauffeur à Barcelone",
    intro: "Quand le groupe voyage avec beaucoup de bagages — grandes valises de croisière, poussettes, équipement sportif ou matériel de stand —, le van XL offre l'espace nécessaire sans renoncer au confort d'un transfert privé.",
    highlights: [
      { title: "Jusqu'à «DATO» passagers", text: "Tout le groupe ensemble dans un seul véhicule." },
      { title: "Un maximum d'espace pour les bagages", text: "La meilleure option pour les croisiéristes et les familles avec beaucoup de valises." },
      { title: "Matériel de salon et de sport", text: "Pour les exposants, les équipes sportives et les productions." },
      { title: "Transferts ou à l'heure", text: "Un trajet ou le van à votre disposition pour la journée." },
    ],
    sections: [
      { h2: "Pour les croisiéristes et les voyageurs chargés", text: "Les passagers de croisière voyagent souvent avec de grandes valises pour toute la semaine. Le van XL conduit le groupe et ses bagages de l'aéroport au Moll Adossat, ou du navire à l'hôtel, sans avoir besoin d'un second véhicule." },
      { h2: "Équipes, exposants et entreprises", text: "Équipes en déplacement pour une compétition, exposants transportant le matériel de leur stand à la Fira ou entreprises qui déplacent leur personnel : le van XL allie espace et confort pour vos trajets dans Barcelone et dans toute la Catalogne." },
    ],
    faq: [
      { q: "Quelle quantité de bagages peut-on charger dans le van XL ?", a: "«DATO: capacité de bagages avec le nombre maximal de passagers»." },
      { q: "Van XL ou minibus ?", a: "Le van XL est idéal jusqu'à «DATO» passagers avec beaucoup de bagages. Pour les groupes plus importants, choisissez un minibus." },
      { q: "Puis-je réserver le van XL à l'heure ?", a: "Oui. Choisissez l'option « À l'heure » dans le formulaire de réservation." },
    ],
  },

  minivan: {
    slug: "monospace-avec-chauffeur-barcelone",
    keywords: [
      "monospace avec chauffeur Barcelone",
      "taxi 6 places Barcelone",
      "transfert aéroport Barcelone famille",
      "minivan aéroport Barcelone",
      "taxi monospace Barcelone",
    ],
    title: "Monospace familial avec chauffeur à Barcelone | QuickPickups",
    description: "Monospace privé avec chauffeur à Barcelone pour les familles et les petits groupes. Transferts vers l'aéroport El Prat, le port de croisière et toute la ville.",
    h1: "Monospace avec chauffeur à Barcelone",
    intro: "Le monospace est l'option idéale pour les familles et les petits groupes qui veulent voyager ensemble avec leurs bagages, sans se répartir dans deux voitures. Plus d'espace qu'une voiture classique et tout le confort d'un transfert privé.",
    highlights: [
      { title: "Jusqu'à «DATO» passagers", text: "Toute la famille dans un seul véhicule." },
      { title: "Sièges enfant sur demande", text: "Indiquez-les dans le formulaire lors de la réservation." },
      { title: "Prix par trajet", text: "Vous payez le véhicule, pas par personne." },
      { title: "Aéroport, croisières et ville", text: "Pour arriver, vous déplacer dans Barcelone et repartir." },
    ],
    sections: [
      { h2: "Idéal pour les familles et les petits groupes", text: "Voyager avec des enfants, c'est aussi des poussettes, des sièges et davantage de valises. Le monospace vous offre de la place pour tout et vous évite de prendre deux taxis. Demandez les sièges enfant nécessaires lors de la réservation et le chauffeur les aura déjà installés." },
      { h2: "Transferts en monospace dans Barcelone", text: "De l'aéroport d'El Prat à votre hôtel, de l'hôtel au port de croisière, à la Fira de Barcelona, au Circuit de Montmeló ou vers d'autres villes de Catalogne." },
    ],
    faq: [
      { q: "Proposez-vous des sièges enfant ?", a: "Oui. Vous pouvez les demander dans le formulaire de réservation en indiquant le nombre souhaité." },
      { q: "Quelle est la différence entre un monospace et un van XL ?", a: "Le van XL offre plus d'espace pour les passagers et les bagages. Si vous voyagez avec beaucoup de valises, du matériel de sport ou des poussettes, nous vous recommandons le van XL." },
      { q: "Le prix est-il par personne ?", a: "Non, le prix s'entend par trajet et par véhicule." },
    ],
  },

  bigcar: {
    // ⚠️ LEGAL : comme dans la source, « taxi » n'apparaît que dans le slug, le title, la description et les keywords.
    slug: "grand-taxi-barcelone",
    keywords: [
      "grand taxi Barcelone",
      "taxi 7 places Barcelone",
      "big taxi Barcelone",
      "grande voiture avec chauffeur Barcelone",
      "taxi van Barcelone",
    ],
    title: "Grand taxi Barcelone : voitures avec chauffeur | QuickPickups",
    description: "Besoin d'un grand taxi à Barcelone ? Réservez grande voiture, monospace ou van avec chauffeur pour groupes et bagages : aéroport, port et toute la ville.",
    h1: "Grandes voitures avec chauffeur à Barcelone",
    intro: "Trouver un grand véhicule disponible au dernier moment n'est pas toujours facile, surtout à l'aéroport, au port ou lors des grands événements. Avec QuickPickups, vous réservez à l'avance une grande voiture, un monospace ou un van XL avec chauffeur, et vous avez la certitude que tout le groupe et ses bagages voyagent ensemble.",
    highlights: [
      { title: "Réservation à l'avance", text: "Votre véhicule vous attend à l'heure convenue, sans faire la queue." },
      { title: "Plus d'espace", text: "Plus de place pour les jambes et les valises que dans une voiture standard." },
      { title: "De la grande voiture au minibus", text: "Choisissez la taille adaptée à votre groupe." },
      { title: "Attente gratuite incluse", text: "60 min à l'aéroport, 30 min au port et 15 min dans les hôtels et à toute autre adresse." },
    ],
    sections: [
      { h2: "Grandes voitures avec chauffeur", text: "Si une voiture standard est trop petite pour votre groupe ou vos bagages, une grande voiture vous offre l'espace supplémentaire dont vous avez besoin. «DATO: modèle, places et bagages de la grande voiture»." },
      { h2: "Quel grand véhicule choisir ?", text: "Une grande voiture pour les petits groupes avec des bagages supplémentaires ; un monospace pour les familles ; un van XL pour les groupes avec beaucoup de bagages ; un minibus pour les groupes plus nombreux. Indiquez le nombre de passagers et de valises lors de la réservation et nous vous présenterons les options disponibles." },
    ],
    faq: [
      { q: "Quelle différence avec un véhicule hélé dans la rue ?", a: "QuickPickups est un service de transferts privés sur réservation : vous réservez en ligne, vous connaissez les détails de votre trajet à l'avance et le chauffeur vous attend à l'heure convenue." },
      { q: "Combien de temps à l'avance dois-je réserver ?", a: "Nous vous conseillons de réserver à l'avance, surtout en haute saison et pendant le MWC, les grands salons ou les Grands Prix à Montmeló." },
      { q: "Puis-je réserver un grand véhicule pour l'aéroport ?", a: "Oui, avec suivi de vol et 60 minutes d'attente gratuite." },
    ],
  },
};
