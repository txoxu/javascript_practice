const menu = document.querySelector('#menu');

const lists = [
  { image: 'エリカ.webp', name: 'エリカ' },
  { image: 'ゲーリック・コーヒー.webp', name: 'ゲーリック・コーヒー'},
  { image: 'スコッチ・コリンズ.webp', name: 'スコッチ・コリンズ'},
  { image: 'チャーチル.webp', name: 'チャーチル'},
  { image: 'ラスティ・ネイル.webp', name: 'ラスティ・ネイル'},
  { image: 'ロブ・ロイ.webp',name: 'ロブ・ロイ'},
];

for (i = 0; i < lists.length; i++) {

  const {image, name} = lists[i];
  const content = `<div><img src="images/${image}" alt=""><p>${name}</p></div>`;

  menu.insertAdjacentHTML('beforeend', content);
}

const heading = document.querySelector('#heading');

const keyframes = {
  color: ['transparent', '#fff'],
  backgroundPosition: ['100% 0', '0 0'],
};

const options  = {
  duration: 2000,
  easing: 'ease',
};

heading.animate(keyframes, options);
