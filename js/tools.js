// ========== الأداة 1: توليد اللفلات ==========
function generateLevels() {
    const maxLevel = parseInt(document.getElementById("maxLevel").value);
    const baseXP = parseInt(document.getElementById("baseXP").value);
    const xpMultiplier = parseFloat(document.getElementById("xpMultiplier").value);
    
    if (isNaN(maxLevel) || isNaN(baseXP) || isNaN(xpMultiplier)) {
        alert("الرجاء إدخال قيم صحيحة");
        return;
    }
    
    let code = "LevelExperienceRampOverrides=(";
    
    for (let i = 0; i <= maxLevel; i++) {
        const xp = Math.floor(baseXP + (i * i * xpMultiplier));
        code += `ExperiencePointsForLevel[${i}]=${xp}`;
        if (i < maxLevel) code += ",";
    }
    
    code += ")";
    document.getElementById("levelCode").value = code;
}

// ========== الأداة 5: رسبون الحيوانات ==========
function generateSpawnCode() {
    const creatureCode = document.getElementById("creatureCode").value;
    const creatureLevel = document.getElementById("creatureLevel").value;
    
    if (!creatureCode) {
        alert("الرجاء إدخال كود الحيوان");
        return;
    }
    
    const spawnCode = `cheat gmsummon "${creatureCode}" ${creatureLevel} 1 0`;
    
    document.getElementById("spawnOutput").value = spawnCode;
}

// باقي دوال الأدوات...// Tools-related JavaScript
