import Advertise from "./Advertise";
import Bestgear from "./Bestgear";
import Catalouge from "./Catalouge";
import HomeBanner from "./HomeBanner";

export default function Main() {
  return (
    <section>
      <div>
        <div>
          <HomeBanner />
          <Catalouge />
          <Advertise />
          <Bestgear />
        </div>
      </div>
    </section>
  );
}
