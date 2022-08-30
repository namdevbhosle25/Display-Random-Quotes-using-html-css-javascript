let myQuotes=[' 1-“Marriage can wait, education cannot.” ― Khaled Hosseini, A Thousand Splendid Suns',
'2-“A teacher affects eternity; he can never tell where his influence stops.” -Henry B. Adams',
'3-“Education is the most powerful weapon which you can use to change the world.”-Nelson Mandela',
'4-“Tell me and I’ll forget; show me and I may remember; involve me and I’ll understand.”-Chinese Proverb',
'5-“Intelligence plus character-that is the goal of true education.”-Martin Luther King Jr.',
'5-“The beautiful thing about learning is that no one can take it away from you.”-B.B. King',
'7-“What sculpture is to a block of marble, education is to the human soul.”- Joseph Addison',
'8-“Education makes a people easy to lead but difficult to drive: easy to govern, but impossible to enslave.”-Peter Brougham'
]
function quote(){
    let myRandomQuote= Math.floor(Math.random() * (myQuotes.length)); //we can also use math.round() and math.floor() method
    document.getElementById("myRandomQuotes").innerHTML= myQuotes[myRandomQuote];
}