import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import Image from "next/image";
import { Input } from '@mui/joy';

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

export default function Profile() {
  useEffect(() => {
    const squares = document.querySelector('.squares');
    if (squares) {
      for (let i = 1; i < 322; i++) {
        const level = Math.floor(Math.random() * 3);
        squares.insertAdjacentHTML('beforeend', `<li data-level="${level}"></li>`);
      }
    }
  }, []);

  return (
    <>
      <AppBar/>
      <div className="app-bar-divider" />
      <div className="all-container">
        <div className="profile-container">
          <div className="profile-square">
            <div className="picture-name">
              <img className="profile-picture-square" alt="default picture" src="/default.png"/>
              <text className="text-profile">Lewick</text>
            </div>
            <div className="edit-edit">
              <div className="edit-profile">
                <text className="text-edit-profile">Edit Profile</text>
              </div>
              <div className="edit-line"></div>
            </div>
            <img className="agougaga" alt="okok" src="/statsss.png"/>
          </div>
        </div>
        <div className="container">
          <div className="progress-container">
            <div className="square">
              <div>
                <div className="center-sphere">
                  <div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{ '--value': 65, '--fg-color': '#EF103D' }}></div>
                </div>
                <div className="center-text">
                  <div className="above-line">Easy</div>
                  <div className="line green-background" style={{ width: '50%' }}></div>
                  <div className="above-line">Medium</div>
                  <div className="line orange-background" style={{ width: '80%' }}></div>
                  <div className="above-line">Hard</div>
                  <div className="line red-background" style={{ width: '25%' }}></div>
                </div>
              </div>
            </div>
            <div className="square">
              <div className="center-sphere">
                <div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{ '--value': 27, '--fg-color': '#1017EF' }}></div>
              </div>
              <div className="center-text">
                  <div className="above-line">Easy</div>
                  <div className="line green-background" style={{ width: '5%' }}></div>
                  <div className="above-line">Medium</div>
                  <div className="line orange-background" style={{ width: '20%' }}></div>
                  <div className="above-line">Hard</div>
                  <div className="line red-background" style={{ width: '39%' }}></div>
                </div>
            </div>
            <div className="square">
              <div className="center-sphere">
                <div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{ '--value': 82, '--fg-color': '#43BC30' }}></div>
              </div>
              <div className="center-text">
                  <div className="above-line">Easy</div>
                  <div className="line green-background" style={{ width: '74%' }}></div>
                  <div className="above-line">Medium</div>
                  <div className="line orange-background" style={{ width: '91%' }}></div>
                  <div className="above-line">Hard</div>
                  <div className="line red-background" style={{ width: '62%' }}></div>
                </div>
            </div>
          </div>

          <div className="center-graph">
            <div className="graph">
              <ul className="months">
                <li>Jan</li>
                <li>Feb</li>
                <li>Mar</li>
                <li>Apr</li>
                <li>May</li>
                <li>Jun</li>
                <li>Jul</li>
                <li>Aug</li>
                <li>Sep</li>
                <li>Oct</li>
                <li>Nov</li>
                <li>Dec</li>
              </ul>
              <ul className="days">
                <li>Sun</li>
                <li>Mon</li>
                <li>Tue</li>
                <li>Wed</li>
                <li>Thu</li>
                <li>Fri</li>
                <li>Sat</li>
              </ul>
              <ul className="squares"></ul>
            </div>
          </div>

          <div className="streak-container">
            <div className="streak-stats">
              <text className="total-streak">Total Contribution&nbsp;=&nbsp;&nbsp;</text>
              <text className="total-streak-nb">1,215</text>
              <text className="avg-streak">|&nbsp;&nbsp;&nbsp;Avg Day&nbsp;=&nbsp;&nbsp;</text>
              <text className="avg-streak-nb">3.49&nbsp;</text>
              <text className="avg-unit">/ day</text>
              <text className="longest-streak">|&nbsp;&nbsp;&nbsp;Longest Streak&nbsp;=&nbsp;&nbsp;</text>
              <text className="longest-streak-nb">34 days</text>
              <text className="current-streak">|&nbsp;&nbsp;&nbsp;Current Streak&nbsp;=&nbsp;&nbsp;</text>
              <text className="current-streak-nb">19 days</text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}