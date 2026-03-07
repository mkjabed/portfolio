const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = form.querySelector("button");

    const res = await fetch("https://formspree.io/f/xqeykyaz", {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });

    // console.log(res.status, data);
    // const res = { ok: true }; // fake a success

    if (res.ok) {
      btn.textContent = "Sent ✓";
      btn.disabled = true;
      btn.style.opacity = "0.6";
      form.reset();
      setTimeout(() => {
        btn.textContent = "Send message";
        btn.disabled = false;
        btn.style.opacity = "";
      }, 3000);
    } else {
      btn.textContent = "Something went wrong";
      setTimeout(() => {
        btn.textContent = "Send message";
      }, 3000);
    }
  });
}
