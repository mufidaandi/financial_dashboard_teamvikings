document.addEventListener('DOMContentLoaded', function () {
    fetch('/balances')
        .then(response => response.json())
        .then(data => {
            const accountContainer = document.getElementById('account-container');

            data.forEach(account => {
                const accountDiv = document.createElement('div');
                accountDiv.classList.add('account');

                accountDiv.innerHTML = `
                    <h4>${account.accountName}</h4>
                    <p><strong>Account Number:</strong> ${account.accountNumber}</p>
                    <p><strong>Current Balance:</strong> ${account.currentBalance} ${account.currency}</p>
                    ${account.availableFunds !== undefined ? `<p><strong>Available Funds:</strong> ${account.availableFunds} ${account.currency}</p>` : ''}
                    ${account.availableCredit !== undefined ? `<p><strong>Available Credit:</strong> ${account.availableCredit} ${account.currency}</p>` : ''}
                    ${account.pending !== undefined ? `<p><strong>Pending Amount:</strong> ${account.pending} ${account.currency}</p>` : ''}
                    ${account.creditLimit !== undefined ? `<p><strong>Credit Limit:</strong> ${account.creditLimit} ${account.currency}</p>` : ''}
                `;

                accountContainer.appendChild(accountDiv);
            });
        })
        .catch(error => console.error('Error fetching account data:', error));
});
