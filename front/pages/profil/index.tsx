import React, { useEffect } from 'react';

const YourComponent: React.FC = () => {
  useEffect(() => {
    const squares = document.querySelector('.squares');
    if (squares) {
      for (let i = 1; i < 365; i++) {
        const level = Math.floor(Math.random() * 3);
        squares.insertAdjacentHTML('beforeend', `<li data-level="${level}"></li>`);
      }
    }
  }, []);

  return (
    <>
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
              <div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{ '--value': 33, '--fg-color': '#1017EF' }}></div>
            </div>
          </div>
          <div className="square">
            <div className="center-sphere">
              <div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{ '--value': 98, '--fg-color': '#43BC30' }}></div>
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
        </div>
    </>
  );
}

export default YourComponent;