// START of ChatGPT4 code for Metamask login
async function connect() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            await addPolygonNetwork();
            await requestAccountAccess();
            const currentAccount = await getCurrentAccount();
            alert(`Logged in as ${currentAccount}`);
        } catch (error) {
            displayError(error);
        }
    } else {
        alert('Metamask is not installed');
    }
}

async function addPolygonNetwork() {
    // ...
}

async function requestAccountAccess() {
    // ...
}

async function getCurrentAccount() {
    // ...
}

function displayError(error) {
    // ...
}

document.getElementById('metamask').addEventListener('click', (event) => {
    event.preventDefault();
    connect();
});
// END of ChatGPT4 code for Metamask login