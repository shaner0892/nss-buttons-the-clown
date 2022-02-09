//this module is responsible for displaying the current reservations in html

import { getReservations } from "./dataAccess.js";

//create a function that prints the list of reservations
export const Reservations = () => {
    const reservations = getReservations()
    const convertRequestToListElements = (reservation) => {
        return `
        <li>
            ${reservation.childName}
        </li>`
    }
    let html = `
        <ul>
            ${reservations.map(convertRequestToListElements).join("")}
        </ul>`
        return html
}
