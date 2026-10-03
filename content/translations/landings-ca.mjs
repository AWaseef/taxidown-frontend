// QuickPickups — landings Barcelona, català (ca).
// Registre: tractament de vós (Reserveu, us esperem, el vostre), habitual en textos comercials escrits.
// Terminologia: chófer → xofer; minivan → monovolum; van XL → furgoneta XL; minibús → minibús (pl. minibusos);
// servicio por horas → servei per hores. Formes catalanes: aeroport del Prat, plaça d'Espanya, monument a Colom.
// Els marcadors «DATO: …» es mantenen i s'han de confirmar abans de publicar.

export const lang = "ca";
export const hreflang = "ca";
export const dir = "ltr";

export const ui = {
  bookNow: "Reserveu ara",
  callUs: "Truqueu-nos",
  highlightsTitle: "Per què triar QuickPickups",
  faqTitle: "Preguntes freqüents",
  relatedTitle: "També us pot interessar",
  ctaTitle: "A punt per reservar el vostre trasllat?",
  ctaText: "Indiqueu la recollida i la destinació i vegeu el preu en pocs segons.",
  breadcrumbHome: "Inici",
  hubTitle: "Flota i destinacions a Barcelona",
  hubVehicles: "La nostra flota",
  hubDestinations: "Destinacions i esdeveniments",
};

