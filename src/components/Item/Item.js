export default function Item(props) {
  return (
    <section>
      <h2>{props.title}</h2>
      <img src={props.image} width="250" height="250" />
      <p>{props.description}</p>
    </section>
  );
}
