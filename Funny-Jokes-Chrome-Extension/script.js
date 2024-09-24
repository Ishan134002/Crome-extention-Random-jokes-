
    fetch('https://icanhazdadjoke.com/slack')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(jokeData => {
            const jokeText = jokeData.attachments[0].text;
            const jokeElement = document.getElementById('jokeElement');

            if (jokeElement) {
                jokeElement.innerHTML = jokeText;
            } else {
                console.error('Element with id "jokeElement" not found');
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
