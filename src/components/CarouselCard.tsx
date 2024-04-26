import '../assets/images';


export function CarouselCard(props: any) {
  const { url } = props;

  return (
    <div className="carousel-card">
      <img src={url} alt="" />
    </div>
  );
}
