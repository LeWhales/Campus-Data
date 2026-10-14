// Analyze a collection of campus event records and produce a filtered, sorted, summarized report.
//    Requirements

//    Use at least twelve records with category, attendance, capacity, and status fields.
//    Create separate functions using filter, map, find, some/every, and reduce.
//    Do not mutate the supplied source array.
//    Handle empty results and division by zero explicitly.
//    Include a short complexity note comparing one linear pass with one nested operation.

//Minimum test set

//    no matching events
//    one matching event
//    capacity zero
//    duplicate categories
//

// arrays i plan on using
let PickedCategory = "sports"

const events = [
    { category: "sports", attendance: 5, capacity: 15, status_fields: "available" },
    { category: "sports", attendance: 25, capacity: 50, status_fields: "available" },
    { category: "workshop", attendance: 15, capacity: 15, status_fields: "unavailable" },
    { category: "Conference", attendance: 15, capacity: 15, status_fields: "unavailable" },
    { category: "workship", attendance: 13, capacity: 30, status_fields: "available" },
    { category: "sports", attendance: 50, capacity: 50, status_fields: "umavailable" },
    { category: "workshop", attendance: 15, capacity: 15, status_fields: "unavailable" },
    { category: "party", attendance: 29, capacity: 30, status_fields: "available" },
    { category: "party", attendance: 5, capacity: 15, status_fields: "available" },
    { category: "sports", attendance: 37, capacity: 50, status_fields: "available" },
    { category: "sports", attendance: 15, capacity: 15, status_fields: "unavailable" },
    { category: "Conference", attendance: 15, capacity: 20, status_fields: "available" },
]
// functions, the organs

function filterEvent(CheckEvents) {
    let EventMatch = CheckEvents.filter(checkevent);
    return EventMatch;
}


function checkevent(event) {
    console.log(event.category)
    return event.category === PickedCategory;
}

function Mapevent(eventlist) {
    let reports = eventlist.filter(MakeReports);
    return reports;
}
function MakeReports(event) {
    let report = "category" + event.category + "\n"
    report += "attendance" + event.attendance + "\n";
    report += "capacity" + event.capacity + "\n";
    report += "status" + event.status_fields + "\n";
}

function addAttendance(total, event) {
    return total + event.attendance;
}
function TotalAttending(attendinglist) {
    let attending = attendinglist.reduce(addAttendance, 0)
    return attending
}

function CapacityCheck(Capacity) {
    let = CheckCapacity = Capacity.some(ConfirmCapacity, 0)
}
function ConfirmCapacity(Capacity) {
    if (CapacityCheck = Capacity)
        return console.log("Sorry no vaccancy");
}




let MatchingEvents = filterEvent(events);
let MyReport = Mapevent(MatchingEvents);
let attendance = TotalAttending(MatchingEvents);
let capacity = CapacityCheck(MatchingEvents);

console.log("Matching Events")
console.log("-----------")
for (let i = 0; i < MatchingEvents.length; i++) {
    console.log("Category: ", MatchingEvents[i].category)
    console.log("Attending: ", MatchingEvents[i].attendance)
    console.log("Capacity: ", MatchingEvents[i].capacity)
    console.log("Status: ", MatchingEvents[i].status_fields)

}

for (let i = 0; i < MyReport.length; i++) { console.log(MyReport[i]) };
if (!PickedCategory) { console.log("please type or select an option") }

console.log("Total attending", attendance)
