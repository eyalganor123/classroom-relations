var state = {
    lines: true,
    form: false,
}
function init() {

    // users array is created in users.js 
    num = 0;


    users.forEach(function (user) {
        var chart = document.getElementById('chart');
        var userCircle = document.createElement('li');
        userCircle.setAttribute('id', num);
        userCircle.setAttribute('class', 'name-circle');
        userCircle.setAttribute('on', 'not');
        if (user.gender === 'm') {
            user.color = 'cyan';
        } else {
            user.color = 'magenta'
        }
        userCircle.innerHTML = user.name;
        chart.appendChild(userCircle);
        num++;
    });
    $(".name-circle").click(function () {
        var onValue = (this);
        var id = parseInt(this.id);

        if (onValue.getAttribute('on') == 'yes') {
            drawFriends(id);
            onValue.setAttribute('on', 'not');
        } else {
        }
        state.lines = true;
    });


    // circlize
    var radius = '9em', //distance from center

        $elements = $('li:not(:first-child)'),
        numberOfElements = users.length;
    slice = 360 * 1 / numberOfElements;

    $elements.each(function (i) {
        var $self = $(this),
            rotate = slice * i,
            rotateReverse = rotate * -1;

        $self.css({
            'transform': 'rotate(' + rotate + 'deg) translate(' + radius + ') rotate(' + rotateReverse + 'deg)'
        });
    });
    trans();
    console.log(users);
    users.forEach(function (user) {
        getCoords(user.id);

    });

    drawAllFriends();
    clearAllLines();
}

function trans() {
    var nodelist = document.querySelectorAll('.name-circle');
    var names = Array.from(nodelist);
    $('li').toggleClass('transparent')
}




function getUserByName(name) {
    for (let index = 0; index < users.length; index++) {
        if (name === users[index].name) {
            return users[index];
        }
    }
}
function getUserById(id) {
    for (let index = 0; index < users.length; index++) {
        if (id === users[index].id) {
            return users[index];
        }
    }
}
function trans() {
    var nodelist = document.querySelectorAll('.name-circle');
    var names = Array.from(nodelist);
    $('li').toggleClass('transparent')
}
function clearAllLines() {
    var canvas = document.getElementById('DemoCanvas');
    const context = canvas.getContext('2d');
    if (state.lines === true) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        state.lines = false;
        $('.name-circle').attr('on', 'yes');
    }
    else {
        drawAllFriends();
        state.lines = true;
    }
}
function drawAllFriends() {
    for (let index = 0; index < users.length; index++) {
        drawFriends(index);
    }
}
function drawFriends(id) {
    var user = getUserById(id);
    var friends = user.listFriends();
    var color = user.color;
    var userLocation = getCoords(id);
    // console.log(userLocation);
    var canvas = document.getElementById('DemoCanvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");



        for (let index = 0; index < friends.length; index++) {

            var friendCoord = friends[index];
            ctx.beginPath();
            ctx.moveTo(userLocation.x, userLocation.y);
            ctx.strokeStyle = color;
            ctx.lineTo(friendCoord.x, friendCoord.y);
            ctx.stroke();
            ctx.beginPath();
        }





    }
}
function getCoords(id) {
    var card = document.getElementById(id);
    console.log(card);
    var elemRect = card.getBoundingClientRect();
    // console.log('The coords of ' + id + ' are x = ' + elemRect.x + ' y =' + elemRect.y);
    users[card.id].cords.x = elemRect.x;
    users[card.id].cords.y = elemRect.y;
    var xy = {
        x: elemRect.x,
        y: elemRect.y
    }
    return xy;
    // console.log(users[card.id]);
}
