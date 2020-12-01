function handleSubmit(e) {
  e.preventDefault();

  const values = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  fetch(
    "https://mpf6bdi5vd.execute-api.us-east-1.amazonaws.com/Prod/send-mail",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    }
  )
    .then((res) => res.json())
    .then((res) => {
      console.log("succeeded");
      console.log(res);
    })
    .catch((err) => {
      console.log("failed");
      console.log(err);
    });
}
