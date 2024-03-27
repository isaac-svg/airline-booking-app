export const LoginUser = () => {
  const emailEl = document.querySelector("#loginemail");
  const passwordEl = document.querySelector("#loginpassword");
  const form = document.querySelector("#loginform");
  const btn = document.querySelector("#loginbtn");
  console.log({ form });

  form?.addEventListener("submit", async (e) => {
    console.log({ form });

    e.preventDefault();
    if (!e.isTrusted) return;
    const email = emailEl.value.trim();
    const password = passwordEl.value.trim();
    const payload = { email, password };
    console.log(payload);
    const res = await fetch("http://localhost:9000/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    const toast = document.querySelector("#toast-success");
    const toastmessage = document.querySelector("#toast-message");
    if (data.success) {
      localStorage.setItem("userPayload", JSON.stringify(data.payload));
      toastmessage.textContent = "Login successfull";
      toast.classList.remove("hidden");
      toast.classList.add("flex");
      await (async () =>
        setTimeout(() => {
          toast.classList.add("hidden");
          toast.classList.remove("flex");
          window.location.href =
            "https://airticket-booking-app-orcin.vercel.app/src/pages/book.html";
        }, 1000))();
    } else {
      toastmessage.textContent = "incorrect credentials";
      toast.classList.remove("hidden");
      toast.classList.add("flex");
      // toast.id = "toast-danger";
      await (async () =>
        setTimeout(() => {
          toast.classList.add("hidden");
          toast.classList.remove("flex");
          // toast.id = "toast-success";
        }, 2000))();
    }
  });
};
LoginUser();