export const pages = {
  // ───────────────────────────── DESTINACIONS I ESDEVENIMENTS ─────────────────────────────
  airport: {
    slug: "trasllat-aeroport-barcelona",
    keywords: [
      "trasllat aeroport Barcelona",
      "transfer aeroport del Prat",
      "trasllat privat aeroport Barcelona",
      "taxi aeroport Barcelona reserva",
      "trasllat aeroport Barcelona hotel",
    ],
    title: "Trasllat aeroport de Barcelona-el Prat (T1 i T2) | QuickPickups",
    description: "Trasllat privat des de i cap a l'aeroport del Prat de Barcelona, T1 i T2. Seguiment del vol, conductor amb cartell i 60 min d'espera gratuïta.",
    h1: "Trasllat privat a l'aeroport de Barcelona-el Prat",
    intro: "Arribeu a Barcelona sense fer cua a la parada de taxis. El vostre conductor us espera a la zona d'arribades de la T1 o la T2 amb un cartell amb el vostre nom i us porta directament al vostre hotel, al port de creuers, a la Fira o a qualsevol adreça de Barcelona i els voltants.",
    highlights: [
      { title: "60 minuts d'espera gratuïta", text: "Comptem l'espera des de l'arribada real del vostre vol, perquè pugueu recollir l'equipatge amb calma." },
      { title: "Seguiment del vol", text: "Si el vostre vol s'avança o es retarda, el conductor ajusta la recollida a l'hora real." },
      { title: "Recollida amb cartell", text: "Us esperem dins la terminal amb un cartell amb el vostre nom." },
      { title: "Un vehicle per a cada grup", text: "Cotxes, monovolums, furgonetes XL i minibusos per a viatgers sols, famílies i grups." },
    ],
    sections: [
      { h2: "De l'aeroport del Prat a tot Barcelona", text: "El trajecte de l'aeroport al centre de Barcelona dura uns 20–30 minuts segons el trànsit. Us portem a hotels i domicilis de tota la ciutat, a les terminals de creuers del Moll Adossat i del World Trade Center, a Fira Gran Via i Fira Montjuïc, a l'estació de Sants i a altres ciutats de Catalunya." },
      { h2: "Trasllat a l'aeroport per al vostre vol de sortida", text: "Per a la tornada, us recollim al vostre hotel, domicili o oficina a l'hora acordada. Us recomanem reservar amb marge per facturar, sobretot en temporada alta i durant grans esdeveniments com el MWC, quan el trànsit cap a l'aeroport augmenta." },
      { h2: "Famílies i grups", text: "En reservar, indiqueu el nombre de passatgers i de maletes i si necessiteu cadiretes infantils. Si sou més de «DATO: places màximes del monovolum/furgoneta» persones o viatgeu amb molt d'equipatge, us recomanem una furgoneta XL o un minibús perquè tot el grup viatgi junt." },
    ],
    faq: [
      { q: "On m'espera el conductor a l'aeroport?", a: "A la zona d'arribades de la vostra terminal (T1 o T2), amb un cartell amb el vostre nom." },
      { q: "Què passa si el meu vol es retarda?", a: "Seguim el vostre vol en temps real i el conductor adapta la recollida. A més, teniu 60 minuts d'espera gratuïta des de l'arribada real del vol." },
      { q: "Puc demanar cadiretes per a infants?", a: "Sí. Seleccioneu-les al formulari de reserva i indiqueu quantes en necessiteu." },
      { q: "Quant costa el trasllat de l'aeroport al centre?", a: "Depèn del vehicle i de la destinació. Introduïu la recollida i la destinació al formulari i veureu el preu abans de reservar. Preu orientatiu: des de 35 € en la categoria Economy." },
    ],
  },

  cruise: {
    slug: "trasllat-port-creuers-barcelona",
    keywords: [
      "trasllat port creuers Barcelona",
      "transfer Moll Adossat",
      "trasllat aeroport port Barcelona",
      "taxi terminal creuers Barcelona",
      "trasllat creuer Barcelona hotel",
    ],
    title: "Trasllat creuers Barcelona i Moll Adossat | QuickPickups",
    description: "Trasllat privat a les terminals de creuers de Barcelona: Moll Adossat i World Trade Center. Des de l'aeroport o l'hotel, amb 30 min d'espera gratuïta.",
    h1: "Trasllats al port de creuers de Barcelona i al Moll Adossat",
    intro: "Comenceu i acabeu el vostre creuer sense estrès. Us portem amb tot l'equipatge des de l'aeroport del Prat, el vostre hotel o qualsevol adreça fins a la porta de la terminal del vostre vaixell, i us recollim en desembarcar.",
    highlights: [
      { title: "Fins a la porta de la terminal", text: "Sense carregar maletes en autobusos ni llançadores: us deixem a la terminal de la vostra naviliera." },
      { title: "30 minuts d'espera gratuïta", text: "Al port us esperem 30 minuts sense cost, ideal per als desembarcaments." },
      { title: "Aeroport ↔ port el mateix dia", text: "El trajecte entre el port i l'aeroport dura uns 20–30 minuts segons el trànsit." },
      { title: "Espai per a l'equipatge", text: "Furgonetes XL i minibusos per a famílies i grups amb maletes grans de creuer." },
    ],
    sections: [
      { h2: "Terminals de creuers del Moll Adossat", text: "La majoria dels grans creuers atraquen al Moll Adossat, als peus de Montjuïc (Moll Adossat, 1 – 08039 Barcelona). Allà hi ha les terminals A, B i C, la terminal D (Palacruceros), la terminal E (Helix) i la terminal de MSC. Indiqueu la vostra naviliera o la terminal en reservar i el conductor us portarà a l'entrada correcta." },
      { h2: "Terminal del World Trade Center", text: "Alguns vaixells, normalment més petits, atraquen a la terminal del World Trade Center, al Moll de Barcelona, a tocar del final de la Rambla. El port està concentrant els creuers al Moll Adossat, així que confirmeu sempre la vostra terminal amb la naviliera. Cobrim totes les terminals, tant per a l'embarcament com per a la tornada a l'aeroport o a l'hotel després del creuer." },
      { h2: "Millor que la llançadora si porteu equipatge", text: "El bus llançadora del port només arriba fins al monument a Colom, i des d'allà hauríeu de continuar amb totes les maletes. Amb un trasllat privat aneu de porta a porta, sense esperes ni transbordaments, encara que el vaixell arribi a primera hora del matí." },
    ],
    faq: [
      { q: "A quina terminal em porteu?", a: "A la terminal de la vostra naviliera. Escriviu-la als comentaris en reservar (per exemple, «Terminal E – Helix» o «MSC»). Si encara no la sabeu, indiqueu el nom del vaixell." },
      { q: "Puc anar directament del vaixell a l'aeroport?", a: "Sí. Reserveu el trasllat del port a l'aeroport per al dia del desembarcament i indiqueu el vostre número de vol als comentaris." },
      { q: "Hi ha lloc per a totes les maletes?", a: "Indiqueu el nombre de maletes en reservar. Per a famílies o grups amb molt d'equipatge, us recomanem una furgoneta XL o un minibús." },
      { q: "Què passa si el desembarcament es retarda?", a: "Teniu 30 minuts d'espera gratuïta al port. Si preveieu un retard més llarg, contacteu amb nosaltres al +34 711 206 600." },
    ],
  },

  montmelo: {
    slug: "trasllat-circuit-montmelo",
    keywords: [
      "trasllat Circuit de Montmeló",
      "com arribar al Circuit de Montmeló",
      "transfer Fórmula 1 Barcelona",
      "transport MotoGP Montmeló",
      "trasllat Circuit de Barcelona-Catalunya",
    ],
    title: "Trasllat al Circuit de Montmeló des de Barcelona | QuickPickups",
    description: "Trasllat privat al Circuit de Barcelona-Catalunya (Montmeló) per a la F1, MotoGP i altres esdeveniments. Anada i tornada des de Barcelona, l'aeroport o l'hotel.",
    h1: "Trasllats al Circuit de Barcelona-Catalunya (Montmeló)",
    intro: "Gaudiu de la Fórmula 1, MotoGP o qualsevol esdeveniment del Circuit sense barallar-vos amb el trànsit, l'aparcament o els trens plens. Us portem des de Barcelona, l'aeroport o el vostre hotel fins a Montmeló i us recollim en acabar.",
    highlights: [
      { title: "Anada i tornada", text: "Reserveu l'anada i la tornada i oblideu-vos de buscar transport en sortir del circuit." },
      { title: "Sense aparcar ni fer transbordaments", text: "Sense tren de rodalia, sense llançadores i sense buscar lloc als aparcaments." },
      { title: "Grups d'aficionats", text: "Monovolums, furgonetes XL i minibusos perquè tot el grup vagi junt." },
      { title: "Des de l'aeroport o l'hotel", text: "Aneu directament de l'aeroport del Prat al circuit si arribeu el mateix dia." },
    ],
    sections: [
      { h2: "Com arribar al Circuit de Montmeló sense estrès", text: "El Circuit de Barcelona-Catalunya és a Montmeló, a uns 30 km al nord-est de Barcelona, amb accessos per la C-17 i l'AP-7. En transport públic cal agafar el tren R2 Nord fins a Montmeló i després la llançadora fins al circuit. Els caps de setmana de gran premi, carreteres, trens i aparcaments se saturen; amb un trasllat privat sortiu a l'hora que us convingui i torneu sense fer cues." },
      { h2: "Fórmula 1, MotoGP i esdeveniments d'empresa", text: "Portem aficionats, colles d'amics, agències i empreses amb convidats a zones d'hospitality. Els caps de setmana de cursa la demanda de vehicles és molt alta, sobretot de vehicles grans: us recomanem reservar amb la màxima antelació." },
    ],
    faq: [
      { q: "Ens recolliu al final de la cursa?", a: "Sí. Reserveu el trajecte de tornada amb una hora aproximada i indiqueu als comentaris el vostre punt de trobada preferit. En sortir del circuit hi ha molt de trànsit, per això convé acordar el punt amb antelació." },
      { q: "Puc anar de l'aeroport directament al circuit?", a: "Sí. Indiqueu l'aeroport com a recollida i el Circuit de Barcelona-Catalunya com a destinació; seguim el vostre vol com en qualsevol trasllat d'aeroport." },
      { q: "Amb quanta antelació he de reservar?", a: "Per als caps de setmana de Fórmula 1 o MotoGP, com més aviat millor. Els vehicles grans i els minibusos són els primers que s'exhaureixen." },
      { q: "Quant costa el trasllat a Montmeló?", a: "Depèn del punt de recollida i del vehicle. Preu orientatiu des del centre de Barcelona: des de «DATO: preu des de» €." },
    ],
  },

  fira: {
    slug: "trasllats-fira-barcelona",
    keywords: [
      "trasllats Fira de Barcelona",
      "trasllat Fira Gran Via",
      "trasllat aeroport Fira Gran Via",
      "xofer fires Barcelona",
      "cotxe amb conductor Fira Barcelona",
    ],
    title: "Trasllats Fira de Barcelona (Gran Via i Montjuïc) | QuickPickups",
    description: "Trasllats privats a Fira Gran Via i Fira Montjuïc per a fires i congressos. Des de l'aeroport o l'hotel, i xofer per hores per a expositors i empreses.",
    h1: "Trasllats a la Fira de Barcelona per a fires i congressos",
    intro: "Arribeu puntuals a la vostra fira, al vostre estand o a les vostres reunions. Oferim trasllats privats als dos recintes de la Fira de Barcelona, Gran Via i Montjuïc, des de l'aeroport, el vostre hotel o la vostra oficina, per a visitants, expositors i empreses.",
    highlights: [
      { title: "Gran Via i Montjuïc", text: "Cobrim els dos recintes i us deixem a l'entrada que ens indiqueu." },
      { title: "Directe des de l'aeroport", text: "No hi ha transport públic directe de l'aeroport a Fira Gran Via: amb nosaltres hi aneu sense transbordaments." },
      { title: "Xofer per hores", text: "Un conductor a la vostra disposició entre la fira, l'hotel i les vostres reunions." },
      { title: "Equips i material", text: "Furgonetes XL i minibusos per a equips d'estand, delegacions i material d'exposició." },
    ],
    sections: [
      { h2: "Fira Gran Via i Fira Montjuïc", text: "Fira Gran Via és a L'Hospitalet de Llobregat, entre el centre de Barcelona i l'aeroport, i acull les fires i els congressos més grans. Fira Montjuïc és al costat de la plaça d'Espanya. En reservar, indiqueu el recinte i, si la sabeu, la porta o l'accés." },
      { h2: "Xofer per hores per a expositors i empreses", text: "Si us heu de moure entre la fira, l'hotel, sopars i reunions amb clients, trieu el servei per hores i disposeu del vehicle i del conductor durant el temps que necessiteu. És l'opció ideal per a directius, clients VIP i equips comercials. Si necessiteu factura per a la vostra empresa, indiqueu-ho en reservar." },
      { h2: "Fires amb molta demanda", text: "Durant les grans fires i congressos, com el MWC, la ciutat s'omple i els vehicles s'exhaureixen. Reserveu amb antelació, sobretot si necessiteu vehicles grans o diversos trasllats per al vostre equip." },
    ],
    faq: [
      { q: "Quin recinte de la Fira he d'indicar?", a: "El del vostre esdeveniment: Fira Gran Via (L'Hospitalet de Llobregat) o Fira Montjuïc (plaça d'Espanya). El trobareu a la vostra acreditació o al web de la fira." },
      { q: "Puc contractar un conductor per a tota la jornada?", a: "Sí. Trieu l'opció «Per hores» al formulari de reserva i indiqueu quantes hores necessiteu." },
      { q: "Porteu equips d'estand amb material?", a: "Sí. Indiqueu el nombre de persones i el tipus de material; per a equips amb molt de material, us recomanem una furgoneta XL." },
      { q: "Emeteu factura?", a: "Sí, podeu sol·licitar factura del vostre trasllat." },
    ],
  },

  mwc: {
    slug: "trasllats-mwc-barcelona",
    keywords: [
      "trasllats MWC Barcelona",
      "xofer MWC Barcelona",
      "transport Mobile World Congress",
      "cotxe amb conductor MWC Barcelona",
      "MWC 2027 trasllat",
    ],
    title: "Trasllats MWC Barcelona (Mobile World Congress) | QuickPickups",
    description: "Trasllats privats i xofer per hores per al MWC Barcelona a Fira Gran Via. Aeroport, hotel i reunions sense cues de taxi. Reserveu amb antelació.",
    h1: "Trasllats i xofer privat per al MWC Barcelona",
    intro: "Durant el Mobile World Congress Barcelona arriben a la ciutat visitants de tot el món i la demanda de taxis i transport es dispara. Reserveu amb antelació el vostre trasllat privat entre l'aeroport, l'hotel i Fira Gran Via, o un xofer a la vostra disposició durant tot el congrés.",
    highlights: [
      { title: "Sense cues de taxi", text: "El vostre conductor us espera a l'hora acordada, també a les hores punta d'entrada i sortida del congrés." },
      { title: "Aeroport – hotel – Fira Gran Via", text: "Tots els trajectes del congrés amb un sol proveïdor." },
      { title: "Xofer per hores o per jornada", text: "Un vehicle i un conductor a la vostra disposició per a reunions, sopars i esdeveniments." },
      { title: "Delegacions i equips", text: "Cotxes per a directius i furgonetes XL o minibusos per a equips complets." },
    ],
    sections: [
      { h2: "Moure's per Barcelona durant el MWC", text: "El MWC se celebra a Fira Gran Via, a L'Hospitalet de Llobregat, entre l'aeroport i el centre de Barcelona. A les hores d'obertura i de tancament es formen cues llargues de taxis i el transport públic va ple. Amb un trasllat reservat, el vostre conductor us espera a la porta acordada i us porta directament a l'hotel, a la propera reunió o a l'aeroport." },
      { h2: "Servei per a empreses i delegacions", text: "Coordinem trasllats per a delegacions, equips comercials i clients convidats. Combineu cotxes per a directius amb furgonetes XL i minibusos per a equips, i sol·liciteu factura per a la vostra empresa. Si la vostra delegació necessita diversos vehicles a la mateixa hora, indiqueu-ho en reservar i us proposarem la millor combinació." },
      { h2: "Reserveu com més aviat millor", text: "Les setmanes abans del congrés, la disponibilitat de vehicles a Barcelona es redueix moltíssim. Com més aviat reserveu, més opcions de vehicle i d'horari tindreu." },
    ],
    faq: [
      { q: "Quan he de reservar per al MWC?", a: "Com més aviat millor. Les setmanes prèvies al congrés, la disponibilitat de vehicles, sobretot dels grans, es redueix molt." },
      { q: "Puc tenir un xofer tot el dia?", a: "Sí. Trieu l'opció «Per hores» i indiqueu les hores que necessiteu cada dia del congrés." },
      { q: "També em porteu a sopars i esdeveniments fora de la Fira?", a: "Sí. Amb el servei per hores, el conductor us porta on necessiteu durant el temps contractat." },
      { q: "Teniu conductors que parlin altres idiomes?", a: "«DATO: idiomes que parlen els conductors (anglès, xinès…)»." },
    ],
  },

  stadiums: {
    slug: "trasllats-camp-nou-concerts-barcelona",
    keywords: [
      "trasllat Camp Nou",
      "transport concert Estadi Olímpic",
      "trasllat Palau Sant Jordi",
      "furgoneta grups partit Barça",
      "transport concerts Barcelona",
    ],
    title: "Trasllats al Camp Nou, Estadi Olímpic i concerts | QuickPickups",
    description: "Trasllats privats per a partits i concerts a Barcelona: Spotify Camp Nou, Estadi Olímpic i Palau Sant Jordi. Anada i tornada per a grups.",
    h1: "Trasllats a partits i concerts a Barcelona",
    intro: "Aneu al partit o al concert amb el vostre grup i torneu sense barallar-vos amb el metro ple de gom a gom ni amb la manca de taxis a la sortida. Us portem des del vostre hotel, l'aeroport o qualsevol punt de Barcelona fins a l'Spotify Camp Nou, l'Estadi Olímpic Lluís Companys o el Palau Sant Jordi.",
    highlights: [
      { title: "Anada i tornada", text: "Reserveu també la tornada i estalvieu-vos haver de buscar taxi en acabar l'esdeveniment." },
      { title: "Tot el grup junt", text: "Monovolums, furgonetes XL i minibusos per a colles d'amics i famílies." },
      { title: "Des de l'aeroport", text: "Veniu a Barcelona només per a l'esdeveniment? Us portem de l'avió a l'estadi." },
      { title: "Esdeveniments d'empresa", text: "Transport per a convidats a llotges i zones VIP." },
    ],
    sections: [
      { h2: "Spotify Camp Nou, Estadi Olímpic i Palau Sant Jordi", text: "Els dies de partit o de gran concert, els voltants dels estadis es col·lapsen i aconseguir un taxi a la sortida pot costar molt de temps. Amb un trasllat privat acordem el punt de recollida abans de l'esdeveniment i el vostre conductor us hi espera en acabar." },
      { h2: "Per a grups i aficionats que venen de fora", text: "Si viatgeu a Barcelona per veure el vostre equip o el vostre artista preferit, combineu el trasllat de l'aeroport amb el de l'esdeveniment i el de tornada. Indiqueu als comentaris l'esdeveniment i l'hora prevista de sortida." },
    ],
    faq: [
      { q: "On ens recolliu en acabar?", a: "Al punt que acordem en reservar. Indiqueu-lo als comentaris; els dies d'esdeveniment alguns carrers es tallen al trànsit, de manera que el punt pot ser a uns minuts a peu de l'estadi." },
      { q: "Puc reservar només la tornada?", a: "Sí, podeu reservar només l'anada, només la tornada o totes dues." },
      { q: "Quin vehicle necessito per al meu grup?", a: "Indiqueu el nombre de persones en reservar i el formulari us mostrarà els vehicles disponibles per al vostre grup." },
    ],
  },

  hourly: {
    slug: "xofer-per-hores-barcelona",
    keywords: [
      "xofer per hores Barcelona",
      "cotxe amb conductor per hores Barcelona",
      "lloguer de cotxe amb xofer Barcelona",
      "conductor privat Barcelona",
      "xofer privat Barcelona",
    ],
    title: "Xofer per hores a Barcelona | QuickPickups",
    description: "Cotxe, furgoneta o minibús amb conductor per hores a Barcelona: reunions, fires, compres, casaments i excursions. Vós decidiu el recorregut i la durada.",
    h1: "Xofer privat per hores a Barcelona",
    intro: "Quan teniu diverses parades en un mateix dia, amb un sol trasllat no n'hi ha prou. Amb el servei per hores, un conductor professional i el seu vehicle queden a la vostra disposició durant el temps que necessiteu: reunions, visites, compres, esdeveniments o excursions.",
    highlights: [
      { title: "Marqueu el vostre ritme", text: "Tantes parades com necessiteu durant les hores contractades." },
      { title: "Cotxe, furgoneta o minibús", text: "Trieu el vehicle segons el nombre de persones." },
      { title: "Ideal per a empreses", text: "Reunions amb clients, fires i congressos, amb factura." },
      { title: "També per a l'oci", text: "Visites per Barcelona, casaments, sopars o excursions per Catalunya." },
    ],
    sections: [
      { h2: "Com funciona el servei per hores?", text: "Al formulari de reserva, trieu l'opció «Per hores» i indiqueu el punt de recollida, la data, l'hora i la durada. El conductor us recull a l'hora acordada i us acompanya durant tot el servei. Mínim de «DATO: hores mínimes» hores." },
      { h2: "Per a què el fan servir els nostres clients", text: "Directius amb diverses reunions en un dia, expositors durant el MWC o les fires de la Fira, grups que volen conèixer Barcelona al seu ritme, casaments que necessiten portar els nuvis i els convidats de la cerimònia al banquet, o excursions a Montserrat, Sitges o la Costa Brava." },
    ],
    faq: [
      { q: "Quin és el mínim d'hores?", a: "«DATO: hores mínimes i km inclosos»." },
      { q: "Puc canviar el recorregut durant el servei?", a: "Sí, dins del temps contractat el conductor us porta on necessiteu." },
      { q: "Puc ampliar el temps el mateix dia?", a: "«DATO: política d'hores extres»." },
    ],
  },

  // ───────────────────────────── FLOTA ─────────────────────────────
  minibus: {
    slug: "lloguer-minibus-amb-conductor-barcelona",
    keywords: [
      "lloguer minibús amb conductor Barcelona",
      "minibús aeroport Barcelona",
      "minibús 16 places Barcelona",
      "minibús 19 places Barcelona",
      "microbús amb conductor Barcelona",
    ],
    title: "Lloguer de minibús amb conductor a Barcelona | QuickPickups",
    description: "Minibús amb conductor a Barcelona per a grups: aeroport, creuers, Fira, MWC, Montmeló, casaments i excursions. Trasllats i servei per hores.",
    h1: "Lloguer de minibús amb conductor a Barcelona",
    intro: "Viatjar en grup és més senzill quan tothom va junt en un mateix vehicle. Els nostres minibusos amb conductor professional són la solució per a colles d'amics, equips d'empresa, congressistes, convidats de casament i excursions, amb espai per a l'equipatge.",
    highlights: [
      { title: "Tot el grup en un vehicle", text: "Ningú no es queda esperant un segon cotxe: arribeu tots junts a la mateixa hora." },
      { title: "Minibusos de 13 a 22 places", text: "Trieu la mida segons el vostre grup: «DATO: llista de mides disponibles»." },
      { title: "Trasllats o per hores", text: "Un trajecte concret o el minibús a la vostra disposició durant la jornada." },
      { title: "Conductor professional", text: "Tots els nostres vehicles inclouen conductor." },
    ],
    sections: [
      { h2: "Per a què podeu fer servir un minibús?", text: "Trasllats de grup des de l'aeroport del Prat o el port de creuers, transport d'assistents a fires i congressos com el MWC, dies de cursa al Circuit de Montmeló, partits i concerts, casaments i celebracions, sopars d'empresa, comiats de solter o excursions a Montserrat, Sitges i la Costa Brava." },
      { h2: "Minibús, furgoneta XL o monovolum?", text: "Les furgonetes i els monovolums porten fins a «DATO: places màximes de la furgoneta» passatgers. A partir d'aquest nombre, el minibús és l'opció perquè el grup no es divideixi. Indiqueu el nombre de passatgers i de maletes en reservar i us mostrarem els vehicles adequats. Si el vostre grup és molt nombrós, consulteu-nos i us proposarem la combinació de vehicles més pràctica." },
      { h2: "Què inclou el servei per hores", text: "El servei per hores inclou el minibús, el conductor i «DATO: combustible / km inclosos». És ideal per a excursions, casaments i esdeveniments d'empresa amb diverses parades." },
    ],
    faq: [
      { q: "Quantes persones hi caben, al minibús?", a: "Disposem de minibusos de 13 a 22 places. Indiqueu el nombre de passatgers i de maletes en reservar i us assignarem la mida adequada." },
      { q: "El minibús inclou conductor?", a: "Sí, tots els nostres vehicles s'ofereixen amb conductor professional." },
      { q: "Podeu recollir el grup a l'aeroport?", a: "Sí, amb seguiment del vol i 60 minuts d'espera gratuïta des de l'arribada real del vol." },
      { q: "Puc contractar el minibús per hores?", a: "Sí. Trieu l'opció «Per hores» al formulari de reserva." },
      { q: "Quant costa llogar un minibús amb conductor?", a: "Depèn de la mida, del trajecte i de la durada. Preu orientatiu: trasllat aeroport–centre des de «DATO» €; per hores des de «DATO» €." },
    ],
  },

  vanxl: {
    slug: "furgoneta-xl-amb-conductor-barcelona",
    keywords: [
      "furgoneta amb conductor Barcelona",
      "furgoneta 8 places Barcelona",
      "van XL aeroport Barcelona",
      "van amb conductor Barcelona",
      "furgoneta aeroport Barcelona grups",
    ],
    title: "Furgoneta XL amb conductor a Barcelona | QuickPickups",
    description: "Furgoneta XL amb conductor a Barcelona per a grups amb molt d'equipatge: aeroport, creuers, fires, equips esportius i esdeveniments. Reserveu en línia.",
    h1: "Furgoneta XL amb conductor a Barcelona",
    intro: "Quan el grup viatja amb molt d'equipatge —maletes grans de creuer, cotxets de nadó, equipament esportiu o material d'estand—, la furgoneta XL ofereix l'espai que necessiteu sense renunciar a la comoditat d'un trasllat privat.",
    highlights: [
      { title: "Fins a «DATO» passatgers", text: "Tot el grup junt en un sol vehicle." },
      { title: "Màxim espai per a l'equipatge", text: "La millor opció per a creueristes i famílies amb moltes maletes." },
      { title: "Material de fira i d'esport", text: "Per a expositors, equips esportius i produccions." },
      { title: "Trasllats o per hores", text: "Un trajecte o la furgoneta a la vostra disposició durant la jornada." },
    ],
    sections: [
      { h2: "Per a creueristes i viatgers amb molt d'equipatge", text: "Els passatgers de creuer solen viatjar amb maletes grans per a tota la setmana. La furgoneta XL porta el grup i el seu equipatge de l'aeroport al Moll Adossat, o del vaixell a l'hotel, sense necessitat d'un segon vehicle." },
      { h2: "Equips, expositors i empreses", text: "Equips que viatgen a competicions, expositors amb material per al seu estand a la Fira o empreses que traslladen el seu personal: la furgoneta XL combina espai i comoditat per a trajectes per Barcelona i per tot Catalunya." },
    ],
    faq: [
      { q: "Quant d'equipatge hi cap, a la furgoneta XL?", a: "«DATO: capacitat de maletes amb el màxim de passatgers»." },
      { q: "Furgoneta XL o minibús?", a: "La furgoneta XL és ideal fins a «DATO» passatgers amb molt d'equipatge. Per a grups més grans, trieu un minibús." },
      { q: "Puc reservar la furgoneta XL per hores?", a: "Sí. Trieu l'opció «Per hores» al formulari de reserva." },
    ],
  },

  minivan: {
    slug: "monovolum-amb-conductor-barcelona",
    keywords: [
      "monovolum amb conductor Barcelona",
      "taxi 6 places Barcelona",
      "trasllat aeroport Barcelona família",
      "minivan aeroport Barcelona",
      "monovolum aeroport Barcelona",
    ],
    title: "Monovolum amb conductor a Barcelona per a famílies | QuickPickups",
    description: "Monovolum privat amb conductor a Barcelona per a famílies i grups petits. Trasllats a l'aeroport del Prat, al port de creuers i per tota la ciutat.",
    h1: "Monovolum amb conductor a Barcelona",
    intro: "El monovolum és l'opció ideal per a famílies i grups petits que volen viatjar junts amb el seu equipatge, sense haver de repartir-se en dos cotxes. Més espai que un cotxe convencional i tota la comoditat d'un trasllat privat.",
    highlights: [
      { title: "Fins a «DATO» passatgers", text: "Tota la família en un sol vehicle." },
      { title: "Cadiretes infantils a petició", text: "Indiqueu-les al formulari en reservar." },
      { title: "Preu per trajecte", text: "Pagueu pel vehicle, no per persona." },
      { title: "Aeroport, creuers i ciutat", text: "Per arribar, moure-us per Barcelona i tornar." },
    ],
    sections: [
      { h2: "Ideal per a famílies i grups petits", text: "Viatjar amb infants vol dir cotxets, cadiretes i més maletes. El monovolum us dona espai per a tot i us evita haver d'agafar dos taxis. Demaneu les cadiretes infantils que necessiteu en reservar i el conductor les portarà instal·lades." },
      { h2: "Trasllats en monovolum per Barcelona", text: "De l'aeroport del Prat al vostre hotel, de l'hotel al port de creuers, a la Fira de Barcelona, al Circuit de Montmeló o a altres ciutats de Catalunya." },
    ],
    faq: [
      { q: "Teniu cadiretes per a infants?", a: "Sí. Podeu sol·licitar-les al formulari de reserva indicant quantes en necessiteu." },
      { q: "Quina diferència hi ha entre un monovolum i una furgoneta XL?", a: "La furgoneta XL ofereix més espai per a passatgers i equipatge. Si viatgeu amb moltes maletes, equipament esportiu o cotxets, us recomanem la furgoneta XL." },
      { q: "El preu és per persona?", a: "No, el preu és per trajecte i vehicle." },
    ],
  },

  bigcar: {
    // ⚠️ LEGAL: com a la font, «taxi» només apareix a l'slug, el title, la description i les keywords.
    slug: "taxi-gran-barcelona",
    keywords: [
      "taxi gran Barcelona",
      "big taxi Barcelona",
      "taxi 7 places Barcelona",
      "cotxe gran amb conductor Barcelona",
      "taxi monovolum Barcelona",
    ],
    title: "Big Taxi Barcelona: cotxes grans amb conductor | QuickPickups",
    description: "Necessiteu un taxi gran a Barcelona? Reserveu un cotxe gran, un monovolum o una furgoneta amb conductor per a grups i equipatge: aeroport, port i ciutat.",
    h1: "Cotxes grans amb conductor a Barcelona",
    intro: "Trobar un vehicle gran disponible a l'últim moment no sempre és fàcil, sobretot a l'aeroport, al port o durant els grans esdeveniments. Amb QuickPickups reserveu amb antelació un cotxe gran, un monovolum o una furgoneta XL amb conductor i us assegureu que tot el grup i l'equipatge viatgen junts.",
    highlights: [
      { title: "Reserva prèvia", text: "El vostre vehicle us espera a l'hora acordada, sense fer cua." },
      { title: "Més espai", text: "Més lloc per a les cames i les maletes que en un cotxe estàndard." },
      { title: "Del cotxe gran al minibús", text: "Trieu la mida segons el vostre grup." },
      { title: "Espera gratuïta inclosa", text: "60 min a l'aeroport, 30 min al port i 15 min a hotels i adreces." },
    ],
    sections: [
      { h2: "Cotxes grans amb conductor", text: "Si un cotxe estàndard es queda curt per al vostre grup o el vostre equipatge, un cotxe gran us dona l'espai extra que necessiteu. «DATO: model, places i maletes del cotxe gran»." },
      { h2: "Quin vehicle gran heu de triar?", text: "Cotxe gran per a grups petits amb equipatge extra; monovolum per a famílies; furgoneta XL per a grups amb molt d'equipatge; minibús per a grups més nombrosos. Indiqueu el nombre de passatgers i de maletes en reservar i us mostrarem les opcions disponibles." },
    ],
    faq: [
      { q: "En què es diferencia d'aturar un vehicle al carrer?", a: "QuickPickups és un servei de trasllats privats amb reserva prèvia: reserveu en línia, coneixeu els detalls del viatge per endavant i el conductor us espera a l'hora acordada." },
      { q: "Amb quanta antelació he de reservar?", a: "Us recomanem reservar amb antelació, sobretot en temporada alta i durant el MWC, les grans fires o els grans premis a Montmeló." },
      { q: "Puc reservar un vehicle gran per a l'aeroport?", a: "Sí, amb seguiment del vol i 60 minuts d'espera gratuïta." },
    ],
  },
};
