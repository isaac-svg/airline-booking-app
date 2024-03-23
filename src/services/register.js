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
    const payload = { firstname, lastname, password, email };

    // const res = await fetch("", {
    //   method: "POST",
    //   credentials: "include",
    //   body: JSON.stringify({ ...payload }),
    // });
    // const data = await res.json();

    console.log(payload);
    // this data will be written to local storage
  });
};
