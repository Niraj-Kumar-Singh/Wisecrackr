const joke = document.querySelector(".joke");
const delivery = document.querySelector(".delivery");

const getJokeBtn = document.getElementById("get-joke");


const apiURL = 'https://v2.jokeapi.dev/joke/Any';

async function getJoke(){

    try{

        joke.textContent = "Joking...";
        delivery.style.display = "none";

        const response = await fetch(apiURL);

        if (!response.ok) {
            throw new Error(`Failed to fetch data (HTTP ${response.status})`);
        }

        const data = await response.json();

        // console.log(data);
    
    
        if(data.type === "single")
        {
            delivery.style.display = "none";
    
            const inputJoke = data.joke;
            const outputJoke = inputJoke.replace(/\n/g, "<br>");
            // console.log(outputJoke);
            joke.innerHTML = outputJoke;
    
    
        }
        else
        {
            delivery.style.display = "block";
    
            const inputJoke = data.setup;
            const outputJoke = inputJoke.replace(/\n/g, "<br>");
            // console.log(outputJoke);
    
            const outputdelivery = data.delivery.replace('/\n/g', "<br>");
    
            joke.innerHTML = outputJoke;
            delivery.innerHTML = outputdelivery;
        }
    } catch (error) {
        console.error(error);
        joke.textContent = `Joke's on the way ---- ` + error.message;

        // Handle the error gracefully
    }

    


    
}

getJoke();


getJokeBtn.addEventListener('click', () => {
    getJoke();
})
