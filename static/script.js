let rpmData = 0;
let speedData = 0;
let fuelData = 70;
let tempData = 60;

function updateDashboard() {
    rpmData += Math.floor(Math.random() * 800) - 300;
    speedData += Math.floor(Math.random() * 10) - 3;

    if (rpmData < 0) rpmData = 0;
    if (rpmData > 6000) rpmData = 6000;
    
    if (speedData < 0) speedData = 0;
    if (speedData > 120) speedData = 120;

    let rpmRotation = -135 + (rpmData / 6000) * 270;
    let speedRotation = -135 + (speedData / 120) * 270;

    document.getElementById("rpmNeedle").style.transform = `translate(-50%, -50%) rotate(${rpmRotation}deg)`;
    document.getElementById("speedNeedle").style.transform = `translate(-50%, -50%) rotate(${speedRotation}deg)`;

    let maxDash = 198;
    let speedOffset = maxDash - (speedData / 120) * maxDash;
    document.getElementById("speedSvgBar").style.strokeDashoffset = speedOffset;

    fuelData -= 0.2;
    if (fuelData <= 0) fuelData = 100;
    
    tempData += Math.random() * 2 - 1;
    if (tempData > 90) tempData = 90;
    if (tempData < 40) tempData = 40;

    document.getElementById("fuelBar").style.width = `${fuelData}%`;
    document.getElementById("tempBar").style.width = `${tempData}%`;
}

setInterval(updateDashboard, 1000);
