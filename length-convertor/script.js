

function converttoinch() {
    const cm = Number (document.getElementById("input").value)
    const inchval = cm/2.54
    const results = document.getElementById("result")
    results.innerHTML = inchval.toFixed(2)+" Inches"

}