const people = [
  {
    id: 1,
    name: "John",
    surname: "Doe",
    dateOfBirth: "1990-01-01",
    phoneNumber: "123-456-7890",
    address: "123 Main St, Anytown, USA",
    email: "john.doe@example.com",
  },
  {
    id: 2,
    name: "Jane",
    surname: "Smith",
    dateOfBirth: "1985-05-15",
    phoneNumber: "987-654-3210",
    address: "456 Elm St, Othertown, USA",
    email: "jane.smith@example.com",
  },
  {
    id: 3,
    name: "Jack",
    surname: "Smith",
    dateOfBirth: "1998-05-15",
    phoneNumber: "234-855-3210",
    address: "456 Elm St, Othertown, USA",
    email: "jack.smith@example.com",
  },
];

const PhonesList = () => {
  return (
    <div>
      <h2 className="align-left no-margin">Номери телефонів</h2>
      <ul className="list-circle-style">
        {people.map((person, index, array) => {
          const isLast = index === array.length - 1;

          return (
            <li key={person.id} style={{ paddingBottom: "10px" }}>
              {isLast && (
                <span style={{ color: "red" }}>Остання людина в списку: </span>
              )}
              <div>
                <strong>
                  {`${index + 1}. ${person.name} ${person.surname}`}
                </strong>
              </div>
              <div>Номер: {person.phoneNumber}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PhonesList;
