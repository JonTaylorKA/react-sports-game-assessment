import React from 'react'
import Team from '../team/Team'

function Game(props) {
    return (
        <div className="container">
            <h1>Welcome to {props.venue}!</h1>
            <div className="arena">
                <div className="team">
                  Home Team
                    <Team
                        name={props.hometeam.name}
                        logo={props.hometeam.logo}
                    />
                </div>
                <div>
                    VS.
                </div>
                <div className="team">
                  Visiting Team
                    <Team
                        name={props.visitors.name}
                        logo={props.visitors.logo}
                    />
                </div>
            </div>
        </div>
    )
}
export default Game