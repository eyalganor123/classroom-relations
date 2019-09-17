function admin() {
    $('.name-circle').remove();


    var form = document.getElementById('form');
    if (state.form === false) {
        state.form = true;
        form.removeAttribute('class');
        var group1 = document.createElement('li');
        group1.setAttribute('class', 'groupName');
        group1.setAttribute('onclick', 'loadGroup(0)');
        var group2 = document.createElement('li');
        group2.setAttribute('class', 'groupName');
        group2.setAttribute('onclick', 'loadGroup(1)');
        var group3 = document.createElement('li');
        group3.setAttribute('class', 'groupName');
        group3.setAttribute('onclick', 'loadGroup(2)');
        var group4 = document.createElement('li');
        group4.setAttribute('class', 'groupName');
        group4.setAttribute('onclick', 'loadGroup(3)');
        group1.innerHTML = 'group1 - 8 members';
        group2.innerHTML = 'group2 - 12 members';
        group3.innerHTML = 'group3 - 20 members';
        group4.innerHTML = 'group4 - 30members';

        form.innerHTML = 'These are Demo Groups';
        form.appendChild(group1);
        form.appendChild(group2);
        form.appendChild(group3);
        form.appendChild(group4);

    } else {
        form.setAttribute('class', 'hideform');
        state.form = false;
    }
}
function loadGroup(id) {
    if (state.form === true) {
        form.setAttribute('class', 'hideform');
        state.form = false;
        users = userGroups[id]
        console.log(users);

        init();
    }
}