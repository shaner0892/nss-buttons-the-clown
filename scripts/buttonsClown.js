//this module provides the general html layout of the DOM

import { Reservations } from "./reservations.js"
import { ReservationForm } from "./reservationForm.js"

export const buttonsClown = () => {
    return `
    <h1>Buttons the Clown</h1>
    <section class="reservationForm">
        ${ReservationForm()}
    </section>
    <section class="reservations">
        <h2>Current Reservations</h2>
        ${Reservations()}
    </section>`

}