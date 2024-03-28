export const RegisterUser = () => {
  const form = document.querySelector("#registerform");
  const firstnameEl = document.querySelector("#registerfirstname");
  const lastnameEl = document.querySelector("#registerlastname");
  const emailEl = document.querySelector("#registeremail");
  const passwordEl = document.querySelector("#registerpassword");
  const repeatpasswordEl = document.querySelector("#repeat-password");
  const btnEl = document.querySelector("#registersubmitbtn");

  console.log(btnEl);

  //   process input

  form?.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!e.isTrusted) return;
    const firstname = firstnameEl.value.trim();
    const lastname = lastnameEl.value.trim();
    const email = emailEl.value.trim();
    const password = passwordEl.value.trim();
    const repeatpassword = repeatpasswordEl.value.trim();

    if (!firstname.length || !lastname.length) {
      alert("First name and last names must be filed");
      return;
    }

    if (password.trim() !== repeatpassword.trim()) {
      alert("passwords do not march");
      return;
    }
    const payload = {
      firstName: firstname,
      lastName: lastname,
      password: password,
      email,
    };

    console.log({
      firstName: firstname,
      lastName: lastname,
      password: password,
      email,
    });
    const res = await fetch("http://localhost:9000/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstname,
        lastName: lastname,
        password: password,
        email,
      }),
    });
    const data = await res.json();

    console.log(data);
    if (data.others) {
      const toast = document.querySelector("#toast-success");
      toast.classList.remove("hidden");
      toast.classList.add("flex");
      await (async () =>
        setTimeout(() => {
          toast.classList.add("hidden");
          toast.classList.remove("flex");
          window.location.href = "http://localhost:5173/src/pages/login.html";
        }, 1000))();
    }
    // this data will be written to local storage
  });
};
RegisterUser();
