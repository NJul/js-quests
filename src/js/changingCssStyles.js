const title = document.querySelector('h1');

title.setAttribute('style', 'color: violet; margin: 50px;');
//<h1 style="color: violet; margin: 50px;">js-quests</h1>

console.log(title.style);
console.log(title.style.color);

title.style.margin = '20px';
// <h1 style="color: violet; margin: 20px;">js-quests</h1>

title.style.color = 'crimson';
// <h1 style="color: crimson; margin: 20px;">js-quests</h1>

title.style.fontSize = '160px';

title.style.margin = '';
//<h1 style="color: crimson; font-size: 160px;">js-quests</h1>

title.style.fontSize = '';
// <h1 style="color: crimson;">js-quests</h1>

// title.style.color = '';
// <h1 style="">js-quests</h1>

title.removeAttribute('style', 'color: crimson;');
//<h1>js-quests</h1>
