document.addEventListener('DOMContentLoaded', function () {
    fetch('/balances')
        .then(response => response.json())
        .then(data => {
            const depositContainer = document.getElementById('deposit-container');
            const creditContainer = document.getElementById('credit-container');

            let totalMoneyHave = 0;
            let totalMoneyOwe = 0;
            
            data.forEach(account => {
                if (account.type == "Deposit") {
                    const accountDiv = document.createElement('div');
                    accountDiv.classList.add('card');
                    accountDiv.classList.add('account');

                    accountDiv.innerHTML = `
                        <div class="card-title fs-2">${account.accountName}</div>
                        <div class="card-subtitle mb-2 text-muted">${account.accountNumber}</div>
                        <div class="sub-container d-flex flex-row justify-content-between align-items-end">
                            <div class="btext fw-bold fs-6">CURRENT BALANCE</div> 
                            <div class="current fs-3">$${account.currentBalance.toLocaleString()} ${account.currency}</div>
                        </div>
                        <hr>
                        <div class="sub-container d-flex flex-row justify-content-between align-items-end">
                            ${account.availableFunds !== undefined ? 
                            `<div class="btext fs-6">AVAILABLE FUNDS</div>
                            <div class="available-amount fs-5">$${account.availableFunds.toLocaleString()} ${account.currency}</div></div>` : ''}
                        
                    `;

                    depositContainer.appendChild(accountDiv);

                    // Add to total money user has
                    totalMoneyHave += account.currentBalance;
                } else {
                    const accountDiv = document.createElement('div');
                    accountDiv.classList.add('card');
                    accountDiv.classList.add('account');

                    accountDiv.innerHTML = `
                        <div class="card-title fs-2">${account.accountName}</div>
                        <div class="card-subtitle mb-2 text-muted">${account.accountNumber}</div>
                        <div class="sub-container d-flex flex-row justify-content-between align-items-end">
                        <div class="btext fw-bold fs-6">CURRENT BALANCE</div> <div class="current fs-3">$${account.currentBalance.toLocaleString()} ${account.currency}</div>
                        </div>
                        <hr>
                        <div class="sub-container d-flex flex-row justify-content-between align-items-end">
                            ${account.availableCredit !== undefined ? `<div class="btext fs-6">AVAILABLE CREDIT</div> 
                                <div class="fs-5">$${account.availableCredit.toLocaleString()} ${account.currency}</div>` : ''}
                        </div>
                        <div class="sub-container d-flex flex-row justify-content-between align-items-end">
                            ${account.pending !== undefined ? `<div class="btext fs-6">PENDING</div> 
                                <div class="fs-5"> $${account.pending.toLocaleString()} ${account.currency}</div>` : ''}
                        </div> 
                        <div class="sub-container d-flex flex-row justify-content-between align-items-end">
                            ${account.creditLimit !== undefined ? `<div class="btext fs-6">CREDIT LIMIT</div> 
                                <div class="fs-5">$${account.creditLimit.toLocaleString()} ${account.currency}</div>` : ''}
                        </div>
                        
                    `;

                    creditContainer.appendChild(accountDiv);

                    // Add to total money user owes
                    totalMoneyOwe += account.currentBalance;
                }
            });
            // Display total money user has and owes
            const own = document.getElementById('own');
            const ownDiv = document.createElement('div');
            ownDiv.classList.add('fs-2');
            ownDiv.innerHTML = `$${totalMoneyHave.toLocaleString()}`;
            own.appendChild(ownDiv);

            const owe = document.getElementById('owe');
            const oweDiv = document.createElement('div');
            oweDiv.classList.add('fs-2');
            oweDiv.innerHTML = `$${totalMoneyOwe.toLocaleString()}`;
            owe.appendChild(oweDiv);
        })
        .catch(error => console.error('Error fetching account data:', error));

    
    
});
