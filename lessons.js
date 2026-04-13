const LESSONS = [
  {
    tema: "comunicación & trabajo",
    semana: 1,
    dias: [
      {
        es: "luz", en: "light",
        ru: { word: "свет", roman: "svet", tip: "rima con 'net' en inglés — breve y directo" },
        fr: { word: "lumière", pron: "/ly.mjɛʁ/", silabas: ["lu","miè","re"], notas: ["lu: labios redondeados, como silbar sin soplar","miè: vocal abierta, boca más abierta que en español","re: la R uvular — vibra en la garganta, no en la lengua"] },
        ar: { word: "نور", roman: "nūr", silabas: ["nūr"], notas: ["nūr: vocal larga Ū — mantén la U el doble de tiempo","r final: vibrante suave, como en español pero más breve"] },
        conexiones: [
          { tipo: "etimología", texto: "Latín LUX → francés lumière. La misma raíz da 'lunar', 'luminoso', 'lucir' en español." },
          { tipo: "fonética", texto: "LU en lumière y la U larga de nūr comparten la misma posición labial redondeada — tus labios hacen casi el mismo gesto en ambas." },
          { tipo: "familia semítica", texto: "NŪR (نور) comparte raíz semítica con el hebreo NER (נר, vela). También aparece en el nombre propio Nour/Nour." },
          { tipo: "ruso", texto: "SVET (свет) y 'vita' (vida en latín) tienen parentesco indoeuropeo lejano — la luz como fuerza vital." }
        ],
        tip: "La luz de La Habana al mediodía — piénsala cada vez que veas el sol entrar",
        memoria: "lu-MIÉR-re: imagina que 'miras' la luz — lu-MIER"
      },
      {
        es: "estrategia", en: "strategy",
        ru: { word: "стратегия", roman: "strategiya", tip: "igual que en español, préstamo del griego — todos comparten esta raíz" },
        fr: { word: "stratégie", pron: "/stʁa.te.ʒi/", silabas: ["stra","té","gie"], notas: ["str: grupo consonántico rápido, sin vocal intermedia","té: acento aquí, vocal limpia","gie: G suave como ZH — entre J y la J francesa"] },
        ar: { word: "استراتيجية", roman: "istirātījiyya", silabas: ["is","ti","rā","tī","ji","yya"], notas: ["is-ti: prefijo árabe de sustantivos abstractos","rātī: vocales largas Ā e Ī — dóblalas en duración","jiyya: sufijo de cualidad, como '-idad' en español","Es préstamo del griego arabizado — igual que en ruso"] },
        conexiones: [
          { tipo: "etimología", texto: "Griego STRATEGOS (στρατηγός, general): stratos (ejército) + agein (liderar). Llegó igual a español, francés, ruso y árabe." },
          { tipo: "familia global", texto: "Palabra viajera: griego → latín → lenguas europeas → árabe moderno. Los 5 idiomas comparten exactamente la misma raíz." },
          { tipo: "fonética árabe", texto: "El árabe añade vocal inicial 'i' porque no tolera grupos de 3 consonantes al inicio. iSTR → isTirā. Regla útil: cuando el árabe adopta palabras extranjeras, inserta vocales de apoyo." }
        ],
        tip: "Todos dicen casi lo mismo — la palabra árabe es la misma con ropa árabe",
        memoria: "istra-TĪ-jiyya: la TĪ larga en el centro — el corazón de la estrategia"
      },
      {
        es: "contenido", en: "content",
        ru: { word: "контент", roman: "kontent", tip: "anglicismo directo muy usado en digital" },
        fr: { word: "contenu", pron: "/kɔ̃.tə.ny/", silabas: ["con","te","nu"], notas: ["con: vocal nasal — O más N resonando en la nariz, no pronuncias la N","te: schwa, vocal reducida central, casi 'te' sin fuerza","nu: labios redondeados, breve"] },
        ar: { word: "محتوى", roman: "muḥtawā", silabas: ["muḥ","ta","wā"], notas: ["muḥ: la Ḥ faríngea — exhala calor desde la garganta, como al empañar un cristal","ta: breve y clara","wā: vocal larga A con W inicial — 'waa'"] },
        conexiones: [
          { tipo: "etimología", texto: "Latín CONTENTUM (lo que está contenido). Francés 'contenu', español 'contenido', inglés 'content' — misma raíz, casi idénticas." },
          { tipo: "árabe", texto: "Muḥtawā viene de la raíz ḤWY (حوى) — 'contener, abarcar'. El prefijo mu- crea sustantivos de acción, paralelo al prefijo latino con-." },
          { tipo: "digital", texto: "En ruso digital usan 'kontent' (préstamo inglés). En árabe formal tienen su propio término. En árabe coloquial muchos también dicen 'kontent'." }
        ],
        tip: "muḥtawā: la Ḥ caliente es tu marca registrada en árabe",
        memoria: "muḤ-ta-WĀ: la H caliente + el WĀ largo — como soplar sobre algo que quieres preservar"
      },
      {
        es: "mensaje", en: "message",
        ru: { word: "сообщение", roman: "soobshcheniye", tip: "raíz: ob-shch = común/compartido — 'lo que se pone en común'" },
        fr: { word: "message", pron: "/me.saʒ/", silabas: ["me","sa","ge"], notas: ["me: vocal abierta y clara","sa: S sonora","ge: ZH — la J del francés, como en 'genre'. Vibra entre los dientes"] },
        ar: { word: "رسالة", roman: "risāla", silabas: ["ri","sā","la"], notas: ["ri: breve, sin acento","sā: aquí va el acento, vocal larga — 'saaaa'","la: final suave"] },
        conexiones: [
          { tipo: "etimología", texto: "Latín MISSUS (enviado) → francés/inglés 'message'. Árabe RISĀLA de R-S-L (رسل) — 'enviar'. Misma idea semántica, raíces distintas." },
          { tipo: "semántica árabe", texto: "Risāla también significa 'misión', 'epístola', 'tesis'. En árabe clásico una carta filosófica importante se llamaba risāla. Tu contenido es una risāla." },
          { tipo: "ruso", texto: "Soobshcheniye de OB-SHCH = 'puesto en común'. En ruso el mensaje es literalmente 'algo compartido' — concepto hermoso para comunicación estratégica." }
        ],
        tip: "Risāla = mensaje + misión + tesis. Tu contenido es una risāla.",
        memoria: "ri-SĀ-la: acento en la sílaba larga — como un suspiro pronunciado 'ri-SAAAA-la'"
      },
      {
        es: "red", en: "network",
        ru: { word: "сеть", roman: "set'", tip: "literalmente 'red de pesca' — mismo origen metafórico que en español" },
        fr: { word: "réseau", pron: "/ʁe.zo/", silabas: ["ré","seau"], notas: ["ré: R uvular + É — garganta vibra","seau: diptongo EAU suena exactamente como O — labios muy redondeados","La U final no se pronuncia"] },
        ar: { word: "شبكة", roman: "shabaka", silabas: ["sha","ba","ka"], notas: ["sha: SH como en 'show' en inglés","ba: breve y clara","ka: K algo más posterior que en español"] },
        conexiones: [
          { tipo: "metáfora universal", texto: "Todos los idiomas usan la metáfora de la red de pesca: español 'red', ruso 'set'' (сеть), árabe 'shabaka' (= tela de araña), francés 'réseau' (= redecilla)." },
          { tipo: "árabe moderno", texto: "Shabaka es nombre de compañías de telecomunicaciones árabes. 'Al-shabaka al-ijtimāʿiyya' = red social." },
          { tipo: "fonética SH", texto: "El SH de shabaka no existe en español pero sí en inglés (show, she) y en ruso (ш). Practica con 'show' y luego di 'SHA-ba-ka'." }
        ],
        tip: "SHA-ba-ka: el SHA de 'show' en inglés — muéstrame tu shabaka",
        memoria: "SHA como en 'show' — muéstrame la red"
      },
      {
        es: "público objetivo", en: "target audience",
        ru: { word: "целевая аудитория", roman: "tselevaya auditoriya", tip: "tselevaya = orientado a un fin; auditoriya = préstamo del latín" },
        fr: { word: "public cible", pron: "/py.blik sibl/", silabas: ["pu","blic","ci","ble"], notas: ["pu: U muy cerrada — labios en tubo pequeño","blic: C final apenas suena","ci: S suave","ble: BLE reducida"] },
        ar: { word: "الجمهور المستهدف", roman: "al-jumhūr al-mustahdaf", silabas: ["al-jum","hūr","al-mus","tah","daf"], notas: ["al: artículo definido","jumhūr: J suave árabe + H faríngea","mustahdaf: literalmente 'el apuntado como objetivo'"] },
        conexiones: [
          { tipo: "metáfora de caza", texto: "Francés 'cible' (diana) del alemán 'Scheibe' (disco/blanco). Árabe 'mustahdaf' de HADAF (هدف) = meta, gol. En fútbol árabe el gol también es HADAF." },
          { tipo: "jumhūr", texto: "Jumhūr (جمهور) = público, masa, república. 'Jumhūriyya' = república. Tu audiencia árabe comparte raíz con 'república'." }
        ],
        tip: "HADAF = gol en fútbol árabe = objetivo en marketing. Misma raíz.",
        memoria: "public CI-ble: 'cible' suena a 'sable' — apunta el sable"
      },
      {
        es: "diseño / maquetación", en: "layout / design",
        ru: { word: "макет", roman: "maket", tip: "del francés 'maquette' — mismo origen que el español 'maqueta'" },
        fr: { word: "mise en page", pron: "/miz ɑ̃ paʒ/", silabas: ["mi","ze","en","pa","ge"], notas: ["mi: breve","ze: Z sonora","en: nasal","pa: abierta","ge: ZH como en 'genre'"] },
        ar: { word: "تصميم", roman: "taṣmīm", silabas: ["taṣ","mīm"], notas: ["taṣ: la Ṣ es S enfática — lengua más atrás, sonido más grave","mīm: vocal larga Ī + M final — 'meeem'","Solo dos sílabas, muy compacto"] },
        conexiones: [
          { tipo: "mise en page", texto: "'Mise en page' = 'puesta en página'. 'Mise' es participio de 'mettre' (poner) del latín MITTERE — misma raíz que 'mensaje' (missus). Poner y enviar comparten origen." },
          { tipo: "taṣmīm", texto: "Taṣmīm de ṢMM (صمم) — 'resolver con firmeza, decidir'. El diseño en árabe es una decisión tomada con determinación." },
          { tipo: "ruso↔francés", texto: "Ruso 'maket' del francés 'maquette'. El francés influyó enormemente en el ruso culto del siglo XVIII-XIX — arquitectura, arte, moda." }
        ],
        tip: "taṢ-MĪM: la S grave y la M larga — el diseño como decisión firme",
        memoria: "taṢ-MĪĪĪM: la M larga como el zumbido de una impresora"
      }
    ]
  },
  {
    tema: "música & arte",
    semana: 2,
    dias: [
      {
        es: "melodía", en: "melody",
        ru: { word: "мелодия", roman: "melodiya", tip: "préstamo griego directo, igual en todos los idiomas europeos" },
        fr: { word: "mélodie", pron: "/me.lɔ.di/", silabas: ["mé","lo","die"], notas: ["mé: É cerrada, labios en sonrisa","lo: O abierta, más abierta que en español","die: D+I+E reducida — 'dee' suave"] },
        ar: { word: "لحن", roman: "laḥn", silabas: ["laḥn"], notas: ["la: abierta y breve","ḥn: Ḥ faríngea + N — exhala con fuerza antes de la N","Una sola sílaba, muy concentrada"] },
        conexiones: [
          { tipo: "etimología", texto: "Griego MELODIA (μελῳδία): melos (canto) + ode (canción). La misma raíz da 'oda', 'melodrama'. Igual en español, francés, inglés, ruso." },
          { tipo: "laḥn árabe clásico", texto: "Laḥn (لحن) originalmente significaba 'error de pronunciación' — la entonación incorrecta se percibía como música involuntaria. Luego pasó a significar melodía." },
          { tipo: "andalusí", texto: "La música andalusí fusionó los laḥn árabes con melodías europeas medievales. El flamenco tiene raíces directas en esta fusión — y desde el flamenco al son cubano hay un hilo." }
        ],
        tip: "LAḤN: una sílaba como un golpe de batería. La raíz del flamenco y el son.",
        memoria: "LAḤN: corta y resonante — la H caliente en el centro"
      },
      {
        es: "ritmo", en: "rhythm",
        ru: { word: "ритм", roman: "ritm", tip: "préstamo griego, igual a todos — sin vocal final, muy compacto" },
        fr: { word: "rythme", pron: "/ʁitm/", silabas: ["ryth","me"], notas: ["ry: R uvular + Y — garganta + labios","thm: el grupo TH+M casi sin vocal","me: E muda al final"] },
        ar: { word: "إيقاع", roman: "īqāʿ", silabas: ["ī","qāʿ"], notas: ["ī: vocal larga I al inicio — 'iii'","qā: Q árabe desde la úvula, más gutural que K","ʿ: ayin — constricción faríngea suave al final"] },
        conexiones: [
          { tipo: "etimología", texto: "Griego RHYTHMOS (ῥυθμός) — 'fluir'. Español, francés, inglés, ruso comparten esta raíz griega exacta." },
          { tipo: "īqāʿ musical", texto: "Īqāʿ (إيقاع) de WQʿ (وقع) — 'caer, golpear'. El ritmo árabe se piensa como secuencia de golpes. Los maqāmāt (modos musicales) se organizan por īqāʿāt." },
          { tipo: "clave cubana", texto: "La clave cubana y los īqāʿāt árabes comparten la lógica de patrones asimétricos sobre un ciclo. Cuando tocas en 3-2, estás haciendo algo conceptualmente árabe." }
        ],
        tip: "Ī-QĀʿ: el derbake árabe — ĪĪĪ-qaa. La clave tiene alma árabe.",
        memoria: "Ī-QĀʿ: iii-QAA — como el primer golpe del derbake"
      },
      {
        es: "acorde", en: "chord",
        ru: { word: "аккорд", roman: "akkord", tip: "del francés/italiano — misma raíz. El ruso lo tomó en el siglo XVIII." },
        fr: { word: "accord", pron: "/a.kɔʁ/", silabas: ["a","cord"], notas: ["a: abierta, relajada","cor: O muy abierta","d final: no se pronuncia"] },
        ar: { word: "وتر", roman: "watar", silabas: ["wa","tar"], notas: ["wa: W labial árabe, como 'water' en inglés","tar: T clara + AR final abierto","Acento en la primera sílaba"] },
        conexiones: [
          { tipo: "etimología", texto: "Latín ACCORDARE: ad + cor (corazón). 'Llegar al corazón juntos'. De ahí 'acuerdo' en español — acordar es poner corazones en armonía." },
          { tipo: "watar y guitarra", texto: "Watar (وتر) = cuerda de instrumento. 'Guitarra' viene del árabe 'qīṯāra' (قيثارة), del griego 'kithara'. Tu guitarra lleva árabe en el nombre." },
          { tipo: "ruso", texto: "Akkord tomado del francés en el siglo XVIII cuando la música clásica europea dominaba la corte rusa. El mismo viaje de la palabra que hizo el sonido." }
        ],
        tip: "Tu guitarra se llama así por el árabe 'qīṯāra'. Watar es su cuerda.",
        memoria: "WA-tar: casi 'water' en inglés — la cuerda que vibra como el agua"
      },
      {
        es: "ensayo / prueba", en: "rehearsal",
        ru: { word: "репетиция", roman: "repetitsiya", tip: "del latín/francés répétition — igual que en español" },
        fr: { word: "répétition", pron: "/ʁe.pe.ti.sjɔ̃/", silabas: ["ré","pé","ti","tion"], notas: ["ré: R uvular + É","pé: acento aquí","ti: breve","tion: nasal ON — 'syõ', N resuena en la nariz"] },
        ar: { word: "بروفة", roman: "brūfa", silabas: ["brū","fa"], notas: ["brū: BR + vocal larga Ū — 'brooo'","fa: breve y abierta","Préstamo del italiano 'prova' arabizado"] },
        conexiones: [
          { tipo: "préstamo viajero", texto: "Italiano PROVA → árabe BRŪFA: P→B (el árabe no tiene P), R-OV-A → R-ŪF-A. El mismo patrón de arabización de préstamos." },
          { tipo: "dos metáforas", texto: "Español 'ensayo' del latín EXAGIUM (pesar, medir). Francés 'répétition' = volver a repetir. Una mide, la otra repite. Dos filosofías del ensayo." },
          { tipo: "Ballet", texto: "En el Ballet Nacional de Cuba los ensayos siguen tradición francesa — 'répétition' era el término estándar desde el siglo XVII en el ballet clásico europeo." }
        ],
        tip: "BRŪ-fa: el italiano 'prova' con ropa árabe.",
        memoria: "BRŪ-fa: 'bruuuu-fa' — el sonido del esfuerzo antes del estreno"
      },
      {
        es: "escenario", en: "stage",
        ru: { word: "сцена", roman: "stsena", tip: "del griego/latín scena — igual que en español, préstamo directo" },
        fr: { word: "scène", pron: "/sɛn/", silabas: ["scène"], notas: ["sc: S+C, la C no suena","è: E muy abierta","ne: N+E muda","Una sola sílaba tónica"] },
        ar: { word: "مسرح", roman: "masraḥ", silabas: ["mas","raḥ"], notas: ["mas: breve","raḥ: R vibrante + A + Ḥ faríngea al final","La Ḥ final da un cierre gutural dramático"] },
        conexiones: [
          { tipo: "etimología", texto: "Griego SKENE (σκηνή) — la tienda donde los actores griegos se cambiaban. Llegó igual a latín, español, francés, ruso." },
          { tipo: "masraḥ", texto: "Masraḥ (مسرح) de S-R-Ḥ (سرح) — 'dejar libre, pasear sin rumbo'. El escenario árabe es 'el lugar donde uno se suelta libremente'. Perfecto para el ballet." },
          { tipo: "Patricia", texto: "El masraḥ es el territorio de Patricia. Cada ensayo en el Ballet es entrar al masraḥ — el lugar del movimiento libre." }
        ],
        tip: "Masraḥ: 'donde uno se suelta libremente'. El escenario como libertad.",
        memoria: "mas-RAḤ: la H gutural al final — como el suspiro del bailarín antes de salir a escena"
      },
      {
        es: "partitura", en: "score / sheet music",
        ru: { word: "партитура", roman: "partitura", tip: "del italiano partitura — igual en todos los idiomas musicales" },
        fr: { word: "partition", pron: "/paʁ.ti.sjɔ̃/", silabas: ["par","ti","tion"], notas: ["par: P+AR, R uvular","ti: breve","tion: nasal syõ"] },
        ar: { word: "نوتة موسيقية", roman: "nūta mūsīqiyya", silabas: ["nū","ta","mū","sī","qi","yya"], notas: ["nūta: del italiano 'nota' arabizado — N+Ū larga+ta","mūsīqiyya: adjetivo de mūsīqā (música)","La doble Y final 'yya' es sufijo de pertenencia: 'de la música'"] },
        conexiones: [
          { tipo: "italiano musical", texto: "El italiano dominó la terminología musical occidental desde el siglo XVI: partitura, sonata, opera, fortepiano. El árabe y el ruso los adoptaron igual que el español." },
          { tipo: "nota→nūta", texto: "Italiano nota → árabe nūta: la O se alarga en Ū al arabizarse. Este patrón es consistente: muchos préstamos europeos en árabe alargan sus vocales." },
          { tipo: "mūsīqā", texto: "Mūsīqā (موسيقى) del griego MOUSIKE — la música de las Musas. El árabe lo adoptó en el siglo VIII durante la gran traducción de textos griegos en Bagdad." }
        ],
        tip: "NŪ-ta: la nota italiana con la Ū árabe alargada.",
        memoria: "NŪ-ta mū-SĪ-qi-yya: la Ū larga como nota sostenida"
      },
      {
        es: "intérprete", en: "performer",
        ru: { word: "исполнитель", roman: "ispolnitel'", tip: "raíz: polnit' = llenar, completar — 'el que lleva a cabo plenamente'" },
        fr: { word: "interprète", pron: "/ɛ̃.tɛʁ.pʁɛt/", silabas: ["in","ter","prète"], notas: ["in: nasal IN en la nariz","ter: T+ER uvular","prète: PR+È abierta+T casi muda"] },
        ar: { word: "مؤدٍّ", roman: "muʾaddin", silabas: ["muʾ","ad","din"], notas: ["muʾ: la hamza (ʾ) es oclusiva glotal — como el corte en '¡uh-oh!'","ad: breve","din: D larga (shadda) — doble D sostenida"] },
        conexiones: [
          { tipo: "etimología latina", texto: "Latín INTERPRES — el que está entre (inter) y pone precio/valor (pres). Intérprete = el que media y da valor entre dos partes." },
          { tipo: "muʾaddin", texto: "Muʾaddin de ʾ-D-Y (أدى) — 'llevar a cabo, cumplir'. El intérprete árabe 'cumple' la obra. Misma idea que el ruso 'ispolnitel'' (el que lleva a pleno)." },
          { tipo: "hamza", texto: "La hamza (ء) es el sonido inicial de muʾaddin — oclusiva glotal. No existe en español. Practica con el 'uh-oh' inglés: ese corte entre las dos sílabas es la hamza." }
        ],
        tip: "muʾ-AD-din: el que cumple la obra. La hamza como punto de partida.",
        memoria: "muʾ-AD-din: el pequeño 'clic' de la hamza al inicio, luego fluye"
      }
    ]
  },
  {
    tema: "ciudad & vida cotidiana",
    semana: 3,
    dias: [
      {
        es: "calle", en: "street",
        ru: { word: "улица", roman: "ulitsa", tip: "raíz proto-eslava — 'el exterior, lo que está afuera del hogar'" },
        fr: { word: "rue", pron: "/ʁy/", silabas: ["rue"], notas: ["r: R uvular — solo garganta","u: U muy cerrada — labios en tubo pequeño","Una sola sílaba, la más corta posible"] },
        ar: { word: "شارع", roman: "shāriʿ", silabas: ["shā","riʿ"], notas: ["shā: SH (como 'show') + vocal larga Ā","riʿ: R + I breve + ʿAyn final — constricción faríngea suave"] },
        conexiones: [
          { tipo: "metáfora árabe", texto: "Shāriʿ de Sh-R-ʿ (شرع) — 'comenzar, abrirse paso, legislar'. La calle en árabe es 'lo que se abre'. También: sharīʿa (شريعة) = camino/ley — misma raíz." },
          { tipo: "rue", texto: "Francés 'rue' del latín RUGA — arruga, surco. La calle como surco en la tierra. Misma raíz que 'arruga' en español." },
          { tipo: "ulitsa ruso", texto: "Ruso 'ulitsa' del proto-eslavo *ulica — relacionado con 'exterior, espacio abierto'. La calle como 'lo de afuera'." }
        ],
        tip: "shāriʿ al-baḥr: la calle del mar. El Malecón en árabe.",
        memoria: "shĀ-riʿ: el SH de 'show' + la ʿayn al final — la calle que termina en el mar"
      },
      {
        es: "café", en: "coffee",
        ru: { word: "кофе", roman: "kofe", tip: "del árabe, vía turco y holandés — uno de los viajes lingüísticos más largos" },
        fr: { word: "café", pron: "/ka.fe/", silabas: ["ca","fé"], notas: ["ca: K+A abierta","fé: É cerrada con acento — como la E en 'mesa' pero más cerrada"] },
        ar: { word: "قهوة", roman: "qahwa", silabas: ["qah","wa"], notas: ["q: Q árabe — más gutural que K, desde la úvula","ah: A abierta con H faríngea suave","wa: W labial + A final"] },
        conexiones: [
          { tipo: "viaje lingüístico", texto: "Árabe QAHWA (قهوة) → turco KAHVE → italiano CAFFÈ → todas las lenguas europeas. Esta palabra viajó del Yemen al mundo en el siglo XVI." },
          { tipo: "origen yemení", texto: "Qahwa originalmente significaba 'vino' en árabe — luego se aplicó al café porque también producía animación. El café lleva el nombre del vino árabe." },
          { tipo: "global", texto: "Café/coffee/kafe/kofe: todas vienen del árabe. Cuando tomas café en La Habana, estás bebiendo qahwa yemení con nombre árabe." }
        ],
        tip: "Qahwa: el origen de 'café' en todos los idiomas del mundo.",
        memoria: "QAH-wa: carraspea antes de decir 'agua' — esa Q gutural"
      },
      {
        es: "barrio", en: "neighborhood",
        ru: { word: "район", roman: "rayon", tip: "del francés 'rayon' (radio, sector) — préstamo burocrático soviético" },
        fr: { word: "quartier", pron: "/kaʁ.tje/", silabas: ["quar","tier"], notas: ["quar: KWA, la QU francesa siempre es KW","tier: TIE+R uvular — 'tyé'"] },
        ar: { word: "حي", roman: "ḥayy", silabas: ["ḥayy"], notas: ["ḥ: H faríngea — expulsa aire caliente","ayy: diptongo AY + Y final","Una sola sílaba, muy viva"] },
        conexiones: [
          { tipo: "ḥayy vivo", texto: "Ḥayy (حي) de la raíz Ḥ-Y-Y (حيي) — 'estar vivo, vivir'. El barrio en árabe es 'lo vivo, lo que tiene vida'. También: ḥayawān = animal (lo que tiene vida)." },
          { tipo: "quartier", texto: "Francés 'quartier' del latín QUARTUS (cuarta parte). El barrio como división administrativa — misma lógica que 'quarter' en inglés (Chinatown = Chinatown Quarter)." },
          { tipo: "rayon ruso", texto: "El ruso tomó 'rayon' del francés en era soviética para divisiones administrativas. Tu barrio en ruso es un término burocrático francés." }
        ],
        tip: "Ḥayy: 'lo vivo'. Tu barrio en árabe tiene vida propia.",
        memoria: "ḤAYY: una sílaba que explota — la H caliente y el diptongo AY"
      },
      {
        es: "mercado", en: "market",
        ru: { word: "рынок", roman: "rynok", tip: "del alemán 'Ring' (círculo, plaza) — mercado como espacio circular" },
        fr: { word: "marché", pron: "/maʁ.ʃe/", silabas: ["mar","ché"], notas: ["mar: M+A+R uvular","ché: SH suave — entre CH y SH","É final con acento — abierta y clara"] },
        ar: { word: "سوق", roman: "sūq", silabas: ["sūq"], notas: ["s: S clara","ū: vocal muy larga — 'suuuu'","q: Q uvular final — cierra con la garganta","Una sola sílaba densa"] },
        conexiones: [
          { tipo: "sūq y zoco", texto: "Sūq (سوق) → español 'zoco' (en ciudades con historia árabe: Zoco de Tetuán, Marrakech). La palabra entró al español medieval." },
          { tipo: "mercado", texto: "Latín MERCATUS → español mercado, francés marché, inglés market. Todos de MERX (mercancía). El ruso 'rynok' tomó otro camino — del espacio físico circular de comercio." },
          { tipo: "La Mina", texto: "Tu feria La Mina es un sūq moderno — el sūq como espacio vivo de intercambio no solo comercial sino cultural." }
        ],
        tip: "SŪŪŪQ: la U larguísima y la Q gutural — el mercado que te llama desde lejos.",
        memoria: "SŪŪŪQ: el mercado que anuncia su presencia con la voz"
      },
      {
        es: "calor", en: "heat",
        ru: { word: "жара", roman: "zhara", tip: "raíz eslava — ZH como la J francesa, el sonido del calor" },
        fr: { word: "chaleur", pron: "/ʃa.lœʁ/", silabas: ["cha","leur"], notas: ["cha: CH francés = SH","leur: L + EU cerrada (labios en O, lengua en E) + R uvular","EU es el sonido más difícil del francés"] },
        ar: { word: "حرارة", roman: "ḥarāra", silabas: ["ḥa","rā","ra"], notas: ["ḥa: H faríngea + A — el calor mismo en la garganta","rā: R vibrante + vocal larga Ā","ra: la raíz se repite — triplica la sensación"] },
        conexiones: [
          { tipo: "raíz ḥurr", texto: "Ḥarāra (حرارة) y ḥurr (حر, libre) comparten raíz. En árabe antiguo el calor del desierto y la libertad beduina estaban semánticamente relacionados." },
          { tipo: "chaleur", texto: "Francés 'chaleur' del latín CALOR — misma raíz de español 'calor', 'caloría', 'caliente'. El CH francés viene de la C latina que evolucionó fonéticamente en el norte de Francia." },
          { tipo: "zhara ruso", texto: "Ruso 'zhara' (жара) — el ZH (ж) es exactamente la J del francés. El calor ruso y el calor francés comparten ese sonido suave y cálido." }
        ],
        tip: "Ḥarāra: la raíz de 'libre' en árabe. El calor habanero como libertad.",
        memoria: "ḤA-rā-ra: la H caliente al inicio — el aire de La Habana golpeándote al salir"
      },
      {
        es: "paseo", en: "stroll",
        ru: { word: "прогулка", roman: "progulka", tip: "raíz: gulyat' = pasear, también 'salir de fiesta' — doble vida afectiva" },
        fr: { word: "promenade", pron: "/pʁɔm.nad/", silabas: ["pro","me","na","de"], notas: ["pro: PR+O abierta","me: schwa casi muda","na: clara","de: E final muda"] },
        ar: { word: "نزهة", roman: "nuzha", silabas: ["nuz","ha"], notas: ["nuz: N+U+Z","ha: H suave al final — aspirada, no faríngea","Acento en la primera sílaba"] },
        conexiones: [
          { tipo: "nuzha", texto: "Nuzha (نزهة) de N-Z-H (نزه) — 'alejarse, despejarse, recrearse'. El paseo árabe es literalmente 'alejarse para despejarse'." },
          { tipo: "promenade", texto: "Francés 'promenade' de promener — 'llevar adelante'. La misma raíz de 'promontorio'. El paseo como movimiento hacia adelante." },
          { tipo: "progulka ruso", texto: "Ruso 'progulka' de gulyat' — en ruso coloquial 'gulyat'' también significa salir de fiesta. El paseo ruso tiene doble vida: tranquilo y festivo." }
        ],
        tip: "Nuzha: alejarse para despejarse. El Malecón es la nuzha habanera.",
        memoria: "NUZ-ha: suave y ligera — como pasos sobre el Malecón al atardecer"
      },
      {
        es: "vecino", en: "neighbor",
        ru: { word: "сосед", roman: "sosed", tip: "raíz: sed- = sentarse. El vecino como 'el que se sienta junto a ti'." },
        fr: { word: "voisin", pron: "/vwa.zɛ̃/", silabas: ["voi","sin"], notas: ["voi: V+WA — diptongo OI suena 'WA'","sin: S sonora + nasal IN — 'zɛ̃'","N final resuena en la nariz"] },
        ar: { word: "جار", roman: "jār", silabas: ["jār"], notas: ["j: J árabe — entre J española y G suave","ār: vocal larga Ā + R vibrante","Una sola sílaba larga y sonora"] },
        conexiones: [
          { tipo: "jār sagrado", texto: "'Al-jār qabla al-dār' = 'el vecino antes que la casa'. Proverbio árabe: elige bien al vecino antes que a la propiedad. Los derechos del jār son tema central en la ética árabe." },
          { tipo: "voisin", texto: "Francés 'voisin' del latín VICINUS — el que vive en el mismo 'vicus' (aldea, barrio). Misma raíz que 'villa', 'vecindario' en español." },
          { tipo: "sosed ruso", texto: "Ruso 'sosed' de SED- (sentarse). El vecino eslavo es 'el que está sentado junto a ti' — imagen de vida comunitaria en torno al fuego." }
        ],
        tip: "'Al-jār qabla al-dār' — elige el vecino antes que la casa.",
        memoria: "JĀR: una sílaba, como un saludo breve al cruzarse en la escalera"
      }
    ]
  },
  {
    tema: "pensamiento & comunicación",
    semana: 4,
    dias: [
      {
        es: "idea", en: "idea",
        ru: { word: "идея", roman: "ideya", tip: "del griego vía latín — igual en todos los idiomas europeos" },
        fr: { word: "idée", pron: "/i.de/", silabas: ["i","dée"], notas: ["i: I breve y clara","dée: D+É larga — la doble E indica duración","Muy corta, muy limpia"] },
        ar: { word: "فكرة", roman: "fikra", silabas: ["fik","ra"], notas: ["fik: F+I+K — rápido y seco","ra: R vibrante + A final","Acento en la primera sílaba"] },
        conexiones: [
          { tipo: "etimología", texto: "Griego IDEA (ἰδέα) — 'forma visible'. De IDEIN (ver). La idea como algo que se 've' mentalmente. Igual en español, francés, inglés, ruso." },
          { tipo: "fikra", texto: "Fikra (فكرة) de F-K-R (فكر) — 'pensar, reflexionar'. Muy usada: '¡fikra!' = '¡buena idea!' en árabe cotidiano. Plural: afkār (أفكار)." },
          { tipo: "contraste cognitivo", texto: "El griego/europeo VE la idea (metáfora visual). El árabe la PIENSA (metáfora cognitiva). Misma cosa, dos paradigmas distintos." }
        ],
        tip: "'¡Fikra!' — así dices '¡buena idea!' en árabe coloquial.",
        memoria: "FIK-ra: rápida como un destello — esa K seca en el centro"
      },
      {
        es: "reflexión / contemplación", en: "reflection",
        ru: { word: "размышление", roman: "razmyshleniye", tip: "raíz: mysl' = pensamiento. Raz- = intensificador. Pensar profunda y ampliamente." },
        fr: { word: "réflexion", pron: "/ʁe.flɛk.sjɔ̃/", silabas: ["ré","fle","xion"], notas: ["ré: R uvular + É","fle: FL+E abierta","xion: KS + nasal syõ"] },
        ar: { word: "تأمل", roman: "taʾammul", silabas: ["taʾ","am","mul"], notas: ["taʾ: T + hamza (oclusiva glotal)","am: breve","mul: M larga (shadda) + L final"] },
        conexiones: [
          { tipo: "taʾammul", texto: "Taʾammul (تأمل) de ʾ-M-L (أمل) — 'esperar con esperanza, contemplar'. Tiene connotación de espera esperanzada — la reflexión como contemplación abierta al futuro." },
          { tipo: "réflexion", texto: "Latín REFLEXIO de REFLECTERE (doblar hacia atrás). La reflexión como luz que rebota — vuelves la mirada hacia adentro. Metáfora del espejo." },
          { tipo: "tres metáforas", texto: "Ruso: pensamiento 'expandido'. Francés: luz que regresa. Árabe: contemplación esperanzada. Tres culturas, tres formas de entender el mismo acto mental." }
        ],
        tip: "Taʾammul: contemplación con esperanza. La reflexión que mira al futuro.",
        memoria: "taʾ-AM-mul: la hamza te frena — luego el pensamiento se expande"
      },
      {
        es: "narración / relato", en: "narration",
        ru: { word: "повествование", roman: "povestvovaniye", tip: "raíz: vest' = noticia. Narrar = traer noticias de algo." },
        fr: { word: "narration", pron: "/na.ʁa.sjɔ̃/", silabas: ["na","ra","tion"], notas: ["na: abierta","ra: R uvular + A","tion: nasal syõ"] },
        ar: { word: "سرد", roman: "sard", silabas: ["sard"], notas: ["s: S clara","ar: A+R vibrante","d: D final firme","Una sola sílaba, como el golpe del narrador"] },
        conexiones: [
          { tipo: "sard", texto: "Sard (سرد) de S-R-D (سرد) — 'ensartar, enhebrar en secuencia'. El relato árabe como collar: cada episodio es una perla enhebrada a la siguiente." },
          { tipo: "narration", texto: "Latín NARRARE — relacionado con GNOSCERE (conocer). Narrar = hacer conocer. La misma raíz de 'ignorar' (i-gnorare = no-conocer)." },
          { tipo: "76.7", texto: "Tu proyecto 76.7 es un sard — cápsulas enhebradas en un collar narrativo. Cada mensaje es una perla." }
        ],
        tip: "Sard: el relato como collar de perlas. Tu 76.7 es un sard.",
        memoria: "SARD: una sílaba contundente — el golpe que abre la narración"
      },
      {
        es: "matiz / precisión", en: "nuance",
        ru: { word: "нюанс", roman: "nyuans", tip: "del francés 'nuance' — préstamo directo, muy usado en ruso culto" },
        fr: { word: "nuance", pron: "/ny.ɑ̃s/", silabas: ["nu","ance"], notas: ["nu: U muy redondeada y cerrada","an: nasal AN — 'ɑ̃'","ce: S final suave"] },
        ar: { word: "دقة", roman: "diqqah", silabas: ["diq","qah"], notas: ["diq: D+I+Q gutural","qah: Q doble (shadda) + A + H suave","La doble Q marca intensidad"] },
        conexiones: [
          { tipo: "nuance", texto: "Francés 'nuance' de NUE (nube). Las variaciones sutiles de color en las nubes. El matiz como gradiente sutil de significado — algo casi imperceptible." },
          { tipo: "diqqah", texto: "Diqqah de D-Q-Q (دقق) — 'moler fino, precisar'. La misma raíz da 'daqīq' (دقيق) = harina fina, y también = minuto (división fina del tiempo). El matiz como algo finamente molido." },
          { tipo: "préstamo ruso", texto: "El ruso tomó 'nuance' directamente del francés — uno de miles de préstamos del siglo XVIII-XIX. Hoy 'nyuans' es marca de cultura en ruso." }
        ],
        tip: "Diqqah: 'moler fino'. El matiz es harina del pensamiento.",
        memoria: "DIQ-qah: la Q doble te obliga a pausar — como el matiz que pide pensar dos veces"
      },
      {
        es: "sentido / significado", en: "meaning",
        ru: { word: "смысл", roman: "smysl", tip: "de mysl' = pensamiento. Smysl = lo que el pensamiento apunta y hacia donde va." },
        fr: { word: "sens", pron: "/sɑ̃s/", silabas: ["sens"], notas: ["s: S inicial clara","en: nasal AN — 'ɑ̃', muy abierta","s final: se pronuncia","Una sola sílaba densa"] },
        ar: { word: "معنى", roman: "maʿnā", silabas: ["maʿ","nā"], notas: ["maʿ: M+A + ʿAyn — constricción faríngea en medio","nā: N + vocal larga Ā final","El ʿAyn en el centro es el corazón de la palabra"] },
        conexiones: [
          { tipo: "maʿnā filosófico", texto: "Maʿnā es central en la filosofía árabe clásica. Los filósofos medievales árabes debatían entre lafẓ (لفظ, forma/pronunciación) y maʿnā (significado) — la lingüística moderna redescubrió esta distinción." },
          { tipo: "sens", texto: "Latín SENSUS de SENTIRE (sentir). El sentido como algo que se 'siente' físicamente — del cuerpo a la mente." },
          { tipo: "smysl ruso", texto: "Ruso 'smysl' de 'mysl'' (мысль) con prefijo s- (con, hacia). El significado como 'lo que el pensamiento apunta'. Más abstracto que el francés." }
        ],
        tip: "Maʿnā: el ʿAyn en el centro esconde el significado. '¿Cuál es el maʿnā?'",
        memoria: "maʿ-NĀ: el ʿAyn como nudo en el hilo — ahí está el significado"
      },
      {
        es: "memoria", en: "memory",
        ru: { word: "память", roman: "pamyat'", tip: "raíz proto-eslava — 'lo que queda en la mente después de pasar'" },
        fr: { word: "mémoire", pron: "/me.mwaʁ/", silabas: ["mé","moire"], notas: ["mé: M+É cerrada","moi: M+WA — OI francés = 'WA'","re: R uvular — garganta cierra la palabra"] },
        ar: { word: "ذاكرة", roman: "dhākira", silabas: ["dhā","ki","ra"], notas: ["dh: como TH inglesa de 'this' — lengua entre dientes, sonora","ā: vocal larga","kira: breve y claro"] },
        conexiones: [
          { tipo: "dhikr", texto: "Dhākira de Dh-K-R (ذكر) — 'recordar, mencionar'. La misma raíz da 'dhikr' (ذكر) = la práctica sufí de recitación. Memoria como acto activo y espiritual." },
          { tipo: "mémoire", texto: "Latín MEMORIA → francés mémoire. 'Mémoires' (plural) = autobiografía, memorias escritas. El francés hace de la memoria también un género literario." },
          { tipo: "pamyat' ruso", texto: "Ruso 'pamyat'' tiene enorme peso cultural — 'Den' Pamyati' = Día de la Memoria (WWII). La memoria rusa carga el peso de la historia colectiva." }
        ],
        tip: "Dhākira: la memoria como acto activo. La raíz del dhikr sufí.",
        memoria: "DHĀ-ki-ra: la DH como en 'this' — la lengua toca los dientes y recuerda"
      },
      {
        es: "contexto", en: "context",
        ru: { word: "контекст", roman: "kontekst", tip: "del latín vía inglés/francés — igual en todos los idiomas modernos" },
        fr: { word: "contexte", pron: "/kɔ̃.tɛkst/", silabas: ["con","texte"], notas: ["con: nasal ON — 'kõ'","texte: T+E abierta+KST","El grupo KST final requiere práctica"] },
        ar: { word: "سياق", roman: "siyāq", silabas: ["si","yāq"], notas: ["si: breve","yā: Y consonántica + vocal larga Ā","q: Q uvular final — cierra con la garganta"] },
        conexiones: [
          { tipo: "siyāq", texto: "Siyāq de S-W-Q (ساق) — 'conducir ganado, hacer fluir'. El contexto en árabe es 'el flujo que conduce el significado' — el río que lleva las palabras." },
          { tipo: "contexte", texto: "Latín CONTEXTUS de CON+TEXERE (tejer junto). El contexto como tejido — las palabras tejidas alrededor del significado. Misma raíz de 'texto', 'textil'." },
          { tipo: "dos metáforas", texto: "Europa: el contexto como tejido (estático, artesanal). Árabe: el contexto como flujo de agua (dinámico, natural). Dos imágenes hermosas para la misma idea." }
        ],
        tip: "Siyāq: el río que conduce el significado. Contexto como flujo.",
        memoria: "si-YĀQ: la Q gutural al final — el río que golpea la orilla"
      }
    ]
  }
];
