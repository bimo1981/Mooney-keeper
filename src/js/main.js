let start = document.querySelector("#start"),
    budget = document.querySelector(".budget-value"),
    daybudget = document.querySelector(".daybudget-value"),
    level = document.querySelector(".level-value"),
    expenses = document.querySelector(".expenses-value"),
    optionalexpenses = document.querySelector(".optionalexpenses-value"),
    income = document.querySelector(".income-value"),
    monthsavings = document.querySelector(".monthsavings-value"),
    yearsavings = document.querySelector(".yearsavings-value"),

    inputExpensesItem = document.querySelectorAll(".expenses-item"),
    inputOptionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),

    expensesItemBtn = document.querySelector(".data .expenses-item-btn"), // получаем кнопку c классом expenses-item-btn через родительский класс data
    optionalExpensesBtn = document.querySelector(".data .optionalexpenses-btn"),

    //input
    inputIncome = document.querySelector("#income"),
    inputSavings = document.querySelector("#savings"),
    inputSum = document.querySelector("#sum"),
    inputPercent = document.querySelector("#percent"),
    
    inputYear = document.querySelector(".year-value"),
    inputMonth = document.querySelector(".month-value"),
    inputDay = document.querySelector(".day-value");


    console.log(inputOptionalExpensesItem);
    