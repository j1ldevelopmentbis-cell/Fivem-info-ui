window.addEventListener('message', function(event) {
    let data = event.data;

    if (data.action === "toggleUi") {
        if (data.display === true) {
            document.getElementById("notify-container").style.display = "flex";
            
            let container = document.getElementById("notify-container");
            let content = container.innerHTML;
            container.innerHTML = content;
        } else {
            document.getElementById("notify-container").style.display = "none";
        }
    }
});
