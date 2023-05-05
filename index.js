// Вивести на сторінку в один рядок через кому числа від 10 до 20.
let output = '';
for (let i = 10; i <= 20; i++) {
  output += `${i}, `;
}
document.write(output);

// Вивести квадрати чисел від 10 до 20.
output = '';
for (let i = 10; i <= 20; i++) {
  output += `${i ** 2}, `;
}
document.write(output);

// Вивести таблицю множення на 7.
output = '';
for (let i = 1; i <= 10; i++) {
  output += `7 x ${i} = ${7 * i}<br>`;
}
document.write(output);

// Знайти суму всіх цілих чисел від 1 до 15.
let sum = 0;
for (let i = 1; i <= 15; i++) {
  sum += i;
}
document.write(`Сума чисел від 1 до 15: ${sum}<br>`);

// Знайти добуток усіх цілих чисел від 15 до 35.
let product = 1;
for (let i = 15; i <= 35; i++) {
  product *= i;
}
document.write(`Добуток чисел від 15 до 35: ${product}<br>`);

// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
sum = 0;
for (let i = 1; i <= 500; i++) {
  sum += i;
}
const average = sum / 500;
document.write(`Середнє арифметичне чисел від 1 до 500: ${average}<br>`);

// Вивести суму лише парних чисел в діапазоні від 30 до 80.
sum = 0;
for (let i = 30; i <= 80; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}
document.write(`Сума парних чисел в діапазоні від 30 до 80: ${sum}<br>`);

// Вивести всі числа в діапазоні від 100 до 200 кратні 3.
output = '';
for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    output += `${i}, `;
  }
}
document.write(output);