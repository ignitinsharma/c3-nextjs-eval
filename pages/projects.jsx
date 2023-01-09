import Link from "next/link";
import React from "react";
import FolderIcon from "@mui/icons-material/Folder";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Padauk } from "@next/font/google";

const Projects = ({ data }) => {
  console.log("data repo", data.items);
  return (
    <div className="ExperienceParent">
      {data.items.map((data) => (
        <Link href={data.html_url} key={data.id}>
          <div className="ExperienceContainer">
            <div className="ExperienceDataDiv">
              <div style={{display:'flex',alignItems:'center'}}>
                <FolderIcon />{" "}
                <span style={{ fontSize: "1rem", fontWeight: "400" }}>
                  {data.name}
                </span>
              </div>
              <p style={{ fontSize: "12px", fontWeight: "400" }}>
                {data.description}
              </p>
              <div className="Git_forkDiv" >
                <StarBorderIcon /> <span>{data.watchers}</span>
                <GitHubIcon /> <span>{data.forks}</span>
              </div>
            </div>
            <div>{data.language}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const repositories = await fetch(
    "https://api.github.com/search/repositories?q=user:ignitinsharma+fork:true&sort=updated&per_page=10&type=Repositories"
  );
  const repodata = await repositories.json();
  return {
    props: {
      data: repodata,
    },
  };
}

export default Projects;
