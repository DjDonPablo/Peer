import Image from "next/image";
import Input from '@mui/joy/Input';

function AppBar() {
  return (
    <div className="header">
      <ul className="list-header">
        <li>
          <Image src="/logo.png" alt="logo" width={46} height={46} />
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
    <>
      <AppBar />
      <Container />
    </>
  );
}
