import "./main.scss";
import { nav } from "../appdata";

function Main() {
  return (
    <main className="main">
      <nav>
        {nav.map((item) => {
          return <button key={item.key}>{item.name}</button>;
        })}
      </nav>
      <article>article</article>
      <article>article</article>
      <article>article</article>
    </main>
  );
}

export default Main;
