export function Button(props: any) {
  const { text } = props;

  return (
    <>
      <button className="glassmorphic-button">{text}</button>
      <div className="spacer mx-4"></div>
    </>
  );
}
