import PasswordInput from "./PasswordInput";

const LoginForm = () => {
  return (
    <form>
      <div>
        <input type="text" placeholder="Username" />
      </div>
      <PasswordInput />
      <div>
        <button
          type="button"
          onClick={() => {
            console.log("увійти!!!");
          }}
        >
          Увійти
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
