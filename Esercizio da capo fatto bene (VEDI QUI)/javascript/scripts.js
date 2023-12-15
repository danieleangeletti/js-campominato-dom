const my_button = document.getElementById("play-button");

my_button.addEventListener("click", function(){

    let score = 0;

    let is_game_running = true;

    const difficulty_level = parseInt(document.getElementById("choice-of-difficulty").value);
    
    const main = document.getElementById("grid");
    main.classList.add("pt-4", "pb-4");

    bomb_array = [];

    while (bomb_array.length < 16) {

        random_number = generateRandomInt(1, difficulty_level);
    
        let found_in_array = bomb_array.includes(random_number);
    
        if (found_in_array == false) {
    
            bomb_array.push(random_number);
            
        }
    
    }

    console.log(bomb_array);

    main.innerHTML = "";

    for (i = 1; i <= difficulty_level; i++) {
        
        const cell = document.createElement("div");
        cell.classList.add("square", "square-" + difficulty_level,  "border", "border-black", "text-center");
        cell.innerHTML = i;
        
        main.append(cell);

        cell.addEventListener("click", function(){
            
            if (is_game_running == true) {

                if (!bomb_array.includes(parseInt(this.innerHTML))) {

                    this.classList.add("bg-primary");
                    score ++;

                    if (score == difficulty_level - 16) {

                        is_game_running = false;
                        alert("HAI VINTO!");
                        
                    }
                }

                else {

                    this.classList.add("bg-danger");
                    is_game_running = false;
                    alert(`GAME OVER! Il tuo punteggio è di ${score}`);

                }
            }
        })

    }

})

// FUNCTION

function generateRandomInt(min, max) {

    return Math.floor((Math.random() * (max + 1 - min)) + min);

}
