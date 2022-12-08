// Defining all initial seeds and their variables. These variables will be used to do thing like calculating seeding. num is the initial seed number. htmlInfo includes the team name and logo to insert into wherever it is needed, htmlInfo[0] is Swiss right, htmlInfo[1] is Swiss left, htmlInfo[2] is Playoffs, and htmlInfo[3] is Prizes. seeding includes the seeding for each Swiss round. matchups includes each initial seed that the team has played against. results includes the team's ending score in each round. And the last value (gd) is where every initial seed's game difference is stored (important for seeding).
let initSeeds = [
    { num: 1, htmlInfo: ["<h2 class='text-right grow'>Karmine Corp</h2><img src='./images/KarmineCorp.svg' class='h-7 w-7 mx-2'>","<img src='./images/KarmineCorp.svg' class='h-7 w-7 mx-2'><h2 class='text-left grow'>Karmine Corp</h2>","<img src='./images/KarmineCorp.svg' class='h-12 w-12 mx-2'><h2 class='text-left grow text-2xl'>Karmine Corp</h2>","<img src='./images/KarmineCorp.svg' class='h-8 w-8 mx-2'><h2 class='text-left grow text-2xl'>Karmine Corp</h2>"], seeding: [1, 0, 0, 0, 0], matchups: [16, 0, 0, 0, 0], results: [0, 0, 0, 0, 0], gd: 0 },
    { num: 2, htmlInfo: ["<h2 class='text-right grow'>Gen.G Mobil1 Racing</h2><img src='./images/GenG.svg' class='h-7 w-7 mx-2'>","<img src='./images/GenG.svg' class='h-7 w-7 mx-2'><h2 class='text-left grow'>Gen.G Mobil1 Racing</h2>","<img src='./images/GenG.svg' class='h-12 w-12 mx-2'><h2 class='text-left grow text-2xl'>Gen.G Mobil1 Racing</h2>","<img src='./images/GenG.svg' class='h-8 w-8 mx-2'><h2 class='text-left grow text-2xl'>Gen.G Mobil1 Racing</h2>"], seeding: [2, 0, 0, 0, 0], matchups: [15, 0, 0, 0, 0], results: [0, 0, 0, 0, 0], gd: 0 },
    { num: 3, htmlInfo: ["<h2 class='text-right grow'>FaZe Clan</h2><img src='./images/FaZe.svg' class='h-7 w-7 mx-2'>","<img src='./images/FaZe.svg' class='h-7 w-7 mx-2'><h2 class='text-left grow'>FaZe Clan</h2>","<img src='./images/FaZe.svg' class='h-12 w-12 mx-2'><h2 class='text-left grow text-2xl'>FaZe Clan</h2>","<img src='./images/FaZe.svg' class='h-8 w-8 mx-2'><h2 class='text-left grow text-2xl'>FaZe Clan</h2>"], seeding: [3, 0, 0, 0, 0], matchups: [14, 0, 0, 0, 0], results: [0, 0, 0, 0, 0], gd: 0 },
    { num: 4, htmlInfo: ["<h2 class='text-right grow'>The Club</h2><img src='./images/TheClub.png' class='h-7 w-7 mx-2'>","<img src='./images/TheClub.png' class='h-7 w-7 mx-2'><h2 class='text-left grow'>The Club</h2>","<img src='./images/TheClub.png' class='h-12 w-12 mx-2'><h2 class='text-left grow text-2xl'>The Club</h2>","<img src='./images/TheClub.png' class='h-8 w-8 mx-2'><h2 class='text-left grow text-2xl'>The Club</h2>"], seeding: [4, 0, 0, 0, 0], matchups: [13, 0, 0, 0, 0], results: [0, 0, 0, 0, 0], gd: 0 },
    { num: 5, htmlInfo: ["<h2 class='text-right grow'>Team Liquid</h2><img src='./images/TeamLiquid.svg' class='h-7 w-7 mx-2'>","<img src='./images/TeamLiquid.svg' class='h-7 w-7 mx-2'><h2 class='text-left grow'>Team Liquid</h2>","<img src='./images/TeamLiquid.svg' class='h-12 w-12 mx-2'><h2 class='text-left grow text-2xl'>Team Liquid</h2>","<img src='./images/TeamLiquid.svg' class='h-8 w-8 mx-2'><h2 class='text-left grow text-2xl'>Team Liquid</h2>"], seeding: [5, 0, 0, 0, 0], matchups: [12, 0, 0, 0, 0], results: [0, 0, 0, 0, 0], gd: 0 },
    { num: 6, htmlInfo: ["<h2 class='text-right grow'>Version1</h2><img src='./images/Version1.png' class='h-7 w-7 mx-2'>","<img src='./images/Version1.png' class='h-7 w-7 mx-2'><h2 class='text-left grow'>Version1</h2>","<img src='./images/Version1.png' class='h-12 w-12 mx-2'><h2 class='text-left grow text-2xl'>Version1</h2>","<img src='./images/Version1.png' class='h-8 w-8 mx-2'><h2 class='text-left grow text-2xl'>Version1</h2>"], seeding: [6, 0, 0, 0, 0], matchups: [11, 0, 0, 0, 0], results: [0, 0, 0, 0, 0], gd: 0 },
    { num: 7, htmlInfo: ["<h2 class='text-right grow'>Oxygen Esports</h2><img src='./images/OxygenEsports.png' class='h-4 w-8 mx-2'>","<img src='./images/OxygenEsports.png' class='h-4 w-8 mx-2'><h2 class='text-left grow'>Oxygen Esports</h2>","<img src='./images/OxygenEsports.png' class='h-6 w-12 mx-2'><h2 class='text-left grow text-2xl'>Oxygen Esports</h2>","<img src='./images/OxygenEsports.png' class='h-4 w-8 mx-2'><h2 class='text-left grow text-2xl'>Oxygen Esports</h2>"], seeding: [7, 0, 0, 0, 0], matchups: [10, 0, 0, 0, 0], results: [0, 0, 0, 0, 0], gd: 0 },
    { num: 8, htmlInfo: ["<h2 class='text-right grow'>Spacestation Gaming</h2><img src='./images/SpacestationGaming.svg' class='h-7 w-7 mx-2'>","<img src='./images/SpacestationGaming.svg' class='h-7 w-7 mx-2'><h2 class='text-left grow'>Spacestation Gaming</h2>","<img src='./images/SpacestationGaming.svg' class='h-12 w-12 mx-2'><h2 class='text-left grow text-2xl'>Spacestation Gaming</h2>","<img src='./images/SpacestationGaming.svg' class='h-8 w-8 mx-2'><h2 class='text-left grow text-2xl'>Spacestation Gaming</h2>"], seeding: [8, 0, 0, 0, 0], matchups: [9, 0, 0, 0, 0], results: [0, 0, 0, 0, 0], gd: 0 },
    { num: 9, htmlInfo: ["<h2 class='text-right grow'>Team Falcons</h2><img src='./images/TeamFalcons.png' class='h-7 w-7 mx-2'>","<img src='./images/TeamFalcons.png' class='h-7 w-7 mx-2'><h2 class='text-left grow'>Team Falcons</h2>","<img src='./images/TeamFalcons.png' class='h-12 w-12 mx-2'><h2 class='text-left grow text-2xl'>Team Falcons</h2>","<img src='./images/TeamFalcons.png' class='h-8 w-8 mx-2'><h2 class='text-left grow text-2xl'>Team Falcons</h2>"], seeding: [9, 0, 0, 0, 0], matchups: [8, 0, 0, 0, 0], results: [0, 0, 0, 0, 0], gd: 0 },
    { num: 10, htmlInfo: ["<h2 class='text-right grow'>G2 Esports</h2><img src='./images/G2Esports.svg' class='h-7 w-7 mx-2'>","<img src='./images/G2Esports.svg' class='h-7 w-7 mx-2'><h2 class='text-left grow'>G2 Esports</h2>","<img src='./images/G2Esports.svg' class='h-12 w-12 mx-2'><h2 class='text-left grow text-2xl'>G2 Esports</h2>","<img src='./images/G2Esports.svg' class='h-8 w-8 mx-2'><h2 class='text-left grow text-2xl'>G2 Esports</h2>"], seeding: [10, 0, 0, 0, 0], matchups: [7, 0, 0, 0, 0], results: [0, 0, 0, 0, 0], gd: 0 },
    { num: 11, htmlInfo: ["<h2 class='text-right grow'>Quadrant</h2><img src='./images/Quadrant.png' class='h-7 w-7 mx-2'>","<img src='./images/Quadrant.png' class='h-7 w-7 mx-2'><h2 class='text-left grow'>Quadrant</h2>","<img src='./images/Quadrant.png' class='h-12 w-12 mx-2'><h2 class='text-left grow text-2xl'>Quadrant</h2>","<img src='./images/Quadrant.png' class='h-8 w-8 mx-2'><h2 class='text-left grow text-2xl'>Quadrant</h2>"], seeding: [11, 0, 0, 0, 0], matchups: [6, 0, 0, 0, 0], results: [0, 0, 0, 0, 0], gd: 0 },
    { num: 12, htmlInfo: ["<h2 class='text-right grow'>Team Secret</h2><img src='./images/TeamSecret.svg' class='h-7 w-7 mx-2'>","<img src='./images/TeamSecret.svg' class='h-7 w-7 mx-2'><h2 class='text-left grow'>Team Secret</h2>","<img src='./images/TeamSecret.svg' class='h-12 w-12 mx-2'><h2 class='text-left grow text-2xl'>Team Secret</h2>","<img src='./images/TeamSecret.svg' class='h-8 w-8 mx-2'><h2 class='text-left grow text-2xl'>Team Secret</h2>"], seeding: [12, 0, 0, 0, 0], matchups: [5, 0, 0, 0, 0], results: [0, 0, 0, 0, 0], gd: 0 },
    { num: 13, htmlInfo: ["<h2 class='text-right grow'>Pioneers</h2><img src='./images/Pioneers.png' class='h-7 w-7 mx-2'>","<img src='./images/Pioneers.png' class='h-7 w-7 mx-2'><h2 class='text-left grow'>Pioneers</h2>","<img src='./images/Pioneers.png' class='h-12 w-12 mx-2'><h2 class='text-left grow text-2xl'>Pioneers</h2>","<img src='./images/Pioneers.png' class='h-8 w-8 mx-2'><h2 class='text-left grow text-2xl'>Pioneers</h2>"], seeding: [13, 0, 0, 0, 0], matchups: [4, 0, 0, 0, 0], results: [0, 0, 0, 0, 0], gd: 0 },
    { num: 14, htmlInfo: ["<h2 class='text-right grow'>Moist Esports</h2><img src='./images/MoistEsports.png' class='h-7 w-7 mx-2'>","<img src='./images/MoistEsports.png' class='h-7 w-7 mx-2'><h2 class='text-left grow'>Moist Esports</h2>","<img src='./images/MoistEsports.png' class='h-12 w-12 mx-2'><h2 class='text-left grow text-2xl'>Moist Esports</h2>","<img src='./images/MoistEsports.png' class='h-8 w-8 mx-2'><h2 class='text-left grow text-2xl'>Moist Esports</h2>"], seeding: [14, 0, 0, 0, 0], matchups: [3, 0, 0, 0, 0], results: [0, 0, 0, 0, 0], gd: 0 },
    { num: 15, htmlInfo: ["<h2 class='text-right grow'>PWR</h2><img src='./images/PWR.png' class='h-7 w-7 mx-2'>","<img src='./images/PWR.png' class='h-7 w-7 mx-2'><h2 class='text-left grow'>PWR</h2>","<img src='./images/PWR.png' class='h-12 w-12 mx-2'><h2 class='text-left grow text-2xl'>PWR</h2>","<img src='./images/PWR.png' class='h-8 w-8 mx-2'><h2 class='text-left grow text-2xl'>PWR</h2>"], seeding: [15, 0, 0, 0, 0], matchups: [2, 0, 0, 0, 0], results: [0, 0, 0, 0, 0], gd: 0 },
    { num: 16, htmlInfo: ["<h2 class='text-right grow'>James Cheese</h2><img src='./images/JamesCheese.svg' class='h-7 w-7 mx-2'>","<img src='./images/JamesCheese.svg' class='h-7 w-7 mx-2'><h2 class='text-left grow'>James Cheese</h2>","<img src='./images/JamesCheese.svg' class='h-12 w-12 mx-2'><h2 class='text-left grow text-2xl'>James Cheese</h2>","<img src='./images/JamesCheese.svg' class='h-8 w-8 mx-2'><h2 class='text-left grow text-2xl'>James Cheese</h2>"], seeding: [16, 0, 0, 0, 0], matchups: [1, 0, 0, 0, 0], results: [0, 0, 0, 0, 0], gd: 0 }
]

