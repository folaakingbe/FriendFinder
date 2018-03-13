var friends = require("../data/friends")

module.exports = function (app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        console.log("there");
        var newFriend = req.body;
        console.log("-------------------------");
        console.log(Object.getOwnPropertyNames(req.body));
        console.log("-------------------------");
        console.log(friends);

        var score = 100;
        var index = -1;
        var tempIndex = 0;
        var user = [];
        var tempUser = req.body.scores.split("");
        tempUser.forEach(function(choice) {
            user.push(parseInt(choice));
        })
        console.log(user);
        friends.forEach(function(friend) {
            var answers = 0;
            for (var i = 0; i < 10; i++) {
                var otherUser = friend.scores;
                answers += Math.abs(user[i] - otherUser[i]);
            }
            if (answers < score) {
                score = answers;
                index = tempIndex;
            }
            tempIndex++;
        })
        newFriend.scores = user;
        friends.push(newFriend);
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