'use strict';

let money,
    time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '5000');
    time = prompt('Введите дату в формате YYYY-MM-DD', '2020-01-01');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов на этот месяц', 'Налоги'),
                b = prompt('Во сколько обойдется', '2500');

            if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
                console.log('done');
                appData.expenses[a] = b;
            } else {
                alert('Вы ввели неверные данные.');
                i = i - 1;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert('Ежедневный бюджет: ' + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка');
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?', '5000'),
                percent = +prompt('Под какой процент?', '1');

            appData.monthIncome = (save / 100 / 12 * percent).toFixed();
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i < 3; i++) {
            let opt = prompt('Статья необязательных расходов?', 'Еда');
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function () {
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', 'Ничего, Еще больше ничего, Вообще ничего');

        if (items != '' && items != null) {
            console.log('done');
            appData.income = items.split(',');
            let uwu = appData.income.push(prompt('Может что-то еще?', 'Нет'));
            appData.income.sort();
            console.log(appData);
            let arr;
            arr = this.income;
            appData.income.forEach(element => console.log('Способы доп. заработка: ' + arr + uwu));
            for (let key in appData) {
                console.log(' Наша программа включает в себя данные: ' + key + appData);
            }
        } else {
            alert('Пожалуйста, введите корректные данные');
            appData.chooseIncome();
        }
    }
};

appData.chooseExpenses();
appData.detectDayBudget();
appData.detectLevel();
appData.checkSavings();
appData.chooseOptExpenses();
appData.chooseIncome();