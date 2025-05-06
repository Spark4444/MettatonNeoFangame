// Clear the saved data
function clearSave(){
    localStorage.removeItem("level");
    localStorage.removeItem("hp");
    localStorage.removeItem("mettatonHP");
    localStorage.removeItem("items");
}

// Save the values when players turn is over
function saveData(){
    save("level", attackNumber);
    save("hp", playersHPString);
    save("MettatonHP", MettatonHP);
    save("items", foodUsed);
}