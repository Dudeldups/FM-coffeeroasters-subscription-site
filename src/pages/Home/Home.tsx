import { Link } from "react-router-dom";

import "./Home.scss";

import mobileHeroImg from "/assets/home/mobile/image-hero-coffeepress.jpg";
import tabletHeroImg from "/assets/home/tablet/image-hero-coffeepress.jpg";
import desktopHeroImg from "/assets/home/desktop/image-hero-coffeepress.jpg";
import espressoImg from "/assets/home/desktop/image-gran-espresso.png";
import planaltoImg from "/assets/home/desktop/image-planalto.png";
import piccolloImg from "/assets/home/desktop/image-piccollo.png";
import dancheImg from "/assets/home/desktop/image-danche.png";
import coffeBeanIcon from "/assets/home/desktop/icon-coffee-bean.svg";
import giftIcon from "/assets/home/desktop/icon-gift.svg";
import truckIcon from "/assets/home/desktop/icon-truck.svg";

export default function Home() {
  return (
    <div className="home">
      <article className="intro">
        <picture className="intro__heroImgContainer">
          <source srcSet={desktopHeroImg} media="(min-width: 61.25em)" />
          <source srcSet={tabletHeroImg} media="(min-width: 46.25em)" />
          <img src={mobileHeroImg} alt="" aria-hidden="true" />
        </picture>
        <div className="intro__textContainer">
          <h1 className="intro__title">Great coffee made simple.</h1>
          <p className="intro__desc">
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </p>
          <button className="greenButton">
            <Link to="/subscribe">Create your plan</Link>
          </button>
        </div>
      </article>

      <article className="collection">
        <h2 className="collection__title">our collection</h2>

        <ul className="coffeeList">
          <li className="coffee">
            <img
              src={espressoImg}
              alt="A bag of Gran Espresso"
              className="coffee__img"
            />
            <div className="coffe__text">
              <h3 className="coffee__title">Gran Espresso</h3>
              <p className="coffee__desc">
                Light and flavorful blend with cocoa and black pepper for an
                intense experience
              </p>
            </div>
          </li>

          <li className="coffee">
            <img
              src={planaltoImg}
              alt="A bag of Planalto"
              className="coffee__img"
            />
            <div className="coffe__text">
              <h3 className="coffee__title">Planalto</h3>
              <p className="coffee__desc">
                Brazilian dark roast with rich and velvety body, and hints of
                fruits and nuts
              </p>
            </div>
          </li>

          <li className="coffee">
            <img
              src={piccolloImg}
              alt="A bag of Piccollo"
              className="coffee__img"
            />
            <div className="coffe__text">
              <h3 className="coffee__title">Piccollo</h3>
              <p className="coffee__desc">
                Mild and smooth blend featuring notes of toasted almond and
                dried cherry{" "}
              </p>
            </div>
          </li>

          <li className="coffee">
            <img
              src={dancheImg}
              alt="A bag of Danche"
              className="coffee__img"
            />
            <div className="coffe__text">
              <h3 className="coffee__title">Danche</h3>
              <p className="coffee__desc">
                Ethiopian hand-harvested blend densely packed with vibrant fruit
                notes
              </p>
            </div>
          </li>
        </ul>
      </article>

      <article className="whyUs">
        <header className="whyUs__header">
          <h2 className="whyUs__title">Why choose us?</h2>
          <p className="whyUs__desc">
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>
        </header>

        <div className="whyUs__bg"></div>

        <ul className="benefitsList">
          <li className="benefit">
            <img
              src={coffeBeanIcon}
              alt=""
              className="benefit__img"
              aria-hidden="true"
            />
            <div className="benefit__text">
              <h3 className="benefit__title">Best quality</h3>
              <p className="benefit__desc">
                Discover an endless variety of the world’s best artisan coffee
                from each of our roasters.
              </p>
            </div>
          </li>

          <li className="benefit">
            <img
              src={giftIcon}
              alt=""
              className="benefit__img"
              aria-hidden="true"
            />
            <div className="benefit__text">
              <h3 className="benefit__title">Exclusive benefits</h3>
              <p className="benefit__desc">
                Special offers and swag when you subscribe, including 30% off
                your first shipment.
              </p>
            </div>
          </li>

          <li className="benefit">
            <img
              src={truckIcon}
              alt=""
              className="benefit__img"
              aria-hidden="true"
            />
            <div className="benefit__text">
              <h3 className="benefit__title">Free shipping</h3>
              <p className="benefit__desc">
                We cover the cost and coffee is delivered fast. Peak freshness:
                guaranteed.
              </p>
            </div>
          </li>
        </ul>
      </article>

      <article className="howTo">
        <h2 className="howTo__title">How it works</h2>

        <ul className="explanationList">
          <li className="explanation">
            <h3 className="explanation__title">Pick your coffee</h3>
            <p className="explanation__desc">
              Select from our evolving range of artisan coffees. Our beans are
              ethically sourced and we pay fair prices for them. There are new
              coffees in all profiles every month for you to try out.
            </p>
          </li>

          <li className="explanation">
            <h3 className="explanation__title">Choose the frequency</h3>
            <p className="explanation__desc">
              Customize your order frequency, quantity, even your roast style
              and grind type. Pause, skip or cancel your subscription with no
              commitment through our online portal.
            </p>
          </li>

          <li className="explanation">
            <h3 className="explanation__title">Receive and enjoy!</h3>
            <p className="explanation__desc">
              We ship your package within 48 hours, freshly roasted. Sit back
              and enjoy award-winning world-class coffees curated to provide a
              distinct tasting experience.
            </p>
          </li>
        </ul>

        <button className="greenButton">
          <Link to="/subscribe">Create your plan</Link>
        </button>
      </article>
    </div>
  );
}
