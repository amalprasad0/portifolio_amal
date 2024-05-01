import '../assets/images';


export function CarouselCard(props: any) {
  const { url } = props;
  console.log(url)
  return (
    <div className="carousel-card">
      <img src={url} alt="not found" />
    </div>
  );
}
