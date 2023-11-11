import Image from "next/image";
import AppBar from "../index"
import App from "next/app";
import Grid from "@mui/joy/Grid"
import Box from "@mui/joy/Grid"
import Button from "@mui/joy/Button"
import { Divider } from "@mui/joy";

function Search() {

  const wrapperStyle = {
    borderRadius: 12, // Adjust the value to change the roundness
    overflow: 'hidden', // Ensures children stay within the rounded corners
  };

  return (
    <>
      <div className="container-p">
        <div className="container">
          <div className="settings">
              <Button className="mainButton" variant="plain" size="lg">Personal quest</Button>
              <Divider />
              <Button className="mainButton" variant="plain" size="lg">Forum</Button>
              <Divider />
              <Button className="mainButton" variant="plain" size="lg">Communautary quest</Button>
              <Button className="showMore" size="sm" style={{ backgroundColor: 'transparent' }} >
                Show more
              </Button>
          </div>
          <div className="topics">
            right side
          </div>
        </div>
      </div>
    </>
  )
}

export default function SearchPage() {
  return (
    <>
      <AppBar />
      <Search />
    </>
  );
}