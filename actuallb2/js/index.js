let health = 65;
let ammo = 8;
let shield = true;
let missionProgress = 40;
let enemyNearby = true;


const ammov = document.querySelector('#ammo-id');
const shieldv = document.querySelector('#shield-id');
const healthv = document.querySelector('#health-id');
const ememyv = document.querySelector('#enemy-id');
const progressv = document.querySelector('#progress-id');

ammov.textContent = ammo;
shieldv.textContent = shield;
healthv.textContent = health;
enemyv.textContent = enemyNearby;
progressv.textContent = missionProgress;