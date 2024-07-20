interface GreetingProps {
  isLoggedIn: boolean;
}

const Greeting: React.FC<GreetingProps> = ({ isLoggedIn }) => {
  return <h1>{isLoggedIn ? "Вітаємо!" : "Увійдіть у систему"}</h1>;
};

export default Greeting;
