import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type CardItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const CardsList: CardItem[] = [
  {
    title: "Our identity",
    Svg: require("@site/static/img/graduation_hat_gear.svg").default,
    description: (
      <>
        BEST - Board of European Students of Technology, is a non-profit and
        non-political organization. Since 1989 we provide communication,
        co-operation and exchange possibilities for students all over Europe.
      </>
    ),
  },
  {
    title: "Connecting students and companies",
    Svg: require("@site/static/img/link.svg").default,
    description: (
      <>
        Expand your career horizons. Build your international network and get in
        touch with our partners.
      </>
    ),
  },
  {
    title: "Get out of your comfort zone",
    Svg: require("@site/static/img/plane.svg").default,
    description: (
      <>
        Travel and make new friends all around Europe. Achieve an international
        mindset and develop your skills in a culturally diverse environment.
      </>
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
