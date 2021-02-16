export default function PicturePreview(props) {
  return (
    <>
      <img id="output" width="200" src={props.src} />
      <button onClick={props.delete}>x</button>
    </>
  );
}
