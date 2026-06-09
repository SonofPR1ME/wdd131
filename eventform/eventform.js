
const form = document.querySelector("#eventForm");
const type = document.querySelector("#type");
const notesContainer = document.querySelector("#notesContainer");
const id = document.querySelector("#id");
const output = document.querySelector("#output");

function updateNotesField() {
  const value = type.value;

  if (value === 'student') {
    notesContainer.hidden = false;
    id.required = true;
    notesContainer2.hidden = true;
    code.required = false;
  } else if (value === 'guest') {
    notesContainer.hidden = true;
    id.required = false;
    notesContainer2.hidden = false;
    code.required = true;
  } else {
    notesContainer.hidden = true;
    id.required = false;
    notesContainer2.hidden = true;
    code.required = false;
  }
}

type.addEventListener("change", updateNotesField);
updateNotesField();


// Ensure they choose a date later than the current date
function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen > today;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.type.value;
  const eventDate = form.eventDate.value;
  const id = form.id.value.trim();


    if (type === 'student' && id.length != 9) {
        output.textContent = "Please enter a 9-digit ID number";
        return;
    }
  
    if (type === 'guest' && code != 'EVENT131') {
        output.textContent = "Please input the correct Event Code";
        return;
    }

  output.innerHTML = `
  <h2>Ticket Created</h2>
  <p>${firstName} ${lastName}</p>
  <p>Email: ${email}</p>
  <p>Date: ${eventDate}</p>
  `;

  form.reset();
  updateNotesField();
});
          