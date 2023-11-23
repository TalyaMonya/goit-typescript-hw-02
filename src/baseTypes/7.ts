/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekDays {
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday,
};

function isWeekend(day: WeekDays): boolean {
  return day === WeekDays.saturday || day === WeekDays.sunday;
}

if (isWeekend(WeekDays.monday)) {
  console.log("Сьогодні вихідний день");
} else {
  console.log("Сьогодні робочий день");
}
