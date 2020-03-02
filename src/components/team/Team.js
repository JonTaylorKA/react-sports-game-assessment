import React, { Component } from 'react'
const soundsPath = process.env.PUBLIC_URL + '/assets/sounds/'

class Team extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shotsTaken: 0,
            score: 0,
            shotPercent: 0,
            name: props.name,
            logo: props.logo
          }
          this.shot = new Audio(`${soundsPath}bounce.mp3`)
          this.cheer = new Audio(`${soundsPath}applause4.mp3`)
    }

    handleShot = event => {
        let newShots = this.state.shotsTaken + 1
        let newScore = this.state.score
        if (Math.round(Math.random()) === 1) {
            newScore += 1
            this.cheer.play()
        } else {
            this.shot.play()
        }
        let newPercent = 0
        if (newScore > 0) {
            newPercent = Math.round((newScore / newShots) * 100)
        }
        this.setState((state, props) => ({
            shotsTaken: newShots,
            score: newScore,
            shotPercent: newPercent
        }))
    }

    render() {
        return (
            <div>
                <h2>{this.state.name}</h2>
                <img src={this.state.logo} alt='Team Logo'/>
                <p>
                    Shots Taken:
                    <span id="shots"> {this.state.shotsTaken} </span>
                </p>
                <p>
                    Score:<span id="score"> {this.state.score} </span>
                </p>
                {this.state.shotsTaken > 0 && (
                    <p>
                        Shot Percentage:
                        <span id="shotpercent">
                            {" "}
                            {this.state.shotPercent}{" "}
                        </span>{" "}
                        %
                    </p>
                )}
                <div>
                    <button onClick={this.handleShot} id="shoot">
                        Shoot!
                    </button>
                </div>
            </div>
        )
    }
}
export default Team