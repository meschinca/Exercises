function getPODD() {

    const imgContainer = document.getElementById("img-container");
    
    let xhr = new XMLHttpRequest();

    xhr.addEventListener("load", function() {

        if (this.status == 200) {
            
            const h1 = document.getElementById("title");

            h1.textContent = (JSON.parse(this.responseText)).title + " || Date: " + (JSON.parse(this.responseText)).date;
            
            const img = document.getElementById("PODD");

            img.setAttribute("src", (JSON.parse(this.responseText)).hdurl);

            img.setAttribute("alt", (JSON.parse(this.responseText)).explanation);

            const p = document.getElementById("explanation");

            p.textContent = (JSON.parse(this.responseText)).explanation;

            const button = document.getElementById("button");
    
            button.setAttribute("disabled", "true");

            imgContainer.hidden = false;
        }
        else{
            console.log("Hubo un error - código de respuesta " + this.status);

            const errorMsg = document.createElement("p");

            errorMsg.textContent = "Request error. Please refresh this page and try again later"
        }


    });

    xhr.open("GET", "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");

    xhr.send();
}