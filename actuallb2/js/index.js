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
const statusv = document.querySelector('#status-id');

ammov.textContent = ammo;
shieldv.textContent = shield;
healthv.textContent = health;
enemyv.textContent = enemyNearby;
progressv.textContent = missionProgress;


if (health < 30)
{
    statusv.textContent = "CRITICAL ALERT: Immediate Evacuation Required";
}

else if (ammo < 5 || shield === false)
{
    statusv.textContent = "Warning: Low Resources"
}

else if (missionProgress >= 1 && missionProgress <= 70)
{
    statusv.textContent = "Mission In Progress";
}

else if (missionProgres > 70 && enemyNearby === false)
{
    statusv.textContent = "Approaching Mission Completion";
}

else if (missionProgress === 100)
{
    statusv.textContent = "Mission Complete Successfully";
}

else
{
    statusv.textContent = "System Stable";
}