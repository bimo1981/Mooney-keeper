let start = document.querySelector("#start"),
    budgetRight = document.querySelector(".budget-value"),
    daybudget = document.querySelector(".daybudget-value"),
    level = document.querySelector(".level-value"),
    expenses = document.querySelector(".expenses-value"),
    optionalexpenses = document.querySelector(".optionalexpenses-value"),
    income = document.querySelector(".income-value"),
    monthsavings = document.querySelector(".monthsavings-value"),
    yearsavings = document.querySelector(".yearsavings-value"),

    inputExpensesItem = document.querySelectorAll(".expenses-item"),
    inputOptionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),

    optionalExpensesBtn = document.querySelector(".data .optionalexpenses-btn"),

    expensesItemBtn = document.querySelectorAll(".expenses-item-btn"),

    //input
    inputIncome = document.querySelector("#income"),
    inputSavings = document.querySelector("#savings"),
    inputSum = document.querySelector("#sum"),
    inputPercent = document.querySelector("#percent"),

    inputYear = document.querySelector(".year-value"),
    inputMonth = document.querySelector(".month-value"),
    inputDay = document.querySelector(".day-value"),

    imputBudget = document.querySelector("#budget1"),
    birth1 = document.querySelector("#birth1");


start.addEventListener("click", function () {

    let budgetValue = +imputBudget.value;
    if (budgetValue <= 0) {
        alert("Проверти правильность введенных данных");

        setTimeout(function() {window.location.reload();}, 2000);
    } else {
        budgetRight.textContent = budgetValue.toFixed(0);
    }


    inputYear.value = new Date(Date.parse(birth1.value)).getFullYear();
    inputMonth.value = new Date(Date.parse(birth1.value)).getMonth() + 1;
    inputDay.value = new Date(Date.parse(birth1.value)).getDate();

    let sum = 0;

    for (let i = 0; i < inputExpensesItem.length; i++) {
    

        let a = inputExpensesItem[i].value,
            b = +inputExpensesItem[++i].value; // Сначало возвращает старое значение и только потом его инкреминтирует 

        if (typeof(a) != null || typeof(b) != null || b != "" || a != "") {
            appData.expenses[a] = b;
            sum += +b; // += означает sum + b 
        } else {
            window.location.reload();
        }
    }

    expenses.textContent = sum;
});

let personName,
    personAge,
    personBudget,
    money,
    time;





let appData = {
    expenses: {},
    dopExpenses: {},
    addProperties: function () {
        appData.gender = "gay";
    },
    getExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Название необходимой покупки?");
            let b = +prompt("Стоимость обязательной покупки?");
            appData.expenses[a] = b;
        }
    },
    checkGet: function () {
        if (appData.budget < 100) {
            alert("Ты бомж!");
        } else if (appData.budget < 5000) {
            alert("Мало бабла у тебя!");
        } else if (appData.budget > 10000) {
            alert("Все супер!");
        }
    },
    pushDopExpenses: function () {
        let dop = prompt("У вас есть дополнительные доходы? (перечислите через запятую)");
        appData.dopExpenses = dop.split(",");
        appData.dopExpenses.push(prompt("Может что-то еще? "));
        appData.dopExpenses.sort();
    }
};