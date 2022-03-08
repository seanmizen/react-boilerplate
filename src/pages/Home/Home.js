import { Github } from "../../features";
import { Spacer, LastUpdated, ThemeToggle } from "../../components";
import { ThemeContext } from "../../Theme";
import { Link } from "react-router-dom";
import React from "react";

function Home() {
  const { mode, toggleMode } = React.useContext(ThemeContext);
  return (
    <div className={"container"}>
      <h1>This is an H1</h1>
      <p>This is a P</p>
      <Spacer />
      <p>So is this.</p>
      <Github />
      <Spacer />
      <Link to={"/ExampleOtherPage"}>Example Other Page</Link>
      <LastUpdated
        apiRepoUrl={"https://api.github.com/repos/seanmizen/react-boilerplate"}
      />
      <ThemeToggle mode={mode} toggleMode={toggleMode} />
    </div>
  );
}

export default Home;
