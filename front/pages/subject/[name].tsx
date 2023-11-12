import Button from "@mui/joy/Button"
import { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Accordion, AccordionDetails, AccordionGroup, AccordionSummary, Avatar, ButtonGroup, Card, IconButton, Input } from "@mui/joy";
import Table from '@mui/joy/Table';
import json from '../../../input/quete_solo.json';
import forum from '../../../input/forum.json';
import queteCommu from '../../../input/quete_commu.json'

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
          <Image src="/user.png" alt="user" onClick={() => router.push("/profile")} width={26} height={26} className="logo-account"/>
        </li>
      </ul>
    </div>
  )
}

type AccountBadgeProps = {
  name: string
  level: number
}

function AccountBadge({name, level} : AccountBadgeProps) {
  return (
    <div className="quoi">
      <div className="coubeh">
        <Avatar size="sm" className="avatar">
          DF
        </Avatar>
        <h5 className="name">{name}</h5>
        <h4 className="name name-color">{"Lvl." + level.toString()}</h4>
      </div>
    </div>
  )
}

type accordionResponseProps = {
  body : string;
  author : string;
  date : string;
  user_level : number;
  vote : number;
}

type accordionProps = {
  question : string;
  topic : string;
  specific_point : string;
  description : string;
  author : string;
  date : string;
  user_level : number;
  answers : accordionResponseProps[];
}

function Response({body, author, date, user_level, vote} : accordionResponseProps) {
  const [count, setCount] = useState(vote)

  return (
    <div className="response">
      <div className="buttons-votes" >
        <ButtonGroup
          orientation="vertical"
          variant="soft"
        >
          <Button startDecorator={<Image alt="up-vote" src="/up.png" width={20} height={20} className="img-vote"/>} color="success" onClick={() => setCount(count + 1)}/>
          <Button disabled={true} className="vote-count">
            {count}
          </Button>
          <Button startDecorator={<Image alt="up-vote" src="/down.png" width={20} height={20} className="img-vote"/>} color="danger" onClick={() => setCount(count - 1)}/>
        </ButtonGroup>
      </div>
      <div>
        <div className="created-by">
          <h4 className="details-created-by">By </h4>
          <AccountBadge name={author} level={user_level}/>
        </div>
        <p className="details-forum">
          {body}
        </p>
      </div>
    </div>
  )
}

function AccordionRow(props : accordionProps) {
    return (
      <Accordion>
        <AccordionSummary className="form-question">{props.question}</AccordionSummary>
        <AccordionDetails>
          <div className="accordion-details">
            <h5 className="details-date">{props.date}</h5>
            <h4 className="details-title">Description: </h4>
            <p className="details-forum">{props.description}</p>
            <div className="created-by">
              <h4 className="details-created-by">By </h4>
              <AccountBadge name={props.author} level={props.user_level}/>
            </div>
            {props.answers.map((e) => <Response author={e.author} body={e.body} date="" user_level={e.user_level} vote={e.vote}/>)}
          </div>
        </AccordionDetails>
      </Accordion>
    )
}

function AccordionBasic() {
  return (
    <AccordionGroup >
      {forum.questions.map((e) => AccordionRow(e))}
    </AccordionGroup>
  );
}

type basicTableProps = {
  exercise_name: string;
  status: string;
  acceptance_rate: string;
  difficulty: string;
}

function TableRow(props: basicTableProps) {
  return <tr>
    <td>{props.exercise_name}</td>
    <td>{props.acceptance_rate}</td>
    <td className={props.difficulty == "hard" ? "basicTablePropsDifficultyHard" : props.difficulty == "medium" ? "basicTablePropsDifficultyMedium" : "basicTablePropsDifficultyEasy"}>{props.difficulty}</td>
    <td><Button className={props.status == "new" ? "basicTablePropsButtonNew" : "basicTablePropsButtonOngoing"} disabled={props.status == "done"}>{props.status === "new" ? "start" : props.status === "ongoing" ? "finish" : props.status}</Button></td>
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
          {json.quests.map((e) => TableRow(e))}
        </tbody>
      </Table>
    </div>
  );
}

function Personal() {
  return (
    <div className="container-personal-quests">
      <BasicTable />
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
              <div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{ '--value': 65, '--fg-color': '#666', 'fontFamily': 'font-family: var(--joy-fontFamily-body, "Inter", var(--joy-fontFamily-fallback, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"))' }}></div>
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
      <Input size="md" placeholder="Search for a question" variant="soft" color="neutral" className="input-form" />
      <AccordionBasic />
      <Button variant="soft" size="lg" className="ask-question">Ask a question</Button>
    </div>
  )
}

type CommuEventCardProps = {
  event_name: string;
  description: string;
  date: string;
  location: string;
  participants_registered: number;
  max_participants: number;
  author: string;
  type: string; 
  logo: string
}

function CommuEventCard({event_name, author, date, description, location, max_participants, participants_registered, type, logo} : CommuEventCardProps) {
  return <Card className={type === "company" ? "concurrence-brasil" : "concurrence"}>
    <div className="image-quest-div">
      <h2 className="card-title">{event_name}</h2>
      <p>{description}</p>
      <h4>{"Where: " + location}</h4>
      <h5>{"Date: " + date.slice(0, 10)}</h5>
      <h5>{"Participant: " + participants_registered.toString() + "/" + max_participants.toString()}</h5>
      {type !== "random" ? <h4>{"Made by: " + author}</h4> : null}
    </div>
  </Card>
}

function Communautary() {
  return (
    <div className="neymar">
      {queteCommu.events.map((e) => 
        <CommuEventCard author={e.author} date={e.date} description={e.description} event_name={e.event_name} location={e.location} max_participants={e.max_participants} participants_registered={e.participants_registered} type={e.type} key={"id_" + e.event_name} logo={e.logo}/>
      )}
    </div>
  )
}

type SearchProps = {
  subject: string;
}

function Search({ subject }: SearchProps) {
  const [selectedMenu, setSelectedMenu] = useState<number>(0)

  if (subject == undefined) {
    subject = " "
  }

  return (
    <>
      <div className="header-subject">
        <Image alt="icon subject" src="/sports.png" width={50} height={50} className="image-subject" />
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
          <Button className={selectedMenu === 2 ? "selected-button-menu" : ""} onClick={() => setSelectedMenu(2)}>Community Quests</Button>
        </ButtonGroup>
      </div>
      <div className="divider-subject-menu-div">
        <div className="divider-subject-menu" />
      </div>
      {selectedMenu === 0 ? <Personal /> : selectedMenu === 1 ? <Forum /> : <Communautary />}
    </>
  )
}

export default function SearchPage() {
  const router = useRouter()

  return (
    <div>
      <AppBar />
      <div className="app-bar-divider" />
      <Search subject={(router.query.name) as string} />
    </div>
  );
}