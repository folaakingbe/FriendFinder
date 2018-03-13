var friends = require("../data/friends")

module.exports = function (app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        console.log("there");
        friends.push(req.body);
        console.log("-------------------------");
        console.log(req.body);
        console.log("-------------------------");
        console.log(friends);
        var score = 100;
        var index = -1;
        var tempIndex = 0;
        var user = req.body;
        friends.forEach(function(friend) {
            var answers = 0;
            for (var i = 0; i < 10; i++) {
                answers += Math.abs(user[i] - friend.scores[i]);
            }
            if (answers < score) {
                score = answers;
                index = tempIndex;
            }
            tempIndex++;
        })
        res.json(friends[index]);
    })
//         for (var i = 0; i < 10; i++) {
//             var check = compatibilityCheck(req.body.scores, friends[i].scores);
//             if (check < score) {
//                 score = check;
//                 index = i;
//             }
//         }
//         res.json(friendsArray[index]);
//     })

//     function compatibilityCheck(user, friend) {
//         var answers = 0;
//         for (var i = 0; i < 10; i++) {
//             answers += Math.abs(user[i] - friend[i]);
//         }
//         return answers;
//     }
}