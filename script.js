'use strict'

document.getElementById('response').addEventListener('click', museumEligible)

document.getElementById('time').addEventListener('click', museumEligible)

function museumEligible () {
  const day = document.getElementById('time').value
  // user inputs the day of the week
  const age = document.getElementById('response').value
  // user inputs their age
  if ((day === 'Tuesday' || day === 'Thursday') || (age > 12 && age < 21)) {
    alert('You are eligible for student pricing.')
  } else {
    alert('You must pay regular price.')
  // conditions state that student pricing is eligible only during Tuesdays and Thursdays or between ages of 12 and 21
  }
}