// Function for all calculations (swiss stage/results, playoffs, prizes).
function calculate() {
    // Getting all round scores and converting the value to a NUMBER type.
    let scoresRound1 = [parseInt(document.getElementById("round1team1score").value), parseInt(document.getElementById("round1team2score").value), parseInt(document.getElementById("round1team3score").value), parseInt(document.getElementById("round1team4score").value), parseInt(document.getElementById("round1team5score").value), parseInt(document.getElementById("round1team6score").value), parseInt(document.getElementById("round1team7score").value), parseInt(document.getElementById("round1team8score").value), parseInt(document.getElementById("round1team9score").value), parseInt(document.getElementById("round1team10score").value), parseInt(document.getElementById("round1team11score").value), parseInt(document.getElementById("round1team12score").value), parseInt(document.getElementById("round1team13score").value), parseInt(document.getElementById("round1team14score").value), parseInt(document.getElementById("round1team15score").value), parseInt(document.getElementById("round1team16score").value)],
        scoresRound2 = [parseInt(document.getElementById("round2highTeam1score").value), parseInt(document.getElementById("round2highTeam2score").value), parseInt(document.getElementById("round2highTeam3score").value), parseInt(document.getElementById("round2highTeam4score").value), parseInt(document.getElementById("round2highTeam5score").value), parseInt(document.getElementById("round2highTeam6score").value), parseInt(document.getElementById("round2highTeam7score").value), parseInt(document.getElementById("round2highTeam8score").value), parseInt(document.getElementById("round2lowTeam1score").value), parseInt(document.getElementById("round2lowTeam2score").value), parseInt(document.getElementById("round2lowTeam3score").value), parseInt(document.getElementById("round2lowTeam4score").value), parseInt(document.getElementById("round2lowTeam5score").value), parseInt(document.getElementById("round2lowTeam6score").value), parseInt(document.getElementById("round2lowTeam7score").value), parseInt(document.getElementById("round2lowTeam8score").value)],
        scoresRound3 = [parseInt(document.getElementById("round3highTeam1score").value), parseInt(document.getElementById("round3highTeam2score").value), parseInt(document.getElementById("round3highTeam3score").value), parseInt(document.getElementById("round3highTeam4score").value), parseInt(document.getElementById("round3midTeam1score").value), parseInt(document.getElementById("round3midTeam2score").value), parseInt(document.getElementById("round3midTeam3score").value), parseInt(document.getElementById("round3midTeam4score").value), parseInt(document.getElementById("round3midTeam5score").value), parseInt(document.getElementById("round3midTeam6score").value), parseInt(document.getElementById("round3midTeam7score").value), parseInt(document.getElementById("round3midTeam8score").value), parseInt(document.getElementById("round3lowTeam1score").value), parseInt(document.getElementById("round3lowTeam2score").value), parseInt(document.getElementById("round3lowTeam3score").value), parseInt(document.getElementById("round3lowTeam4score").value)],
        scoresRound4 = [parseInt(document.getElementById("round4highTeam1score").value), parseInt(document.getElementById("round4highTeam2score").value), parseInt(document.getElementById("round4highTeam3score").value), parseInt(document.getElementById("round4highTeam4score").value), parseInt(document.getElementById("round4highTeam5score").value), parseInt(document.getElementById("round4highTeam6score").value), parseInt(document.getElementById("round4lowTeam1score").value), parseInt(document.getElementById("round4lowTeam2score").value), parseInt(document.getElementById("round4lowTeam3score").value), parseInt(document.getElementById("round4lowTeam4score").value), parseInt(document.getElementById("round4lowTeam5score").value), parseInt(document.getElementById("round4lowTeam6score").value)],
        scoresRound5 = [parseInt(document.getElementById("round5team1score").value), parseInt(document.getElementById("round5team2score").value), parseInt(document.getElementById("round5team3score").value), parseInt(document.getElementById("round5team4score").value), parseInt(document.getElementById("round5team5score").value), parseInt(document.getElementById("round5team6score").value)],
        playoffScores = [parseInt(document.getElementById("quarterTeam1score").value), parseInt(document.getElementById("quarterTeam2score").value), parseInt(document.getElementById("quarterTeam3score").value), parseInt(document.getElementById("quarterTeam4score").value), parseInt(document.getElementById("quarterTeam5score").value), parseInt(document.getElementById("quarterTeam6score").value), parseInt(document.getElementById("quarterTeam7score").value), parseInt(document.getElementById("quarterTeam8score").value), parseInt(document.getElementById("semiTeam1score").value), parseInt(document.getElementById("semiTeam2score").value), parseInt(document.getElementById("semiTeam3score").value), parseInt(document.getElementById("semiTeam4score").value), parseInt(document.getElementById("finalTeam1score").value), parseInt(document.getElementById("finalTeam2score").value)];

    // Swiss round 1 -> 2
    if (scoresRound1.some((value) => isNaN(value))) { return }
    else {
        // Resetting all initSeeds to the initial values.
        initSeeds.sort((a, b) => a.num - b.num);
        for (let num1 = 0, num2 = 16; num1 < 16; num1++, num2--) { initSeeds[num1].gd = 0; initSeeds[num1].results = [0, 0, 0, 0, 0]; initSeeds[num1].seeding = [(num1 + 1), 0, 0, 0, 0]; initSeeds[num1].matchups = [num2, 0, 0, 0, 0]; }
        
        // Setting results[0], resultsAgainst[0], and game difference (gd).
        for (let num1 = 0, num2 = 15; num1 < 16; num1++, num2--) { initSeeds[num1].results.splice(0, 1, scoresRound1[num1]); initSeeds[num1].resultsAgainst.splice(0, 1, scoresRound1[num2]); initSeeds[num1].gd += (scoresRound1[num1] - scoresRound1[num2]); }

        // Setting round 2 seeding[1]. Seeding 1 -> 8 is round 2 high, 9 -> 16 is round 2 low.
        initSeeds.sort((a, b) => b.gd - a.gd); for (let num1 = 0; num1 < 16; num1++) { initSeeds[num1].seeding[1] = (num1 + 1); }

        // Setting round 2 matchups[1] and matches in HTML using the above set seeding.
        initSeeds.sort((a, b) => a.seeding[1] - b.seeding[1]);
        for (let num1 = 0, num2 = 7; num1 < 8; num1++, num2--) { 
            initSeeds[num1].matchups[1] = initSeeds[num2].num; initSeeds[(num1 + 8)].matchups[1] = initSeeds[(num2 + 8)].num;
            if (num1 < 4) { document.getElementById("round2highTeam"+(num1+1)).innerHTML = initSeeds[num1].htmlInfo[0]; document.getElementById("round2lowTeam"+(num1+1)).innerHTML = initSeeds[(num1 + 8)].htmlInfo[0]; }
            else { document.getElementById("round2highTeam"+(num1+1)).innerHTML = initSeeds[num1].htmlInfo[1]; document.getElementById("round2lowTeam"+(num1+1)).innerHTML = initSeeds[(num1 + 8)].htmlInfo[1]; }
        }
    }

    // Swiss round 2 -> 3
    if (scoresRound2.some((value) => isNaN(value))) { return }
    else {
        // Setting results[1], resultsAgainst[1], and game difference (gd).
        for (let num1 = 0, num2 = 7; num1 < 8; num1++, num2--) { initSeeds[num1].results.splice(1, 1, scoresRound2[num1]); initSeeds[num1].resultsAgainst.splice(1, 1, scoresRound2[num2]); initSeeds[num1].gd += (scoresRound2[num1] - scoresRound2[num2]); }
        for (let num1 = 8, num2 = 15; num1 < 16; num1++, num2--) { initSeeds[num1].results.splice(1, 1, scoresRound2[num1]); initSeeds[num1].resultsAgainst.splice(1, 1, scoresRound2[num2]); initSeeds[num1].gd += (scoresRound2[num1] - scoresRound2[num2]); }

        // Setting round 3 seeding[2] using temporary variables. Seeding 1 -> 4 is round 3 high, 5 -> 12 is round 3 mid, 13 -> 16 is round 3 low.
        let tempSeedsHigh = [], tempSeedsLow = [];
        for (let num1 = 0; num1 < 16; num1++) { if (initSeeds[num1].seeding[1] < 9) { tempSeedsHigh.push(initSeeds[num1]); } else { tempSeedsLow.push(initSeeds[num1]); } }
        tempSeedsHigh.sort((a, b) => b.results[1] - a.results[1]); tempSeedsLow.sort((a, b) => b.results[1] - a.results[1]);

        let tempHighWin = [], tempHighLoss = [], tempLowWin = [], tempLowLoss = [];
        for (let num1 = 0; num1 < 8; num1++) { if (num1 < 4) { tempHighWin.push(tempSeedsHigh[num1]); tempLowWin.push(tempSeedsLow[num1]); } else { tempHighLoss.push(tempSeedsHigh[num1]); tempLowLoss.push(tempSeedsLow[num1]); } }
        tempHighWin.sort((a, b) => b.gd - a.gd); tempLowWin.sort((a, b) => b.gd - a.gd); tempHighLoss.sort((a, b) => b.gd - a.gd); tempLowLoss.sort((a, b) => b.gd - a.gd);

        for (let num1 = 0; num1 < 16; num1++) { 
            if (num1 < 4) { tempHighWin[num1].seeding[2] = (num1 + 1); } 
            else if (num1 < 8) { tempHighLoss[(num1 - 4)].seeding[2] = (num1 + 1); } 
            else if (num1 < 12) { tempLowWin[(num1 - 8)].seeding[2] = (num1 + 1); } 
            else if (num1 < 16) { tempLowLoss[(num1 - 12)].seeding[2] = (num1 + 1); } 
        }

        for (let num1 = 0; num1 < 4; num1++) {
            for (let num2 = 0; num2 < 16; num2++) {
                if (tempHighWin[num1].num == initSeeds[num2].num) { initSeeds[num2].seeding[2] = tempHighWin[num1].seeding[2]; }
                else if (tempHighLoss[num1].num == initSeeds[num2].num) { initSeeds[num2].seeding[2] = tempHighLoss[num1].seeding[2]; }
                else if (tempLowWin[num1].num == initSeeds[num2].num) { initSeeds[num2].seeding[2] = tempLowWin[num1].seeding[2]; }
                else if (tempLowLoss[num1].num == initSeeds[num2].num) { initSeeds[num2].seeding[2] = tempLowLoss[num1].seeding[2]; }
            }
        }
        
        // Checking for rematches and shuffling around seeding if there are any.
        initSeeds.sort((a, b) => a.num - b.num);
        let testingList = [0, 0, 0, 0, 0, 0, 0, 0], rematches = true, testNum = 0;
        for (let num1 = 0; num1 < 16; num1++) {
            if (initSeeds[num1].seeding[2] == 5) { testingList.splice(0, 1, initSeeds[num1]); }
            else if (initSeeds[num1].seeding[2] == 6) { testingList.splice(1, 1, initSeeds[num1]); }
            else if (initSeeds[num1].seeding[2] == 7) { testingList.splice(2, 1, initSeeds[num1]); }
            else if (initSeeds[num1].seeding[2] == 8) { testingList.splice(3, 1, initSeeds[num1]); }
            else if (initSeeds[num1].seeding[2] == 9) { testingList.splice(4, 1, initSeeds[num1]); }
            else if (initSeeds[num1].seeding[2] == 10) { testingList.splice(5, 1, initSeeds[num1]); }
            else if (initSeeds[num1].seeding[2] == 11) { testingList.splice(6, 1, initSeeds[num1]); }
            else if (initSeeds[num1].seeding[2] == 12) { testingList.splice(7, 1, initSeeds[num1]); }
        }
        while (rematches == true) {
            if (testingList[0].matchups[0] == testingList[7].num) { testNum++; }
            else if (testingList[1].matchups[0] == testingList[6].num) { testNum++; }
            else if (testingList[2].matchups[0] == testingList[5].num) { testNum++; }
            else if (testingList[3].matchups[0] == testingList[4].num) { testNum++; }
            else { rematches = false; testNum = 0; }

            if (testNum == 1 || testNum == 3 || testNum == 5 || testNum == 7 || testNum == 9 || testNum == 11 || testNum == 13 || testNum == 15 || testNum == 17 || testNum == 19 || testNum == 21 || testNum == 23) { [testingList[4], testingList[5]] = [testingList[5], testingList[4]]; }
            else if (testNum == 2 || testNum == 8 || testNum == 14 || testNum == 20) { [testingList[4], testingList[5], testingList[6]] = [testingList[5], testingList[6], testingList[4]]; }
            else if (testNum == 4 || testNum == 10 || testNum == 16 || testNum == 22) { [testingList[4], testingList[5], testingList[6]] = [testingList[6], testingList[4], testingList[5]]; }
            else if (testNum == 6) { [testingList[4], testingList[5], testingList[6], testingList[7]] = [testingList[6], testingList[5], testingList[7], testingList[4]]; }
            else if (testNum == 12) { [testingList[4], testingList[5], testingList[6], testingList[7]] = [testingList[6], testingList[7], testingList[4], testingList[5]]; }
            else if (testNum == 18) { [testingList[4], testingList[5], testingList[6], testingList[7]] = [testingList[7], testingList[5], testingList[4], testingList[6]]; }
            else if (testNum == 23) { console.log("For dev: There is still a rematch, but none of the above shuffles removes it. Round 3."); rematches = false; }
        }
        if (rematches == false) { for (let num1 = 4; num1 < 8; num1++) { for (let num2 = 1; num2 < 17; num2++) { if (testingList[num1].num == num2) { initSeeds[(num2 - 1)].seeding[2] = (num1 + 5); } } } }

        // Setting round 3 matchups[2] using the above set seeding and round 3 matches in HTML.
        initSeeds.sort((a, b) => a.seeding[2] - b.seeding[2]);
        for (let num1 = 0, num2 = 3; num1 < 4; num1++, num2--) { 
            initSeeds[num1].matchups[2] = initSeeds[num2].num; initSeeds[(num1 + 12)].matchups[2] = initSeeds[(num2 + 12)].num; 
            if (num1 < 2) { document.getElementById("round3highTeam"+(num1+1)).innerHTML = initSeeds[num1].htmlInfo[0]; document.getElementById("round3lowTeam"+(num1+1)).innerHTML = initSeeds[(num1 + 12)].htmlInfo[0]; }
            else { document.getElementById("round3highTeam"+(num1+1)).innerHTML = initSeeds[num1].htmlInfo[1]; document.getElementById("round3lowTeam"+(num1+1)).innerHTML = initSeeds[(num1 + 12)].htmlInfo[1]; }
        }
        for (let num1 = 4, num2 = 11; num1 < 12; num1++, num2--) { 
            initSeeds[num1].matchups[2] = initSeeds[num2].num;
            if (num1 < 8) { document.getElementById("round3midTeam"+(num1-3)).innerHTML = initSeeds[num1].htmlInfo[0]; }
            else { document.getElementById("round3midTeam"+(num1-3)).innerHTML = initSeeds[num1].htmlInfo[1]; }
        }
    }

    // Swiss round 3 -> 4
    if (scoresRound3.some((value) => isNaN(value))) { return }
    else {
        // Setting results[2], resultsAgainst[2], and game difference (gd).
        for (let num1 = 0, num2 = 3; num1 < 4; num1++, num2--) { initSeeds[num1].results.splice(2, 1, scoresRound3[num1]); initSeeds[num1].resultsAgainst.splice(2, 1, scoresRound3[num2]); initSeeds[num1].gd += (scoresRound3[num1] - scoresRound3[num2]); }
        for (let num1 = 4, num2 = 11; num1 < 12; num1++, num2--) { initSeeds[num1].results.splice(2, 1, scoresRound3[num1]); initSeeds[num1].resultsAgainst.splice(2, 1, scoresRound3[num2]); initSeeds[num1].gd += (scoresRound3[num1] - scoresRound3[num2]); }
        for (let num1 = 12, num2 = 15; num1 < 16; num1++, num2--) { initSeeds[num1].results.splice(2, 1, scoresRound3[num1]); initSeeds[num1].resultsAgainst.splice(2, 1, scoresRound3[num2]); initSeeds[num1].gd += (scoresRound3[num1] - scoresRound3[num2]); }

        // Setting round 4 seeding[3]. Seeding 1 -> 6 is round 4 high, 7 -> 12 is round 4 low.
        let tempSeedsHigh = [], tempSeedsMid = [], tempSeedsLow = [];
        for (let num1 = 0; num1 < 16; num1++) { if (initSeeds[num1].seeding[2] < 5) { tempSeedsHigh.push(initSeeds[num1]); } else if (initSeeds[num1].seeding[2] < 13) { tempSeedsMid.push(initSeeds[num1]); } else { tempSeedsLow.push(initSeeds[num1]); } }
        tempSeedsHigh.sort((a, b) => b.results[2] - a.results[2]); tempSeedsMid.sort((a, b) => b.results[2] - a.results[2]); tempSeedsLow.sort((a, b) => b.results[2] - a.results[2]);

        let tempHighWin = [], tempHighLoss = [], tempMidWin = [], tempMidLoss = [], tempLowWin = [], tempLowLoss = [];
        for (let num1 = 0; num1 < 4; num1++) { if (num1 < 2) { tempHighWin.push(tempSeedsHigh[num1]); tempLowWin.push(tempSeedsLow[num1]); } else { tempHighLoss.push(tempSeedsHigh[num1]); tempLowLoss.push(tempSeedsLow[num1]); } }
        for (let num1 = 0; num1 < 8; num1++) { if (num1 < 4) { tempMidWin.push(tempSeedsMid[num1]); } else { tempMidLoss.push(tempSeedsMid[num1]); }}
        tempHighWin.sort((a, b) => b.gd - a.gd); tempMidWin.sort((a, b) => b.gd - a.gd); tempLowWin.sort((a, b) => b.gd - a.gd); tempHighLoss.sort((a, b) => b.gd - a.gd); tempMidLoss.sort((a, b) => b.gd - a.gd); tempLowLoss.sort((a, b) => b.gd - a.gd);

        for (let num1 = 2; num1 < 14; num1++) {
            if (num1 < 4) { tempHighLoss[(num1 - 2)].seeding[3] = (num1 - 1); }
            else if (num1 < 8) { tempMidWin[(num1 - 4)].seeding[3] = (num1 - 1); }
            else if (num1 < 12) { tempMidLoss[(num1 - 8)].seeding[3] = (num1 - 1); }
            else if (num1 < 14) { tempLowWin[(num1 - 12)].seeding[3] = (num1 - 1); }
        }

        for (let num1 = 0; num1 < 2; num1++) { for (let num2 = 0; num2 < 16; num2++) {
                if (tempHighWin[num1].num == initSeeds[num2].num) { initSeeds[num2].seeding[3] = tempHighWin[num1].seeding[3]; }
                else if (tempHighLoss[num1].num == initSeeds[num2].num) { initSeeds[num2].seeding[3] = tempHighLoss[num1].seeding[3]; }
                else if (tempLowWin[num1].num == initSeeds[num2].num) { initSeeds[num2].seeding[3] = tempLowWin[num1].seeding[3]; }
                else if (tempLowLoss[num1].num == initSeeds[num2].num) { initSeeds[num2].seeding[3] = tempLowLoss[num1].seeding[3]; }
            }
        }
        
        for (let num1 = 0; num1 < 4; num1++) { for (let num2 = 0; num2 < 16; num2++) {
                if (tempMidWin[num1].num == initSeeds[num2].num) { initSeeds[num2].seeding[3] = tempMidWin[num1].seeding[3]; }
                else if (tempMidLoss[num1].num == initSeeds[num2].num) { initSeeds[num2].seeding[3] = tempMidLoss[num1].seeding[3]; }
            }
        }

        // Checking for rematches and shuffling around seeding if there are any.
        initSeeds.sort((a, b) => a.num - b.num);
        let testingList1 = [0, 0, 0, 0, 0, 0], rematches = true, testNum = 0;
        for (let num1 = 0; num1 < 16; num1++) { for (let num2 = 0; num2 < 6; num2++) { if (initSeeds[num1].seeding[3] == (num2 + 1)) { testingList1.splice(num2, 1, initSeeds[num1]); } } }
        while (rematches == true) {
            if (testingList1[0].matchups[0] == testingList1[5].num || testingList1[0].matchups[1] == testingList1[5].num) { testNum++; }
            else if (testingList1[1].matchups[0] == testingList1[4].num || testingList1[1].matchups[1] == testingList1[4].num) { testNum++; }
            else if (testingList1[2].matchups[0] == testingList1[3].num || testingList1[2].matchups[1] == testingList1[3].num) { testNum++; }
            else { rematches = false; testNum = 0; }

            if (testNum == 1 || testNum == 4 || testNum == 7 || testNum == 10) { [testingList1[3], testingList1[4]] = [testingList1[4], testingList1[3]]; }
            else if (testNum == 2 || testNum == 8) { [testingList1[2], testingList1[3], testingList1[4]] = [testingList1[4], testingList1[3], testingList1[2]]; }
            else if (testNum == 3) { [testingList1[2], testingList1[3], testingList1[4], testingList1[5]] = [testingList1[4], testingList1[2], testingList1[5], testingList1[3]]; }
            else if (testNum == 5) { [testingList1[2], testingList1[3], testingList1[4], testingList1[5]] = [testingList1[4], testingList1[3], testingList1[2], testingList1[5]]; }
            else if (testNum == 6) { [testingList1[2], testingList1[3], testingList1[4], testingList1[5]] = [testingList1[4], testingList1[5], testingList1[3], testingList1[2]]; }
            else if (testNum == 9) { [testingList1[2], testingList1[3], testingList1[4], testingList1[5]] = [testingList1[5], testingList1[2], testingList1[3], testingList1[4]]; }
            else if (testNum == 11) { [testingList1[2], testingList1[3], testingList1[4]] = [testingList1[3], testingList1[4], testingList1[2]]; }
            else if (testNum == 12) { console.log("For dev: There is still a rematch, but none of the above shuffles removes it. Round 4 high."); rematches = false; }
        }
        let testingList2 = [0, 0, 0, 0, 0, 0], rematches2 = true, testNum2 = 0;
        for (let num1 = 0; num1 < 16; num1++) { for (let num2 = 0; num2 < 6; num2++) { if (initSeeds[num1].seeding[3] == (num2 + 7)) { testingList2.splice(num2, 1, initSeeds[num1]); } } }
        while (rematches2 == true) {
            if (testingList2[0].matchups[0] == testingList2[5].num || testingList2[0].matchups[1] == testingList2[5].num) { testNum2++; }
            else if (testingList2[1].matchups[0] == testingList2[4].num || testingList2[1].matchups[1] == testingList2[4].num) { testNum2++; }
            else if (testingList2[2].matchups[0] == testingList2[3].num || testingList2[2].matchups[1] == testingList2[3].num) { testNum2++; }
            else { rematches2 = false; testNum2 = 0; }

            if (testNum2 == 1 || testNum2 == 4 || testNum2 == 7 || testNum2 == 10) { [testingList2[3], testingList2[4]] = [testingList2[4], testingList2[3]]; }
            else if (testNum2 == 2 || testNum == 8) { [testingList2[2], testingList2[3], testingList2[4]] = [testingList2[4], testingList2[3], testingList2[2]]; }
            else if (testNum2 == 3) { [testingList2[2], testingList2[3], testingList2[4], testingList2[5]] = [testingList2[4], testingList2[2], testingList2[5], testingList2[3]]; }
            else if (testNum2 == 5) { [testingList2[2], testingList2[3], testingList2[4], testingList2[5]] = [testingList2[4], testingList2[3], testingList2[2], testingList2[5]]; }
            else if (testNum2 == 6) { [testingList2[2], testingList2[3], testingList2[4], testingList2[5]] = [testingList2[4], testingList2[5], testingList2[3], testingList2[2]]; }
            else if (testNum2 == 9) { [testingList2[2], testingList2[3], testingList2[4], testingList2[5]] = [testingList2[5], testingList2[2], testingList2[3], testingList2[4]]; }
            else if (testNum2 == 11) { [testingList2[2], testingList2[3], testingList2[4]] = [testingList2[3], testingList2[4], testingList2[2]]; }
            else if (testNum == 12) { console.log("For dev: There is still a rematch, but none of the above shuffles removes it. Round 4 low."); rematches = false; }
        }
        // Puts the new round 4 seeds (now without rematches) into the initSeeds list.
        if (rematches == false) { for (let num1 = 0; num1 < 6; num1++) { for (let num2 = 1; num2 < 17; num2++) { if (testingList1[num1].num == num2) { initSeeds[(num2 - 1)].seeding[3] = (num1 + 1); } } } }
        if (rematches2 == false) { for (let num1 = 0; num1 < 6; num1++) { for (let num2 = 1; num2 < 17; num2++) { if (testingList2[num1].num == num2) { initSeeds[(num2 - 1)].seeding[3] = (num1 + 7); } } } }

        // Setting round 4 matchups[3] using the above set seeding and round 4 matches in HTML.
        initSeeds.sort((a, b) => a.seeding[3] - b.seeding[3]);
        for (let num1 = 0, num2 = 5; num1 < 6; num1++, num2--) { 
            initSeeds[(num1 + 4)].matchups[3] = initSeeds[(num2 + 4)].num; initSeeds[(num1 + 10)].matchups[3] = initSeeds[(num2 + 10)].num; 
            if (num1 < 3) { document.getElementById("round4highTeam"+(num1+1)).innerHTML = initSeeds[(num1 + 4)].htmlInfo[0]; document.getElementById("round4lowTeam"+(num1+1)).innerHTML = initSeeds[(num1 + 10)].htmlInfo[0]; }
            else { document.getElementById("round4highTeam"+(num1+1)).innerHTML = initSeeds[(num1 + 4)].htmlInfo[1]; document.getElementById("round4lowTeam"+(num1+1)).innerHTML = initSeeds[(num1 + 10)].htmlInfo[1]; }
        }
        
        // Setting prizes teams 15/16
        let tempPrizes = 15;
        for (let num1 = 0; num1 < 16; num1++) { if (tempPrizes < 17) { if (initSeeds[num1].seeding[3] == 0 && initSeeds[num1].results[2] != 3) { document.getElementById("prizesTeam"+tempPrizes).innerHTML = initSeeds[num1].htmlInfo[3]; tempPrizes++; } } }
    }

    // Swiss round 4 -> 5
    if (scoresRound4.some((value) => isNaN(value))) { return }
    else {
        // Setting results[3], resultsAgainst[3] and game difference (gd).
        for (let num1 = 4, num2 = 9; num1 < 10; num1++, num2--) { initSeeds[num1].results.splice(3, 1, scoresRound4[(num1 - 4)]); initSeeds[num1].resultsAgainst.splice(3, 1, scoresRound4[(num2 - 4)]); initSeeds[num1].gd += (scoresRound4[(num1 - 4)] - scoresRound4[(num2 - 4)]); }
        for (let num1 = 10, num2 = 15; num1 < 16; num1++, num2--) { initSeeds[num1].results.splice(3, 1, scoresRound4[(num1 - 4)]); initSeeds[num1].resultsAgainst.splice(3, 1, scoresRound4[(num2 - 4)]); initSeeds[num1].gd += (scoresRound4[(num1 - 4)] - scoresRound4[(num2 - 4)]); }

        // Setting round 5 seeding[4] using temporary variables. Seeding will be 1 -> 6 for round 5.
        let tempSeedsHigh = [], tempSeedsLow = [];
        for (let num1 = 0; num1 < 16; num1++) { if (initSeeds[num1].seeding[3] != 0) { if (initSeeds[num1].seeding[3] < 7) { tempSeedsHigh.push(initSeeds[num1]); } else { tempSeedsLow.push(initSeeds[num1]); } } }
        tempSeedsHigh.sort((a, b) => b.results[3] - a.results[3]); tempSeedsLow.sort((a, b) => b.results[3] - a.results[3]);

        let tempHighWin = [], tempHighLoss = [], tempLowWin = [], tempLowLoss = [];
        for (let num1 = 0; num1 < 6; num1++) { if (num1 < 3) { tempHighWin.push(tempSeedsHigh[num1]); tempLowWin.push(tempSeedsLow[num1]); } else { tempHighLoss.push(tempSeedsHigh[num1]); tempLowLoss.push(tempSeedsLow[num1]); } }
        tempHighWin.sort((a, b) => b.gd - a.gd); tempLowWin.sort((a, b) => b.gd - a.gd); tempHighLoss.sort((a, b) => b.gd - a.gd); tempLowLoss.sort((a, b) => b.gd - a.gd);

        for (let num1 = 0; num1 < 6; num1++) {
            if (num1 < 3) { tempHighLoss[num1].seeding[4] = (num1 + 1); }
            else if (num1 < 6) { tempLowWin[(num1 - 3)].seeding[4] = (num1 + 1); }
        }

        for (let num1 = 0; num1 < 3; num1++) {
            for (let num2 = 0; num2 < 16; num2++) {
                if (tempHighWin[num1].num == initSeeds[num2].num) { initSeeds[num2].seeding[4] = tempHighWin[num1].seeding[4]; }
                else if (tempHighLoss[num1].num == initSeeds[num2].num) { initSeeds[num2].seeding[4] = tempHighLoss[num1].seeding[4]; }
                else if (tempLowWin[num1].num == initSeeds[num2].num) { initSeeds[num2].seeding[4] = tempLowWin[num1].seeding[4]; }
                else if (tempLowLoss[num1].num == initSeeds[num2].num) { initSeeds[num2].seeding[4] = tempLowLoss[num1].seeding[4]; }
            }
        }

        // Checking for rematches and shuffling around seeding if there are any.
        initSeeds.sort((a, b) => a.num - b.num);
        let testingList = [0, 0, 0, 0, 0, 0], rematches = true, testNum = 0;
        for (let num1 = 0; num1 < 16; num1++) { for (let num2 = 0; num2 < 6; num2++) { if (initSeeds[num1].seeding[4] == (num2 + 1)) { testingList.splice(num2, 1, initSeeds[num1]); } } }
        while (rematches == true) {
            if (testingList[0].matchups[0] == testingList[5].num || testingList[0].matchups[1] == testingList[5].num || testingList[0].matchups[2] == testingList[5].num) { testNum++; }
            else if (testingList[1].matchups[0] == testingList[4].num || testingList[1].matchups[1] == testingList[4].num || testingList[1].matchups[2] == testingList[4].num) { testNum++; }
            else if (testingList[2].matchups[0] == testingList[3].num || testingList[2].matchups[1] == testingList[3].num || testingList[2].matchups[2] == testingList[3].num) { testNum++; }
            else { rematches = false; testNum = 0; }

            if (testNum == 1 || testNum == 3 || testNum == 5 || testNum == 10 || testNum == 13) { [testingList[3], testingList[4]] = [testingList[4], testingList[3]]; }
            else if (testNum == 2) { [testingList[3], testingList[4], testingList[5]] = [testingList[4], testingList[5], testingList[3]]; }
            else if (testNum == 4) { [testingList[3], testingList[4], testingList[5]] = [testingList[5], testingList[3], testingList[4]]; }
            else if (testNum == 6) { [testingList[2], testingList[3], testingList[4], testingList[5]] = [testingList[5], testingList[4], testingList[2], testingList[3]]; }
            else if (testNum == 7) { [testingList[3], testingList[4], testingList[5]] = [testingList[5], testingList[4], testingList[3]]; }
            else if (testNum == 8) { [testingList[2], testingList[3], testingList[4], testingList[5]] = [testingList[5], testingList[3], testingList[4], testingList[2]]; }
            else if (testNum == 9) { [testingList[2], testingList[3], testingList[4], testingList[5]] = [testingList[5], testingList[2], testingList[3], testingList[4]]; }
            else if (testNum == 11 || testNum == 14) { [testingList[2], testingList[3], testingList[4]] = [testingList[4], testingList[3], testingList[2]]; }
            else if (testNum == 12) { [testingList[1], testingList[2], testingList[3], testingList[4], testingList[5]] = [testingList[5], testingList[4], testingList[2], testingList[3], testingList[1]]; }
            else if (testNum == 15) { console.log("For dev: There is still a rematch, but none of the above shuffles removes it. Round 5."); rematches = false; }
        }
        // Puts the new round 5 seeds (now without rematches) into the initSeeds list.
        if (rematches == false) { for (let num1 = 0; num1 < 6; num1++) { for (let num2 = 1; num2 < 17; num2++) { if (testingList[num1].num == num2) { initSeeds[(num2 - 1)].seeding[4] = (num1 + 1); } } } }

        // Setting round 5 matchups[4] and matches in HTML using the above set seeding.
        initSeeds.sort((a, b) => a.seeding[4] - b.seeding[4]);
        for (let num1 = 5, num2 = 10; num1 < 11; num1++, num2--) { 
            initSeeds[num1].matchups[4] = initSeeds[num2].num;
            if (num1 < 8) { document.getElementById("round5team"+(num1 - 4)).innerHTML = initSeeds[(num1 + 5)].htmlInfo[0]; }
            else { document.getElementById("round5team"+(num1 - 4)).innerHTML = initSeeds[(num1 + 5)].htmlInfo[1]; }
        }
        
        // Setting prizes teams 12, 13 & 14
        let tempPrizes = 12;
        for (let num1 = 0; num1 < 16; num1++) { if (tempPrizes < 15) { if (initSeeds[num1].seeding[4] == 0 && initSeeds[num1].seeding[3] != 0 && initSeeds[num1].results[3] != 3) { document.getElementById("prizesTeam"+tempPrizes).innerHTML = initSeeds[num1].htmlInfo[3]; tempPrizes++; } } }
    }

    // Swiss round 5 -> swiss results & prizes & playoffs
    if (scoresRound5.some((value) => isNaN(value))) { return }
    else {
        // Setting results[4], resultsAgainst[4], and game difference (gd).
        for (let num1 = 10, num2 = 15; num1 < 16; num1++, num2--) { initSeeds[num1].results.splice(4, 1, scoresRound5[(num1 - 10)]); initSeeds[num1].resultsAgainst.splice(4, 1, scoresRound5[(num2 - 10)]); initSeeds[num1].gd += (scoresRound5[(num1 - 10)] - scoresRound5[(num2 - 10)]); }
        
        // Filling in swiss results using temporary variables.
        initSeeds.sort((a, b) => a.seeding[4] - b.seeding[4] || a.seeding[3] - b.seeding[3]);
        let round3teams = [], round4teams = [], round5teams = [];
        for (let num1 = 0; num1 < 16; num1++) { if (num1 < 4) { round3teams.push(initSeeds[num1]); } else if (num1 < 10) { round4teams.push(initSeeds[num1]); } else if (num1 < 16) { round5teams.push(initSeeds[num1]); } }
        let round3win = [], round3loss = [], round4win = [], round4loss = [], round5win = [], round5loss = [];
        for (let num1 = 0; num1 < 4; num1++) { if (round3teams[num1].results[2] == 3) { round3win.push(round3teams[num1]); } else { round3loss.push(round3teams[num1]); } }
        for (let num1 = 0; num1 < 6; num1++) { if (round4teams[num1].results[3] == 3) { round4win.push(round4teams[num1]); } else { round4loss.push(round4teams[num1]); } }
        for (let num1 = 0; num1 < 6; num1++) { if (round5teams[num1].results[4] == 3) { round5win.push(round5teams[num1]); } else { round5loss.push(round5teams[num1]); } }
        round3win.sort((a, b) => b.gd - a.gd || a.num - b.num); round3loss.sort((a, b) => b.gd - a.gd || a.num - b.num); round4win.sort((a, b) => b.gd - a.gd || a.num - b.num); round4loss.sort((a, b) => b.gd - a.gd || a.num - b.num); round5win.sort((a, b) => b.gd - a.gd || a.num - b.num); round5loss.sort((a, b) => b.gd - a.gd || a.num - b.num);

        // Setting results teams, game difference
        for (let num1 = 0; num1 < 16; num1++) {
            if (num1 < 2) {
                document.getElementById("resultsTeam"+(num1+1)).innerHTML = round3win[num1].htmlInfo[1];
                document.getElementById("resultsTeam"+(num1+1)+"games").innerHTML = (round3win[num1].results.reduce((a, b) => {return a + b;}, 0)) + " - " + (round3win[num1].resultsAgainst.reduce((a, b) => {return a + b;}, 0));
                document.getElementById("resultsTeam"+(num1+1)+"gd").innerHTML = round3win[num1].gd;
                if (round3win[num1].gd > 0) { document.getElementById("resultsTeam"+(num1+1)+"gd").innerHTML = "+" + round3win[num1].gd; } else { document.getElementById("resultsTeam"+(num1+1)+"gd").innerHTML = round3win[num1].gd; }
            }

            else if (num1 < 5) {
                document.getElementById("resultsTeam"+(num1+1)).innerHTML = round4win[(num1 - 2)].htmlInfo[1];
                document.getElementById("resultsTeam"+(num1+1)+"games").innerHTML = (round4win[(num1 - 2)].results.reduce((a, b) => {return a + b;}, 0)) + " - " + (round4win[(num1 - 2)].resultsAgainst.reduce((a, b) => {return a + b;}, 0));
                document.getElementById("resultsTeam"+(num1+1)+"gd").innerHTML = round4win[(num1 - 2)].gd;
                if (round4win[(num1-2)].gd > 0) { document.getElementById("resultsTeam"+(num1+1)+"gd").innerHTML = "+" + round4win[(num1-2)].gd; } else { document.getElementById("resultsTeam"+(num1+1)+"gd").innerHTML = round4win[(num1-2)].gd; }
            }

            else if (num1 < 8) {
                document.getElementById("resultsTeam"+(num1+1)).innerHTML = round5win[(num1 - 5)].htmlInfo[1];
                document.getElementById("resultsTeam"+(num1+1)+"games").innerHTML = (round5win[(num1-5)].results.reduce((a, b) => {return a + b;}, 0)) + " - " + (round5win[(num1-5)].resultsAgainst.reduce((a, b) => {return a + b;}, 0));
                document.getElementById("resultsTeam"+(num1+1)+"gd").innerHTML = round5win[(num1 - 5)].gd;
                if (round5win[(num1-5)].gd > 0) { document.getElementById("resultsTeam"+(num1+1)+"gd").innerHTML = "+" + round5win[(num1-5)].gd;} else {document.getElementById("resultsTeam"+(num1+1)+"gd").innerHTML = round5win[(num1-5)].gd; }
            }

            else if (num1 < 11) {
                document.getElementById("resultsTeam"+(num1+1)).innerHTML = round5loss[(num1 - 8)].htmlInfo[1];
                document.getElementById("resultsTeam"+(num1+1)+"games").innerHTML = (round5loss[(num1 - 8)].results.reduce((a, b) => {return a + b;}, 0)) + " - " + (round5loss[(num1 - 8)].resultsAgainst.reduce((a, b) => {return a + b;}, 0));
                document.getElementById("resultsTeam"+(num1+1)+"gd").innerHTML = round5loss[(num1 - 8)].gd;
                if (round5loss[(num1-8)].gd > 0) { document.getElementById("resultsTeam"+(num1+1)+"gd").innerHTML = "+" + round5loss[(num1-8)].gd;} else {document.getElementById("resultsTeam"+(num1+1)+"gd").innerHTML = round5loss[(num1-8)].gd; }
            }

            else if (num1 < 14) {
                document.getElementById("resultsTeam"+(num1+1)).innerHTML = round4loss[(num1 - 11)].htmlInfo[1];
                document.getElementById("resultsTeam"+(num1+1)+"games").innerHTML = (round4loss[(num1-11)].results.reduce((a, b) => {return a + b;}, 0)) + " - " + (round4loss[(num1-11)].resultsAgainst.reduce((a, b) => {return a + b;}, 0));
                document.getElementById("resultsTeam"+(num1+1)+"gd").innerHTML = round4loss[(num1 - 11)].gd;
                if (round4loss[(num1-11)].gd > 0) { document.getElementById("resultsTeam"+(num1+1)+"gd").innerHTML = "+" + round4loss[(num1-11)].gd;} else {document.getElementById("resultsTeam"+(num1+1)+"gd").innerHTML = round4loss[(num1-11)].gd; }
            }

            else if (num1 < 16) {
                document.getElementById("resultsTeam"+(num1+1)).innerHTML = round3loss[(num1 - 14)].htmlInfo[1];
                document.getElementById("resultsTeam"+(num1+1)+"games").innerHTML = (round3loss[(num1 - 14)].results.reduce((a, b) => {return a + b;}, 0)) + " - " + (round3loss[(num1 - 14)].resultsAgainst.reduce((a, b) => {return a + b;}, 0));
                document.getElementById("resultsTeam"+(num1+1)+"gd").innerHTML = round3loss[(num1 - 14)].gd;
                if (round3loss[(num1-14)].gd > 0) { document.getElementById("resultsTeam"+(num1+1)+"gd").innerHTML = "+" + round3loss[(num1-14)].gd;} else {document.getElementById("resultsTeam"+(num1+1)+"gd").innerHTML = round3loss[(num1-14)].gd; }
            }
        }
        
        // Setting prizes teams 9, 10 & 11
        let tempPrizes = 9;
        for (let num1 = 0; num1 < 16; num1++) { if (tempPrizes < 12) { if (initSeeds[num1].seeding[3] != 0 && initSeeds[num1].seeding[4] != 0 && initSeeds[num1].results[4] != 3) { document.getElementById("prizesTeam"+tempPrizes).innerHTML = initSeeds[num1].htmlInfo[3]; tempPrizes++; } } }

        // Setting playoff quarterfinal teams
        document.getElementById("quarterTeam1").innerHTML = round3win[0].htmlInfo[2]; document.getElementById("quarterTeam2").innerHTML = round3win[1].htmlInfo[2]; document.getElementById("quarterTeam3").innerHTML = round4win[0].htmlInfo[2]; document.getElementById("quarterTeam4").innerHTML = round4win[1].htmlInfo[2]; document.getElementById("quarterTeam5").innerHTML = round4win[2].htmlInfo[2]; document.getElementById("quarterTeam6").innerHTML = round5win[0].htmlInfo[2]; document.getElementById("quarterTeam7").innerHTML = round5win[1].htmlInfo[2]; document.getElementById("quarterTeam8").innerHTML = round5win[2].htmlInfo[2];

        // Quarterfinals -> semifinals/prizes
        let quarterFinalWin = [0, 0, 0, 0];
        if (isNaN(playoffScores[0]) || isNaN(playoffScores[7])) {}
        else { if (playoffScores[0] > playoffScores[7]) {
                document.getElementById("semiTeam1").innerHTML = round3win[0].htmlInfo[2];
                quarterFinalWin.splice(0, 1, round3win[0]);
                document.getElementById("prizesTeam5").innerHTML = round5win[2].htmlInfo[3];
            }
            else if (playoffScores[7] > playoffScores[0]) {
                document.getElementById("semiTeam1").innerHTML = round5win[2].htmlInfo[2];
                quarterFinalWin.splice(0, 1, round5win[2]);
                document.getElementById("prizesTeam5").innerHTML = round3win[0].htmlInfo[3];
            }
        }

        if (isNaN(playoffScores[1]) || isNaN(playoffScores[6])) {}
        else { if (playoffScores[1] > playoffScores[6]) {
                document.getElementById("semiTeam3").innerHTML = round3win[1].htmlInfo[2];
                quarterFinalWin.splice(2, 1, round3win[1]);
                document.getElementById("prizesTeam7").innerHTML = round5win[1].htmlInfo[3];
            }
            else if (playoffScores[6] > playoffScores[1]) {
                document.getElementById("semiTeam3").innerHTML = round5win[1].htmlInfo[2];
                quarterFinalWin.splice(2, 1, round5win[1]);
                document.getElementById("prizesTeam7").innerHTML = round3win[1].htmlInfo[3];
            }
        }

        if (isNaN(playoffScores[2]) || isNaN(playoffScores[5])) {}
        else { if (playoffScores[2] > playoffScores[5]) {
                document.getElementById("semiTeam4").innerHTML = round4win[0].htmlInfo[2];
                quarterFinalWin.splice(3, 1, round4win[0]);
                document.getElementById("prizesTeam8").innerHTML = round5win[0].htmlInfo[3];
            }
            else if (playoffScores[5] > playoffScores[2]) {
                document.getElementById("semiTeam4").innerHTML = round5win[0].htmlInfo[2];
                quarterFinalWin.splice(3, 1, round5win[0]);
                document.getElementById("prizesTeam8").innerHTML = round4win[0].htmlInfo[3];
            }
        }

        if (isNaN(playoffScores[3]) || isNaN(playoffScores[4])) {}
        else { if (playoffScores[3] > playoffScores[4]) {
                document.getElementById("semiTeam2").innerHTML = round4win[1].htmlInfo[2];
                quarterFinalWin.splice(1, 1, round4win[1]);
                document.getElementById("prizesTeam6").innerHTML = round4win[2].htmlInfo[3];
            }
            else if (playoffScores[4] > playoffScores[3]) {
                document.getElementById("semiTeam2").innerHTML = round4win[2].htmlInfo[2];
                quarterFinalWin.splice(1, 1, round4win[2]);
                document.getElementById("prizesTeam6").innerHTML = round4win[1].htmlInfo[3];
            }
        }

        // Semifinals -> finals/prizes
        let semiFinalWin = [0, 0];
        if (isNaN(playoffScores[8]) || isNaN(playoffScores[9])) {}
            else { if (playoffScores[8] > playoffScores[9]) {
                document.getElementById("finalTeam1").innerHTML = quarterFinalWin[0].htmlInfo[2];
                semiFinalWin.splice(0, 1, quarterFinalWin[0]);
                document.getElementById("prizesTeam3").innerHTML = quarterFinalWin[1].htmlInfo[3];
            }
            else if (playoffScores[9] > playoffScores[8]) {
                document.getElementById("finalTeam1").innerHTML = quarterFinalWin[1].htmlInfo[2];
                semiFinalWin.splice(0, 1, quarterFinalWin[1]);
                document.getElementById("prizesTeam3").innerHTML = quarterFinalWin[0].htmlInfo[3];
            } 
        }

        if (isNaN(playoffScores[10]) || isNaN(playoffScores[11])) {}
            else { if (playoffScores[10] > playoffScores[11]) {
                document.getElementById("finalTeam2").innerHTML = quarterFinalWin[2].htmlInfo[2];
                semiFinalWin.splice(1, 1, quarterFinalWin[2]);
                document.getElementById("prizesTeam4").innerHTML = quarterFinalWin[3].htmlInfo[3];
            }
            else if (playoffScores[11] > playoffScores[10]) {
                document.getElementById("finalTeam2").innerHTML = quarterFinalWin[3].htmlInfo[2];
                semiFinalWin.splice(1, 1, quarterFinalWin[3]);
                document.getElementById("prizesTeam4").innerHTML = quarterFinalWin[2].htmlInfo[3];
            }
        }

        // Finals -> prizes
        if (isNaN(playoffScores[12]) || isNaN(playoffScores[13])) {}
            else { if (playoffScores[12] > playoffScores[13]) {
                document.getElementById("prizesTeam1").innerHTML = semiFinalWin[0].htmlInfo[3];
                document.getElementById("prizesTeam2").innerHTML = semiFinalWin[1].htmlInfo[3];
            }
            else if (playoffScores[13] > playoffScores[12]) {
                document.getElementById("prizesTeam1").innerHTML =  semiFinalWin[1].htmlInfo[3];
                document.getElementById("prizesTeam2").innerHTML =  semiFinalWin[0].htmlInfo[3];
            }
        }
    }
}

