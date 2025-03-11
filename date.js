

let willYouBeMyDate = document.getElementById("askingfordate");
let submit = document.getElementById("submit");
let goBack = document.getElementById("back");

if (submit) {
    submit.addEventListener("click", function() {
        if (willYouBeMyDate.value.toLowerCase() == "yes") {
            window.location.href = "yes.html";
        } else {
            window.location.href = "no.html";
        }
    });
}

if (goBack) {
    goBack.addEventListener("click", function() {
        window.location.href = "home.html";
    });
}


// The if (submit) check is needed because your date.js script runs on all three pages (home.html, yes.html, no.html).

// Since the submit button only exists on the home page, trying to access it on the yes or no pages will return null, causing an error when calling addEventListener on it.

// The if (submit) ensures that the script only adds the event listener if the button exists on the current page. This way, the script won’t crash when loaded on pages without the submit button.

// Same goes for if (goBack) since the back button only exists on the yes and no pages. Let me know if that makes sense! 