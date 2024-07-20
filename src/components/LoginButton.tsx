import { ButtonProps } from "./LogoutButton";

const LoginButton: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button
      className="button"
      style={{ backgroundColor: "green", color: "white" }}
      onClick={onClick}
    >
      Увійти
    </button>
  );
};

export default LoginButton;
