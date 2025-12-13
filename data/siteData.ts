// data/siteData.ts

import { Album, Track } from "@/types/music";
import { AboutContent, SiteLinks } from "@/types/site";

/* -----------------------------------------------------------
   ALBUMS
----------------------------------------------------------- */

export const albums: Album[] = [
  {
    id: "for-maylo",                       // Internal ID used by albumId in tracks[]
    slug: "just-one-more-day",             // URL: /music/just-one-more-day
    title: "Just One More Day" as any,
    subtitle: { en: "A Memorial Release for Maylo", de: "Eine Gedenkveröffentlichung für Maylo" } as any,
    description: { 
      en: "A cycle of songs about grief, love, and remembrance.", 
      de: "Ein Zyklus von Liedern über Trauer, Liebe und Erinnerung."
    } as any,
    releaseDate: "2025-02-14",
    coverImage: "/covers/Just_one_more_day.jpg",
    tracks: [
      "just-one-more-day",
      "when-the-morning-comes",
      "at-the-gate",
      "brush-me-gently",
      "echoes",
      "final-glow",
      "move-on",
      "stay-while-you-go",
      "still-in-the-rain",
      "still-water-in-your-bowl",
      "tides-between-us",
      "you-taught-me-joy",
    ],
    streaming: {
      spotify: "https://open.spotify.com/album/xyz",
    },
  },
];

/* -----------------------------------------------------------
   TRACKS
----------------------------------------------------------- */

