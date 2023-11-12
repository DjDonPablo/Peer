import Image from "next/image";
import { useRouter } from "next/router";
import { Autocomplete } from "@mui/joy";

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
            <li className="sub-list-header-li"><a className="menu__link" href="#">Subjects</a></li>
            <li className="sub-list-header-li"><a className="menu__link" href="#">Community</a></li>
            <li className="sub-list-header-li"><a className="menu__link" href="#">About</a></li>
          </ul>
        </li>
        <li>
          <Image src="/user.png" alt="user" onClick={() => router.push("/profile")} width={26} height={26} className="logo-account"/>
        </li>
      </ul>
    </div>
  )
}

function Container() {
  const router = useRouter()
  return (
    <div className="container-div">
      <h1 className="title">What do you want to learn today ?</h1>
      <Autocomplete onChange={(e, v) => router.push("/subject/" + v)} size="lg" placeholder="Search for a subject" variant="soft" color="neutral" className="input" freeSolo={true} options={["Technology", "Science", "Health & Fitness", "Arts & Entertainment", "Gaming", "Books & Literature", "Travel", "Politics & Current Events", "Relationships & Advice", "Cooking & Food", "Sports", "Fashion", "DIY & Crafts", "Parenting", "Pets", "Cars & Vehicles", "Photography", "Career & Education", "Personal Finance", "Meditation & Mindfulness"]} />
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <AppBar />
      <div className="app-bar-divider"/>
      <Image alt="background" src="/background.png" width={1600} height={690} className="background"/>
      <Container />
    </div>
  );
}
