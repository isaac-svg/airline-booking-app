export const LoginUser = () => {
  const emailEl = document.querySelector("#loginemail");
  const passwordEl = document.querySelector("#loginpassword");
  const form = document.querySelector("#loginform");
  console.log({ form });
  form?.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!e.isTrusted) return;
    const email = emailEl.value.trim();
    const password = passwordEl.value.trim();

    const payload = { email, password };
    const res = await fetch("", {
      method: "POST",
      body: JSON.stringify({ ...payload }),
      credentials: "include",
    });

    const data = (await res).json();
  });
};
