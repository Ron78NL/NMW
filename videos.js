// ===== CATEGORIEËN =====
// Volgorde hier = volgorde van de knoppen.
// id: intern, niet zichtbaar. naam: wat de leerling ziet.
const categorieen = [
    { id: "intro", naam: "MDR Introductie" },
    { id: "contact", naam: "Contactmijnen" },
    { id: "invloed", naam: "Invloedsmijnen" }
];

// ===== VIDEO'S =====
// id: het deel na "v=" in de YouTube-link
// titel: wat de leerling ziet
// categorie: een id uit de lijst hierboven
const videos = [

    //@MDR INTRODUCTIE
    { id: "ie9zJ9sSdFc", titel: "MDR Introfilm FR", categorie: "intro" },

    //@CONTACTMIJNEN
    { id: "sPdkjUi8aUY", titel: "Mines terrestres / Grondmijnen FR", categorie: "contact" },
    { id: "VXo-F4G7Ais", titel: "Mines flottantes / Drijvende mijnen FR", categorie: "contact" },
    { id: "TcZv4BSV5vk", titel: "Mines ancrées / Verankerde mijnen FR", categorie: "contact" },
    { id: "5fQvyYfCIgA", titel: "Mines d'entraînement / Oefenmijnen FR", categorie: "contact" },

    //@INVLOEDSMIJNEN
    { id: "TR8JqrFMIp4", titel: "Mine aérienne - Différentes mines d'influence FR", categorie: "invloed" }

];
