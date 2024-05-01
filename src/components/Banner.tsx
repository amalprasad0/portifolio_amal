import { Button } from "./Button";

export function Banner() {
  return (
    <div className="Banner">
      <h1 className="banner-text ">
        Architecting Tomorrow's <br />Digital World,  <br />One Line of Code at a Time.
      </h1>
      <div className="banner-buttons">
      <Button text="Talk Now"/>
      <Button text="View More"/>
      </div>
      <p className="banner-paragraph py-4">Empowering Me, Empowering You: Crafting Tomorrow's Innovations in Code.</p>
    </div>
  );
}
