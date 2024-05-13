import { captureText } from "./functions/captureText.js";

const searchSelector = document.querySelector("#search");
searchSelector.addEventListener("keyup", (event) =>
	captureText(searchSelector.value)
);
