import Head from "next/head";
import { Inter } from "@next/font/google";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Projects from "./projects";
import Experience from "./experience";
import { Button } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ repodata, userdata }) {
  console.log("repodata", repodata);
  console.log("userdata", userdata);
  return (
    <div className="IndexMain">
      <div className="IndexLeft30">
        <div className="IndexLeftAvatarSec">
          <Image
            src="https://avatars.githubusercontent.com/u/95009807?v=4"
            height={100}
            width={100}
            alt={userdata.name}
          />
  
          <p style={{ fontSize: "1.5rem", fontWeight: "600" }}>
            {userdata.name}
          </p>
          <p>@{userdata.login}</p>
          <Link href="https://drive.google.com/file/d/1rzydD2R905DRz60E6Mx6ukZKEWTkGsEE/view?usp=sharing">
            <Button variant="contained">Resume</Button>
          </Link>
          <Link href={userdata.html_url}>
            <Button variant="contained">Follow</Button>
          </Link>
        </div>
        <div className="Techstacksection">
          <Button variant="outlined">Typescript</Button>
          <Button variant="outlined">Chakra</Button>
          <Button variant="outlined">Redux</Button>
          <Button variant="outlined">Mui</Button>
          <Button variant="outlined">Javascript</Button>
          <Button variant="outlined">Html</Button>
          <Button variant="outlined">Css</Button>
          <Button variant="outlined">Reactjs</Button>
        </div>
        <div
          className="Experiencesec"
          style={{
            gap: "5px",
            padding: "1rem",
          }}
        >
          <Experience />
        </div>
      </div>

      <div className="Rightsection70">
        <Projects data={repodata} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const repodata = await fetch(
    "https://api.github.com/search/repositories?q=user:ignitinsharma+fork:true&sort=updated&per_page=10&type=Repositories"
  );
  const repodatamain = await repodata.json();
  const userdata = await fetch("https://api.github.com/users/ignitinsharma");
  const userdatamain = await userdata.json();
  return {
    props: {
      repodata: repodatamain,
      userdata: userdatamain,
    },
  };
}
