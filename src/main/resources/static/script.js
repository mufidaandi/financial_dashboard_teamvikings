document.addEventListener('DOMContentLoaded', function () {
    fetch('/balances')
        .then(response => response.json())
        .then(data => {
            const depositContainer = document.getElementById('deposit-container');
            const creditContainer = document.getElementById('credit-container');
            
            data.forEach(account => {
                if (account.type == "Deposit") {
                    const accountDiv = document.createElement('div');
                    accountDiv.classList.add('card');
                    accountDiv.classList.add('account');

                    accountDiv.innerHTML = `
                        <div class="card-title fs-2">${account.accountName}</div>
                        <div class="card-subtitle mb-2 text-muted">${account.accountNumber}</div>
                        <div class="sub-container">
                            <div class="btext fw-bold fs-6">CURRENT BALANCE</div> 
                            <div class="current fs-3">$${account.currentBalance.toLocaleString()} ${account.currency}</div>
                        </div>
                        <hr>
                        <div class="sub-container">
                            ${account.availableFunds !== undefined ? 
                            `<div class="btext fs-6">AVAILABLE FUNDS</div>
                            <div class="available-amount fs-5">$${account.availableFunds.toLocaleString()} ${account.currency}</div></div>` : ''}
                        
                    `;

                    depositContainer.appendChild(accountDiv);
                } else {
                    const accountDiv = document.createElement('div');
                    accountDiv.classList.add('card');
                    accountDiv.classList.add('account');

                    accountDiv.innerHTML = `
                        <div class="card-title fs-2">${account.accountName}</div>
                        <div class="card-subtitle mb-2 text-muted">${account.accountNumber}</div>
                        <div class="sub-container">
                        <div class="btext fw-bold fs-6">CURRENT BALANCE</div> <div class="current fs-3">$${account.currentBalance.toLocaleString()} ${account.currency}</div>
                        </div>
                        <hr>
                        <div class="sub-container">
                            ${account.availableCredit !== undefined ? `<div class="btext fs-6">AVAILABLE CREDIT</div> 
                                <div class="fs-5">$${account.availableCredit.toLocaleString()} ${account.currency}</div>` : ''}
                        </div>
                        <div class="sub-container">
                            ${account.pending !== undefined ? `<div class="btext fs-6">PENDING</div> 
                                <div class="fs-5"> $${account.pending.toLocaleString()} ${account.currency}</div>` : ''}
                        </div> 
                        <div class="sub-container">
                            ${account.creditLimit !== undefined ? `<div class="btext fs-6">CREDIT LIMIT</div> 
                                <div class="fs-5">$${account.creditLimit.toLocaleString()} ${account.currency}</div>` : ''}
                        </div>
                        
                    `;

                    creditContainer.appendChild(accountDiv);
                }


                // const accountDiv = document.createElement('div');
                // accountDiv.classList.add('account');

                // accountDiv.innerHTML = `
                //     <h4>${account.accountName}</h4>
                //     <p><strong>Account Number:</strong> ${account.accountNumber}</p>
                //     <p><strong>Current Balance:</strong> ${account.currentBalance} ${account.currency}</p>
                //     ${account.availableFunds !== undefined ? `<p><strong>Available Funds:</strong> ${account.availableFunds} ${account.currency}</p>` : ''}
                //     ${account.availableCredit !== undefined ? `<p><strong>Available Credit:</strong> ${account.availableCredit} ${account.currency}</p>` : ''}
                //     ${account.pending !== undefined ? `<p><strong>Pending Amount:</strong> ${account.pending} ${account.currency}</p>` : ''}
                //     ${account.creditLimit !== undefined ? `<p><strong>Credit Limit:</strong> ${account.creditLimit} ${account.currency}</p>` : ''}
                // `;

                // accountContainer.appendChild(accountDiv);
            });
        })
        .catch(error => console.error('Error fetching account data:', error));
});
