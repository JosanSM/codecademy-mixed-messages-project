
let message = {
    _strings : [
        {"You" : [
            {"can" : [
                "change the world!",
                "make the difference!",
                "do anything you want, if you put the word towards it!",
            ]},
            {"will" : [
                "change the world!",
                "get where you want!",
                "achieve your goals!",
            ]},
            {"are" : [
                "amazing!",
                "more than capable!",
                "doing great!",
            ]},
        ]},
        {"Life" : [
            {"can" : [
                "be tough sometimes, but you'll get through it!",
                "be whatever you want it to be!",
                "put you on your knees, up to you if you stay on the floor!",
            ]},
            {"will" : [
                "hit you hard, be prepared!",
                "be what you decide it will be!",
                "not be easy, but it is totally worth it!",
            ]},
            {"is" : [
                "short, use it wisely!",
                "what you decide it is like!",
                "amazing!",
            ]},
        ]},
        {"Time" : [
            {"is" : [
                "scarce, make the most out of it!",
                "more valuable than gold!",
                "not infinite, use it wisely!",
            ]},
            {"goes" : [
                "fast, enjoy the moment!",
                "faster than you think, use it right!",
                "quick!",
            ]},
            {"flies" : [
                "when you're having fun!",
                ", have fun in the process!",
                ", take advantage of it!",
            ]},
        ]},
        {"The world" : [
            {"can" : [
                "be harsh on you, don't let that stop you!",
                "put you on the floor, just shake it off and get up!",
                "not be changed without minds evolution!",
            ]},
            {"will" : [
                "see what you are capable of!",
                "challenge you, but you can go through it!",
                "know your name one day!",
            ]},
            {"is" : [
                "in your hands!",
                "amazing!",
                "dying!",
            ]},
        ]}, 
    ],

    generateMessage () {
        let firstString = this._strings[Math.floor(Math.random () * this._strings.length)];
        // is equal to either "you", "life", "time", or "the world".
        let string1 = Object.getOwnPropertyNames(firstString).toString();
        // console.log(string1);
        let secondString = firstString[string1][Math.floor(Math.random() * 3)];
        let string2 = Object.getOwnPropertyNames(secondString).toString();
        // is equal to a valid second string
        // console.log(`${string1} ${string2}`);
        let thirdString = secondString[string2][Math.floor(Math.random() * 3)];
        let string3 = thirdString;
        console.log(`${string1} ${string2} ${string3}`);
    },
};

message.generateMessage();

// node mixed-messages.js