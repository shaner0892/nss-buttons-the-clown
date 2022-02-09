//this module creates the input buttons for the reservation form and saves that data

import { sendReservation } from "./dataAccess.js"

export const ReservationForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="parentName">Parent's Name</label><br>
            <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="childName">Child's Name</label><br>
            <input type="text" name="childName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="attendees">Number of Attendees</label><br>
            <input type="number" name="attendees" class="input" />
        </div>
        <div class="field">
            <label class="label" for="address">Address</label><br>
            <input type="text" name="address" class="input" />
        </div>
        <div class="field">
            <label class="label" for="date">Date</label><br>
            <input type="date" name="date" class="input" />
        </div>
        <div class="field">
            <label class="label" for="hours">Total Number of Hours</label><br>
            <input type="number" name="hours" class="input" />
        </div>

        <button class="button" id="submitRequest">Submit Reservation Request</button>
        `

    return html
}


//sets the location 
const mainContainer = document.querySelector("#container")
//adds a click event for when the submit button is pushed
mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        //creates a new variable and stores what is entered into the input box
        const userParentName = document.querySelector("input[name='parentName']").value
        const userChildName = document.querySelector("input[name='childName']").value
        const userAttendeesTotal = document.querySelector("input[name='attendees']").value
        const userAddress = document.querySelector("input[name='address']").value
        const userDate = document.querySelector("input[name='date']").value
        const userHours = document.querySelector("input[name='hours']").value

        // Make an object out of the user input
        //takes the variables from above and assigns them to a value of the new object
        const dataToSendToAPI = {
            parentName: userParentName,
            childName: userChildName,
            attendees: userAttendeesTotal,
            address: userAddress,
            date: userDate,
            hours: userHours
        }

        // Send the data to the API for permanent storage
        sendReservation(dataToSendToAPI)
    }
})