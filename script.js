function sayHello() {
  alert("Hello from Absher 🎉");
}
document.getElementById("myForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;

  const response = await fetch("/api/hello", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name })
  });

  const data = await response.json();
  document.getElementById("response").textContent = data.message;
});
