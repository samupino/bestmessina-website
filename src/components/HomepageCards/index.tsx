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
    title: "La nostra identità",
    Svg: require("@site/static/img/graduation_hat_gear.svg").default,
    description: (
      <>
        BEST - Board of European Students of Technology, è un'organizzazione
        non-profit e apolitica. Dal 1989 offriamo opportunità di comunicazione,
        cooperazione e scambio per studenti di tutta Europa.
      </>
    ),
  },
  {
    title: "Connettere studenti e aziende",
    Svg: require("@site/static/img/link.svg").default,
    description: (
      <>
        Espandi i tuoi orizzonti professionali. Costruisci la tua rete
        internazionale e entra in contatto con i nostri partner.
      </>
    ),
  },
  {
    title: "Esci dalla tua comfort zone",
    Svg: require("@site/static/img/plane.svg").default,
    description: (
      <>
        Viaggia e fai nuove amicizie in tutta Europa. Acquisisci una mentalità
        internazionale e sviluppa le tue competenze in un ambiente culturalmente
        diversificato.
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
