document.addEventListener('DOMContentLoaded', function () {
    fetch('https://mufidaandi.github.io/financial-dashboard-backend/balances.json')
        .then(response => response.json())
        .then(data => {
            const accountsContainer = document.getElementById('accounts-container');

            let totalMoneyHave = 0;
            
            data.forEach(account => {
                
                const accountDiv = document.createElement('div');
                accountDiv.classList.add('card');
                accountDiv.classList.add('flex-fill');
                accountDiv.classList.add('m-1');
                accountDiv.classList.add('bg-light');
                accountDiv.classList.add('account');

                accountDiv.innerHTML = `
                    <h3 class="card-title fs-2">${account.accountName.split(' ')[0]}</h3>
                    <div class="card-subtitle mb-2 text-muted">00${account.accountId}</div>
                    <div class="sub-container d-flex flex-row justify-content-between align-items-end">
                        <div class="btext fw-bold fs-6">BALANCE</div> 
                        <div class="current fs-3">$${account.balance.toLocaleString()} ${account.currency}</div>
                    </div>
                `;

                accountsContainer.appendChild(accountDiv);

                // Add to total money user has
                totalMoneyHave += account.balance;
            });
            // Display total money user has and owes
            const own = document.getElementById('own');
            const ownDiv = document.createElement('div');
            ownDiv.classList.add('fs-2');
            ownDiv.innerHTML = `$${totalMoneyHave.toLocaleString()}`;
            own.appendChild(ownDiv);
        })
        .catch(error => console.error('Error fetching account data:', error));

    
    
});
