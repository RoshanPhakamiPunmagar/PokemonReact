import "./welcome.css";
const Welcome = () => {
  let name = "HARI";
  let a = 100;
  let b = 2000;

  let array = [1, 2, 3, 4, 5];
  return (
    <>
      <h1 className="heading test">
        WELCOME {name}
        <ul>
          {array.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </h1>
      <div></div>
    </>
  );
};

export default Welcome;
