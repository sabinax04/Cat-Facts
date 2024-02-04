const button = document.querySelector(".btn");
const text = document.querySelector(".newText");

button.addEventListener("click", async ()=>{

    const btn = await fetch("https://catfact.ninja/fact");
    const newButton = await btn.json();
    text.textContent = newButton.fact;
    //console.log(newButton)

});