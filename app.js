const pushVariation = document.getElementById('push-variation');
const hingeVariation = document.getElementById('hinge-variation');
const pullVariation = document.getElementById('pull-variation');
const squatVariation = document.getElementById('squat-variation');

let pushVersion = ['Close Grip', 'Standard', 'Wide Grip', 'Flat', 'Incline'];

let randomPushVariation =
  pushVersion[Math.floor(Math.random() * pushVersion.length)];
console.log(randomPushVariation);

let hingeVersion = [
  'Standard',
  'Narrow Stance',
  'Staggered Stance',
  'Wide Stance',
];

let randomHingeVariation =
  hingeVersion[Math.floor(Math.random() * hingeVersion.length)];
console.log(randomHingeVariation);

let pullVersion = ['Close Grip', 'Standard', 'Wide Grip', 'Neutral Grip'];

let randomPullVariation =
  pullVersion[Math.floor(Math.random() * pullVersion.length)];
console.log(randomPullVariation);

let squatVersion = [
  'Standard',
  'Narrow Stance',
  'Staggered Stance',
  'Wide Stance',
];

let randomSquatVariation =
  squatVersion[Math.floor(Math.random() * squatVersion.length)];
console.log(randomSquatVariation);

pushVariation.innerHTML = randomPushVariation;
hingeVariation.innerHTML = randomHingeVariation;
pullVariation.innerHTML = randomPullVariation;
squatVariation.innerHTML = randomSquatVariation;
