//this module stores your data after fetching, then defines FETCH, DELETE, and POST functions

//this declares an object with an empty array that will store the external data when you fetch it below
const applicationState = {
    reservations: []
}

//this is the url of where the data is stored
const API = "http://localhost:8098"

//this function fetches the reservations stored in the API
export const fetchReservations = () => {
    //tells where to fetch and what
    return fetch(`${API}/reservations`)
        //method that takes a function
        //once you've fetched it, you need to convert it from json (string to javascript?)
        .then(response => response.json())
        //tells it what to do now (assigns it to a variable)
        .then(
            (serviceRequests) => {
                // Store the external state in application state
                applicationState.reservations = serviceRequests
            }
        )
}

//creates and exports a copy of the array you just added to
export const getReservations = () => {
    return applicationState.reservations.map(reservation => ({...reservation}))
}

//selects the location you want to display in
const mainContainer = document.querySelector("#container")

//The POST method on any HTTP request means "Hey API!! I want you to create something new!"
export const sendReservation = (userReservation) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userReservation)
    }
    //fetch call dispatches the custom event after the POST operation has been completed.
    return fetch(`${API}/reservations`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

//When you use the DELETE method on an HTTP request, you must identify a single resource.
//Therefore, the function whose responsibility it is to initiate the fetch request for DELETE must have the primary key sent to it as an argument.
export const deleteReservation = (id) => {
    return fetch(`${API}/reservations/${id}`, {method: "DELETE"})
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}