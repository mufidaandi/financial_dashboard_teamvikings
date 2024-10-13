document.addEventListener('DOMContentLoaded', function () {
    fetch('/balances')
        .then(response => response.json())
        .then(data => {
            const depositContainer = document.getElementById('deposit-container');
            const creditContainer = document.getElementById('credit-container');
            
            data.forEach(account => {
                if (account.type == "Deposit") {
                    const accountDiv = document.createElement('div');
                    accountDiv.classList.add('account');

                    accountDiv.innerHTML = `
                        <h4>${account.accountName}</h4>
                        <p>${account.accountNumber}</p>
                        <p><strong>CURRENT BALANCE</strong> ${account.currentBalance} ${account.currency}</p>
                        ${account.availableFunds !== undefined ? `<p><strong>AVAILABLE FUNDS</strong> ${account.availableFunds} ${account.currency}</p>` : ''}
                    `;

                    depositContainer.appendChild(accountDiv);
                } else {
                    const accountDiv = document.createElement('div');
                    accountDiv.classList.add('account');

                    accountDiv.innerHTML = `
                        <h4>${account.accountName}</h4>
                        <p>${account.accountNumber}</p>
                        <p><strong>CURRENT BALANCE</strong> ${account.currentBalance} ${account.currency}</p>
                        ${account.availableCredit !== undefined ? `<p><strong>AVAILABLE CREDIT</strong> ${account.availableCredit} ${account.currency}</p>` : ''}
                        ${account.pending !== undefined ? `<p><strong>PENDING</strong> ${account.pending} ${account.currency}</p>` : ''}
                        ${account.creditLimit !== undefined ? `<p><strong>CREDIT LIMIT</strong> ${account.creditLimit} ${account.currency}</p>` : ''}
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
