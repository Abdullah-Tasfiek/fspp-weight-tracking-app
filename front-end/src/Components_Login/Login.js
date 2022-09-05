function Login() {
  return (
    <div>
      <form>
        <label htmlFor="email"> Email: </label>
        <input
          type="email"
          name="email"
          // onChange={handleTextChange}
          id="email"
        />
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" id="password"></input>
      </form>
    </div>
  );
}

export default Login;
