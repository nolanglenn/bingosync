(function(j, i, g, m, k, n, o) {
    function q(b) {
        var e, f, a = this,
            c = b.length,
            d = 0,
            h = a.i = a.j = a.m = 0;
        a.S = [];
        a.c = [];
        for (c || (b = [c++]); d < g;) a.S[d] = d++;
        for (d = 0; d < g; d++) e = a.S[d], h = h + e + b[d % c] & g - 1, f = a.S[h], a.S[d] = f, a.S[h] = e;
        a.g = function(b) {
            var c = a.S,
                d = a.i + 1 & g - 1,
                e = c[d],
                f = a.j + e & g - 1,
                h = c[f];
            c[d] = h;
            c[f] = e;
            for (var i = c[e + h & g - 1]; --b;) d = d + 1 & g - 1, e = c[d], f = f + e & g - 1, h = c[f], c[d] = h, c[f] = e, i = i * g + c[e + h & g - 1];
            a.i = d;
            a.j = f;
            return i
        };
        a.g(g)
    }

    function p(b, e, f, a, c) {
        f = [];
        c = typeof b;
        if (e && c == "object")
            for (a in b)
                if (a.indexOf("S") < 5) try {
                    f.push(p(b[a], e - 1))
                } catch (d) {}
                return f.length ? f : b + (c != "string" ? "\0" : "")
    }

    function l(b, e, f, a) {
        b += "";
        for (a = f = 0; a < b.length; a++) {
            var c = e,
                d = a & g - 1,
                h = (f ^= e[a & g - 1] * 19) + b.charCodeAt(a);
            c[d] = h & g - 1
        }
        b = "";
        for (a in e) b += String.fromCharCode(e[a]);
        return b
    }
    i.seedrandom = function(b, e) {
        var f = [],
            a;
        b = l(p(e ? [b, j] : arguments.length ? b : [(new Date).getTime(), j, window], 3), f);
        a = new q(f);
        l(a.S, j);
        i.random = function() {
            for (var c = a.g(m), d = o, b = 0; c < k;) c = (c + b) * g, d *= g, b = a.g(1);
            for (; c >= n;) c /= 2, d /= 2, b >>>= 1;
            return (c + b) / d
        };
        return b
    };
    o = i.pow(g, m);
    k = i.pow(2, k);
    n = k * 2;
    l(i.random(), j)
})([], Math, 256, 6, 52);

