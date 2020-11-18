const submitform = document.getElementById("subJect");
const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");

submitform.addEventListener("submit", createuser)

function createuser(e) {
    // alert()
    // e.preventDefault();
    localStorage.setItem("register", `${form1.value} ${form2.value}`)

    form1.value
    console.log(form1.value)


    // location.href = "awakecolm.html"

    if (form1.value == "||form2.value==") {

    }
    // alert("type something")

}
const localItem = localStorage.getItem("register")

function showContent() {

    const showInfo = document.getElementById("showInfo")

    console.log(localItem)

    showInfo.innerHTML += `<td>${localItem}</td>`
}

showContent();

