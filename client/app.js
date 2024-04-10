const form = document.getElementById("messageform");

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const message = formData.get("message");
  fetch("http://localhost:8080/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });
}

form.addEventListener("submit", handleSubmit);
