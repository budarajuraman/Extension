const getFact = async () => {
    try {
        const apiKey = 'apkf+lClUmRfHB/iMdaElw==ip9LQ1Jkk4KascWL'; 
        const response = await fetch("https://api.api-ninjas.com/v1/facts", {
            headers: {
                'X-Api-Key': apiKey
            }
        });
        const factData = await response.json();
        const myFact = document.getElementById('MyFact');
        myFact.innerHTML = factData[0].fact;
    } catch (error) {
        console.log("Error fetching data:", error);
    }
};

window.addEventListener('load', () => {
    getFact();
});
