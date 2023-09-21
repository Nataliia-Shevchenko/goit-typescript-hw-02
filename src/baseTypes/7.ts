/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
  sunday = "SUNDAY",
  monday = "MONDAY",
  tuesday = "TUESDAY",
  wednesday = "WEDNESDAY",
  thursday = "THURSDAY",
  friday = "FRIDAY",
  saturday = "SATURDAY",
}

function isWeekend(day: Days): boolean {
  if (day === "SUNDAY" || day === "SATURDAY") {
    return true;
  } else {
    return false;
  }
}

isWeekend(Days.sunday);