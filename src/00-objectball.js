function gameObject() {
   return { 
    home: {
        teamName: "Brooklyn Nets",
        colors:["black", "white"],
        players:{
            "Alan Anderson": {
                "number": 0,
                "shoe": 16,
                "points": 22,
                "rebounds": 12,
                "assists": 12,
                "steals": 3,
                "blocks": 1,
                "slamDunks": 1,
                
            },
            "Reggie Evans": {
                "number": 30,
                "shoe": 14,
                "points": 12,
                "rebounds": 12,
                "assists": 12,
                "steals": 12,
                "blocks": 12,
                "slamDunks": 7,
            },
            "Brook Lopez":{
                "number": 11,
                "shoe": 17,
                "points": 17,
                "rebounds": 10,
                "assists": 10,
                "steals": 3,
                "blocks": 1,
                "slamDunks": 15,
            },
            "Mason Plumlee":{
                "number": 1,
                "shoe": 19,
                "points": 26,
                "rebounds": 12,
                "assists": 6,
                "steals": 3,
                "blocks": 8,
                "slamDunks": 5,
            },
        },
    },
    away: {
        teamName:"Charlotte Hornets",
        colors:["turquoise", "purple"],
        players:{
            "Jeff Adrien":{
                "number": 4,
                "shoe": 18,
                "points": 10,
                "rebounds": 1,
                "assists": 1,
                "steals": 2,
                "blocks": 7,
                "slamDunks": 2,
            },
            "Bismak Biyombo":{
                "number": 0,
                "shoe": 16,
                "points": 12,
                "rebounds": 4,
                "assists": 7,
                "steals": 7,
                "blocks": 15,
                "slamDunks": 10,
            },
            "DeSagna Diop":{
                "number": 2,
                "shoe": 14,
                "points": 24,
                "rebounds": 12,
                "assists": 12,
                "steals": 4,
                "blocks": 5,
                "slamDunks": 5,
            },
            "Ben Gordon":{
                "number": 8,
                "shoe": 15,
                "points": 33,
                "rebounds": 3,
                "assists": 2,
                "steals": 1,
                "blocks": 1,
                "slamDunks": 0,
            },
            "Brendan Haywood":{
                "number": 33,
                "shoe": 15,
                "points": 6,
                "rebounds": 12,
                "assists": 12,
                "steals": 22,
                "blocks": 5,
                "slamDunks": 12,
            },
        },
    },
}
}

const game = gameObject()
const allPlayers = {...game['home']['players'], ...game['away']['players']}

function numPointsScored (playerName) {
    return allPlayers[playerName]['points']
}

function shoeSize (playerName) {
    return allPlayers[playerName]['shoe']
}

function teamColors (teamName) {
    if (teamName === 'Brooklyn Nets') {
        return game['home']['colors']
    } else if (teamName === 'Charlotte Hornets') {
        return game['away']['colors']
    }
}

function teamNames () {
    const homeTeam = gameObject()['home']['teamName']  
    const awayTeam = gameObject()['away']['teamName']
    return [homeTeam, awayTeam]
}

function playerNumbers (teamName) {
    //returns all player numbers for the team passed in parameter
    if (teamName === 'Brooklyn Nets') {
        return game['home']['colors']
    } else if (teamName === 'Charlotte Hornets') {
        return game['away']['colors']
    }
}

function playerStats (playerName) {
    return allPlayers[playerName]
}