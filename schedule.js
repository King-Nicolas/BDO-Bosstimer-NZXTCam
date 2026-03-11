// schedule.js — EU World Boss schedule

const schedule = [
    // Monday
    { day: 1, time: "00:15", bosses: ["Uturi", "Kutum"] },
    { day: 1, time: "02:00", bosses: ["Sangoon", "Karanda"] },
    { day: 1, time: "12:00", bosses: ["Sangoon", "Nouver"] },
    { day: 1, time: "14:00", bosses: ["Garmoth"] },
    { day: 1, time: "16:00", bosses: ["Uturi", "Kutum"] },
    { day: 1, time: "19:00", bosses: ["Golden Pig King", "Nouver"] },
    { day: 1, time: "22:15", bosses: ["Bulgasal", "Kzarka"] },
    { day: 1, time: "23:15", bosses: ["Garmoth"] },

    // Tuesday
    { day: 2, time: "00:15", bosses: ["Sangoon", "Karanda"] },
    { day: 2, time: "12:00", bosses: ["Bulgasal", "Kutum"] },
    { day: 2, time: "14:00", bosses: ["Garmoth"] },
    { day: 2, time: "16:00", bosses: ["Golden Pig King", "Nouver"] },
    { day: 2, time: "19:00", bosses: ["Uturi", "Kzarka"] },
    { day: 2, time: "22:15", bosses: ["Quint", "Muraka"] },
    { day: 2, time: "23:15", bosses: ["Garmoth"] },

    // Wednesday
    { day: 3, time: "00:15", bosses: ["Golden Pig King", "Kzarka"] },
    { day: 3, time: "12:00", bosses: ["Sangoon", "Karanda"] },
    { day: 3, time: "14:00", bosses: ["Garmoth"] },
    { day: 3, time: "16:00", bosses: ["Bulgasal", "Offin"] },
    { day: 3, time: "19:00", bosses: ["Vell"] },
    { day: 3, time: "22:15", bosses: ["Uturi", "Nouver"] },
    { day: 3, time: "23:15", bosses: ["Garmoth"] },

    // Thursday
    { day: 4, time: "00:15", bosses: ["Uturi", "Nouver"] },
    { day: 4, time: "02:00", bosses: ["Golden Pig King", "Kzarka"] },
    { day: 4, time: "14:00", bosses: ["Garmoth"] },
    { day: 4, time: "16:00", bosses: ["Sangoon", "Karanda"] },
    { day: 4, time: "19:00", bosses: ["Bulgasal", "Kutum"] },
    { day: 4, time: "22:15", bosses: ["Quint", "Muraka"] },
    { day: 4, time: "23:15", bosses: ["Garmoth"] },

    // Friday
    { day: 5, time: "00:15", bosses: ["Golden Pig King", "Karanda"] },
    { day: 5, time: "02:00", bosses: ["Bulgasal", "Nouver"] },
    { day: 5, time: "12:00", bosses: ["Uturi", "Kutum"] },
    { day: 5, time: "14:00", bosses: ["Garmoth"] },
    { day: 5, time: "16:00", bosses: ["Bulgasal", "Kzarka"] },
    { day: 5, time: "19:00", bosses: ["Sangoon", "Offin"] },
    { day: 5, time: "22:15", bosses: ["Golden Pig King", "Kutum"] },
    { day: 5, time: "23:15", bosses: ["Garmoth"] },

    // Saturday
    { day: 6, time: "00:15", bosses: ["Bulgasal", "Kzarka"] },
    { day: 6, time: "02:00", bosses: ["Uturi", "Offin"] },
    { day: 6, time: "12:00", bosses: ["Golden Pig King", "Nouver"] },
    { day: 6, time: "14:00", bosses: ["Garmoth"] },
    { day: 6, time: "16:00", bosses: ["Black Shadow"] },
    { day: 6, time: "19:00", bosses: ["Sangoon", "Karanda"] },

    // Sunday
    { day: 7, time: "00:15", bosses: ["Bulgasal", "Nouver"] },
    { day: 7, time: "02:00", bosses: ["Golden Pig King", "Kutum"] },
    { day: 7, time: "12:00", bosses: ["Uturi", "Kzarka"] },
    { day: 7, time: "14:00", bosses: ["Garmoth"] },
    { day: 7, time: "16:00", bosses: ["Vell"] },
    { day: 7, time: "19:15", bosses: ["Garmoth"] },
    { day: 7, time: "22:15", bosses: ["Sangoon", "Karanda"] },
    { day: 7, time: "23:15", bosses: ["Garmoth"] }
];

// Local icons folder
const IMG_BASE = "./boss-icons/";

// Converts boss name → filename
function bossToFile(name) {
    return name.replace(/ /g, "_").toLowerCase() + ".png";
}

const imgMap = new Proxy({}, {
    get: (_, boss) => bossToFile(boss)
});

export { schedule, IMG_BASE, imgMap };