export const tracks: Track[] = [
  {
    id: "just-one-more-day",
    slug: "just-one-more-day",
    title: "Just One More Day",
    albumId: "for-maylo",
    trackNumber: 1,
    audioSrc: "/audio/Just-One-More-Day.mp3",
    coverImage: "/covers/Just_one_more_day.jpg",
    description: { 
      en: "\"Just One More Day\" was born in a time when our everyday life slowly fell apart. We first went to the vet because of a slight limp — a small sign that turned into a fatal diagnosis. While we were only slowly grasping those words, Maylo still seemed almost like himself. He walked, he was happy, he sought our closeness. But soon, each day began to change.\n\nThere were good days and there were less good ones. Yet even the good days felt different — rarer, more fragile, shorter. And each of those ‘good’ days was never as good as the one before. This downward spiral carried a quiet, constant helplessness: the certainty that you cannot stop the course, and at the same time the desperate wish to hold on to every small moment that was still light and warm.\n\nThis song processes exactly this state between hope and loss. It describes the longing for one more day when everything could feel a little lighter again. A day when you can forget what inevitably draws closer. A day that is enough to catch your breath — even when you know it might be the last of its kind.", 
      de: "\"Just One More Day\" entstand in einer Zeit, in der unser Alltag langsam auseinanderfiel. Wir waren ursprünglich nur wegen eines leichten Humpelns beim Tierarzt - ein kleines Zeichen, das sich als tödliche Diagnose entpuppte. Während wir diese Worte erst langsam verstanden, wirkte Maylo noch fast wie immer. Er lief, er freute sich, er suchte unsere Nähe. Doch schon bald begann sich jeder Tag zu verändern.\n\nEs gab gute Tage und es gab weniger gute. Doch selbst die guten Tage fühlten sich anders an - sie waren seltener, brüchiger, kürzer. Und jeder dieser „guten“ Tage war nie wieder so gut wie der vorherige. Diese Abwärtsspirale brachte eine stille, konstante Hilflosigkeit mit sich: die Gewissheit, dass man den Verlauf nicht aufhalten kann, und gleichzeitig der verzweifelte Wunsch, jeden kleinen Moment festzuhalten, der noch leicht und warm war.\n\nDieses Lied verarbeitet genau diesen Zustand zwischen Hoffnung und Verlust. Es beschreibt die Sehnsucht nach einem weiteren Tag, an dem alles noch einmal ein bisschen leichter sein könnte. Ein Tag, an dem man vergessen kann, was unausweichlich näher rückt. Ein Tag, der reicht, um durchzuatmen - selbst wenn man weiß, dass er der letzte dieser Art sein könnte."
    } as any,
    lyrics: "The morning light breaks soft and slow,\nYour breath is calm, your eyes still glow.\nThough shadows whisper at the door,\nI pray for time - just one day more.\n\nHold on a little longer, love,\nThe sky still paints in shades above.\nDon't let the silence take its claim,\nLet laughter call you back by name.\n\nJust one more day to feel the sun,\nTo chase the wind, to simply run.\nOne more time to laugh and play,\nTo steal the dark - just one more day.\nLet's dance before the music fades,\nAnd light one fire before it wanes.\nGive me your paw, don't slip away -\nJust one more day… just one more day.\n\nThe world turns quiet, soft and kind,\nAs if it knows we're out of time.\nBut I still see that spark in you,\nA beating heart that's strong and true.\n\nThe moments pass, but not in vain,\nEach step with you was worth the pain.\nSo smile for me, just like before -\nWe're not yet through, there's still one more.\n\nJust one more day beneath the trees,\nOne final breath, one gentle breeze.\nOne more game, one last hooray,\nA tail that wags - just one more day.\nBefore the night can call your name,\nLet's run through fields like yesterday.\nStay in this light, don't drift away -\nJust one more day… just one more day.\n\nAnd when the time comes, I will know,\nI'll let you go… I'll let you go.\nBut not before we chase the light,\nAnd bark against the falling night.\n\nJust one more day to be your home,\nTo hold you close, to not feel alone.\nOne more smile, one last bouquet,\nOf memories that choose to stay.\nSo if you can, just fight, just stay -\nLet's live, my love… just one more day.\nLet's live, my love… just one more day.",
  },
  {
    id: "when-the-morning-comes",
    slug: "when-the-morning-comes",
    title: "When the Morning Comes",
    albumId: "for-maylo",
    trackNumber: 2,
    audioSrc: "/audio/When-the-Morning-Comes.mp3",
    coverImage: "/covers/When-the-Morning-comes.jpg",
    description: { 
      en: "This song deals with the realization that the illness is deteriorating faster and faster. The walks became shorter, the enthusiasm fades, the strength wanes, yet the spark is still there. The end is in sight and seems to be coming at us faster and faster. Every beautiful moment has a value that money can't buy, but time is running out. Eyes and hearing are getting worse, he sleeps a lot, and his appetite is decreasing. We have no choice but to watch the process and try everything to keep him pain-free for as long as possible and cherish the last happy moments.", 
      de: "Dieses Lied beschäftigt sich mit der Erkenntnis, dass sich die Krankheit immer schneller verschlechtert. Die Hunderunden wurden kürzer, die Begeisterung lässt nach, die Kraft schwindet, doch der Funke ist noch da. Das Ende ist in Sicht und scheint immer schneller auf uns zu zu kommen. Jeder schöne Augenblick hat einen Wert, der mit Geld nicht zu kaufen ist, doch die Zeit läuft uns davon. Augen und Gehör werden schlechter, er schläft sehr viel, und der Appetit wird weniger. Uns bleibt keine Wahl, als den Prozess zu beobachten und alles zu versuchen, um ihn so lange wie möglich schmerzfrei zu halten und die letzten, glücklichen Momente mitzunehmen."
    } as any,
    lyrics: "The steps are small, the nights are long,\nThe house is quiet, but your scent's still strong.\nYou try to stand, then drift away,\nYour eyes still search for light in gray.\n\nI whisper words you cannot hear,\nMy trembling hands still pull you near.\nIf love could heal, you'd never fade,\nBut love just watches, helpless, afraid.\n\nWhen the morning comes, I pray you sleep,\nNo pain, no fear, no hill too steep.\nJust dreams of grass and skies of blue,\nWhere every breath feels fresh and new.\nI'll stay right here until you're gone -\nPlease go in peace, my little one.\n\nYou lift your head, then let it fall,\nA tiny sigh - that's all, that's all.\nEach day a little more you tire,\nBut still your soul, it won't retire.\n\nI see the spark that used to shine,\nNow fading slow, but still it's mine.\nIf love could trade, I'd give my years,\nTo free your heart from pain and tears.\n\nWhen the morning comes, I'll let you be,\nBeyond the clouds, you'll run so free.\nNo weight, no ache, no trembling bones,\nJust open fields and gentle tones.\nI'll close your eyes, my dearest friend -\nAnd hope that sleep will be the end.\n\nDon't be afraid, don't turn around,\nThe world will hold you safe and sound.\nI'll keep your bed, your favorite toy,\nAnd every memory, every joy.\n\nWhen the morning comes, I'll see the sun,\nAnd know your pain at last is done.\nNo more to fight, no more to stay -\nYou've earned your rest, just drift away.\nI'll love you still, beyond the dawn…\nWhen the morning comes, you'll carry on.",
  },
  {
    id: "brush-me-gently",
    slug: "brush-me-gently",
    title: "Brush Me Gently",
    albumId: "for-maylo",
    trackNumber: 3,
    audioSrc: "/audio/Brush-Me-Gently.mp3",
    coverImage: "/covers/Brush-me-Gently.jpg",
    description: { 
      en: "\"Brush Me Gently\" tells the story of a ritual that was barely recognizable as such in the beginning. Maylo was a poodle - and grooming was mandatory. But he hated it. Every brush was foreign to him, uncomfortable, too much. So we started very carefully: just briefly, only with the back of the brush, almost symbolic. It was less about brushing than about building trust.\n\nWe did it every morning, without exception. One minute, then two, then a little bit more. Patience became the key - and perseverance became a quiet conversation between the two of us. Over time, he allowed more and more. He learned that this ritual was not a threat, but a moment of closeness. Eventually he relaxed. He let himself be brushed, even on his belly - something I couldn't have imagined at the beginning.\n\nAt the end of his life, this ritual was more than just grooming. It was one of the few moments that still visibly brought him joy. The brush he once rejected became something comforting. A gentle connection between us that remained until the very end.\n\nThis song captures that evolution: from resistance to surrender, from a moment of duty to one of the most tender little moments we had left.", 
      de: "\"Brush Me Gently\" erzählt die Geschichte eines Rituals, das anfangs kaum als solches zu erkennen war. Maylo war Pudel - und Fellpflege war Pflicht. Aber er hasste es. Jede Bürste war ihm fremd, unangenehm, zu viel. Also begannen wir ganz vorsichtig: nur kurz, nur mit der Rückseite der Bürste, fast symbolisch. Es ging weniger ums Bürsten als darum, Vertrauen aufzubauen.\n\nWir machten es jeden Morgen, ohne Ausnahme. Eine Minute, dann zwei, dann ein kleines bisschen mehr. Geduld wurde zum Schlüssel - und Ausdauer zu einem stillen Gespräch zwischen uns beiden. Mit der Zeit ließ er immer mehr zu. Er lernte, dass dieses Ritual keine Bedrohung war, sondern ein Moment der Nähe. Irgendwann entspannte er sich. Er ließ sich bürsten, sogar am Bauch - etwas, das ich mir zu Beginn nicht hätte vorstellen können.\n\nAm Ende seines Lebens war dieses Ritual mehr als nur Pflege. Es war einer der wenigen Momente, die ihm noch sichtbar Freude bereiteten. Die Bürste, die er früher ablehnte, wurde zu etwas Tröstlichem. Einer sanften Verbindung zwischen uns, die bis zum Schluss blieb.\n\nDieses Lied hält diese Entwicklung fest: vom Widerstand zur Hingabe, vom Pflichtmoment zu einem der zärtlichsten kleinen Augenblicke, die uns geblieben sind."
    } as any,
    lyrics: "No wagging tail when breakfast comes,\nThe bowl untouched, the silence hums.\nNo eager steps to greet the door,\nThe leash untouched upon the floor.\n\nThe toys lie still, the park can wait,\nThe world outside no longer great.\nI turn away from every call,\nToo tired to chase, too weak to fall.\n\nBut brush me gently, just like before,\nThat simple touch I once ignored.\nThe bristles pass through fur and bone,\nAnd in that moment, I'm not alone.\nIt's not the food, or ball, or run -\nIt's this soft ritual we've begun.\n\nYou used to flinch and bare your teeth,\nEach brush a fight, a war beneath.\nYou'd growl and tremble, tense and still,\nAfraid of touch, against your will.\n\nYou talk to me in whispered tones,\nYou tell me I'm your heart, your home.\nAnd though the day is hard and gray,\nYour hand still finds a gentle way.\n\nSo brush me gently, take your time,\nLet every stroke be slow and kind.\nI close my eyes, and start to sway,\nAs if the pain can drift away.\nThis tender touch, so warm, so true -\nMy favorite part of every day… is you.\n\nWhen I am gone and skies are blue,\nKeep that brush - I'll be there too.",
  },
  {
    id: "you-taught-me-joy",
    slug: "you-taught-me-joy",
    title: "You Taught Me Joy",
    albumId: "for-maylo",
    trackNumber: 4,
    audioSrc: "/audio/You-Taught-Me-Joy.mp3",
    coverImage: "/covers/joy.jpg",
    description: { 
      en: "When Maylo came to us, he didn't know how to play with a ball or romp in the garden. He was withdrawn and basically just wanted to be left alone. The concept that you can have fun playing with a ball was something he first learned from a guest dog when we played with him in the garden. It literally \"clicked\" when he realized that you can chase balls. Long before we got the diagnosis, his eyes got worse, but his nose still worked. Even though he could no longer see the ball flying, he searched for the ball in the garden with great joy and enthusiasm. We had the impression that he was discovering the concept of fun and play for the very first time. His joy and enthusiasm were contagious and he literally blossomed.", 
      de: "Als Maylo zu uns kam, kannte er kein Ballspielen, kein Toben im Garten. Er war zurückgezogen und wollte eigentlich nur in Ruhe gelassen werden. Das Konzept, dass man Spaß mit Ballspielen haben kann, hat er erst durch einen Gast-Hund gelernt, als wir mit ihm im Garten gespielt haben. Es hat förmlich \"klick\" gemacht, als er erkannte, dass man Bälle jagen kann. Lange bevor wir die Diagnose bekamen, wurden seine Augen schlechter, aber die Nase funktionierte noch. Auch wenn er den Ball nicht mehr fliegen sehen konnte, hat er mit viel Spaß und Begeisterung den Ball im Garten gesucht. Wir hatten den Eindruck, dass er zum ersten mal überhaupt das Konzept von Spaß und Spiel für sich entdeckte. Seine Freude und Begeisterung waren ansteckend und er blühte förmlich auf."
    } as any,
    lyrics: "You came with teeth and trembling feet,\nA storm of fear in something sweet.\nYou barked at hands, you snapped at air,\nA wounded soul too scared to care.\n\nBut little steps and quiet days,\nA gentle voice, a softer way -\nYou learned to trust, you learned to stay,\nAnd slowly fear just slipped away.\n\nYou taught me joy, you taught me grace,\nWith every tail-wag, every chase.\nFrom every bark to every run,\nYou turned our days into the sun.\nNo diamond shines, no gold can buy\nThe way you looked into my eye.\nYou gave me more than words can say -\nAnd made me smile each single day.\n\nYou spun in circles, full of glee,\nWhen I held up your ball for thee.\nWe biked through fields and laughed so loud,\nYou small and proud, your chest so proud.\n\nA leash, a brush, a winding path,\nYour little jumps, your goofy laugh.\nYou never asked, just always gave -\nAnd carved your love in every day.\n\nYou taught me joy, you taught me peace,\nYou let your battles slowly cease.\nAnd when I needed light or rest,\nYou simply curled against my chest.\nNo treasure found, no poem penned\nCould match the gift you chose to send:\nA heart reborn, a trust rebuilt -\nA soul redeemed with love and will.\n\nIf I could hold time still, I would…\nTo walk again through field and wood.\nBut now I whisper, through the noise:\nThank you, my friend",
  },
  {
    id: "still-in-the-rain",
    slug: "still-in-the-rain",
    title: "Still in the Rain",
    albumId: "for-maylo",
    trackNumber: 5,
    audioSrc: "/audio/Still-in-the-Rain.mp3",
    coverImage: "/covers/rain.jpg",
    description: { 
      en: "This song was created in the last week that Maylo spent on Earth. Maylo was always extremely afraid of water. When it rained, he didn't want to go out even with a rain cape. At this point, however, he didn't care, and that was the worst part. Because somehow it was clear that at this point there was no more hope. From now on it was only a matter of time. There would be no more beautiful days - only the oppressive question of when the last day would come.", 
      de: "Dieses Lied entstand in der letzten Woche, die Maylo auf der Erde verbracht hat. Maylo war immer extrem wasserscheu. Wenn es regnet, wollte er auch mit Regencape nicht hinaus. An diesem Punkt war es ihm aber egal, und das war das Schlimmste. Denn irgendwie war klar, dass an diesem Punkt keine Hoffnung mehr bestand. Ab jetzt war es nur noch eine Frage der Zeit. Es würde keine schönen Tage mehr geben - nur noch die beklemmende Frage, wann der letzte Tag kommen würde."
    } as any,
    lyrics: "It's cold out here,\nbut I won't move.\nYou're lying still,\nand that's the truth.\nThe rain don't care,\nthe world feels gray -\nBut I ain't leavin'\nif you wanna stay.\n\nYour fur is soaked,\nmy robe is thin.\nBut I'd do it all\nand back again.\nYou didn't cry,\nyou didn't call -\nYou just lay down\nand lost it all.\n\nStill in the rain,\nI hold your name.\nDon't need a prayer,\ndon't need no flame.\nJust this breath,\njust this skin,\nJust this love\nwe're drowning in.\n\nYou don't ask much,\nyou never did.\nNo fight to give,\nno strength to hid.\nBut I still feel\nyour heartbeat low,\nAnd as long as it's there -\nI won't let go.\n\nStill in the rain,\nI hold your name.\nDon't need no light,\ndon't need no day.\nJust this night\nwe're layin' through -\nJust this silence…\nMe and you.",
  },
  {
    id: "stay-while-you-go",
    slug: "stay-while-you-go",
    title: "Stay While You Go",
    albumId: "for-maylo",
    trackNumber: 6,
    audioSrc: "/audio/Stay-While-You-Go.mp3",
    coverImage: "/covers/while-you-go.jpg",
    description: { 
      en: "I've often heard that dogs retreat to die, but I had never experienced it. Until now. As every morning, I take him to the garden so he can relieve himself. Normally he goes to the nearest bush, does his business, and I can carry him back inside. I'm only wearing a bathrobe. It's November and it's raining. But this time he drags himself to the farthest corner of the garden and lies down in the wet grass. For a moment I am tempted to respect his will. But I can't bring myself to do it. Carefully I lift him up and bring him inside, cover him up, and stay with him. I want to hold him tight, but I feel that he wants to be alone. So I just stay there, keep him warm, and let him sleep.", 
      de: "Ich habe schon oft gehört, dass sich Hunde zum Sterben zurück ziehen, doch ich habe es noch nie erlebt. Bis jetzt. Wie jeden Morgen setzte ich ihn in den Garten, damit er Wasser lassen kann. Normalerweise geht er zum nächsten Busch, macht sein Geschäft, und ich kann ihn wieder rein tragen. Ich habe nur einen Bademantel an. Es ist November und es regnet. Doch diesmal schleppt er sich in die hinterste Ecke des Gartens und legt sich ins nasse Graß. Für einen Moment bin ich versucht, seinen Willen zu respektieren. Doch ich kann es nicht über mich bringen. Behutsam hebe ich ihn auf und bringe ihn rein, decke ihn zu, und bleibe bei ihm. Ich möchte ihn fest an mich drücken, doch ich fühle, dass er alleine sein möchte. Also bleibe ich einfach nur da, halte ihn warm, und lass ihn schlafen."
    } as any,
    lyrics: "You walked out to the rain,\nto find a place\nthe world can't reach.\nA corner cold,\na quiet ground,\nwhere no one asks you\nto hold on.\n\nI couldn't leave you there,\nnot soaked,\nnot shivering,\nnot small in the November dark.\nSo I carried you inside -\nbut I didn't take\nyour choice away.\n\nI'll stay\nwhile you go.\nNot holding you back,\nnot pulling you close.\nJust breathing near you,\nwarm in the glow -\nI'll stay…\nwhile you go.\n\nYou lie there now,\non your blanket,\neyes half-open,\nhalf beyond.\nI'm on the floor beside you,\nbut I keep my hands\nto myself.\nYou wanted to leave alone -\nI'm just making sure\nyou're warm.\n\nI'll stay\nwhile you go.\nYou don't have to see me,\nyou don't have to know.\nI'm only a shadow,\nsoft on the floor -\nI'll stay…\nwhile you go.\n\nEveryone leaves alone.\nI know.\nI won't try\nto hold the soul\nyou're already letting go.\nBut I won't walk away,\nnot now,\nnot tonight.\nYou chose the dark -\nI'll give you light.\n\nI'll stay\nwhile you go.\nOne heart close,\none heart slow.\nWhen your last breath\nwhispers low,\nI'll stay…\nI'll stay…\nwhile you go.",
  },
  {
    id: "final-glow",
    slug: "final-glow",
    title: "Final Glow",
    albumId: "for-maylo",
    trackNumber: 7,
    audioSrc: "/audio/Final-Glow.mp3",
    coverImage: "/covers/Final-Glow.jpg",
    description: { 
      en: "After he retreated to the garden, he also stopped eating. When I wake up in the morning, I fear and hope at the same time that he may have died. We increased the pain medication and hoped that he would slip away gently. I stay with him, near him, carry him to the water and take care of him as best I can. But there isn't much I can do anymore. We realize that it can only be a matter of days or hours.", 
      de: "Nachdem er sich in dem Garten zurück gezogen hatte, hat er auch aufgehört, zu fressen. Wenn ich morgens aufwache, fürchte und hoffe ich zugleich, dass er gestorben sein mag. Wir erhöhten die Schmerzmedikation und hofften, dass er sanft hinüber gleitet. Ich bleibe bei ihm, in seiner Nähe, trage ihn zum Wasser und kümmere mich so gut um ihn, wie es geht. Doch es gibt nicht mehr viel, was ich tun kann. Uns ist klar, dass es nur noch eine Frage von Tagen oder Stunden sein kann."
    } as any,
    lyrics: "I kneel beside you in half-light,\nyour breath is thin, your body still.\nYour eyes look through me like a ghost,\nas if you've gone, against your will.\nI search your face for something warm,\na flicker deep beneath the haze -\nbut all I find is quiet stone,\nand shadows where you used to blaze.\n\nI wonder if you know I'm here,\nif somewhere you still feel my name.\nI whisper soft, I barely move,\ntoo scared to call, too lost to blame.\nBut silence holds you like a shroud,\nand nothing stirs beneath your skin.\nI stare into what once was fire -\nand wonder if you're still within.\n\nI look into your eyes,\nbut the spark is gone.\nI ask the dark inside of you,\nif I should help you move along.\nThen softly, like a memory,\nyou breathe in, nose to skin -\nand for a breath, you know it's me -\nbefore you fade again.\n\nWhat if that was all that's left -\none final glow before the close?\nA distant flare, a trembling thread,\nthe parting hush that mercy knows.\nI don't reach out, I hold the air.\nI wait with nothing left to say.\nAnd if you go, you go alone -\nbut I won't look away.\n\nI look into your eyes,\nand the spark is gone.\nI search the space where you once burned,\nbut find no light to lean upon.\nThen just before the silence wins,\nyou breathe the scent of home -\nand for one second, you return -\nbefore you turn to stone.\n\nI will know.\nNot by words. Not by sound.\nBut when your eyes no longer search…\nand the spark won't come around.\nThen go.\nI'll stay.\nI will know.",
  },
  {
    id: "at-the-gate",
    slug: "at-the-gate",
    title: "At the Gate",
    albumId: "for-maylo",
    trackNumber: 8,
    audioSrc: "/audio/At-the-gate.mp3",
    coverImage: "/covers/Gate.jpg",
    description: { 
      en: "The decision to end your beloved pet's life to spare them further suffering is one of the most difficult things one can be asked to do. After all, you can't ask them. But after he retreated to the garden and stopped eating completely, we knew that the time had come. With heavy hearts, we made an appointment at the vet.", 
      de: "Die Entscheidung, das Leben seines geliebten Haustiers zu beenden, um ihm weiteres Leid zu ersparen, ist eine der schwierigsten Dinge, die von einem abverlangt werden können. Man kann ihn schließlich nicht fragen. Doch nachdem er sich in den Garten zurückgezogen hatte und das Fressen komplett eingestellt hatte, war uns klar, dass die Zeit gekommen war. Schweren Herzen haben wir einen Termin beim Tierarzt gemacht."
    } as any,
    lyrics: "There's a path that only opens\nwhen the daylight starts to fade.\nYou're tired from all the miles\nthat your little heart has made.\nI walk with you in silence,\nevery step a softer beat,\nthe shadows growing longer\non a road I cannot meet.\n\nAnd though your breaths are slowing\nlike a lantern in the rain,\nyou look at me, and something says\nit's time to end the pain.\n\nSo I'll bring you to the gate, love,\nwhere the golden grasses sway.\nI'll stand and watch you crossing,\nthough I wish that you could stay.\nDon't turn around to find me-\nthis road is yours alone.\nBut if there's light beyond the hill,\nI hope it guides you home.\n\nYour paws have walked through summer,\nthrough the storms and through the cold.\nYour joy was always louder\nthan the fear you sometimes showed.\nNow every leaf is trembling\nlike it knows the hour's near,\nand though my voice is steady,\nI'm breaking through the fear.\n\nYour heartbeat whispers gently\nlike a tide that's drawing back-\na promise soft and wordless\nin the dusk along the track.\n\nSo I'll bring you to the gate, love,\nwhere the fading sunlight bleeds.\nI'll watch you step beyond me,\nbeyond the pull of earthly needs.\nDon't turn around to find me-\nthis road is yours alone.\nBut if there's light beyond the hill,\nI hope it guides you home.\n\nAnd maybe in some quiet dusk\nthat hasn't happened yet,\nI'll hear your little footsteps\nwhere the sky and river set.\nI'll know you by your laughter,\nby the way you greet the wind-\na soul that walked beside me,\na soul I'd choose again.\n\nSo I bring you to the gate now,\nas the evening drifts to blue.\nYou walk where I can't follow-\nbut my heart walks on with you.\nI won't call out to hold you,\nI'll let your twilight roam.\nAnd if there's light beyond the hill,\nI know it leads you home.",
  },
  {
    id: "tides-between-us",
    slug: "tides-between-us",
    title: "Tides Between Us",
    albumId: "for-maylo",
    trackNumber: 9,
    audioSrc: "/audio/Tides-Between-Us.mp3",
    coverImage: "/covers/tides.jpg",
    description: { 
      en: "The moment we feared for so long is here. The last journey, the last moments together. Is it too late? Too early? This decision is irreversible, but at this point, continuing to live would have only meant pain and agony for Maylo. We want to remember the beautiful moments and not prolong his suffering. The time has come to let him go, no matter how hard it is. At the same time, it is also a relief to know that his pain is now over and the hope that death is not the end, but only a new beginning.", 
      de: "Der Moment, vor dem wir uns so lange gefürchtet haben, ist da. Die letzte Reise, die letzen Moment gemeinsam. Ist es zu spät? Zu früh? Diese Entscheidung is unumkehrbar, doch an diesem Punkt wäre ein Weiterleben für Maylo nur noch Schmerzen und Qual gewesen. Wir möchten die schönen Momente in Erinnerung behalten und nicht sein Leiden noch verlängern. Die Zeit ist gekommen, ihn loszulassen, auch wenn es noch so schwer fällt. Gleichzeitig ist es auch eine Erleichterung, zu wissen, dass seine Schmerzen nun vorbei sind und die Hoffnung, dass der Tod nicht das Ende, sondern nur ein neuer Anfang ist."
    } as any,
    lyrics: "I held you close while morning broke,\na breath, a tremble in your chest.\nThe world fell silent as you slipped\nfrom weight to weightlessness.\nMy hands were shaking, keeping you,\nyet losing you with every sigh -\na tide I couldn't stop from turning,\npulling you from my side.\n\nI'm not hurting now,\nI'm not frightened anymore.\nI'm running where the grass is tall,\nand nothing pulls me sore.\nYou stayed until the gates were warm,\nyou stayed through every storm.\nDon't cry for me, my heart is light -\nI'm finally reborn.\n\nThe room still holds your fading warmth,\nyour brush, your bowl, your empty place.\nI try to breathe, but every breath\nremembers how you looked at me.\nIt breaks me that I had to choose\nthe moment you would be released -\nbut love is cruel in mercy's shape,\nand mercy's shape is peace.\n\nI'm not hurting now,\nno shadows on my sand-soft bones.\nI'm lighter than the breeze that moves\nthrough fields I walk alone.\nYou gave me all the days I had,\nthe gentlest goodbye.\nDon't hold your breath in sorrow's tide -\njust lift your eyes to mine.\n\nI break and mend in waves that crash.\nI rise in waves that carry high.\nI want you back for one more day.\nBut here I soar, here I can fly.\nI'd trade my years to keep you near.\nYou gave me all I needed here.\nLove aches… and love sets free.\n\nI'm not hurting now,\nthough I'm hurting still -\nyou're running far beyond the hill.\nYour little life, my steady hands,\nnow free to run on brighter lands.\nI'll stand right here, between the tides -\ngone from my arms, but not my side.\nWhen grief pulls in and peace pulls out,\nwe'll meet where neither tide runs out.",
  },
  {
    id: "still-water-in-your-bowl",
    slug: "still-water-in-your-bowl",
    title: "Still Water in Your Bowl",
    albumId: "for-maylo",
    trackNumber: 10,
    audioSrc: "/audio/Still-water-in-your-bowl.mp3",
    coverImage: "/covers/stillwaterinyourbowl.jpg",
    description: { 
      en: "Coming home without a dog is surreal. It seems as if he's just briefly in the garden. Everything is still in its place, but the sounds are missing. No claws on the parquet, no shaking, no tail wagging. No head lifting when you get up. There is still water in his bowl that he will no longer drink. He has left us, but the heart has not yet understood. The moment of waking up is the worst. The first morning and before the mind kicks in, the heart feels the loss - and hits you like a punch in the gut.", 
      de: "Ohne Hund nach Hause zu kommen, is surreal. Es wirkt so, als wäre er nur kurz im Garten. Alles liegt noch an seinem Platz, doch die Geräusche fehlen. Keine Krallen auf dem Parkett, kein Schütteln, kein Schwanzwedeln. Kein Kopf, der sich hebt, wenn man aufsteht. Es ist noch Wasser in seinem Napf, das er nicht mehr trinken wird. Er ist von uns gegangen, doch das Herz hat es noch nicht verstanden. Der Moment des Aufwachens ist das Schlimmste. Der erste Morgen und bevor der Verstand einsetzt, spürt das Herz den Verlust - und trifft einen wie ein Schalg in die Magengrube."
    } as any,
    lyrics: "I woke before I knew it,\nwith a feeling sharp and wrong -\na quiet where a heartbeat lived,\na stillness far too strong.\nMy body reached for rhythm,\nfor the sounds you always made -\nbut nothing moved to meet me\nand the morning slowly frayed.\n\nI walk like you're behind me,\nthough I know that's not the case.\nEvery shadow tricks my eyes\ninto searching for your face.\n\nThere is still water in your bowl -\nand the silence feels too loud.\nBecause you're gone, but everything\nyou touched still holds its ground.\nYour leash still hangs beside the door,\nyour brush waits evermore.\nThere is still water in your bowl -\nand I break a little more.\n\nI woke to air that felt too still,\na room that didn't breathe the same.\nNo tapping paws to meet the day,\nno warmth that softly came.\nBefore the thought could form itself,\nmy chest already knew -\nsome part of home was hollow,\nsome part was missing you.\n\nI turn at every corner,\nlike you might be waiting still.\nBut every shadow breaks that hope\nand leaves me standing still.\n\nThere is still water in your bowl -\nand the silence feels too loud.\nBecause you're gone, but everything\nyou touched still holds its ground.\nYour leash still hangs beside the door,\nyour brush waits evermore.\nThere is still water in your bowl -\nand it breaks me even more.\n\nYour rhythm ruled the rooms once,\nyour pattern shaped my days.\nA shake, a sigh, a tiny step -\nyour soft and constant ways.\nNow every beat is missing,\nthe melody undone -\nand I stand inside the silence\nwhere your music once was spun.\n\nThere is still water in your bowl -\nand the silence stays too loud.\nYou're gone, and yet this little world\nstill waits without a sound.\nYour leash still hangs beside the door,\nyour brush waits evermore.\nThere is still water in your bowl -\nand I break a little more.",
  },
  {
    id: "echoes",
    slug: "echoes",
    title: "Echoes",
    albumId: "for-maylo",
    trackNumber: 11,
    audioSrc: "/audio/Echoes.mp3",
    coverImage: "/covers/echoes.jpg",
    description: { 
      en: "The first days have passed. We start to put Maylo's things away. The loss somehow becomes tangible. Empty spaces where the basket was, the food bowl, his toys. No one waiting at the door, no reason to leave the house for a walk. He is missing not only in our hearts, but also in our daily lives. Everything feels empty, more desolate, lonelier. The silence is almost unbearable.", 
      de: "Die ersten Tage sind vergangen. Wir fangen an, Maylos Sachen weg zu räumen. Der Verlust wird dadurch irgendwie greifbar. Leere Plätze, wo das Körbchen war, die Futterschale, sein Spielzeug. Niemand, der an der Tür auf einen warten, kein Grund, das Haus zu verlassen für einen Spaziergang. Er fehlt nicht nur im Herzen, sondern auch im Alltag. Alles fühlt sich leer an, trostloser, einsamer. Die Stille ist kaum zu ertragen."
    } as any,
    lyrics: "The house still breathes without you,\nbut it breathes in the wrong way.\nNo morning shiver in the hallway,\nno soft paws starting the day.\nJust air that holds the memory\nof the rhythm you once made -\na syncopated heartbeat\nthat time can't quite unfade.\n\nAnd I hear you in the echoes,\nin the space you used to fill.\nA sigh that isn't really there,\na step that's standing still.\nYour music shaped the rooms once,\nyour rhythm wrote their tone -\nnow silence holds the melody\nyou left in every stone.\n\nNights fall heavy now without you,\nthey settle deep into the floor.\nThe quiet bends around the walls\nlike it's searching for your roar.\nI turn my head at nothing-\na phantom sound, a breath of you-\nbut each echo breaks itself\nas if it knows the truth.\n\nI listen for your footsteps,\nthe tiny beats your life once spun.\nThe shake, the sigh, the gentle hum-\na song already done.\nYet somewhere in the quiet,\nyour outline still appears:\na shape made out of silence,\nstill ringing in my ears.\n\nI hear you in the echoes,\nin the spaces you once filled.\nA sigh that isn't really there,\na step that's standing still.\nYour rhythm ruled this place once,\nyour heartbeat set the tone-\nand even in this silence,\nI still don't walk alone.",
  },
  {
    id: "move-on",
    slug: "move-on",
    title: "Move On",
    albumId: "for-maylo",
    trackNumber: 12,
    audioSrc: "/audio/Move-on.mp3",
    coverImage: "/covers/Move-On.jpg",
    description: { 
      en: "This song speaks from Maylo's perspective, observing our grief and urging us to look forward again instead of dwelling in the shadows. We cannot bring back the time with him, but we can remember the beautiful moments.", 
      de: "Dieses Lied ist spricht aus der Perspektive von Maylo, der unsere Trauer beobachtet und uns auffordert, wieder nach vorne zu schauen, statt im Schatten zu verweilen. Wir können die Zeit mit ihm nicht zurück holen, doch wir können uns an die schönen Momente erinnern."
    } as any,
    lyrics: "You wake to colors drained away,\nyour world a quiet, hollow gray.\nThe days keep moving, but you don't -\nyou sit there heavy in your bones.\nYou've cried so much the well ran dry,\nthe storm has passed, but so did I.\nWhat's left behind feels like a shell\nof someone who once held me well.\n\nI moved on, but not from you,\nI'm in the warm light breaking through.\nI'm in the wind that brushes past,\nnot in the shadows that don't last.\nI moved on - your life goes too,\nthe world still holds its place for you.\n\nYour hands still reach for what is gone,\nthe weight of me you leaned upon.\nMy bowl, my bed - they're standing still,\nand you walk 'round them by sheer will.\nThe nights feel quiet, strangely numb,\nand every sound is out of tune.\nThere's nothing left for you to call -\nno tears remain to rise or fall.\n\nI moved on, but not from you,\nI dance in colors breaking through.\nI'm in the sunlight on the floor,\nnot in the silence at your door.\nI moved on - your path goes true,\nthe world still has a place for you.\n\nYou're caught between the days we had\nand all this quiet aftermath.\nYou try to breathe, but part of you\nstill waits for steps that won't come through.\nI'm not a ghost you need to chase,\nI'm not the ache that fills this place.\nI'm in the calm you're longing for,\nI'm just beyond your closing door…\n\nI moved on, but not from you,\nthere's life ahead in gentle hue.\nMaybe someday, maybe soon…\nthough still your heart breaks clean in two.\nI'm in the peace you cannot see,\nnot in the chains of memory.\nI moved on… and you can too.",
  },

  /* ---- tracks you want listed beneath ---- */

  {
    id: "die-letzten-schritte",
    slug: "die-letzten-schritte",
    title: "Die letzten Schritte",
    albumId: "single",
    trackNumber: 13,
    audioSrc: "/audio/Die-letzten-Schritte.mp3",
    coverImage: "/covers/Die_letzten_Schritte.jpg",
    lyrics: "Du kamst zu uns, so still, so scheu,\ndie Welt war laut, du warst dabei.\nEin Blick genügte, und ich sah,\ndu trägst Narben - doch du bist da.\nSie sagten, du wärst jung, voll Kraft,\nein kleiner Schelm mit frechem Sinn.\nDoch hinter Zähnen, Angst und Zagen\nlag nur ein Herz, das Frieden will.\n\nIch halt dich fest auf diesem Weg,\nwo jeder Schritt uns näher trägt.\nDie Zeit verrinnt, so still, so sacht,\ndoch Liebe bleibt, wenn alles schwach.\nIch weiß, der Tag kommt, der uns trennt,\ndoch was uns band, bleibt ohne End.\nDie letzten Schritte, Schritt für Schritt -\nmein kleiner Freund, ich geh sie mit.\n\nDu hast gelernt, den Wind zu spür’n,\ndas Spiel, das Lachen zu verführ’n.\nKein Kamm, kein Laut macht dir mehr Angst,\nweil du mir glaubst, weil du mir dankst.\nDu folgst mir blind und doch so klar,\ndein Herz weiß längst, wo Heimat war.\nUnd wenn du müde neben mir liegst,\nweiß ich, dass du’s geschafft hast.\n\nDein Fell so weich, dein Atem flach,\ndie Welt wird still, die Sonne schwach.\nIch red mit dir, du hörst mich kaum,\ndoch fühlst den Klang im letzten Traum.\nUnd wenn du gehst, dann geh in Ruh,\nmein Herz schlägt leise mit dir zu.\n\nIch halt dich fest auf diesem Weg,\nwo jeder Schritt uns näher trägt.\nKein Ende trennt, was Liebe webt,\nsolang mein Herz in deinem lebt.\nDie letzten Schritte, Schritt für Schritt -\nmein kleiner Freund, ich geh sie mit.\n\nUnd wenn der Morgen ohne dich erwacht,\nbleibst du mein Licht in jeder Nacht.\nDie letzten Schritte führ’n dich fort -\ndoch meine Liebe bleibt dein Ort.",
  },
  {
    id: "ich-wuensch-mir-einen-tag-zurueck",
    slug: "ich-wuensch-mir-einen-tag-zurueck",
    title: "Ich wünsch mir einen Tag zurück",
    albumId: "single",
    trackNumber: 14,
    audioSrc: "/audio/Ich-wuensch-mir-einen-Tag-zurueck.mp3",
    coverImage: "/covers/Tag-zurueck.jpg",
    lyrics: "Der Himmel hängt wie nasses Tuch\nan Fenstern, die beschlagen sind.\nDer Wind zieht durch die leeren Gassen\nund trägt den Sommer fort geschwind.\nDer Regen fällt in stummen Tropfen,\ndie Welt ist stumpf, als wär sie leer.\nIch seh dich nicht, doch spür dich doch\nin jedem dunklen Spiegelbild.\n\nIch wünsch mir einen Tag zurück,\nnur einen - voller Licht.\nIm Garten, wo dein Ball noch liegt,\nmit Sonne auf dem Fell und Lachen im Gesicht.\nDoch Grau bleibt Grau, und kalt bleibt kalt,\nder Himmel fragt mich nicht.\nIch wünsch mir einen Tag zurück,\ndoch der kommt nicht.\n\nDein Körbchen steht noch wie im Sommer,\nnur dass du nicht mehr drinnen liegst.\nDein Spielzeug liegt wie eingefroren,\nals wär’s nur Pause, nicht Verzicht.\nIch seh uns rennen durch die Felder,\ndu bliebst an meiner Seite, Schritt für Schritt.\nKein Bellen mehr auf weitem Feld -\nnur meine Sehnsucht geht hinaus.\n\nIch wünsch mir einen Tag zurück,\nnur einen - voller Licht.\nIm Garten, wo dein Ball noch liegt,\nmit Sonne auf dem Fell und Lachen im Gesicht.\nDoch Grau bleibt Grau, und nass bleibt nass,\nund Herbst bleibt, was er ist.\nIch wünsch mir einen Tag zurück,\ndoch der kommt nicht.\n\nVielleicht ist das, was bleibt, genug:\nEin warmer Hauch im Nebelflug.\nEin Echo, das im Wind verweht,\ndas mir im Herzen weitergeht.\n\nIch wünsch mir einen Tag zurück,\ndoch weiß, dass er nicht kommt.\nDer Sommer war, der Herbst ist hier,\nund ich bleib stumm.\nDoch wenn ich durch das Fenster seh,\nbist du vielleicht dabei -\nein Schatten nur,\naber ein treuer.",
  }
];



/* -----------------------------------------------------------
   ABOUT PAGE
----------------------------------------------------------- */

export const aboutContent: AboutContent = {
  displayName: "Mylon Grey",
  biography: [],
};

/* -----------------------------------------------------------
   STREAMING + SOCIAL LINKS
----------------------------------------------------------- */

export const siteLinks: SiteLinks = {
  social: [
    {
      id: "instagram",
      label: "Instagram",
      platform: "instagram",
      url: "https://instagram.com/",
    },
  ],
  streaming: {
    spotify: "https://open.spotify.com/artist/xyz",
    appleMusic: "https://music.apple.com/artist/xyz",
    amazonMusic: "https://music.amazon.com/artist/xyz",
  },
};