bingoGenerator = function(bingoList, opts) {
    var LANG = opts.lang || 'name';
    var MODE = opts.mode || "normal";
    var cardType = "Normal";
    var SEED = opts.seed || Math.ceil(999999 * Math.random()).toString();
    var size = 5;
    if (true) {
        Math.seedrandom(SEED);
        var MAX_SEED = 999999;

        var lineCheckList = [];
        if (size == 5) {
            lineCheckList[1] = [1, 2, 3, 4, 5, 10, 15, 20, 6, 12, 18, 24];
            lineCheckList[2] = [0, 2, 3, 4, 6, 11, 16, 21];
            lineCheckList[3] = [0, 1, 3, 4, 7, 12, 17, 22];
            lineCheckList[4] = [0, 1, 2, 4, 8, 13, 18, 23];
            lineCheckList[5] = [0, 1, 2, 3, 8, 12, 16, 20, 9, 14, 19, 24];
            lineCheckList[6] = [0, 10, 15, 20, 6, 7, 8, 9];
            lineCheckList[7] = [0, 12, 18, 24, 5, 7, 8, 9, 1, 11, 16, 21];
            lineCheckList[8] = [5, 6, 8, 9, 2, 12, 17, 22];
            lineCheckList[9] = [4, 12, 16, 20, 9, 7, 6, 5, 3, 13, 18, 23];
            lineCheckList[10] = [4, 14, 19, 24, 8, 7, 6, 5];
            lineCheckList[11] = [0, 5, 15, 20, 11, 12, 13, 14];
            lineCheckList[12] = [1, 6, 16, 21, 10, 12, 13, 14];
            lineCheckList[13] = [0, 6, 12, 18, 24, 20, 16, 8, 4, 2, 7, 17, 22, 10, 11, 13, 14];
            lineCheckList[14] = [3, 8, 18, 23, 10, 11, 12, 14];
            lineCheckList[15] = [4, 9, 19, 24, 10, 11, 12, 13];
            lineCheckList[16] = [0, 5, 10, 20, 16, 17, 18, 19];
            lineCheckList[17] = [15, 17, 18, 19, 1, 6, 11, 21, 20, 12, 8, 4];
            lineCheckList[18] = [15, 16, 18, 19, 2, 7, 12, 22];
            lineCheckList[19] = [15, 16, 17, 19, 23, 13, 8, 3, 24, 12, 6, 0];
            lineCheckList[20] = [4, 9, 14, 24, 15, 16, 17, 18];
            lineCheckList[21] = [0, 5, 10, 15, 16, 12, 8, 4, 21, 22, 23, 24];
            lineCheckList[22] = [20, 22, 23, 24, 1, 6, 11, 16];
            lineCheckList[23] = [2, 7, 12, 17, 20, 21, 23, 24];
            lineCheckList[24] = [20, 21, 22, 24, 3, 8, 13, 18];
            lineCheckList[25] = [0, 6, 12, 18, 20, 21, 22, 23, 19, 14, 9, 4];
        }

        function mirror(i) {
            if (i == 0) {
                i = 4;
            } else if (i == 1) {
                i = 3;
            } else if (i == 3) {
                i = 1;
            } else if (i == 4) {
                i = 0;
            }
            return i;
        }

        function difficulty(i) {
            var Num3 = SEED % 1000;
            var Rem8 = Num3 % 8;
            var Rem4 = Math.floor(Rem8 / 2);
            var Rem2 = Rem8 % 2;
            var Rem5 = Num3 % 5;
            var Rem3 = Num3 % 3;
            var RemT = Math.floor(Num3 / 120);
            var Table5 = [0];
            Table5.splice(Rem2, 0, 1);
            Table5.splice(Rem3, 0, 2);
            Table5.splice(Rem4, 0, 3);
            Table5.splice(Rem5, 0, 4);
            Num3 = Math.floor(SEED / 1000);
            Num3 = Num3 % 1000;
            Rem8 = Num3 % 8;
            Rem4 = Math.floor(Rem8 / 2);
            Rem2 = Rem8 % 2;
            Rem5 = Num3 % 5;
            Rem3 = Num3 % 3;
            RemT = RemT * 8 + Math.floor(Num3 / 120);
            var Table1 = [0];
            Table1.splice(Rem2, 0, 1);
            Table1.splice(Rem3, 0, 2);
            Table1.splice(Rem4, 0, 3);
            Table1.splice(Rem5, 0, 4);
            i--;
            RemT = RemT % 5;
            x = (i + RemT) % 5;
            y = Math.floor(i / 5);
            var e5 = Table5[(x + 3 * y) % 5];
            var e1 = Table1[(3 * x + y) % 5];
            value = 5 * e5 + e1;
            if (MODE == "short") {
                value = Math.floor(value / 2);
            } else if (MODE == "long") {
                value = Math.floor((value + 25) / 2);
            }
            value++;
            return value;
        }

        function checkLine(i, typesA) {
            var synergy = 0;
            for (var j = 0; j < lineCheckList[i].length; j++) {
                var typesB = bingoBoard[lineCheckList[i][j] + 1].types;
                if (typeof typesB != 'undefined') {
                    for (var k = 0; k < typesA.length; k++) {
                        for (var l = 0; l < typesB.length; l++) {
                            if (typesA[k] == typesB[l]) {
                                synergy++;
                                if (k == 0) {
                                    synergy++
                                };
                                if (l == 0) {
                                    synergy++
                                };
                            }
                        }
                    }
                }
            }
            return synergy;
        }
        var bingoBoard = [];
        for (var i = 1; i <= 25; i++) {
            bingoBoard[i] = {
                difficulty: difficulty(i)
            };
        }
        for (var i = 1; i <= 25; i++) {
            var getDifficulty = bingoBoard[i].difficulty;
            var RNG = Math.floor(bingoList[getDifficulty].length * Math.random());
            if (RNG == bingoList[getDifficulty].length) {
                RNG--;
            };
            var j = 0,
                synergy = 0,
                currentObj = null,
                minSynObj = null;
            do {
                currentObj = bingoList[getDifficulty][(j + RNG) % bingoList[getDifficulty].length];
                synergy = checkLine(i, currentObj.types);
                if (minSynObj == null || synergy < minSynObj.synergy) {
                    minSynObj = {
                        synergy: synergy,
                        value: currentObj
                    };
                }
                j++;
            } while ((synergy != 0) && (j < bingoList[getDifficulty].length));
            bingoBoard[i].types = minSynObj.value.types;
            bingoBoard[i].name = minSynObj.value[LANG] || minSynObj.value.name;
            bingoBoard[i].synergy = minSynObj.synergy;
        }
        return bingoBoard;
    }
};
var bingoList = [
    [], [ // Group 1
        {name:"Tutorial Gate EP", types:["ep", "tutorial"]},
        {name:"Squares Tutorial", types:["panel", "tutorial"]},
        {name:"Dots Tutorial", types:["panel", "tutorial"]}
    ], [ // Group 2
        {name:"Shadows Laser", types:["laser", "shadows"]},
        {name:"Swamp Laser", types:["laser", "swamp"]},
        {name:"Keep Laser", types:["laser", "keep"]}
    ], [ // Group 3
        {name:"Any 5 Audio Logs", types:["log"]},
        {name:"Sand Line EP", types:["ep", "desert_ep"]},
        {name:"Any 1 Vault", types:["vault"]}
    ], [ // Group 4
        {name:"Keep Flower EPs", types:["ep", "quarry_ep"]},
        {name:"Any 3 discarded panels", types:["discard"]},
        {name:"1 Windmill EP", types:["ep", "windmill_ep"]}
    ], [ // Group 5
        {name:"Any 1 panel that doesn't increase solve count", types:["fakepanel"]},
        {name:"The Yellow Vase EP", types:["ep", "symmetry_ep"]},
        {name:"Mountaintop River EP", types:["ep", "mountain_ep"]}
    ], [ // Group 6
        {name:"3 EPs while on the Boat", types:["ep", "boat_ep"]},
        {name:"Any 2 Keep Walkway EPs", types:["ep", "keep_ep", "keep"]},
        {name:"2 Windmill EPs", types:["ep", "windmill_ep"]}
    ], [ // Group 7
        {name:"Monastery Laser", types:["laser", "monastery"]},
        {name:"Jungle Laser", types:["laser", "jungle"]},
        {name:"Greenhouse Laser", types:["laser", "greenhouse"]}
    ], [ // Group 8
        {name:"All 6 Monastery Facade EPs", types:["ep", "monastery_ep"]},
        {name:"Town RGB Panels", types:["panel", "town"]},
        {name:"Any 2 Vaults", types:["vault"]}
    ], [ // Group 9
        {name:"Any 3 Vaults", types:["vault"]},
        {name:"3 Windmill EPs", types:["ep", "windmill_ep"]},
        {name:"Quarry Laser", types:["laser", "quarry"]}
    ], [ // Group 10
        {name:"Desert Laser", types:["laser", "desert"]},
        {name:"Town Laser", types:["laser", "town"]},
        {name:"Symmetry Laser", types:["laser", "symmetry"]}
    ], [ // Group 11
        {name:"Flood Room EP", types:["ep", "desert_ep"]},
        {name:"Railroad EP", types:["ep", "quarry_ep", "quarry"]},
        {name:"Green Window EP", types:["ep", "greenhouse_ep"]}
    ], [ // Group 12
        {name:"5 EPs while on the Boat", types:["ep", "boat_ep"]},
        {name:"Monastery Interior EPs", types:["ep", "monastery_ep"]},
        {name:"Swamp Tutorial", types:["panel", "swamp"]}
    ], [ // Group 13
        {name:"Any 4 Vaults", types:["vault"]},
        {name:"Any 3 panels that don't increase solve count", types:["fakepanel"]},
        {name:"All 3 Mountaintop EPs", types:["ep", "mountain_ep"]}
    ], [ // Group 14
        {name:"Treehouse Buoy EP", types:["ep", "treehouse_ep"]},
        {name:"Any 4 Keep Walkway EPs", types:["ep", "keep_ep", "keep"]},
        {name:"Pink Trees", types:["panel"]}
    ], [ // Group 15
        {name:"Any 5 discarded panels", types:["discard"]},
        {name:"Thundercloud EP", types:["ep", "desert"]},
        {name:"Any EP and its reflection", types:["ep"]}
    ], [ // Group 16
        {name:"10 EPs while on the Boat", types:["ep", "boat_ep"]},
        {name:"Any 10 Audio Logs", types:["log"]},
        {name:"Both Treehouse Bridge EPs", types:["ep", "treehouse_ep"]}
    ], [ // Group 17
        {name:"Treehouse Laser", types:["laser", "treehouse"]},
        {name:"Desert Obelisk", types:["obelisk", "desert_ep"]},
        {name:"Any 7 discarded panels", types:["discard"]}
    ], [ // Group 18
        {name:"Any 15 Audio Logs", types:["log"]},
        {name:"All Treehouse Shadow EPs", types:["ep", "treehouse_ep"]},
        {name:"Any 10 discarded panels", types:["discard"]}
    ], [ // Group 19
        {name:"Both halves of Keep", types:["keep"]},
        {name:"Any 12 discarded panels", types:["discard"]},
        {name:"All 5 Keep Walkway EPs", types:["ep", "keep_ep", "keep"]}
    ], [ // Group 20
        {name:"Treehouses/Keep Obelisk", types:["obelisk", "treehouse_ep", "keep_ep"]},
        {name:"Shadows/Quarry Obelisk", types:["obelisk", "shadows_ep", "quarry_ep"]},
        {name:"Monastery Obelisk", types:["obelisk", "monastery_ep"]}
    ], [ // Group 21
        {name:"Any 5 panels that don't increase solve count", types:["fakepanel"]},
        {name:"All Mountain Walkway EPs", types:["ep", "mountain"]},
        {name:"All 4 Swamp Shadow EPs", types:["ep", "swamp_ep"]}
    ], [ // Group 22
        {name:"Take the boat in a circle", types:["boat"]},
        {name:"Move any object that isn't a door", types:[]},
        {name:"Listen to the entire mountaintop audio log", types:["log"]}
    ], [ // Group 23
        {name:"Any 20 Audio Logs", types:["log"]},
        {name:"Any 14 discarded panels", types:["discard"]},
        {name:"Any 5 Vaults", types:["vault"]}
    ], [ // Group 24
        {name:"Any 4 Cinema EPs", types:["ep"]},
        {name:"Cloud Cycle EP", types:["ep"]},
        {name:"Desert Elevator EP", types:["ep", "desert_ep", "desert"]}
    ], [ // Group 25
        {name:"Purple Mountain Walkway EP", types:["ep", "mountain"]},
        {name:"Blue Mountain Walkway EP", types:["ep", "mountain"]},
        {name:"Orange Mountain Walkway EP", types:["ep", "mountain"]}
    ]
];