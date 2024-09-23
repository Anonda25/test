function getElementInputValueById(id) {
    const inputValue = parseFloat(document.getElementById(id).value).toFixed(2);
    return inputValue;
};

function getElementTotalDonationById(id) {
    const donationValue = parseFloat(document.getElementById(id).innerText);
    return donationValue;
}