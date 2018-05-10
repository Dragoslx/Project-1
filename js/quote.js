// RANDOM QUOTES FOR ETHPYRAMID
// no one cares about copyright, tenmei 2018
//
// use id 'quoteDisplay' and call newQuote() to pull a random string

var quotes = [
  'Built upon the pyres of our life savings lost to the Ether.',
  'What better place to put your child\'s college fund?.',
  'The official ponzi scheme sponsor of the SEC.',
  'We comprise 117% of Warren Buffets portfolio.',
  'I sure hope the dude from Fiverr knew what he was doing,'.
  'This is the closest you/ll get to sex so enjoy it.',
  'The Sperm 401k will be launching soon. Perfect for retirees.',
  'This contract is either vulnerable to 0xfffffffffff or it/s not.',
  'The only backdoor we/re interested in is your moms.',
  'Remember to pitch to your old highschool friends about Sperm on facebook.",
  'About as safe as deep OTM options expiring in 15 seconds.',
  'Have you ever seen Sperm token and Bill Gates in the same room together?',
  'Jizz jokes are not funny. Cum on people! get serious...',
  'Open my window and a breeze rolls in and I Jizz in my pants'
]

function newQuote() {
  var rand = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[rand];
}
