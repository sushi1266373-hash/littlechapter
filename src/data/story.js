// All story text lives here. A line starting with "#" is shown large (uppercase).
// scene = which illustration, mood = colour grade (dark | warm | cool | hope)
// cta = a button (ends auto-play until clicked). title = chapter title card.
const b=(scene,mood,text,o={})=>({scene,mood,lines:text.split('\n').filter(Boolean),...o})
export const REPLAY_QUOTE='Some stories deserve another beginning.'
export const beats=[
// ---- INTRO
b('spark','dark',`Some stories are planned.\nOurs wasn't.`),
b('spark','dark',`I never expected you to become such an important part of my life.`),
b('spark','dark',`And this...\nis the story of us.`,{cta:'ENTER OUR STORY ❤️'}),
// ---- CHAPTER 1
b('black','dark',`Chapter One\n#The Hero ⚙️`,{title:true}),
b('workshop','warm',`There are so many things I noticed about you...\nBut the more I knew you, the more I realized that what I loved wasn't just one thing.`),
b('workshop','warm',`I admired your mind, your brilliance.\nYour ambition.\nYour confidence.\nThe way you keep working toward your future.\nYou know what you want, and you don't easily give up on it.`),
b('hero','warm',`But what I love most about you is your heart.\n I know for you\n Your family comes first.\nThen yourself.\nThen your career.\nAnd then me.\nAnd honestly...\nI love that about you.`),
b('hero','warm',`In a world where people can be so selfish, finding a boy with such a good heart is rare.\nI never wanted to stand between you and your dreams.\nI wanted to see you achieve them.`),
b('workshop','warm',`You know what matters to you.\nYou know where you belong.\nYou care about the people you love.\nAnd you have your own dreams that you want to achieve.`),
b('hero','warm',`And someday...\nI hope I become a part of your family too.\nAnd then, your family will become my family.\nAnd honestly...\nthat is what I want.`),
b('walk','warm',`And somewhere along the way...\nI didn't just admire you.\n#I fell in love with you. ❤️`),
// ---- CHAPTER 2
b('black','dark',`Chapter Two\n#It Was Fate ❤️`,{title:true}),
b('bakery','warm',`I was the girl who never wanted to fall in love.\nI wasn't looking for someone.\nI wasn't waiting for a love story.`),
b('bakery','warm',`I had my own plans and my own little world.\nLove was never something I was searching for.`),
b('bakeryHe','warm',`And then you appeared.`),
b('corridor','warm',`You had already seen me at a bakery, before I even realized you had noticed me.\nThen, the next day, our paths crossed again in college.\nI had seen you many times before, but never your full face.`),
b('chamber','warm',`Then one day, while I was waiting outside a teacher's chamber, you walked out, looked at me, and smiled.`),
b('chamberSmile','hope',`For a moment, everything felt paused.\nThat was the first time I truly saw your face.\nAnd somehow...\nI fell for that smile.`,{slow:1.5}),
b('bench','warm',`Later, sir called you, and there you were, sitting at the first bench, just across from me.`),
b('bench','hope',`Looking back now, all those little moments feel connected.\nIt wasn't just coincidence.\n#It was fate.\nWe were destined to find each other.\nAnd...\nwe were destined to be together. ❤️`),
// ---- CHAPTER 3
b('black','dark',`Chapter Three\n#What You Still Mean To Me 💌`,{title:true}),
b('campus','cool',`It has been almost a year and a half since we stopped talking.\nA lot has changed during this time, and both of us have continued with our lives.`),
b('corridorFar','cool',`But somehow...\nmy feelings for you never completely disappeared.\nEven after all this time, my eyes still look for you.`),
b('corridorFar','cool',`Whenever I walk around the college, a small part of me still hopes that I will see you somewhere.\nSometimes I even come out of my classroom just so I can get a glimpse of you.\nSometimes I don't have any real reason to come outside.\nI just want to see you for a moment.`),
b('corridorFar','cool',`Even if you never notice me.\nEven if we don't say a single word.\nSeeing you still makes me happy.\nAnd for that little moment, everything feels a little lighter.`),
b('empty','cool',`Then I remember...\nwe are not together anymore.\nAnd that is where the happiness starts to hurt.`,{slow:1.3}),
b('memory','cool',`There was a time when seeing you meant that I could actually talk to you, laugh with you, share things with you, and feel close to you.\nNow I can only see you from a distance.\nAnd I have to keep all these feelings to myself.`),
b('rain','cool',`Losing what we had broke a part of me that I don't think you ever truly saw.\nThere were days when I missed you more than I could explain.\nI tried to move forward.\nI tried to accept that things had changed.`),
b('rain','cool',`But some feelings don't disappear simply because time passes.\nSome people leave a place in your heart that nobody else can easily take.`),
b('memory','cool',`I still miss you.\nI still care about you.\nAnd sometimes, I still wish I could go back to the time when we were together and everything felt simpler.`),
b('memory','warm',`Even with all this pain...\nI don't regret loving you.\nBecause loving you gave me some of the happiest memories of my life.\nAnd if I had the chance to go back and live those moments again...\nI would still choose you.`),
b('milestone','warm',`Even though we are no longer close, I still admire you quietly from a distance.\nI notice the person you are becoming.\nI notice the things you are achieving.\nI notice the way you continue working toward your future.`),
b('milestone','warm',`You may never know this...\nbut I am genuinely proud of you.\nEvery achievement.\nEvery step forward.\nEvery little milestone.\nI celebrate them quietly in my heart.\nBecause even from far away...\nI still want to see you succeed.`),
b('sunrise','hope',`Maybe loving someone is not always about being beside them.\nSometimes it is simply wanting them to be happy.\nWanting them to succeed.\nWanting them to become everything they dreamed of becoming.`),
b('sunrise','hope',`But there is one thing I cannot hide anymore.\n#I still love you.\nNot because I am holding on to the past.\nNot because I want to stop you from chasing your dreams.`),
b('sunrise','hope',`I love you because...\nafter all this time...\nmy heart still chooses you. ❤️`,{slow:1.4}),
b('black','dark',``,{hold:2500}),
// ---- CHAPTER 4
b('black','dark',`Chapter Four\n#Let's Get Together Again ❤️`,{title:true}),
b('apart','dark',`I know you have dreams.\nI know how important your future is to you.\nAnd I will never ask you to give up on those dreams.\nI want to see you succeed.\nI want to see you grow.\nI want to see you become everything you have always wanted to become.`),
b('apart','cool',`But I also know something else.\nI know you still think about us.\nI know that somewhere inside you, you still remember everything we shared.\nAnd I know that...\nI still love you.`),
b('memory','cool',`I don't want us to simply go back to exactly what we were.\nWe have both changed.\nWe have both grown.\nWe have both learned things.\nAnd maybe that's okay.`),
b('newlight','warm',`Because I don't want the old version of us.\nI want something better.\nI want us to meet again as the people we have become.\nI want us to understand each other better.`),
b('newlight','warm',`I want us to support each other's dreams.\nI want us to make new memories.\nI want us to grow together instead of growing apart.`),
b('together','hope',`After everything that happened...\nAfter all this time...\nAfter all the distance between us...\nthere is still one thing my heart wants.\nYou.\nAnd there is still one thing I hope for.\nUs.`),
b('together','hope',`If somewhere inside you, our story still matters...\nIf you still remember what we had...\nIf you still believe that our story isn't finished...\nthen maybe we shouldn't let it end here.`),
b('together','hope',`#Let's get together again. ❤️`,{slow:1.8}),
b('together','hope',`Let's start again.\nLet's make new memories.\nLet's support each other's dreams.\nLet's build something stronger together.`),
b('together','hope',`Because...\nI still love you.\nAnd I still want you in my life.\n#I love you. ❤️\nMaybe this time...\nwe write the rest of the story together.`,{cta:'START AGAIN ❤️'}),
]
