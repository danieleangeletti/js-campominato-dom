const empty_array = [];

while (empty_array.length < 16) {

    random_number = generateRandomInt(1, 100);

    let found_in_array = empty_array.includes(random_number);

    if (found_in_array == false) {
        empty_array.push(random_number);
    }
}

console.log(empty_array);

// ----------------------------

const difficulty = document.getElementById("choice-of-difficulty");

const my_button = document.getElementById("play-button");

my_button.addEventListener("click", function(){

    easy_medium_hard = parseInt(difficulty.value);

    const main = document.getElementById('grid');
    main.classList.add("pt-4", "pb-4");

    main.innerHTML = "";

    if (easy_medium_hard == 1) {

        for (i = 1; i < 101; i++) {

            const cell = document.createElement("div");
            cell.classList.add("square", "border", "border-black", "text-center");
            cell.innerHTML = i;
            main.append(cell);

            cell.addEventListener("click", function(){
                this.classList.add("bg-primary");
                console.log(cell.innerHTML);
            })
        }
    }

    else if (easy_medium_hard == 2) {
        
        for (i = 1; i < 82; i++) {

            const cell = document.createElement("div");
            cell.classList.add("square-2", "border", "border-black", "text-center");
            cell.innerHTML = i;
            main.append(cell);

            cell.addEventListener("click", function(){
                this.classList.add("bg-primary");
                console.log(cell.innerHTML);
            })
        }
    }

    else if (easy_medium_hard == 3) {

        for (i = 1; i < 50; i++) {

            const cell = document.createElement("div");
            cell.classList.add("square-3", "border", "border-black", "text-center");
            cell.innerHTML = i;
            main.append(cell);

            cell.addEventListener("click", function(){
                this.classList.add("bg-primary");
                console.log(cell.innerHTML);
            })
        }
    }
})

// FUNCTION

function generateRandomInt(min, max) {
    return Math.floor((Math.random() * (max + 1 - min)) + min);
}




