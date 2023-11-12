import Image from "next/image";
import { useRouter } from "next/router";
import { Autocomplete } from "@mui/joy";

function AppBar() {
  const router = useRouter()
  return (
    <div className="header">
      <ul className="list-header">
        <li className="sub-list-element-header">
          <Image className="logo-header" onClick={() => router.push("/connected")} src="/logo.png" alt="logo" width={32} height={32}/>
          <ul className="sub-list-header sub-list-header-v2">
            <li className="sub-list-header-li"><a className="menu__link" href="#">Subject</a></li>
            <li className="sub-list-header-li"><a className="menu__link" href="#">Community</a></li>
            <li className="sub-list-header-li"><a className="menu__link" href="#">About</a></li>
          </ul>
        </li>
        <Autocomplete onChange={(e, v) => router.push("/subject/" + v)} size="sm" placeholder="Search for a subject" variant="soft" color="primary" className="input-app-bar" freeSolo={true} options={["Technology", "Science", "Health & Fitness", "Arts & Entertainment", "Gaming", "Books & Literature", "Travel", "Politics & Current Events", "Relationships & Advice", "Cooking & Food", "Sports", "Fashion", "DIY & Crafts", "Parenting", "Pets", "Cars & Vehicles", "Photography", "Career & Education", "Personal Finance", "Meditation & Mindfulness"]} />
        <li>
          <Image src="/user.png" alt="user" onClick={() => router.push("/profile")} width={26} height={26} className="logo-account"/>
        </li>
      </ul>
    </div>
  )
}

export default function Connected() {
    return (
        <div>
            <AppBar/>
            <div className="app-bar-divider" />
        </div>
    )
}