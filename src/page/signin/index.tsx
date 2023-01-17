import "./signin.scss";

const Signin = () => {
  return (
    <div className="signin">
      <div className="signin__container">
        <div className="signin__left"></div>
        <div className="signin__rigth">
          <div className="signin__rigth-contents">
            <form className="form">
              <div className="form__email">
                <input type="text" placeholder="email" />
              </div>
              <div className="form__password">
                <input type="password" placeholder="password" />
              </div>
              <div className="form__button">
                <button type="submit">signin</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
