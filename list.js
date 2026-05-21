const amount = document.getElementById('inp-amount').value
const category = document.getElementById('inp-category').value
const note = document.getElementById('inp-note').value
const date = document.getElementById('inp-date').value

function renderExpenses(expenses) {
    const el = document.getElementById('expense-list') 

    el.innerHTML = expenses.map(e => `
    <div class="expense-item">
        <div>${e.note}</div>
        <div>${e.category}</div>
        <div>${e.amount}</div>
    </div>
    `).join('')
}