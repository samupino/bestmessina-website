import clsx from "clsx";
import styles from "./styles.module.css";
import Translate, { translate } from "@docusaurus/Translate";

type StatItem = {
  value: number;
  text: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
};

const StatsList: StatItem[] = [
  {
    value: 30,
    text: translate({ message: "countries" }),
    Svg: require("@site/static/img/europe.svg").default,
  },
  {
    value: 84,
    text: translate({ message: "local groups" }),
    Svg: require("@site/static/img/group.svg").default,
  },
  {
    value: 3000,
    text: translate({ message: "students" }),
    Svg: require("@site/static/img/graduation_hat.svg").default,
  },
];

function Stat({ value, text, Svg }: StatItem) {
  return (
    <div
      className={clsx("col col--4 statGroup")}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Svg className={styles.statSvg} role="img" />
      <span className="padding-horiz--md">
        {value} {text}
      </span>
    </div>
  );
}

export default function HomepageStats(): JSX.Element {
  return (
    <section className={styles.statsRow}>
      <div className="container">
        <div className="row">
          {StatsList.map((props, idx) => (
            <Stat key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
