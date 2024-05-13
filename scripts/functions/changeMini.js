export function changeMini(event) {
    const clicked = event.target.src;
    const main = document.querySelector(".big-img")

    event.target.src = main.src
    main.src = clicked
}