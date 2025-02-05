import React from "react";

const login = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Login Details : ", { Username, Password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Username : </label>
      <input
        type="text"
        name="username"
        value={Username}
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <label>Password : </label>
      <input type="text" name="password"></input>
    </form>
  );
};

export default login;
