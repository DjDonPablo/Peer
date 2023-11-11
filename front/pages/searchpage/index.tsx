import AppBar from "../index"
import Button from "@mui/joy/Button"
import { Dispatch, SetStateAction, useState } from "react";

type MenuProps  = {
  selectedMenu: number;
  setSelectedMenu: Dispatch<SetStateAction<number>>;
}

function LeftMenu({selectedMenu, setSelectedMenu} : MenuProps) {
  return (
    <div className="settings">
      <Button
        className={selectedMenu === 0 ? "mainButtonSelected" : "mainButton"} onClick={
          () => setSelectedMenu(0)
        } variant="plain" size="lg">Personal quest</Button>
      <div className="divider-menu"></div>
      <Button className={selectedMenu === 1 ? "mainButtonSelected" : "mainButton"} onClick={
        () => setSelectedMenu(1)
      } variant="plain" size="lg">Forum</Button>
      <div className="divider-menu"></div>
      <Button className={selectedMenu === 2 ? "mainButtonSelected" : "mainButton"} onClick={
        () => setSelectedMenu(2)
      } variant="plain" size="lg">Communautary quest</Button>
      <Button className="showMore" size="md" style={{ backgroundColor: 'transparent' }} >
        Show more
      </Button>
    </div>
  )
}

function Personal() {
  return (
    <div className="topics">
      Personal quest
    </div>
  )
}

function Forum() {
  return (
    <div className="topics">
      Forum
    </div>
  )
}

function Communautary() {
  return (
    <div className="topics">
      Communautary quests
    </div>
  )
}

function RightMenu({selectedMenu, setSelectedMenu} : MenuProps) {
  if (selectedMenu === 0) {
    return <Personal />
  } else if (selectedMenu === 1) {
    return <Forum />
  } else {
    return <Communautary/>
  }
}

type SearchProps = {
  subject: string;
}

function Search({subject} : SearchProps) {
  const [selectedMenu, setSelectedMenu] = useState<number>(0)

  return (
    <>
      <h1 className="subject">{subject}</h1>
      <div className="container-p">
        <div className="container">
          <LeftMenu selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu}/>
          <RightMenu selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu}/>
        </div>
      </div>
    </>
  )
}

export default function SearchPage() {
  const subject = "Cuisine" // NEED TO BE GET FROM URL PARAMETERS

  return (
    <>
      <AppBar />
      <Search subject={subject}/>
    </>
  );
}