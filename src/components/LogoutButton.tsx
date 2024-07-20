export interface ButtonProps {
  onClick: () => void;
}

const LogoutButton: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button
      style={{ backgroundColor: "red", color: "white" }}
      onClick={onClick}
    >
      Вийти
    </button>
  );
};

export default LogoutButton;
