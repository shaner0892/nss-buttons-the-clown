//this module is responsible for importing the layout and rendering the page, and rerendering after an event change

import { buttonsClown } from "./buttonsClown.js";
import { fetchReservations } from "./dataAccess.js";

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchReservations().then(
        () => {
            mainContainer.innerHTML = buttonsClown()
        }
    )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)