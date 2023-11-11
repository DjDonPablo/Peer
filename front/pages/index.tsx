import Image from "next/image";
import Input from '@mui/joy/Input';
import { useRouter } from "next/router";

function AppBar() {
  const router = useRouter()

  return (
    <div className="header">
      <ul className="list-header">
        <li>
          <Image className="logo-header" onClick={() => router.push("/")} src="/logo.png" alt="logo" width={32} height={32}/>
        </li>
        <li className="sub-list-element-header">
          <ul className="sub-list-header">
            <li className="sub-list-header-li"><a className="menu__link" href="#">Subject</a></li>
            <li className="sub-list-header-li"><a className="menu__link" href="#">Community</a></li>
            <li className="sub-list-header-li"><a className="menu__link" href="#">About</a></li>
          </ul>
        </li>
        <li>
          <Image src="/user.png" alt="user" width={26} height={26} />
        </li>
      </ul>
    </div>
  )
}

function Container() {
  return (
    <div className="container-div">
      <h1 className="title">What do you want to learn today ?</h1>
      <Input size="lg" placeholder="Search for a subject" variant="soft" color="neutral" className="input" />
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <AppBar />
      <div className="app-bar-divider"/>
      <Container />
    </div>
  );
}
