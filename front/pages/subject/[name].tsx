import Button from "@mui/joy/Button"
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Accordion, AccordionDetails, AccordionGroup, AccordionSummary, Avatar, ButtonGroup, Card, IconButton, Input } from "@mui/joy";
import Table from '@mui/joy/Table';

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

function AccountBadge() {
  return (
    <div className="quoi">
      <div className="coubeh">
        <Avatar size="sm" className="avatar">
          CC
        </Avatar>
        <h5 className="name">DjDonPablo</h5>
        <h4 className="name name-color">Lvl.14</h4>
      </div>
    </div>
  )
}

function AccordionBasic() {
  const [count, setCount] = useState<number>(6)

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
            <div className="created-by">
              <h4 className="details-created-by">By </h4>
              <AccountBadge/>
            </div>
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
                  <AccountBadge/>
                </div>
                <p className="details-forum">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </AccordionGroup>
  );
}

function BasicTable() {
  return (
    <div className="table-personal-quest"> 
      <Table aria-label="basic table">
        <thead>
          <tr>
            <th style={{ width: '40%' }}>Dessert (100g serving)</th>
            <th>Calories</th>
            <th>Fat&nbsp;(g)</th>
            <th>Carbs&nbsp;(g)</th>
            <th>Protein&nbsp;(g)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Frozen yoghurt</td>
            <td>159</td>
            <td>6</td>
            <td>24</td>
            <td>4</td>
          </tr>
          <tr>
            <td>Ice cream sandwich</td>
            <td>237</td>
            <td>9</td>
            <td>37</td>
            <td>4.3</td>
          </tr>
          <tr>
            <td>Eclair</td>
            <td>262</td>
            <td>16</td>
            <td>24</td>
            <td>6</td>
          </tr>
          <tr>
            <td>Cupcake</td>
            <td>305</td>
            <td>3.7</td>
            <td>67</td>
            <td>4.3</td>
          </tr>
          <tr>
            <td>Gingerbread</td>
            <td>356</td>
            <td>16</td>
            <td>49</td>
            <td>3.9</td>
          </tr>
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
          <Button className={selectedMenu === 2 ? "selected-button-menu" : ""} onClick={() => setSelectedMenu(2)}>Community Quests</Button>
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