class User {
    constructor(id, gender, name, friends, x, y, color) {
        this.id = id;
        this.gender = gender;
        this.name = name,
            this.friends = friends,
            this.cords = {
                x: x,
                y: y
            }
        this.color = color;
    }
    listFriends() {
        var checkedUser = getUserById(this.id);
        var userFriendsArray = checkedUser.friends;
        var userFriends = []
        // console.log(this.name + "'s friends are:");
        userFriendsArray.forEach(function (friend) {

            var friendName = getUserById(friend);
            userFriends.push(friendName.cords)
            // console.log(friendName.cords);

        });

        return userFriends;
    }
};
user1 = new User(0, 'm', 'eyal', [1, 2, 5], 34, 23, 'blue');
user2 = new User(1, 'm', 'mike', [3, 7, 5], 34, 23, 'green');
user3 = new User(2, 'f', 'dana', [3, 6, 5], 34, 23, 'cyan');
user4 = new User(3, 'm', 'chico', [4, 1, 5, 2], 34, 23, 'orange');
user5 = new User(4, 'f', 'libi', [1, 5, 6, 7, 0, 2], 34, 23, 'yellow');
user6 = new User(5, 'm', 'mish', [0, 3, 2, 1], 34, 23, 'gray');
user7 = new User(6, 'm', 'eli', [1, 5, 4], 34, 23, 'pink');
user8 = new User(7, 'f', 'dina', [1, 3, 2], 34, 23, 'red');
user9 = new User(8, 'f', 'roni', [7, 2, 4], 34, 23, 'red');
user10 = new User(9, 'm', 'john', [1, 2, 6, 4, 7], 'white');
user11 = new User(10, 'm', 'david', [1, 4, 6], 34, 23, 'blue');
user12 = new User(11, 'm', 'bob', [4, 9, 0], 34, 23, 'green');
user13 = new User(12, 'f', 'billy', [0, 5, 15], 34, 23, 'cyan');
user14 = new User(13, 'm', 'sonny', [8, 3, 15, 2], 34, 23, 'orange');
user15 = new User(14, 'f', 'laura', [11, 15, 6, 7, 10, 2], 34, 23, 'yellow');
user16 = new User(15, 'm', 'fin', [10, 3, 12, 11], 34, 23, 'gray');
user17 = new User(16, 'm', 'shaul', [11, 15, 4], 34, 23, 'pink');
user18 = new User(17, 'f', 'ada', [12, 3, 2], 34, 23, 'red');
user19 = new User(18, 'f', 'nica', [13, 12, 4], 34, 23, 'red');
user20 = new User(19, 'm', 'jason', [5, 6, 7,], 'white');
user21 = new User(20, 'm', 'john', [1, 2, 13, 14, 15, 6, 7,], 'white');
user22 = new User(21, 'm', 'david', [1, 4, 6], 34, 23, 'blue');
user23 = new User(22, 'm', 'bob', [4, 9, 1], 34, 23, 'green');
user24 = new User(23, 'f', 'kelly', [8, 21, 15], 34, 23, 'cyan');
user25 = new User(24, 'm', 'sonny', [8, 3, 15, 2], 34, 23, 'orange');
user26 = new User(25, 'f', 'laura', [11, 15, 6, 7, 10, 2], 34, 23, 'yellow');
user27 = new User(26, 'm', 'fin', [10, 3, 12, 11], 34, 23, 'gray');
user28 = new User(27, 'm', 'shaul', [11, 15, 4], 34, 23, 'pink');
user29 = new User(28, 'f', 'ada', [12, 3, 12], 34, 23, 'red');
user30 = new User(29, 'f', 'nica', [12, 2, 14], 34, 23, 'red');


var num = 0;
var userGroups = [[user1, user2, user3, user4, user5, user6, user7, user8],
[user1, user2, user3, user4, user5, user6, user7, user8, user9, user10, user11, user12],
[user1, user2, user3, user4, user5, user6, user7, user8, user9, user10, user11, user12, user13, user14, user15, user16, user17, user18, user19, user20],
[user1, user2, user3, user4, user5, user6, user7, user8, user9, user10, user11, user12, user13, user14, user15, user16, user17, user18, user19, user20, user21, user22, user23, user24, user25, user26, user27, user28, user29, user30]]

users = userGroups[1];