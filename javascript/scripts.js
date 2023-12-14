const bomb_array = [];

let isGameRunning = true;

let score = 0;

while (bomb_array.length < 16) {

    random_number = generateRandomInt(1, 100);

    let found_in_array = bomb_array.includes(random_number);

    if (found_in_array == false) {

        bomb_array.push(random_number);
        
    }

}

console.log(bomb_array);

// ----------------------------

const difficulty = document.getElementById("choice-of-difficulty");

const my_button = document.getElementById("play-button");

my_button.addEventListener("click", function(){

    easy_medium_hard = parseInt(difficulty.value);

    const main = document.getElementById('grid');
    main.classList.add("pt-4", "pb-4");

    main.innerHTML = "";

    if (easy_medium_hard == 1) {

        let counter = 0;

        for (let i = 1; i < 101; i++) {

            const cell = document.createElement("div");
            cell.classList.add("square", "border", "border-black", "text-center");
            cell.innerHTML = i;
            main.append(cell);

            cell.addEventListener("click", function() {

                if(!isGameRunning) {

                    return;
            
                }
            
                    if (!bomb_array.includes(parseInt(this.innerHTML))) {

                        this.classList.add("bg-primary");
                        score++;

                        if (score == 100 - 16) {
                            alert(`HAI VINTO!`)
                        }

                    }
            
                    else {

                        this.classList.add("bg-danger");
                        isGameRunning = false;
                        alert(`HAI PERSO! Il tuo punteggio è di ${score}`)

                    }
            
                console.log(this.innerHTML);

            })
        }
    }

    else if (easy_medium_hard == 2) {
            
        for (let i = 1; i < 82; i++) {

            const cell = document.createElement("div");
            cell.classList.add("square-2", "border", "border-black", "text-center");
            cell.innerHTML = i;
            main.append(cell);

            cell.addEventListener("click", function() {

                if(!isGameRunning) {

                    return;
            
                }
            
                    if (!bomb_array.includes(parseInt(this.innerHTML))) {
                        this.classList.add("bg-primary");
                        score++;
                        if (score == 81 - 16) {
                            alert(`HAI VINTO!`);
                        }
                    }
            
                    else {
                        this.classList.add("bg-danger");
                        isGameRunning = false;
                        alert(`HAI PERSO! Il tuo punteggio è di ${score}`);
                    }
            
                console.log(this.innerHTML);
                
            });
        }
    }

    else if (easy_medium_hard == 3) {

        for (let i = 1; i < 50; i++) {

            const cell = document.createElement("div");
            cell.classList.add("square-3", "border", "border-black", "text-center");
            cell.innerHTML = i;
            main.append(cell);

            cell.addEventListener("click", function(){

                if(!isGameRunning) {

                    return;
            
                }
            
                    if (!bomb_array.includes(parseInt(this.innerHTML))) {
                        this.classList.add("bg-primary");
                        score++;
                        if (score == 49 - 16) {
                            alert(`HAI VINTO!`);
                        }
                    }
            
                    else {
                        this.classList.add("bg-danger");
                        isGameRunning = false;
                        alert(`HAI PERSO! Il tuo punteggio è di ${score}`);
                    }
            
                console.log(this.innerHTML);
                
            });
        }
    }
})

// FUNCTION

function generateRandomInt(min, max) {

    return Math.floor((Math.random() * (max + 1 - min)) + min);

}