// Function to randomize everything.
function randomize() {
    // Swiss 1
    for (let num1 = 1, num2 = 16; num1 < 9; num1++, num2--) {
        document.getElementById("round1team" + num1 + "score").value = Math.floor(Math.random() * 4);
        if (document.getElementById("round1team" + num1 + "score").value !== "3") { document.getElementById("round1team" + num2 + "score").value = 3; }
        else { document.getElementById("round1team" + num2 + "score").value = Math.floor(Math.random() * 3); }
    }

    // Swiss 2
    for (let num1 = 1, num2 = 8; num1 < 5; num1++, num2--) {
        document.getElementById("round2highTeam" + num1 + "score").value = Math.floor(Math.random() * 4);
        if (document.getElementById("round2highTeam" + num1 + "score").value !== "3") { document.getElementById("round2highTeam" + num2 + "score").value = 3; }
        else { document.getElementById("round2highTeam" + num2 + "score").value = Math.floor(Math.random() * 3); }
        document.getElementById("round2lowTeam" + num1 + "score").value = Math.floor(Math.random() * 4);
        if (document.getElementById("round2lowTeam" + num1 + "score").value !== "3") { document.getElementById("round2lowTeam" + num2 + "score").value = 3; }
        else { document.getElementById("round2lowTeam" + num2 + "score").value = Math.floor(Math.random() * 3); }
    }

    // Swiss 3 
    for (let num1 = 1, num2 = 4; num1 < 3; num1++, num2--) {
        document.getElementById("round3highTeam" + num1 + "score").value = Math.floor(Math.random() * 4);
        if (document.getElementById("round3highTeam" + num1 + "score").value !== "3") { document.getElementById("round3highTeam" + num2 + "score").value = 3; }
        else { document.getElementById("round3highTeam" + num2 + "score").value = Math.floor(Math.random() * 3); }
        document.getElementById("round3lowTeam" + num1 + "score").value = Math.floor(Math.random() * 4);
        if (document.getElementById("round3lowTeam" + num1 + "score").value !== "3") { document.getElementById("round3lowTeam" + num2 + "score").value = 3; }
        else { document.getElementById("round3lowTeam" + num2 + "score").value = Math.floor(Math.random() * 3); }
    }
    for (let num1 = 1, num2 = 8; num1 < 5; num1++, num2--) {
        document.getElementById("round3midTeam" + num1 + "score").value = Math.floor(Math.random() * 4);
        if (document.getElementById("round3midTeam" + num1 + "score").value !== "3") { document.getElementById("round3midTeam" + num2 + "score").value = 3; }
        else { document.getElementById("round3midTeam" + num2 + "score").value = Math.floor(Math.random() * 3); }
    }

    // Swiss 4
    for (let num1 = 1, num2 = 6; num1 < 4; num1++, num2--) {
        document.getElementById("round4highTeam" + num1 + "score").value = Math.floor(Math.random() * 4);
        if (document.getElementById("round4highTeam" + num1 + "score").value !== "3") { document.getElementById("round4highTeam" + num2 + "score").value = 3; }
        else { document.getElementById("round4highTeam" + num2 + "score").value = Math.floor(Math.random() * 3); }
        document.getElementById("round4lowTeam" + num1 + "score").value = Math.floor(Math.random() * 4);
        if (document.getElementById("round4lowTeam" + num1 + "score").value !== "3") { document.getElementById("round4lowTeam" + num2 + "score").value = 3; }
        else { document.getElementById("round4lowTeam" + num2 + "score").value = Math.floor(Math.random() * 3); }
    }

    // Swiss 5
    for (let num1 = 1, num2 = 6; num1 < 4; num1++, num2--) {
        document.getElementById("round5team" + num1 + "score").value = Math.floor(Math.random() * 4);
        if (document.getElementById("round5team" + num1 + "score").value !== "3") { document.getElementById("round5team" + num2 + "score").value = 3; }
        else { document.getElementById("round5team" + num2 + "score").value = Math.floor(Math.random() * 3); }
    }

    // Quarter finals
    for (let num1 = 1, num2 = 8; num1 < 5; num1++, num2--) {
        document.getElementById("quarterTeam" + num1 + "score").value = Math.floor(Math.random() * 5);
        if (document.getElementById("quarterTeam" + num1 + "score").value !== "4") { document.getElementById("quarterTeam" + num2 + "score").value = 4; }
        else { document.getElementById("quarterTeam" + num2 + "score").value = Math.floor(Math.random() * 4); }
        document.getElementById("quarterTeam" + num1 + "score").value = Math.floor(Math.random() * 5);
        if (document.getElementById("quarterTeam" + num1 + "score").value !== "4") { document.getElementById("quarterTeam" + num2 + "score").value = 4; }
        else { document.getElementById("quarterTeam" + num2 + "score").value = Math.floor(Math.random() * 4); }
    }

    // Semi finals
    for (let num1 = 1, num2 = 2; num1 < 4; num1 += 2, num2 += 2) {
        document.getElementById("semiTeam" + num1 + "score").value = Math.floor(Math.random() * 5);
        if (document.getElementById("semiTeam" + num1 + "score").value !== "4") { document.getElementById("semiTeam" + num2 + "score").value = 4; }
        else { document.getElementById("semiTeam" + num2 + "score").value = Math.floor(Math.random() * 4); }
        document.getElementById("semiTeam" + num1 + "score").value = Math.floor(Math.random() * 5);
        if (document.getElementById("semiTeam" + num1 + "score").value !== "4") { document.getElementById("semiTeam" + num2 + "score").value = 4; }
        else { document.getElementById("semiTeam" + num2 + "score").value = Math.floor(Math.random() * 4); }
    }

    // Finals
    document.getElementById("finalTeam1score").value = Math.floor(Math.random() * 5);
    if (document.getElementById("finalTeam1score").value !== "4") { document.getElementById("finalTeam2score").value = 4; }
    else { document.getElementById("finalTeam2score").value = Math.floor(Math.random() * 4); }

    calculate();
}

// Changing the page. Num 1 is Swiss Stage, 2 is Swiss Results, 3 is Playoffs, and 4 is Prizes.
function changePage(num) {
    // Get all page links
    const links = document.querySelectorAll("[id^='link']");
    
    // Loop through each link and remove the 'underline' and 'text-gray-500' classes
    for (const link of links) { link.classList.remove('underline'); link.classList.add('text-gray-500'); }
    
    // Get the selected page link
    const selectedLink = document.getElementById(`link${num}`);
    
    // Add the 'underline' class to the selected link
    selectedLink.classList.add('underline');
    selectedLink.classList.remove('text-gray-500');
    
    // Get all page elements
    const pages = document.querySelectorAll("[id^='swiss'], #playoffs, #prizes");
    
    // Loop through each page and remove the 'flex' and 'hidden' classes
    for (const page of pages) { page.classList.remove('flex'); page.classList.add('hidden'); }
    
    // Get the selected page element
    const selectedPage = document.getElementById(`${num === 1 ? 'swissStage' : num === 2 ? 'swissResults' : num === 3 ? 'playoffs' : 'prizes'}`);
    
    // Add the 'flex' class to the selected page
    selectedPage.classList.add('flex');
    selectedPage.classList.remove('hidden');
}
