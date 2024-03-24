import axios from "axios";
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
    if (data.success) {
      localStorage.setItem("userPayload", JSON.stringify(data.payload));
    }
  });
};
