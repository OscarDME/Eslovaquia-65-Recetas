// lib/copy.js — Všetok viditeľný textový obsah na vstupnej stránke (landing page). 
// Akákoľvek zmena textu sa vykonáva tu.

export const copy = {
  metadata: {
    title: "365 zdravých receptov — Bez cukru a bez lepku",
    description:
      "1000 receptov bez cukru a bez lepku na 365 dní. Jedzte bez výčitiek, bez komplikácií a bez obmedzení. Špeciálna ponuka: 8,90 € + 8 darčekov.",
  },

  hero: {
    banner: "PONUKA PLATÍ LEN DNES!",
    timerLabels: { days: "Dni", hours: "Hod", minutes: "Min", seconds: "Sek" },
    headline:
      "365 dní plných chutných receptov bez cukru a lepku, aby ste mohli jesť bez pocitu viny!",
    bullets: [
      "Urobte svoje stravovanie zdravším a príjemnejším bez toho, aby ste sa vzdali skvelej chuti",
      "BEZ KOMPLIKÁCIÍ",
      "BEZ OBMEDZENÍ",
      "BEZ VÝČITIEK",
    ],
    cta: "CHCEM JESŤ BEZ VÝČITIEK",
    kicker: "365 dní · 1000 receptov",
    imageAlt: "Kniha receptov na 365 dní bez cukru a bez lepku",
    trustChips: [
      { icon: "⭐", text: "Viac ako 5 000 rodín" },
      { icon: "🎁", text: "8 bonusových darčekov" },
      { icon: "🛡️", text: "Dnes so zľavou 75 %" },
    ],
  },

  story: {
    headline: "Cukor je tichý nepriateľ, ktorý ničí vaše zdravie",
    intro:
      "Je prítomný v potravinách, ktoré konzumujete každý deň, ukrytý v produktoch, ktoré vyzerajú úplne neškodne.",
    problemsLead:
      "Toto sú hlavné problémy spôsobené cukrom a to, ako vás možno práve teraz ovplyvňujú:",
    problems: [
      "Neustála únava a nevysvetliteľné vyčerpanie",
      "Priberanie a hromadenie tuku v oblasti brucha",
      "Hormonálna a metabolická nerovnováha",
      "Riziko chronických ochorení (cukrovka, vysoký krvný tlak, obezita atď.)",
      "Prudké zmeny nálad a úzkosť",
      "Zrýchlené starnutie",
      "Závislosť na jedle a sladkostiach",
    ],
    solutionHeadline:
      "Konečne jednoduché a účinné riešenie, ako zmeniť svoje stravovanie bez toho, aby ste sa museli vzdať toho, čo máte radi.",
  },

  benefits: {
    stepsHeadline: "Na vašu premenu stačia len 3 kroky",
    steps: [
      {
        number: "1",
        title: "Dodržujte jedálniček bez výčitiek",
        desc: "Získate prístup ku kompletnému jedálničku s receptami na každý deň v roku – všetko bez cukru a bez lepku. Nemusíte nič plánovať!",
      },
      {
        number: "2",
        title: "Pripravujte jednoduché a chutné jedlá",
        desc: "Postupujte podľa jednoduchých pokynov v receptoch a pripravujte úžasné jedlá, ktoré od základov premenia vašu stravu.",
      },
      {
        number: "3",
        title: "Pocítite premenu",
        desc: "Pri dodržiavaní receptov pocítite rozdiel na vlastnom tele a zdraví: viac energie, lepšia kontrola hmotnosti a nižšie riziko ochorení.",
      },
    ],
    ctaMid: "CHCEM JESŤ BEZ VÝČITIEK",
    headline: "POZRITE SI VÝHODY, KTORÉ VÁM ZMENIA ŽIVOT",
    items: [
      {
        icon: "HeartPulse",
        title: "Kontrola hladiny cukru",
        desc: "Zlepšite si hladinu cukru v krvi a znížte riziko cukrovky pomocou výživných a chutných receptov.",
      },
      {
        icon: "Utensils",
        title: "Sloboda v stravovaní",
        desc: "Vychutnávajte si neodolateľné jedlá bez výčitiek a budujte si pozitívny vzťah k jedlu.",
      },
      {
        icon: "CalendarDays",
        title: "Každodenná rozmanitosť",
        desc: "S 1000 receptami máte na výber niečo nové na každý jeden deň v roku.",
      },
      {
        icon: "Timer",
        title: "Praktickosť v kuchyni",
        desc: "Pripravte si chutné jedlá do 30 minút alebo menej, čím ušetríte čas a zbavíte sa každodenného stresu.",
      },
      {
        icon: "GraduationCap",
        title: "Kultúra stravovania",
        desc: "Naučte sa vedome si vyberať jedlo a vybudujte si zdravé návyky na celý život.",
      },
      {
        icon: "Scale",
        title: "Kontrola hmotnosti",
        desc: "Udržujte si zdravú hmotnosť pomocou receptov, ktoré zasýtia a vyživia bez toho, aby ste obetovali chuť.",
      },
    ],
  },

  features: {
    headline: "Máte pripravené jedálničky na 365 dní – 1 na každý deň v roku",
    subheadline: "Prevedieme vás každým krokom k zdravému stravovaniu",
    categories: [
      {
        image: "/carousel/categoria-1.webp",
        title: "Raňajky a desiate",
        desc: "Recepty na raňajky a desiate, aké ste EŠTE NIKDY nevideli. Rýchle postupy prípravy z praktických a bežne dostupných surovín!",
      },
      {
        image: "/carousel/categoria-2.webp",
        title: "Obedy a večere",
        desc: "Prineste na svoj stôl tie najrozmanitejšie a najchutnejšie jedlá na každý deň aj na špeciálne príležitosti! Pripravené zo surovín, ktoré už máte bežne doma.",
      },
      {
        image: "/carousel/categoria-3.webp",
        title: "Koláče a dezerty",
        desc: "MNOŽSTVO možností na koláče a dezerty bez lepku a cukru, aby ste si mohli dopriať sladké dobroty bez pocitu viny.",
      },
      {
        image: "/carousel/categoria-4.webp",
        title: "Omáčky a dipy",
        desc: "Omáčky a krémy, ktoré vašim jedlám dodajú neuveriteľnú chuť – rýchlo a jednoducho!",
      },
      {
        image: "/carousel/categoria-5.webp",
        title: "Zdravé polievky a krémy",
        desc: "Polievky, krémové polievky a vývary – všetky pripravené z výživných surovín a špeciálne vybraného korenia.",
      },
      {
        image: "/carousel/categoria-6.webp",
        title: "Alternatívy múky",
        desc: "Všetko je bez lepku a s nízkym glykemickým indexom, aby ste mohli bez obáv piecť torty, chlieb a pečivo.",
      },
    ],
    ctaMid: "CHCEM JESŤ BEZ VÝČITIEK",
    badgesHeadline: "Najchutnejšie jedlá vo variantoch",
    badges: ["BEZ CUKRU", "BEZ LEPKU", "NÍZKOKALORICKÉ", "BEZ LAKTÓZY"],
    audienceHeadline: "„Jedlo bez výčitiek“ je presne pre vás, ak:",
    audience: [
      {
        title: "Máte diétne obmedzenia:",
        desc: "Ľudia, ktorí sa musia vyhýbať cukru a lepku zo zdravotných dôvodov, ako je napríklad cukrovka alebo intolerancia.",
      },
      {
        title: "Chcete mať zdravú rodinu:",
        desc: "Rodičia, ktorí chcú svojim deťom zabezpečiť výživné a chutné jedlo, a podporovať tak zdravé návyky už od útleho veku.",
      },
      {
        title: "Vyznávate zdravý životný štýl:",
        desc: "Ľudia, ktorí dodržiavajú stravovacie režimy, ako sú nízkosacharidové (low-carb), paleo alebo vegánske diéty, a hľadajú recepty, ktoré by im vyhovovali.",
      },
      {
        title: "Chcete si kontrolovať hmotnosť:",
        desc: "Ľudia, ktorí chcú schudnúť alebo si udržať ideálnu hmotnosť a potrebujú recepty, ktoré zasýtia, no pomáhajú mať kalórie pod kontrolou.",
      },
    ],
  },

  testimonials: {
    headline: "Prečítajte si recenzie od ľudí, ktorí recepty už vyskúšali",
    cta: "CHCEM JESŤ BEZ VÝČITIEK",
    wallpaper: "/wallpaper-whatsapp.webp",
    messages: [
      {
        text: "Chcem vám len povedať, že táto kniha receptov je skutočným požehnaním. S tromi malými deťmi mi vždy chýba čas a to, že mám toľko receptov na jednom mieste, mi všetko uľahčilo. Teraz jeme doma chutne a zdravo 😊",
        time: "20:04",
        reactions: ["👌", "❤️"],
      },
      {
        text: "Aká skvelá kniha receptov! Odkedy mi diagnostikovali intoleranciu na lepok, myslela som si, že už si nikdy nebudem môcť vychutnať jedlo, ale s vašimi receptami môžem jesť bez obáv. Ďakujem, že ste mi to tak uľahčili! 🙏",
        time: "19:57",
      },
      {
        text: "Chcem sa vám poďakovať, pretože tieto recepty mi zmenili život. Som diabetička a vždy bolo pre mňa ťažké nájsť chutné a zdravé možnosti. Teraz si užívam každé jedlo bez strachu. Naozaj vám veľmi pekne ďakujem! 🙏",
        time: "19:49",
      },
      {
        text: "Tisíckrát vďaka za recepty! Zbožňujem sladké a vždy som mala problémy s cukrom, ale vďaka vám mám konečne chutné a na prípravu jednoduché alternatívy.",
        time: "18:55",
        reactions: ["❤️"],
      },
    ],
  },

  carouselSection: {
    images: [
      { src: "/carousel/categoria-7.webp", alt: "Zdravý recept 1" },
      { src: "/carousel/categoria-8.webp", alt: "Zdravý recept 2" },
      { src: "/carousel/categoria-9.webp", alt: "Zdravý recept 3" },
      { src: "/carousel/categoria-10.webp", alt: "Zdravý recept 4" },
      { src: "/carousel/categoria-11.webp", alt: "Zdravý recept 5" },
      { src: "/carousel/categoria-1.webp", alt: "Zdravý recept 6" },
    ],
  },

  bonuses: {
    badge: "Špeciálne pre vás, že ste sa dostali až sem",
    headline: "AK SI DNES KÚPITE 1000 RECEPTOV, ZÍSKATE 8 EXKLUZÍVNYCH DARČEKOV 🎁",
    valueLabel: "Hodnota:",
    freeLabel: "ZADARMO",
    items: [
      { image: "/bonuses/bono-1.webp", tag: "DARČEK 1", title: "Recepty na dezerty bez cukru", value: "11,00 €" },
      { image: "/bonuses/bono-2.webp", tag: "DARČEK 2", title: "Recepty na omáčky a dipy", value: "7,80 €" },
      { image: "/bonuses/bono-3.webp", tag: "DARČEK 3", title: "Recepty na polievky a krémové polievky", value: "6,20 €" },
      { image: "/bonuses/bono-4.webp", tag: "DARČEK 4", title: "Recepty s bezlepkovými múkami", value: "4,46 €" },
      { image: "/bonuses/bono-5.webp", tag: "DARČEK 5", title: "Recepty na bezlepkový chlieb", value: "9,41 €" },
      { image: "/bonuses/bono-6.webp", tag: "DARČEK 6", title: "Recepty na zdravé tortilly", value: "9,41 €" },
      { image: "/bonuses/bono-7.webp", tag: "DARČEK 7", title: "Zdravé pizze", value: "9,41 €" },
      { image: "/bonuses/bono-8.webp", tag: "DARČEK 8", title: "500 chutných receptov vytvorených pre diabetikov", value: "9,41 €" },
    ],
    totalLabel: "Všetko, čo získate, má hodnotu viac ako 40 €",
    footer: "Dnes však túto sumu nezaplatíte... aj keď to stojí za každý jeden cent.",
  },

  finalCta: {
    preHeadline: "Vaša celková investícia za 1000 receptov a všetky bonusy...",
    urgencyTop: "Časovo obmedzená ponuka!",
    subUrgency:
      "Nepremeškajte možnosť získať knihu receptov so zľavou 75 %. Transformujte svoje zdravie hneď teraz s naším kompletným jedálničkom na 365 dní.",
    headline: "365 DNÍ S RECEPTAMI BEZ CUKRU A LEPKU + ĎALŠIE BONUSY",
    bundleList: [
      "1000 receptov bez cukru a bez lepku",
      "Bonus 1: Recepty na dezerty bez cukru",
      "Bonus 2: Recepty na omáčky a dipy",
      "Bonus 3: Recepty na polievky a krémové polievky",
      "Bonus 4: Recepty s bezlepkovými múkami",
      "Bonus 5: Recepty na bezlepkový chlieb",
      "Bonus 6: Recepty na zdravé tortilly",
      "Bonus 7: Recepty na zdravé pizze",
      "Bonus 8: 500 chutných receptov pre diabetikov",
    ],
    guaranteeText:
      "Upozornenie: Ak ste človek, ktorý sa chce skutočne starať o svoje zdravie alebo zdravie svojej rodiny, naše recepty bez cukru a lepku vám určite pomôžu už od prvého dňa. Nepremeškajte túto príležitosť!",
    regularPriceLabel: "Z:",
    regularPrice: "40,00 €",
    urgencyText: "PONUKA PLATÍ LEN DNES!",
    offerPrice: "8,90 €",
    bottomUrgency: "Posledné voľné miesta",
    discountBadge: "ZĽAVA 75 %",
    button: "ÁNO, CHCEM RECEPTY + BONUSY HNEĎ TERAZ",
    trustRow: "🔒 100 % bezpečná platba • ⚡ Okamžitý prístup • ✅ Doživotná záruka",
    imageAlt: "365 zdravých receptov + 8 bonusov",
  },

  faq: {
    authorHeadline: "Kto je Zuzana Kováčová?",
    authorBio:
      "Zuzana Kováčová je odborníčka na zdravé stravovanie, ktorá mení návyky so svojím inovatívnym jedálničkom „Jedlo bez výčitiek“. Vďaka bohatým skúsenostiam ako nutričná špecialistka sa Zuzana delí o 1000 jednoduchých a dostupných receptov, vytvorených s cieľom podporiť vás v každej fáze vašej cesty za zdravším životom. Ako absolventka odboru výživy a dietetiky spája Zuzana svoje profesionálne vedomosti s praktickým prístupom a ponúka chutné a vyvážené recepty prispôsobené rôznym potrebám, spolu s cennými radami, ktoré vám pomôžu vychutnať si jedlo bez obmedzení či pocitu viny.",
    authorRole: "Nutričná špecialistka",
    authorImageAlt: "Zuzana Kováčová — Nutričná špecialistka",
    worksHeadline: "ČO SKUTOČNE FUNGUJE?",
    doesntWork: [
      "JESŤ MÁLO A HLADOVAŤ",
      "DODRŽIAVAŤ ZLOŽITÉ DIÉTY",
      "ODPIERAŤ SI TO, ČO MÁTE RADI",
    ],
    worksText:
      "To, čo skutočne funguje, je plánované stravovanie s jednoduchými a praktickými receptami, bez cukru a bez lepku. S naším 365-dňovým jedálničkom sa už nebudete musieť obávať frustrujúcich alebo obmedzujúcich diét.",
    headline: "Často kladené otázky",
    subheadline: "Odpovede na vaše najčastejšie otázky",
    items: [
      { q: "AKO DOSTANEM RECEPTY?", a: "Celý obsah vám zašleme priamo na váš e-mail." },
      { q: "MÔŽEM K NIM PRISTUPOVAŤ Z TELEFÓNU?", a: "Áno, z telefónu, tabletu alebo počítača." },
      { q: "MÁTE ĎALŠIE OTÁZKY?", a: "Áno, počas celého procesu sa ma môžete priamo pýtať na akékoľvek otázky." },
      { q: "AKO DLHO BUDEM MAŤ PRÍSTUP?", a: "Prístup k celému obsahu je doživotný." },
    ],
  },

  closing: {
    kicker: "POSLEDNÁ ŠANCA! ⚡ Táto ponuka čoskoro vyprší",
    headline:
      "Transformujte svoje zdravie hneď teraz s naším kompletným jedálničkom na 365 dní.",
    subheadline:
      "1000 receptov bez cukru a bez lepku + 8 bonusových darčekov. To všetko za cenu jedného bežného jedla.",
    regularPrice: "40,00 €",
    offerPrice: "8,90 €",
    ctaLabel: "ÁNO, CHCEM RECEPTY + BONUSY HNEĎ TERAZ",
    trustRow:
      "🔒 100 % bezpečná platba • ⚡ Okamžitý a doživotný prístup • ✅ Posledné voľné miesta",
  },

  footer: {
    brand: "Crearis",
    copyright: "2025 © Všetky práva vyhradené. Prečítajte si naše Zásady ochrany osobných údajov.",
  },
};