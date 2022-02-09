//this module is responsible for displaying the current reservations in html

import { deleteReservation, getReservations } from "./dataAccess.js";

//create a function that prints the list of reservations
export const Reservations = () => {
    const reservations = getReservations()
    const convertRequestToListElements = (reservation) => {
        return `
        <li>
            ${reservation.parentName} requests a ${reservation.hours} hour party for ${reservation.childName} at ${reservation.address} for ${reservation.attendees} people on ${reservation.date}.
            <button class="denyRequest"
                id="request--${reservation.id}">
                Deny
            </button>
        </li>`
    }
    let html = `
        <ul>
            ${reservations.map(convertRequestToListElements).join("")}
        </ul>`
        return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,reservationId] = click.target.id.split("--")
        deleteReservation(parseInt(reservationId))
    }
})