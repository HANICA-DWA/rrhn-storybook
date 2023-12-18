export default function ItemPanel(props) {
  return (
    <iframe className="IFrameView" src={props.activeItem.url} frameBorder={0} />
  );
}
