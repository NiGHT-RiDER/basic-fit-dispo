import clubs from '../data/clubs.json'
import timeslots from '../data/timeslots.json';

let a = new Map()
let elts = [];
clubs.filter(x => x.country === "Belgie").map(club => a.set(club.id, club))
a.forEach((val, key) => elts.push(ClubRow(val)))

let timeslotsToDisplay = []
timeslotsToDisplay = timeslots.map(clubTimeslots => { return clubTimeslots.data.map(timeslot => { return { ...timeslot, clubId: clubTimeslots.clubId } }) })

timeslotsToDisplay = [].concat(...timeslotsToDisplay).filter(x=> x.openForReservation !== false);
function ClubRow(club) {

    return <div class="row">
        <div class="cell" data-title="Name">
            {club.name}
        </div>
        <div class="cell" data-title="Country">
            {club.country}
        </div>
    </div>
}

function TimeslotRow(timeslot) {
    let timeslotOfClub =a.get(timeslot.clubId) 
    if (timeslotOfClub) {
        return <div class="row">
            <div class="cell" data-title="clubname">
                {timeslot.startDateTime}
            </div>
            <div class="cell" data-title="Open for reservation">
            {timeslot.country}
            </div>
            <div class="cell" data-title="StartDate">
                {timeslotOfClub.name}
            </div>

        </div>
    }

}
function tables() {

    return <div style={{ display: "flex" }}>
        <div class="wrapper">

            <div class="table">

                <div class="row header">
                    <div class="cell">
                        Name
        </div>
                    <div class="cell">
                        Country
        </div>


                </div>
                {elts}
            </div>

        </div>
        <div class="wrapper">

            <div class="table">

                <div class="row header">
                    <div class="cell">
                        StartDate
        </div>
                    <div class="cell">
                        Open for reservation
        </div>
                    <div class="cell">
                        clubname
        </div>

                </div>
                {timeslotsToDisplay.map(TimeslotRow)}
            </div>

        </div>
    </div>
}

function clubName(name) {
    return <p>{name}</p>
}

function About() {
    return <div>WIP</div>
}
export default tables
