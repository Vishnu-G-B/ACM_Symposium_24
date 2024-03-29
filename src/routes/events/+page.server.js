// @ts-nocheck
import clientPromise from "$lib/db/db";

function formatDateWithOrdinal(date) {
    let day = date.getDate();
    const ordinalSuffix = getOrdinalSuffix(day);
    const monthName = date.toLocaleString('default', { month: 'long' });
    if (day == 10) {
        day = "1O";
    }
    return `${day}<sup>${ordinalSuffix}</sup>&nbsp;${monthName}`;
}

function getOrdinalSuffix(day) {
    const lastDigit = day % 10;
    const lastTwoDigits = day % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
        return 'th';
    }

    switch (lastDigit) {
        case 1:
            return 'st';
        case 2:
            return 'nd';
        case 3:
            return 'rd';
        default:
            return 'th';
    }
}

export const load = async (event) => {
    const client = await clientPromise;
    const turingerDB = client.db("Turinger");
    const eventsCollection = turingerDB.collection("events");
    const usersCollection = turingerDB.collection("users");
    let eventsArr = await eventsCollection.find({}, { projection: { _id: 0 } }).sort({ date: 1 }).toArray();
    eventsArr.forEach(element => {
        element.date = element.date.toDateString();
    });

    const groupedEvents = eventsArr.reduce((acc, event) => {
        const eventDate = new Date(event.date);
        const formattedDate = formatDateWithOrdinal(eventDate);

        if (!acc[formattedDate]) {
            acc[formattedDate] = [{ eventDate: formattedDate }];
        }

        acc[formattedDate].push(event);
        return acc;
    }, {});

    const formattedEvents = Object.values(groupedEvents);
    const session = await event.locals.auth();
    if (session) {
        let userData = await usersCollection.findOne({ email: session.user.email }, { projection: { _id: 0 } });
        if (!userData.registeredEvents) {
            return { events: formattedEvents, userEvents: [] };
        } else {
            return { events: formattedEvents, userEvents: userData.registeredEvents };
        }
    } else {
        return { events: formattedEvents, userEvents: [] };
    }

}