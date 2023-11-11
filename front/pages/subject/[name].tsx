import Button from "@mui/joy/Button"
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Accordion, AccordionDetails, AccordionGroup, AccordionSummary, ButtonGroup, Card, Input } from "@mui/joy";
import Table from '@mui/joy/Table';
import json from '../../../input/quete_solo.json';

function AppBar() {
  const router = useRouter()
  return (
    <div className="header">
      <ul className="list-header">
        <li className="sub-list-element-header">
          <Image className="logo-header" onClick={() => router.push("/")} src="/logo.png" alt="logo" width={32} height={32}/>
          <ul className="sub-list-header sub-list-header-v2">
            <li className="sub-list-header-li"><a className="menu__link" href="#">Subject</a></li>
            <li className="sub-list-header-li"><a className="menu__link" href="#">Community</a></li>
            <li className="sub-list-header-li"><a className="menu__link" href="#">About</a></li>
          </ul>
        </li>
          <Input size="sm" placeholder="Search for a subject" variant="soft" color="primary" className="input-app-bar" />
        <li>
          <Image src="/user.png" alt="user" width={26} height={26} />
        </li>
      </ul>
    </div>
  )
}

function AccordionBasic() {
  return (
    <AccordionGroup >
      <Accordion>
        <AccordionSummary className="form-question">How can I do that ?</AccordionSummary>
        <AccordionDetails>
          <div className="accordion-details">
            <h5 className="details-date">11/11/2023</h5>
            <h4 className="details-title">Description: </h4>
            <p className="details-forum">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <h4 className="details-title">Created by: </h4>
            <p className="details-forum">
              DjDonpablo
            </p>
          </div>
        </AccordionDetails>
      </Accordion>
    </AccordionGroup>
  );
}

type basicTableProps = {
  exercise_name : string;
  status : string;
  acceptance_rate : string;
  difficulty : string;
}

function TableRow(props : basicTableProps) {
  return <tr>
    <td>{props.exercise_name}</td>
    <td>{props.acceptance_rate}</td>
    <td className={props.difficulty == "hard" ? "basicTablePropsDifficultyHard" : props.difficulty == "medium" ? "basicTablePropsDifficultyMedium" : "basicTablePropsDifficultyEasy"}>{props.difficulty}</td>
    <td><Button className={props.status == "new" ? "basicTablePropsButtonNew" : "basicTablePropsButtonOngoing"} disabled={props.status == "done"}>{props.status}</Button></td>
  </tr>;
}

function BasicTable() {
  return (
    <div className="table-personal-quest"> 
      <Table aria-label="basic table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Acceptance</th>
            <th>Difficulty</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
           { json.quests.map((e) => TableRow(e))}
        </tbody>
      </Table>
    </div>
  );
}

function Personal() {
  return (
    <div className="container-personal-quests">
      <BasicTable/>
      <div className="test">
        <Card className="card-style-2">
          <h3 className="level-perso">Level 7</h3>
          <h5 className="level-role-perso">New runner</h5>
          <div className="progress">
            <div className="progress-value"></div>
          </div>
        </Card>
        <Card className="card-style">
          <p>Your quests data</p>
          <div>
            <div className="center-sphere center-sphere-personal">
              <div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{ '--value': 65, '--fg-color': '#666', 'fontFamily': 'font-family: var(--joy-fontFamily-body, "Inter", var(--joy-fontFamily-fallback, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"))'}}></div>
            </div>
            <div className="center-text-personal">
              <div className="above-line">Easy</div>
              <div className="line green-background" style={{ width: '50%' }}></div>
              <div className="above-line">Medium</div>
              <div className="line orange-background" style={{ width: '80%' }}></div>
              <div className="above-line">Hard</div>
              <div className="line red-background" style={{ width: '25%' }}></div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

function Forum() {
  return (
    <div>
      <Input size="md" placeholder="Search for a question" variant="soft" color="neutral" className="input-form"/>
      <AccordionBasic/>
    </div>
  )
}

function Communautary() {
  return (
    <div >
      Communautary quests
    </div>
  )
}

type SearchProps = {
  subject: string;
}

function Search({subject} : SearchProps) {
  const [selectedMenu, setSelectedMenu] = useState<number>(0)

  if (subject == undefined) {
    subject = " "
  }

  return (
    <>
      <div className="header-subject">
        <Image alt="icon subject" src="/sports.png" width={50} height={50} className="image-subject"/>
        <h1 className="subject">{subject.charAt(0).toUpperCase() + subject.slice(1)}</h1>  
      </div>
      <div className="button-group-div">
        <ButtonGroup
          orientation="horizontal"
          variant="plain"
          size="lg"
        >
          <Button className={selectedMenu === 0 ? "selected-button-menu" : ""} onClick={() => setSelectedMenu(0)}>Personal Quests</Button>
          <Button className={selectedMenu === 1 ? "selected-button-menu" : ""} onClick={() => setSelectedMenu(1)}>Forum</Button>
          <Button style={{ width: '400px' }} className={selectedMenu === 2 ? "selected-button-menu" : ""} onClick={() => setSelectedMenu(2)}>Community Quests</Button>
        </ButtonGroup>
      </div>
      <div className="divider-subject-menu-div">
        <div className="divider-subject-menu"/>
      </div>
      {selectedMenu === 0 ? <Personal/> : selectedMenu === 1 ? <Forum/> : <Communautary/>}
    </>
  )
}

export default function SearchPage() {
  const router = useRouter()

  return (
    <div>
      <AppBar />
      <div className="app-bar-divider"/>
      <Search subject={(router.query.name) as string}/>
    </div>
  );
}