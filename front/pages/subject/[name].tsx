import Button from "@mui/joy/Button"
import { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

function AppBar() {
  const router = useRouter()

  return (
    <div className="header">
      <ul className="list-header">
        <li>
          <Image className="logo-header" onClick={() => router.push("/")} src="/logo.png" alt="logo" width={46} height={46} />
        </li>
        <li className="sub-list-element-header">
          <ul className="sub-list-header">
            <li className="sub-list-header-li"><a className="menu__link" href="#">Subject</a></li>
            <li className="divider-menu-items" />
            <li className="sub-list-header-li"><a className="menu__link" href="#">Community</a></li>
            <li className="divider-menu-items" />
            <li className="sub-list-header-li"><a className="menu__link" href="#">About</a></li>
          </ul>
        </li>
        <li>
          <Image src="/user_icon.png" alt="user" width={28} height={28} />
        </li>
      </ul>
    </div>
  )
}

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
  const router = useRouter()

  return (
    <div>
      <AppBar />
      <Search subject={(router.query.name) as string}/>
    </div>
  );
}