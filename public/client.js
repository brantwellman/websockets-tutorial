var socket = io();

var connectionCount = document.getElementById('connection-count');

socket.on('usersConnected', function (count) {
  connectionCount.innerText = 'Connected Users: ' + count + '. message to all the users';
});

var voteTotals = document.getElementById('vote-totals');

socket.on('voteTotals', function (totals) {
  voteTotals.innerText = 'These are the totals for all the voters: ' + totals;
});

var voteStatus = document.getElementById('status-message');

socket.on('statusMessage', function (message) {
  voteStatus.innerText = message;
});

var buttons = document.querySelectorAll('#choices button');

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    socket.send('voteCast', this.innerText);
  });
}

var currentVote = document.getElementById('current-vote');

socket.on('currentVote', function (message) {
  currentVote.innerText = message;
});

var voteTally = document.getElementById('vote-tally');

socket.on('voteCount', function (votes) {
  voteTally.innerText = 'Votes for A:' + votes.A + '\n' +
                        'Votes for B:' + votes.B + '\n' +
                        'Votes for C:' + votes.C + '\n' +
                        'Votes for D:' + votes.D;
});
