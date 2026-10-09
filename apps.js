// Every game and app on the hub. To add an app, add one { name, url, desc } entry
// to its game's `apps`, or to one of its `groups` when the game is split into groups;
// leave `url` off and set `soon: true` for one that isn't live yet. A group's
// optional `color` tints its heading, its app names and the left edge of its cards.
// To add a game, add a new block. The MHGU blurbs match the in-app "Other MHGU Apps" modal.
const GAMES = [
  {
    short: 'MHGU',
    name: 'Monster Hunter Generations Ultimate',
    groups: [
      { name: 'Utilities', color: '#5aa9e6', apps: [
        { name: 'Collection Tracker', url: 'https://armoredraven17.github.io/mhgu-collection-tracker/',
          desc: 'Tracks which weapons, armor and Palico gear you own, and what it costs to finish them.' },
        { name: 'Weapon Trees', url: 'https://armoredraven17.github.io/mhgu-weapon-trees/',
          desc: 'Browse every weapon upgrade tree, with full stats on any node you click.' },
        { name: 'Hunting Log', url: 'https://armoredraven17.github.io/MHGU-Hunting-Log/',
          desc: 'Keeps a running record of your hunts — what you were after, what you wore, who came along.' },
        { name: 'Equipment Box', url: 'https://armoredraven17.github.io/mhgu-equipment-box/',
          desc: 'Mirrors the in-game box — 2000 hunter slots and 1000 Palico — so you can plan where things sit.' },
        { name: 'Set Builder', url: 'https://armoredraven17.github.io/mhgu-set-builder/',
          desc: 'Assemble a full set by hand and see exactly which skills it activates.' },
        { name: 'Armor Skills Explained', url: 'https://armoredraven17.github.io/mhgu-armor-skills-explained/',
          desc: "Every armor skill: the game's own description, then what it actually does, with the numbers." },
      ] },
      { name: 'Play Augmentation', color: '#6cc46c', apps: [
        { name: 'Quest Randomizer', url: 'https://armoredraven17.github.io/MHGU-Quest-Randomizer/',
          desc: "Rolls random quests when you can't decide what to hunt." },
        { name: 'Bingo', url: 'https://armoredraven17.github.io/MHGU-Bingo/',
          desc: 'Builds a bingo card of hunting goals, with a shareable seed so a group can race the same board.' },
        { name: 'Talisman Bingo', url: 'https://armoredraven17.github.io/mhgu-talisman-bingo/',
          desc: 'A bingo card of talisman conditions — keep drawing charms until one finally fills the line you needed.' },
        { name: 'Challenge Run', url: 'https://armoredraven17.github.io/MHGU-Challenge-Run/',
          desc: 'A permadeath challenge run — start from a root weapon, lose it on any quest failure, clear every Key Quest.' },
        { name: 'Zenny Gauntlet', url: 'https://armoredraven17.github.io/MHGU-Zenny-Gauntlet/',
          desc: 'A scored challenge run — fail a hunt or get carted and you lose that weapon/style combo for the rest of the run.' },
      ] },
      { name: 'Silly Things', color: '#eb7474', apps: [
        { name: 'Charm Farm', url: 'https://armoredraven17.github.io/mhgu-charm-farm/',
          desc: 'A Clicker/Idle game about beating up various Brachydios until you finally get the desired God Charms you always wanted.' },
        { name: 'Fishing (Beta)', url: 'https://armoredraven17.github.io/mhgu-fishing/',
          desc: "A fishing sim on the game's own tables — prepare at camp, travel to a locale, come home with the catch." },
      ] },
      { name: 'WIP', color: '#e8a13a', apps: [
        { name: 'Armor Viewer', url: 'https://armoredraven17.github.io/mhgu-armor-viewer/',
          desc: 'Renders a hunter in 3D with every armor piece swappable, so you can mix and match a set.' },
        { name: 'Monster Viewer', url: 'https://armoredraven17.github.io/mhgu-monster-viewer/',
          desc: 'Renders every monster in 3D with its own motion lists, so you can watch what they actually do.' },
        { name: 'Locale Viewer', soon: true,
          desc: 'Renders the hunting locales and their areas in 3D.' },
      ] },
    ],
  },
  {
    short: 'MH4U',
    name: 'Monster Hunter 4 Ultimate',
    groups: [
      { name: 'Utilities', color: '#5aa9e6', apps: [
        { name: 'Collection Tracker', url: 'https://armoredraven17.github.io/mh4u-collection-tracker/',
          desc: 'Tracks which weapons and armor you own, and what it costs to finish them.' },
        { name: 'Weapon Trees', url: 'https://armoredraven17.github.io/mh4u-weapon-trees/',
          desc: 'Every weapon upgrade tree, with full stats on any node.' },
        { name: 'Hunting Log', url: 'https://armoredraven17.github.io/mh4u-hunting-log/',
          desc: 'Keeps a running record of your hunts — what you were after, what you wore, who came along.' },
      ] },
      { name: 'Play Augmentation', color: '#6cc46c', apps: [
        { name: 'Quest Randomizer', url: 'https://armoredraven17.github.io/mh4u-quest-randomizer/',
          desc: "Rolls a random quest and weapon when you can't decide what to hunt." },
      ] },
      { name: 'WIP', color: '#e8a13a', apps: [
        { name: 'Monster Viewer', url: 'https://armoredraven17.github.io/mh4u-monster-viewer/',
          desc: 'Every monster in 3D with its own motion lists.' },
      ] },
    ],
  },
  {
    short: 'MH3U',
    name: 'Monster Hunter 3 Ultimate',
    groups: [
      { name: 'Utilities', color: '#5aa9e6', apps: [
        { name: 'Collection Tracker', url: 'https://armoredraven17.github.io/mh3u-collection-tracker/',
          desc: 'Tracks which weapons and armor you own, and what it costs to finish them.' },
        { name: 'Weapon Trees', url: 'https://armoredraven17.github.io/mh3u-weapon-trees/',
          desc: 'Every weapon upgrade tree, with full stats on any node.' },
        { name: 'Hunting Log', url: 'https://armoredraven17.github.io/mh3u-hunting-log/',
          desc: 'Keeps a running record of your hunts — what you were after, what you wore, who came along.' },
      ] },
      { name: 'Play Augmentation', color: '#6cc46c', apps: [
        { name: 'Quest Randomizer', url: 'https://armoredraven17.github.io/mh3u-quest-randomizer/',
          desc: "Rolls a random quest and weapon when you can't decide what to hunt." },
      ] },
      { name: 'WIP', color: '#e8a13a', apps: [
        { name: 'Armor Viewer', url: 'https://armoredraven17.github.io/mh3u-armor-viewer/',
          desc: 'A hunter in 3D with every armor piece swappable.' },
        { name: 'Monster Viewer', url: 'https://armoredraven17.github.io/mh3u-monster-viewer/',
          desc: 'Every monster in 3D with its own motion lists.' },
      ] },
    ],
  },
  {
    short: 'MHFU',
    name: 'Monster Hunter Freedom Unite',
    groups: [
      { name: 'Database', color: '#c792ff', apps: [
        { name: 'MHFU LookUp', url: 'https://armoredraven17.github.io/MHFU-LookUp-Test/',
          desc: 'A reference for weapons, armor, monsters, quests, items and gathering.' },
      ] },
    ],
  },
];

function el(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text) e.textContent = text;
  return e;
}

const main = document.getElementById('games');
for (const game of GAMES) {
  const section = el('section', 'game');
  const head = el('h2');
  head.append(el('span', 'game-tag', game.short), ' ', game.name);
  section.append(head);

  for (const group of game.groups || [{ apps: game.apps }]) {
    const wrap = el('div', 'group-wrap');
    if (group.color) wrap.style.setProperty('--group', group.color);
    if (group.name) wrap.append(el('h3', 'group', group.name));
    wrap.append(grid(group.apps));
    section.append(wrap);
  }
  main.append(section);
}

function grid(apps) {
  const g = el('div', 'grid');
  for (const app of apps) {
    const card = app.url ? el('a', 'card') : el('div', 'card soon');
    if (app.url) card.href = app.url;
    const title = el('span', 'card-name', app.name);
    if (app.soon) title.append(' ', el('span', 'soon-tag', 'Coming soon'));
    card.append(title, el('span', 'card-desc', app.desc));
    g.append(card);
  }
  return g;
}
