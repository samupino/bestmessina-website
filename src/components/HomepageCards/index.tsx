import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Translate, { translate } from "@docusaurus/Translate";

type CardItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const CardsList: CardItem[] = [
  {
    title: translate({
      message: "Our identity",
    }),
    Svg: require("@site/static/img/graduation_hat_gear.svg").default,
    description: (
      <Translate id="homepage.cards.our_identity_body">
        BEST - Board of European Students of Technology, is a no-profit,
        apolitical organization. Since 1989 we offer communication, cooperation,
        and exchange opportunities to students from all around Europe.
      </Translate>
    ),
  },
  {
    title: translate({
      message: "We connect students and companies",
    }),
    Svg: require("@site/static/img/link.svg").default,
    description: (
      <Translate id="homepage.cards.connections_body">
        Expand your professional horizons. Build your international network and
        connect with our partners.
      </Translate>
    ),
  },
  {
    title: translate({
      message: "Get out of your comfort zone",
    }),
    Svg: require("@site/static/img/plane.svg").default,
    description: (
      <Translate id="homepage.cards.comfort_zone_body">
        Travel and make new friends across Europe. Gain an international mindset
        and develop your skills in a culturally diverse environment.
      </Translate>
    ),
  },
];

function Card({ title, Svg, description }: CardItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.cardSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageCards(): JSX.Element {
  return (
    <section className={styles.cards}>
      <div className="container">
        <div className="row">
          {CardsList.map((props, idx) => (
            <Card key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
