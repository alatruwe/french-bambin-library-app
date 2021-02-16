export default function Request(props) {
  return (
    <section>
      <h2>Item: {props.title}</h2>
      <h1>Request object: {props.object}</h1>
      <p>Request message: {props.message}</p>
      <p>Sent: {props.date}</p>
    </section>
  );
}
