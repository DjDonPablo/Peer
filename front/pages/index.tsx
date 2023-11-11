import Image from "next/image";

function AppBar() {
  return (
    <div className="header">
      <ul className="list-header">
        <li>
          <Image className="logo-header" src="/logo.png" alt="logo" width={50} height={50} />
        </li>
        <li className="sub-list-element-header">
          <ul className="sub-list-header">
            <li><a href="">Sujet</a></li>
            <li><a href="">Communauté</a></li>
            <li><a href="">A propos</a></li>
          </ul>
        </li>
        <li>
          <p>caca</p>
        </li>
      </ul>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <AppBar />
    </>
  );
}