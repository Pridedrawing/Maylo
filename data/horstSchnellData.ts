// data/horstSchnellData.ts

import { Album, Track } from "@/types/music";

export const horstSchnellAlbums: Album[] = [
  {
    id: "lieder-eines-lebens",
    slug: "lieder-eines-lebens",
    title: "Lieder eines Lebens" as any,
    subtitle: { en: "Songs of a Life", de: "Songs of a Life" } as any,
    description: {
      en: "20 songs celebrating 90 years of a remarkable life.",
      de: "20 Lieder, die 90 Jahre eines bemerkenswerten Lebens würdigen.",
    } as any,
    releaseDate: "2025-10-01",
    coverImage: "/covers/vater/album-cover.png",
    tracks: [
      "der-weg-durch-die-zeiten","als-der-himmel-rot-war","zwischen-den-fronten",
      "schnell-horst-schnell","frei-geboren-frei-geblieben","von-ganz-unten",
      "was-biste-denn","im-auge-des-sturms","die-epoche","ewiges-licht",
      "ein-haus-aus-eichen","ein-neues-herz","angela","ein-tropfen-fuer-die-welt",
      "bis-ewigkeit-vergeht","annemie","hoert-zu-wenn-ich-geh","wenns-schiefgeht",
      "claudia-das-stille-herz","dein-feuer-ist-mein-feuer","wenn-ich-nicht-mehr-sprech",
    ],
  },
];

