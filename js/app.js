
document.getElementById('get-started').addEventListener('click', function () {
    const donationAmount = getElementInputValueById('donation-amount');
    if (donationAmount <= 0 || isNaN(donationAmount)) {
        return alert(' invalid Donated Amount');
    };

    const inputAmount = document.getElementById('input-amount');
    inputAmount.innerText = donationAmount;

    const totalAmount = getElementTotalDonationById('total-amount');
    const increage = totalAmount - donationAmount;

    document.getElementById('total-amount').innerHTML = increage;

    const div = document.createElement('div');
    div.innerHTML = `
    <div class="mt-10 shadow-xl bg-white px-20 border rounded-xl text-left pt-10">
     <p class="font-bold text-2xl">${donationAmount} Taka is Donated for famine-2024at Feni, Bangladesh</p>
    <p class="text-xl  my-5 p-2"> Date:${new Date().toUTCString()}.${new Date().toLocaleTimeString()}</p>
    </div>
    `
    const historyList = document.getElementById('history-list');
    historyList.insertBefore(div, historyList.firstChild);
    
  
})

document.getElementById('get-started-2').addEventListener('click', function () {
    const donationTk = getElementInputValueById('amount-donation-tk');

    if (donationTk <= 0 || isNaN(donationTk)) {
        return alert('invalid Donated Amount');
    }
    // const totalDonastion = parseFloat(document.getElementById('donation-tk-input').innerText);
    const totalDonastion = getElementTotalDonationById('donation-tk-input');
    const totalAmounts = totalDonastion + donationTk;

    document.getElementById('donation-tk-input').innerHTML = totalAmounts;

    // const totalAmount = document.getElementById('total-amount').innerText;
    const totalAmount = getElementTotalDonationById('total-amount');
    const increage = totalAmount - donationTk;
    document.getElementById('total-amount').innerHTML = increage;


    const div = document.createElement('div');
    div.innerHTML = `
    <div class="mt-10 shadow-xl bg-white px-20 border rounded-xl text-left pt-10">
     <p class="font-bold text-2xl">${donationTk} Donate for Flood Relief in Feni,Bangladesh</p>
     <p class="text-xl  my-5 p-2"> Date:${new Date().toUTCString()}.${new Date().toLocaleTimeString()}</p>
    </div>
    `
    const historyList = document.getElementById('history-list');
    historyList.insertBefore(div, historyList.firstChild);

})



document.getElementById('get-started3').addEventListener('click', function () {
    const donationInputValue = parseFloat(document.getElementById('donation-amount-input').value);

    if (donationInputValue <= 0 || isNaN(donationInputValue)) {
        return alert('invalid Donated Amount')
    }

    // const inputAmountQuota = parseFloat(document.getElementById('input-amount-quota').innerText);
    const inputAmountQuota = getElementTotalDonationById('input-amount-quota');
    const totalDonastion = donationInputValue + inputAmountQuota;

    document.getElementById('input-amount-quota').innerHTML = totalDonastion;

    // const totalAmount = document.getElementById('total-amount').innerText;
    const totalAmount = getElementTotalDonationById('total-amount');
    const increage = totalAmount - donationInputValue;
    document.getElementById('total-amount').innerHTML = increage;


    const div = document.createElement('div');
    div.innerHTML = `
    <div class="mt-10 shadow-xl bg-white px-20 border rounded-xl text-left pt-10">
     <p class="font-bold text-2xl">${donationInputValue} Aid for Injured in the Quota Movement</p>
     <p class="text-xl  my-5 p-2"> Date:${new Date().toUTCString()}.${new Date().toLocaleTimeString()}</p>
    </div>
    `
    const historyList = document.getElementById('history-list');
    historyList.insertBefore(div, historyList.firstChild);
})

// history tab

const historyTab = document.getElementById('History-Tab');
const donasationTab = document.getElementById('donasation-tab');
historyTab.addEventListener('click', function () {
    historyTab.classList.add(
        "text-black",
        "bg-primary",
    )
    donasationTab.classList.remove(
        "bg-primary",
    )
    document.getElementById('history').classList.remove('hidden');
    document.getElementById('help-section').classList.add('hidden');
});

// donation
donasationTab.addEventListener('click', function () {
    historyTab.classList.remove(
        "bg-primary",
        
    )
    donasationTab.classList.add(
        'bg-primary'
    )
    document.getElementById('history').classList.add('hidden');
    document.getElementById('help-section').classList.remove('hidden');
})

