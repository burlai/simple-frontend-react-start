const chuckNorrisMemes = [
  "Коли Чак Норріс заходить в океан, акули опиняються в клітці.",
  "Чак Норріс порахував до нескінченності. Двічі.",
  "Чак Норріс може вбити два камені одним птахом.",
  "Коли Чак Норріс заходить в кімнату, він не вмикає світло. Він вимикає темряву.",
  "Чак Норріс чує мову жестів.",
  "Коли Чак Норріс робить віджимання, він не піднімає себе, він штовхає Землю вниз.",
];

const MemesList = () => {
  return (
    <div>
      <h2 className="align-left no-margin">Меми про Чака Норріса</h2>
      <ul className="list-circle-style">
        {chuckNorrisMemes.map((meme) => (
          <li key={meme} style={{ color: "#2a9d8f", fontWeight: "bold" }}>
            {`✨ ${meme} ✨`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemesList;