export const horstSchnellTracks: Track[] = [
  {
    id: "der-weg-durch-die-zeiten",
    slug: "der-weg-durch-die-zeiten",
    title: "Der Weg durch die Zeiten",
    albumId: "lieder-eines-lebens",
    trackNumber: 1,
    audioSrc: "/audio/vater/01-der-weg-durch-die-zeiten.mp3",
    coverImage: "/covers/vater/01-der-weg-durch-die-zeiten.png",
    description: {
      en: "A slow orchestral composition with piano, strings, and French horns celebrating a 90-year life journey from war through peace and family.",
      de: "Eine langsame Orchesterkomposition mit Klavier, Streicher und Hörnern, die eine 90-jährige Lebensreise vom Krieg durch Frieden und Familie feiert.",
    } as any,
    lyrics: `[Strophe 1]
Ich ging den Weg mit offnen Augen,
hab nie dem Zweifel Raum gelassen.
Hab Neues stets selbst aufgebaut,
und aus Ideen Wege gemacht.

[Refrain]
Der Weg durch die Zeiten, er lehrt und befreit,
er führt durch Dunkel und Klarheit zugleich.
Wer sucht, wer glaubt, wer fragt und versteht,
der weiß, dass sein Werk weitergeht.

[Strophe 2]
Ich sah das Dunkel, doch nie das Ende,
aus Trümmern wuchs mein neuer Plan.
Hab mit Verstand und eignen Händen
gezeigt, was Mut vollbringen kann.

[Refrain]
Der Weg durch die Zeiten, er trägt und verweht,
was kommt, was geht, was ewig steht.
Und wenn der Wind die Jahre verweht,
bleibt Liebe, die weitergeht.

[Bridge]
Dort, wo Gedanken frei sich neigen,
wo Herz und Geist sich wieder vereinen,
da warten Gesichter, vertraut und klar —
mein größtes Glück, ihr seid schon da.

[Finale]
So blick ich zurück auf all mein Leben,
auf Glück und Schmerz, auf Sinn und Sein.
Ich danke der Zeit, sie hat mir gegeben —
den Mut, ich selbst zu sein.`,
  },
  {
    id: "als-der-himmel-rot-war",
    slug: "als-der-himmel-rot-war",
    title: "Als der Himmel rot war",
    albumId: "lieder-eines-lebens",
    trackNumber: 2,
    audioSrc: "/audio/vater/02-als-der-himmel-rot-war.mp3",
    coverImage: "/covers/vater/02-als-der-himmel-rot-war.png",
    description: {
      en: "A classical-orchestral narrative with soft piano and distant sirens evoking wartime childhood memories.",
      de: "Eine klassisch-orchestrale Erzählung mit sanftem Klavier und fernen Sirenen — Kriegskindheitserinnerungen.",
    } as any,
    lyrics: `[Strophe 1]
Ich stand am Fenster, hab gesehn,
wie Züge rollten, wie Häuser stehn.
Die Welt war laut, der Himmel rot,
und unten spielte man mit dem Tod.

[Refrain]
Als der Himmel rot war, blieb ich klein,
mit Neugier, Angst und Sonnenschein.
Wir suchten Träume im Trümmermeer,
und fanden Leben, irgendwo, irgendwo mehr.

[Strophe 2]
Die Suppe flog zum Fenster raus,
die Oma schimpfte, kam nicht nach Haus.
Wir zählten Sirenen, bis einer lacht,
weil Leben selbst im Keller wacht.

[Refrain]
Als der Himmel rot war, blieb ich klein,
mit Neugier, Angst und Sonnenschein.
Wir suchten Träume im Trümmermeer,
und fanden Leben, irgendwo, irgendwo mehr.

[Bridge]
Im Keller eng, im Kopf die Welt,
die größer war, als man erzählt.
Und wenn der Staub den Himmel frisst,
weiß man doch, dass man lebendig ist.

[Finale]
Ich war ein Kind, im falschen Jahr,
doch trotzdem blieb das Leben klar.
Und heut' versteh ich mit Bedacht —
ich hab aus Trümmern Glück gemacht.`,
  },
  {
    id: "zwischen-den-fronten",
    slug: "zwischen-den-fronten",
    title: "Zwischen den Fronten",
    albumId: "lieder-eines-lebens",
    trackNumber: 3,
    audioSrc: "/audio/vater/03-zwischen-den-fronten.mp3",
    coverImage: "/covers/vater/03-zwischen-den-fronten.png",
    description: {
      en: "An epic orchestral ballad in late-romantic style exploring faith versus destruction.",
      de: "Eine epische Orchesterballade im spätromantischen Stil über Glaube und Zerstörung.",
    } as any,
    lyrics: `Im Staub der Wege ruht die Zeit,
die keiner misst, die keiner nennt.
Ein Schrei verhallt, ein Herz entgleit,
wo Feuer schweigt und Friede brennt.

Zwischen den Fronten steht der Mensch allein,
mit offnen Händen, nackt vor Stein.
Er trägt die Schuld, er sucht das Licht,
und sieht sein Spiegelbild — und bricht.

[Bridge]
Der Himmel schweigt, die Erde weint,
ein Traum zerrinnt, ein Wort vereint.
Wer Wahrheit sucht, geht durch den Sturm,
bis Licht im Schatten sich verformt.

[Choral]
Pax humana, vox divina,
in silentio veritas.
Aus Blut und Staub erhebt sich neu,
des Menschen letzter Gottes-Treu.

[Finale]
Zwischen den Fronten wächst ein Licht,
das Dunkel bricht, das Herz verspricht.
Und wer noch glaubt, der wird bestehn,
wenn alle Winde wieder gehn.
Zwischen den Fronten ruft die Zeit —
aus Leid wird Kraft, aus Nacht wird Heiligkeit.`,
  },
  {
    id: "schnell-horst-schnell",
    slug: "schnell-horst-schnell",
    title: "Schnell, Horst Schnell",
    albumId: "lieder-eines-lebens",
    trackNumber: 4,
    audioSrc: "/audio/vater/04-schnell-horst-schnell.mp3",
    coverImage: "/covers/vater/04-schnell-horst-schnell.png",
    description: {
      en: "A witty 1960s chanson about crossing the border to freedom — humorous and confident.",
      de: "Ein witziges 1960er Chanson über die Flucht in die Freiheit — humorvoll und selbstbewusst.",
    } as any,
    lyrics: `[Strophe 1]
Er kam aus Osten, ohne Plan,
ein Hemd, zwei Träume, mehr nicht dran.
Die Grenze offen, Wind im Gesicht —
wer da nicht läuft, der schafft es nicht!

[Refrain]
Schnell, Horst Schnell, sei schnell!
Der Zug pfeift laut, die Welt ist hell!
Die Mauer wächst, der Abend naht —
wer Freiheit will, der muss zur Tat!
Schnell, Horst Schnell, jetzt los!
Die Zukunft wartet — grenzenlos!
Ein freier Kopf, ein klarer Blick —
das war sein größtes Glück!

[Strophe 2]
Er hatte nichts als seinen Mut,
kein Brot, kein Bett, doch alles gut.
Denn wer sich selbst noch denken traut,
dem wird die Welt so schön vertraut.

[Refrain]
Schnell, Horst Schnell, sei schnell!
Der Zug pfeift laut, die Welt ist hell!
Die Mauer wächst, der Abend naht —
wer Freiheit will, der muss zur Tat!
Schnell, Horst Schnell, bleib frei!
Das Leben nickt dir freundlich bei.
Ein freier Geist lässt sich nicht fangen —
der bleibt im Laufen, nicht im Bangen!

[Bridge]
Manch einer blieb und sah sie stehn,
die Mauer, grau, so fest, so schön.
Doch einer rief: „Ich glaub, ich geh!" —
und war schon weg, bevor's zu spät.

[Finale]
Jetzt lacht er leis, schaut manchmal hin,
wo Mauern einst gestanden sind.
Und wer ihn fragt, wie's damals war —
sagt nur: „Ich war halt schneller, klar!"

Schnell, Horst Schnell, sei schnell!
Die Welt bleibt offen, wunderbar hell!
Wer Freiheit sucht, muss einmal gehn —
und niemals rückwärts sehn!`,
  },
  {
    id: "frei-geboren-frei-geblieben",
    slug: "frei-geboren-frei-geblieben",
    title: "Frei geboren – Frei geblieben",
    albumId: "lieder-eines-lebens",
    trackNumber: 5,
    audioSrc: "/audio/vater/05-frei-geboren-frei-geblieben.mp3",
    coverImage: "/covers/vater/05-frei-geboren-frei-geblieben.png",
    description: {
      en: "A late-romantic symphonic opera celebrating human freedom — full orchestra and mixed choir.",
      de: "Eine spätromantische symphonische Oper, die menschliche Freiheit feiert — volles Orchester und gemischter Chor.",
    } as any,
    lyrics: `[Prolog]
Ich stand vor Mauern, stumm und grau,
die Welt geteilt, das Herz voll Klau.
Doch wer den Wind erkennt als Freund,
dem öffnet sich, was andre scheut.

[Arie I]
Kein Herr, kein Staat, kein Stein vermag
den Geist zu binden, der sich fragt.
Ich dacht', ich flieh' — doch ward' befreit,
vom Denken selbst, vom eignen Leid.

[Chor]
Frei geboren — frei geblieben!
Aus dem Feuer ward er trieben!
Nicht das Schwert, das Denken siegt —
wo der Geist in Freiheit fliegt!

[Arie II]
Ich suchte Sinn, fand meinen Grund:
Nicht Macht, nicht Gold, doch Wort und Mund.
Wer zweifelt, lebt — wer glaubt, verliert,
wenn keiner mehr sich selbst regiert.

[Chor & Solist]
Frei geboren — frei geblieben!
Wider Schatten, Druck und Trieben!
Er stand, wo andre still verziehn —
Horst Schnell, ein freies Wien!

[Finale]
Ich gab mein Denken in die Zeit,
und hoffe nur, sie bleibt bereit.
Kein Grab, kein Stein kann's ewig binden —
solang Gedanken Wege finden.`,
  },
  {
    id: "von-ganz-unten",
    slug: "von-ganz-unten",
    title: "Von ganz unten",
    albumId: "lieder-eines-lebens",
    trackNumber: 6,
    audioSrc: "/audio/vater/06-von-ganz-unten.mp3",
    coverImage: "/covers/vater/06-von-ganz-unten.png",
    description: {
      en: "A late-romantic ballad narrating the rebuilding of life after hardship — arriving in Wuppertal with nothing but hope.",
      de: "Eine spätromantische Ballade über den Neuaufbau nach Entbehrungen — mit nichts als Hoffnung nach Wuppertal.",
    } as any,
    lyrics: `Er ging durch Nacht, durch Regen schwer,
die Stadt lag stumm, kein Blick ihm her.
Ein Herz voll Mut, ein Koffer klein,
er ließ das Alte hinter sich, allein.

Die Wege kalt, die Lager leer,
doch jeder Tag ein Stückchen mehr.
Ein Brot geteilt, ein Gruß, ein Licht,
ein fremdes Lächeln, schlicht und schlicht.
Die Arbeit ruft, die Hände wund,
doch Hoffnung keimt in jedem Grund.

Er fiel, doch stand im Morgen auf,
nahm seinen Traum in neuen Lauf.
Der Bruder sprach: „Du bleibst bei mir",
und Frieden zog ins Herz dafür.
In Wuppertal, da blüht der Sinn,
das Leben findet Heimgewinn.

[Finale]
Von ganz unten steigt ein Lied,
aus Staub und Schmerz, wo Leben blüht.
Wer glaubt, der sieht, wer trägt, der steht,
wo neue Sonne aufgeht.
Von ganz unten, Schritt für Schritt,
führt jeder Weg zum Licht zurück.`,
  },
  {
    id: "was-biste-denn",
    slug: "was-biste-denn",
    title: "Was biste denn, was haste denn, was kannste denn?",
    albumId: "lieder-eines-lebens",
    trackNumber: 7,
    audioSrc: "/audio/vater/07-was-biste-denn.mp3",
    coverImage: "/covers/vater/07-was-biste-denn.png",
    description: {
      en: "A charming 1960s cabaret chanson about meeting his future wife's parents with nothing but heart and two hands.",
      de: "Ein charmantes 1960er Kabarett-Chanson über das erste Treffen mit den Schwiegereltern — mit nichts als Herz und zwei Händen.",
    } as any,
    lyrics: `[Strophe 1]
Ich stand im Flur, die Knie so weich,
der Vater schaut mich an wie ein Reich.
Die Mutter still, der Blick so scharf —
„Na, junger Mann, was sind Sie denn für'n Pfad?"

[Refrain]
Was biste denn, was haste denn, was kannste denn?
Ich hatt' nicht viel, doch Herz und Händ'.
Kein Haus, kein Hof, kein Sparbuch mein,
doch Mut und Witz — das muss schon sein.
Was biste denn, was haste denn, was kannste denn?
Ich dacht' nur still: „Na warte denn!"
Denn wer nix hat, der hat doch Plan —
und fängt von vorne an!

[Strophe 2]
„Sie kommen von drüben?", fragt er kühl,
„Und meinen, das geht hier zu viel?"
Ich lächle nur, sag' ganz galant:
„Ich hab zwei Hände — die sind bekannt!"

[Refrain]
Was biste denn, was haste denn, was kannste denn?
Ich hatt' nicht viel, doch Herz und Händ'.
Ein Käfer stand vorm Hauseingang —
der war mein ganzer Hochzeitsklang.
Was biste denn, was haste denn, was kannste denn?
Ich konnt' nur lachen irgendwann.
Denn wer was will, der macht's halt wahr —
so fing die Liebe an!

[Bridge]
Die Mutter nickt, sie sieht wohl schon,
der Junge meint es mit Passion.
Der Alte räuspert sich und spricht:
„Na gut, mein Sohn, enttäusch sie nicht."

[Finale]
Was biste denn, was haste denn, was kannste denn?
Ich hatt' nicht viel, doch Herz und Händ'.
Und heut', da sag ich Hand in Hand —
das war mein schönster Stand!`,
  },
  {
    id: "im-auge-des-sturms",
    slug: "im-auge-des-sturms",
    title: "Im Auge des Sturms",
    albumId: "lieder-eines-lebens",
    trackNumber: 8,
    audioSrc: "/audio/vater/08-im-auge-des-sturms.mp3",
    coverImage: "/covers/vater/08-im-auge-des-sturms.png",
    description: {
      en: "An orchestral schlager ballad building to an emotionally uplifting climax — finding calm in the eye of life's storms.",
      de: "Eine orchestrale Schlagzerballade, die sich zu einem emotional erhebenden Höhepunkt aufbaut — Ruhe im Auge des Sturms.",
    } as any,
    lyrics: `Aus wenig wurde Weg und Werk,
wir bauten Zukunft, still und stark.
Studium bei Nacht und Licht —
kein Lob, doch wir vergaßen nicht.

Erst Laube, dann ein richtiges Haus,
Kinderlachen füllte es aus.
Und draußen wuchs der nächste Schritt:
Ideen wurden Wirklichkeit.

[Refrain]
Das war die Epoche, die uns trug,
voll Kraft, voll Ruhe, mehr als genug.
Karriere, Haus, Familie — klar:
Das war unser Glück, so wunderbar.

Arbeiten, Tüfteln, weitergehen,
mit Mut, auch gegen Wind zu stehen.
Und abends: Garten, Tennis, Kinderlärm —
die Welt war weit, das Herz war warm.

[Refrain]
Das war die Epoche, die uns trug,
voll Kraft, voll Ruhe, mehr als genug.
Wir sahen nach vorn, Jahr für Jahr:
Erfolg und Frieden — wunderbar.`,
  },
  {
    id: "die-epoche",
    slug: "die-epoche",
    title: "Die Epoche",
    albumId: "lieder-eines-lebens",
    trackNumber: 9,
    audioSrc: "/audio/vater/08a-die-epoche.mp3",
    coverImage: "/covers/vater/08a-die-epoche.png",
    description: {
      en: "A classical art song in the Viennese tradition — an intimate salon portrait of a life well built.",
      de: "Ein klassisches Kunstlied in der Wiener Tradition — ein intimes Salonstück über ein gut aufgebautes Leben.",
    } as any,
    lyrics: `Aus wenig wurde Weg und Werk,
wir bauten Zukunft, still und stark.
Studium bei Nacht und Licht —
kein Lob, doch wir vergaßen nicht.

Erst Laube, dann ein richtiges Haus,
Kinderlachen füllte es aus.
Und draußen wuchs der nächste Schritt:
Ideen wurden Wirklichkeit.

[Refrain]
Das war die Epoche, die uns trug,
voll Kraft, voll Ruhe, mehr als genug.
Karriere, Haus, Familie — klar:
Das war unser Glück, so wunderbar.

Arbeiten, Tüfteln, weitergehen,
mit Mut, auch gegen Wind zu stehen.
Und abends: Garten, Tennis, Kinderlärm —
die Welt war weit, das Herz war warm.

[Refrain]
Das war die Epoche, die uns trug,
voll Kraft, voll Ruhe, mehr als genug.
Wir sahen nach vorn, Jahr für Jahr:
Erfolg und Frieden — wunderbar.`,
  },
  {
    id: "ewiges-licht",
    slug: "ewiges-licht",
    title: "Ewiges Licht",
    albumId: "lieder-eines-lebens",
    trackNumber: 10,
    audioSrc: "/audio/vater/09-ewiges-licht.mp3",
    coverImage: "/covers/vater/09-ewiges-licht.png",
    description: {
      en: "A slow cinematic composition reflecting on the loss of a child — Dagmar — and the eternal light of love.",
      de: "Eine langsame cinematische Komposition über den Verlust eines Kindes — Dagmar — und das ewige Licht der Liebe.",
    } as any,
    lyrics: `[Strophe 1]
Ich hab dich viel zu früh verloren,
ein Stern verglühte, blieb doch nah.
Kein Tag vergeht, an dem ich schwör,
dass ich dich nie vergess, mein Kind, Dagmar.

[Strophe 2]
Ich hör dein Lachen in den Räumen,
so klar, als wärst du eben hier.
Und manchmal, wenn die Schatten träumen,
fühl ich, du bist bei mir.

[Refrain]
Wo das Licht noch weitergeht,
da wirst du sein, da steh ich spät.
Und wenn mein Weg zu Ende weht —
dann seh ich dich, wo Licht entsteht.

[Strophe 3]
Ich hab versucht, stark zu verweilen,
hab Mauern um mein Herz gebaut.
Doch Liebe lässt sich nicht verneinen,
sie bleibt — vertraut, vertraut.

[Refrain]
Wo das Licht noch weitergeht,
da wirst du sein, da steh ich spät.
Und wenn mein Weg zu Ende weht —
dann seh ich dich, wo Licht entsteht.

[Bridge]
Kein Abschied trennt, was ewig meint,
kein Schmerz bleibt, wenn sich Zeit vereint.
Ich halt dich fest im stillen Wind —
mein Kind.

[Finale]
Und wenn ich geh, ganz still, ganz sacht,
dann lächelst du — und gibst mir Acht.
Wo Licht sich teilt und Liebe steht —
da weiß ich, dass es weitergeht.`,
  },
  {
    id: "ein-haus-aus-eichen",
    slug: "ein-haus-aus-eichen",
    title: "Ein Haus aus Eichen",
    albumId: "lieder-eines-lebens",
    trackNumber: 11,
    audioSrc: "/audio/vater/10-ein-haus-aus-eichen.mp3",
    coverImage: "/covers/vater/10-ein-haus-aus-eichen.png",
    description: {
      en: "A powerful orchestral song about the house he built — its oak beams, a fire in the night, and the lives it sheltered.",
      de: "Ein kraftvolles Orchesterlied über das selbst gebaute Haus — seine Eichenbalken, ein Feuer in der Nacht und die Leben, die es schützte.",
    } as any,
    lyrics: `[Strophe 1]
Er hob die Steine, schwer und kalt,
und mauert' sie mit eigen' Hand.
Ein Haus, so groß wie Lebenszeit,
ein Werk, das fest im Boden stand.

[Strophe 2]
Doch tief im Herz der Mauern ruhn
die Balken alter Eichen.
Sie flüstern leis, wenn Nächte ziehn,
sie atmen, wenn die Feuer streichen.

[Refrain]
Ein Haus aus Eichen, stark und wahr,
trägt jedes Jahr, das einmal war.
Kein Wind, kein Sturm, kein stiller Schmerz
bricht Holz, das wurzelt tief im Herz.

[Strophe 3]
Dann kam das Feuer in der Nacht,
die Glut hat Stein und Balken wach.
Da piept's im Dach, wo Eichen stehn —
als wollt das Haus verstehn.

[Bridge]
Die Mäuse riefen, laut und klar,
aus jedem Spalt, wo Leben war.
Und in der Decke, wo sie hausten,
war Atem, den die Jahre tauschten.

Manch' Herz, das ging, bleibt still zurück —
und wacht in Holz, in Glut, in Blick.

[Refrain]
Ein Haus aus Stein, von Holz gestützt,
von Geist und Atem aufgebaut.
Und selbst das Feuer, das es prüft,
hat seine Seele nie besiegt.

[Finale]
Ein Haus aus Eichen, bleibt bestehn,
auch wenn die Jahre weitergehen.
Denn was mit Herz und Liebe spricht —
das trägt die Zeit, das trägt das Licht.`,
  },
  {
    id: "ein-neues-herz",
    slug: "ein-neues-herz",
    title: "Ein neues Herz",
    albumId: "lieder-eines-lebens",
    trackNumber: 12,
    audioSrc: "/audio/vater/11-ein-neues-herz.mp3",
    coverImage: "/covers/vater/11-ein-neues-herz.png",
    description: {
      en: "A warm orchestral chanson about a child who found love and family — new beginnings from a quiet house.",
      de: "Ein warmes Orchesterchanson über ein Kind, das Liebe und Familie fand — Neuanfang aus einem stillen Haus.",
    } as any,
    lyrics: `Ein stilles Haus, das Jahre sah,
vom Lachen leer, vom Leben nah.
Da klopft ein Herz, so klein, so sacht,
das neues Licht ins Dunkel bracht.

[Strophe 1]
Ein Kind, das sucht, ein Blick, der fragt,
ob Liebe bleibt, wenn keiner sagt.
Zwei Arme offen, sanft und weit,
und plötzlich wird aus Zeit — Geleit.

[Refrain]
Ein neues Herz schlägt leis im Raum,
es füllt mit Licht den alten Traum.
Wo Schmerz verging, wächst nun Gefühl,
so zart, so klar, so wunderviel.

[Strophe 2]
Die Jahre ziehn, der Garten blüht,
wo Hoffnung still ihr Wunder zieht.
Ein Name klingt, ein Kinderlied,
das durch die offenen Fenster zieht.

[Bridge]
Wer lieben lernt, vergisst das Grau,
aus Narben wächst ein Himmelblau.
Und jede Hand, die heute hält,
erschafft ein Stück der neuen Welt.

[Finale]
Ein neues Herz, so still, so rein,
lehrt uns, was Leben kann noch sein.
Ein Haus wird weit, die Jahre lind,
durch jedes Lachen eines Kind.

Und wer noch fragt, wo Heimat sei —
sie schläft im Herz, sie zieht vorbei.
Ein neues Herz, von Hand gemacht,
hat aus der Nacht den Tag entfacht.`,
  },
  {
    id: "angela",
    slug: "angela",
    title: "Angela",
    albumId: "lieder-eines-lebens",
    trackNumber: 13,
    audioSrc: "/audio/vater/12-angela.mp3",
    coverImage: "/covers/vater/12-angela.png",
    description: {
      en: "A spiritual orchestral ballad — a tender tribute to Angela, whose light continues beyond time.",
      de: "Eine spirituelle Orchesterballade — ein zarter Tribut an Angela, deren Licht über die Zeit hinaus leuchtet.",
    } as any,
    lyrics: `Ein Name fliegt durch stilles Licht,
wie sanftes Echo, leise Pflicht.
Ein Kind, das lacht, ein Blick so klar,
als wär sie längst schon einmal da.

Ihr Schritt so leicht, ihr Herz so frei,
sie trägt das Morgen mit herbei.
In ihrem Blick, so tief, so weit,
ruht mehr als nur die Gegenzeit.

Manchmal, wenn Abend niedergeht,
die Sonne still im Fenster steht,
spür ich, wie jemand leise spricht:
„Ich bin noch da, vergesst mich nicht."

[Bridge]
Und Engel tragen, was einst war,
durch Zeit und Traum, durch Jahr für Jahr.
Ein Leben endet, eins beginnt —
und Liebe bleibt, wo wir auch sind.

[Finale]
Angela, dein Lächeln ruht,
wo Schmerz verging, wo Hoffnung tut.
Du bist das Licht, das wiederkehrt,
das uns an Gottes Nähe lehrt.

Ein Herz verlischt, ein andres glüht,
und nichts, was liebt, vergeht, verglüht.
Angela — dein Name weht,
wo Zeit sich still im Himmel dreht.`,
  },
  {
    id: "ein-tropfen-fuer-die-welt",
    slug: "ein-tropfen-fuer-die-welt",
    title: "Ein Tropfen für die Welt",
    albumId: "lieder-eines-lebens",
    trackNumber: 14,
    audioSrc: "/audio/vater/13-ein-tropfen-fuer-die-welt.mp3",
    coverImage: "/covers/vater/13-ein-tropfen-fuer-die-welt.png",
    description: {
      en: "A humorous cabaret piece about his engineering inventions — tinkering in the cellar until everything runs smoothly.",
      de: "Ein humorvolles Kabarettstück über seine Ingenieurserfindungen — nächtliches Tüfteln im Keller, bis alles läuft.",
    } as any,
    lyrics: `[Strophe 1]
Im Keller roch's nach Öl und Glück,
nach Schrauben, Testlauf, Stück für Stück.
Er bastelt nächtelang allein —
„Das muss doch noch geschmeidiger sein!"

[Refrain]
Ein Tropfen hält die Welt am Laufen,
das ist kein Scherz, das ist System!
Wo andre schwitzen, ölt er's eben —
und plötzlich läuft's — bequem!

[Strophe 2]
Der Nachbar klopft: „Schon wieder Lärm?"
„Das ist die Zukunft, unterm Schirm!"
Er lacht, notiert, probiert und misst —
bis alles flutscht, wie's laufen ist.

[Refrain]
Ein Tropfen hält die Welt am Laufen,
ein kleiner Film aus klugem Sinn.
Wer schmiert, verliert kein'n Funken Glauben —
und dreht sich mittendrin!

[Bridge]
Da flog mal was, da zischt's laut,
die Werkbank hat's fast abgebaut!
Doch Fehler sind doch nur Beweis,
dass Denken flüssig bleiben muss!

[Refrain]
Ein Tropfen hält die Welt am Laufen,
kein Doktorhut, kein hohler Schein.
Nur Mut, Geduld und offne Schrauben —
das muss Erfinder sein!

[Finale]
Und wenn heut' Räder, Züge, Pressen
sich reibungslos durchs Leben drehn,
dann denkt man still — und nicht vermessen —
Horst Schnell hat's wohl gesehn!`,
  },
  {
    id: "bis-ewigkeit-vergeht",
    slug: "bis-ewigkeit-vergeht",
    title: "Bis Ewigkeit vergeht",
    albumId: "lieder-eines-lebens",
    trackNumber: 15,
    audioSrc: "/audio/vater/14-bis-ewigkeit-vergeht.mp3",
    coverImage: "/covers/vater/14-bis-ewigkeit-vergeht.png",
    description: {
      en: "A deeply personal song about a father-son bond — arguments, pride, and enduring love.",
      de: "Ein tief persönliches Lied über die Vater-Sohn-Bindung — Streit, Stolz und bleibende Liebe.",
    } as any,
    lyrics: `[Strophe 1]
Ich seh dich stehn mit müden Händen,
so vieles hast du aufgebaut.
Du wolltest nie mehr Mangel kennen,
und hast dein Glück aus Stein gebaut.

[Refrain]
Dein Weg durch die Zeiten, er war nicht leicht,
du kämpftest allein, doch hast erreicht,
was Hunger versprach, was Hoffnung begehrt —
du gabst dem Leben dein eigenes Wert.

[Strophe 2]
Wir stritten oft um Recht und Ziele,
um Stolz, um Freiheit, um das Wie.
Doch hinter jedem lauten Worte
stand Liebe — ich vergaß sie nie.

[Refrain]
Dein Weg durch die Zeiten, so stark, so klar,
du blieb'st dir treu, wie du immer warst.
Und selbst wenn wir uns verloren im Streit,
du fandest zu mir — mit der Zeit.

[Bridge]
Leb weiter, lach, genieß die Tage,
noch schlägt dein Herz so stolz und klar.
Ich steh mit Dagmar, wir sehn dich tragen —
und warten, wenn du einst bist da.

[Finale]
So blick zurück auf all dein Streben,
auf alles, was dein Herz bewegt.
Ich war dein Halt, dein Widerpart,
und bleib's, bis Ewigkeit vergeht.`,
  },
  {
    id: "annemie",
    slug: "annemie",
    title: "Annemie",
    albumId: "lieder-eines-lebens",
    trackNumber: 16,
    audioSrc: "/audio/vater/15-annemie.mp3",
    coverImage: "/covers/vater/15-annemie.png",
    description: {
      en: "A symphonic opera tribute to Annemie — his wife, his compass, his counterpart of equal strength.",
      de: "Eine symphonische Opernhommage an Annemie — seine Frau, sein Kompass, sein ebenbürtiges Gegenüber.",
    } as any,
    lyrics: `Du standest neben mir,
wenn Sturm und Zweifel wuchsen.
Dein Blick — so klar, so unbeirrt,
hat oft den Kurs des Winds geführt.

[Arie I]
Annemie, du warst mein Spiegel,
meine Kante, meine Ruh'.
Wo ich träumte, hieltest Zügel,
wo ich schwieg, da sprachst nur du.

„Sie war das Maß, sie war die Kraft,
die ihn zum Leben aufgerafft."

[Arie II]
Wir standen oft auf Sturm und Flamme,
zwei Stimmen, eine große Seele.
Doch wenn die Wellen sich erhoben,
bliebst du mein Kompass — unbeirrt.

[Refrain]
Annemie! Dein Wille trug!
Du sahst den Berg, ich sah den Flug.
Was du gefordert, hab ich vollbracht —
und lernte lieben deine Macht.

[Bridge]
Ich weiß, du wolltest nie zu kurz,
du suchtest Platz im eignen Glanz.
Doch in dem Glanz, der mich geführt,
leuchtet dein Herz, unberührt.

Sie ging mit ihm durch Zeit und Raum,
zwei Seelen in demselben Traum.
Kein Tag zu viel, kein Wort zu klein —
ihr Bund war Feuer, stark und rein.

[Finale]
Annemie! Dein Geist bleibt hier,
in jedem Werk, in mir, in dir.
Kein Ende trennt, was sich versteht —
weil Liebe weitergeht!`,
  },
  {
    id: "hoert-zu-wenn-ich-geh",
    slug: "hoert-zu-wenn-ich-geh",
    title: "Hört zu, wenn ich geh",
    albumId: "lieder-eines-lebens",
    trackNumber: 17,
    audioSrc: "/audio/vater/16-hoert-zu-wenn-ich-geh.mp3",
    coverImage: "/covers/vater/16-hoert-zu-wenn-ich-geh.png",
    description: {
      en: "A cinematic farewell — passing on the legacy of free thought and curiosity to the next generation.",
      de: "Ein cinematischer Abschied — das Vermächtnis des freien Denkens und der Neugier an die nächste Generation.",
    } as any,
    lyrics: `[Strophe 1]
Ich hab mein Leben selbst gebaut,
mit Kopf und Hand, mit Herz und Haut.
Kein Reichtum bleibt, kein Stein besteht,
doch was ihr denkt, das weitergeht.

[Refrain]
Drum hört zu, wenn ich geh,
nehmt das mit, was ich seh:
Dass Denken größer ist als Zeit,
und Wissen euer Erbe bleibt.

[Strophe 2]
Ich fiel oft hin, doch blieb nicht liegen,
man lernt, indem man muss vergnügen.
Ein freier Geist lässt sich nicht lenken,
nur einer, der wagt zu denken.

[Refrain]
Drum hört zu, wenn ich geh,
haltet fest, was ich seh:
Dass Fragen mehr als Antworten sind,
und Mut beginnt, wo Zweifel sind.

[Bridge]
Kein Himmel fällt, kein Licht verlischt,
solang ihr sucht, was Wahrheit ist.
Und wenn ihr euch mal selbst verliert —
denkt dran, dass einer euch inspiriert.

[Finale]
Ich bin dann still, doch bleib euch nah,
in jeder Spur, in jedem Jahr.
Denn was ich war, wird nie vergehn —
solang ihr weiter seht.`,
  },
  {
    id: "wenns-schiefgeht",
    slug: "wenns-schiefgeht",
    title: "Wenn's schiefgeht, läuft's am besten",
    albumId: "lieder-eines-lebens",
    trackNumber: 18,
    audioSrc: "/audio/vater/17-wenns-schiefgeht.mp3",
    coverImage: "/covers/vater/17-wenns-schiefgeht.png",
    description: {
      en: "A cheerful cabaret piece about life's mishaps — celebrating imperfection with humor and self-irony.",
      de: "Ein heiteres Kabarettstück über Missgeschicke — Unvollkommenheit mit Humor und Selbstironie feiern.",
    } as any,
    lyrics: `[Strophe 1]
Die Gans verbrannt, der Herd zu heiß,
der Nachbar schimpft — „Was soll der Schweiß?"
Doch wer durchs Leben Fehler meidet,
der weiß ja gar nicht, was ihn kleidet!

[Refrain]
Wenn's schiefgeht, läuft's am besten,
dann lebt man wirklich schön!
Denn wer noch lachen kann beim Testen,
der bleibt gern unbequem.
Ein Kratzer hier, ein Sturz dort hin,
das ist doch Lebensdisziplin!
Wenn's schiefgeht, läuft's am besten —
wer fällt, hat wenigstens Schwung!

[Strophe 2]
Ein Schraubenschlüssel fällt ins Bier,
die Suppe spritzt — na und? passiert!
Ich wisch das Chaos mit Humor,
das hat mir schon als Kind geholfen.

[Refrain]
Wenn's schiefgeht, läuft's am besten,
die Welt ist nie perfekt!
Ein Schuss daneben kann dich testen —
ob du dich selbst entdeckst!
Ein Stolpern mehr, ein Sprung zu viel,
das nennt man Leben mit Gefühl.
Wenn's schiefgeht, läuft's am besten —
Hauptsache, man bleibt echt!

[Bridge]
Ich hab gelernt: Wer lacht, gewinnt,
auch wenn die Gans mal schwarz gerinnt.
Denn ernst zu sein, ist leicht gesagt —
doch lustig sein ist große Tat!

[Finale]
So dreh dich mit, mein Freund, im Kreis,
das Leben ist nicht immer leis.
Doch wenn du fällst, dann lach gefasst —
weil's dann am besten passt!`,
  },
  {
    id: "claudia-das-stille-herz",
    slug: "claudia-das-stille-herz",
    title: "Claudia – Das stille Herz",
    albumId: "lieder-eines-lebens",
    trackNumber: 19,
    audioSrc: "/audio/vater/18-claudia-das-stille-herz.mp3",
    coverImage: "/covers/vater/18-claudia-das-stille-herz.png",
    description: {
      en: "A warm orchestral ballad — a tender portrait of Claudia, the quiet heart who carries on.",
      de: "Eine warme Orchesterballade — ein zartes Portrait von Claudia, dem stillen Herz, das weiter trägt.",
    } as any,
    lyrics: `Ein Kind, das früh die Schatten kannte,
das leise blieb, wenn andre schrien.
In ihrem Blick die alte Stunde,
die niemand je verstand, noch sah.

Sie trug das Schweigen wie ein Kleid,
das Zeit und Schmerz zusammenhält.
Und wenn der Wind nach Süden weht,
trägt er ihr Lächeln durch die Welt.

Sie lief den langen Weg allein,
auf Feldern, wo die Stimmen schweigen.
Doch aus der Stille wuchs ein Sein,
das stark blieb, ohne sich zu zeigen.

[Bridge]
Und Jahre kamen, Jahre gehn,
sie blieb, wo andre weiterziehen.
Ein fester Halt, ein stilles Licht,
das niemand sucht und doch verspricht.

[Finale]
Claudia — das stille Herz,
du trägst das Leben ohne Schmerz.
In deinen Händen ruht der Tag,
den keiner leben, keiner fragen mag.

Du bist das Herz, das weiter schlägt,
wenn alles andre still vergeht.
Im Abendlicht, so klar, so mild,
verweht dein Schatten, bleibt dein Bild.`,
  },
  {
    id: "dein-feuer-ist-mein-feuer",
    slug: "dein-feuer-ist-mein-feuer",
    title: "Dein Feuer ist mein Feuer",
    albumId: "lieder-eines-lebens",
    trackNumber: 20,
    audioSrc: "/audio/vater/19-dein-feuer-ist-mein-feuer.mp3",
    coverImage: "/covers/vater/19-dein-feuer-ist-mein-feuer.png",
    description: {
      en: "A grand opera about inherited fire — the same passionate spirit that drives father and son.",
      de: "Eine große Oper über ererbtes Feuer — derselbe leidenschaftliche Geist, der Vater und Sohn antreibt.",
    } as any,
    lyrics: `Ich seh in dir denselben Sturm,
der mich mein Leben trieb.
Nicht zahm, nicht mild, kein sanfter Turm —
ein Feuer, das nicht blieb.

[Arie I]
Dein Feuer ist mein Feuer,
es brennt, wie meines brennt.
Es sucht sich Bahn durch Stahl und Stein,
wo keiner Ordnung kennt.

„Er sah sich selbst im neuen Blut,
der Geist, der Funken schlägt und ruht."

[Arie II]
Wir sind kein leises Erbe,
wir sind, was bricht und schafft.
Kein Wort, das sich dem Sturm ergibt,
kein Geist, der still erschlafft.

[Bridge]
Ich weiß, du kämpfst, wie ich gekämpft,
gegen die Wände aus Vernunft.
Doch wer den Brand im Herzen trägt,
kennt auch des Lebens Zunft.

„Zwei Feuer, die ein Schicksal sind,
verbrennen Welt, erschaffen Wind."

[Arie III]
Dein Feuer ist mein Feuer,
es löscht, es brennt, es heilt.
Und was die Zeit uns trennen mag,
im Licht bleibt's unverteilt.

[Finale]
Wir sind das Werk, das keiner zähmt,
der Funkenflug, der ewig lebt.
Im Denken wild, im Handeln frei —
so brennt die Zeit vorbei!

Dein Feuer ist mein Feuer,
solang die Welt sich dreht.
Und wenn sie fällt —
es weitergeht.`,
  },
  {
    id: "wenn-ich-nicht-mehr-sprech",
    slug: "wenn-ich-nicht-mehr-sprech",
    title: "Wenn ich nicht mehr sprech'",
    albumId: "lieder-eines-lebens",
    trackNumber: 21,
    audioSrc: "/audio/vater/20-wenn-ich-nicht-mehr-sprech.mp3",
    coverImage: "/covers/vater/20-wenn-ich-nicht-mehr-sprech.png",
    description: {
      en: "A majestic finale — a philosopher's farewell, asking those who remain to keep thinking freely.",
      de: "Ein majestätisches Finale — ein philosophischer Abschied mit der Bitte, weiter frei zu denken.",
    } as any,
    lyrics: `[Rezitativ]
Ich hab gebaut mit Hand und Geist,
nicht aus Gold, doch aus Fleiß.
Ich ließ die Welt, wie sie mich fand,
und nahm nichts mit — nur Verstand.

[Arie I]
Wenn ich nicht mehr sprech',
dann hört in euch hinein.
Die Stimme bleibt, das Denken wächst,
ihr seid das Echo mein.

„Er dachte frei… er blieb sich treu…"

[Arie II]
Verbrennt nicht, was euch lehrt zu sehn,
zerredet nicht, was soll bestehn.
Die Welt wird laut, die Zeit wird klein —
drum bleibt im Denken groß und rein!

Bleibt im Denken groß und rein!
Hört des Geistes leises Sein!

[Bridge]
Ich war nur Mensch, mit Zweifel schwer,
doch suchte ich das Wahre mehr.
Und wenn ihr je im Dunkel steht —
fragt, was im Kopf noch weitergeht.

„Was im Kopf noch weitergeht…"

[Finale]
Ich bin nicht fort, ich bin in euch,
in Hand, in Werk, in klarem Zeug.
Solang ihr fragt, warum, wozu —
bin ich noch da — und hör euch zu.

Er hört uns zu! Er bleibt, er geht!
Was denkt — vergeht nicht, was besteht!`,
  },
];
