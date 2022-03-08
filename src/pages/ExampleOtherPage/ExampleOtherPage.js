import styles from "./ExampleOtherPage.module.css";
import { HomeLink, Spacer } from "../../components";

function Apps() {
  return (
    <div className={"container"}>
      <h1 className={styles["no-animation"]}>This is an H1</h1>
      <h2 className={styles[""]}>This is an H2</h2>
      {/* TODO move Spacer / HomeLink into a nav-style component which is on all pages but Home */}
      <Spacer />
      <HomeLink />
    </div>
  );
}

export default Apps;
