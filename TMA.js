function onPageLoad(){
    
}

function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
}

// class TMARunner{
//     characterList = [0];

//     RunThing(){
//         alert( "Handler for .click() called." );
//     }
// }
  
// function foo() {
//     alert('This works!');
// }
 // classes

// function iou(){
//     for (var k of keywords){
//         if(k == searchString.toLowerCase()) return true;
//     }
// }

// class TimeStampDetailArray extends Array {
//     static get [TimeStampDetail]() { return Array; }
// }

class TimeStampDetail {
    constructor(startEp, endEp, value){
        this.startEp = startEp;
        this.endEp = endEp;
        this.value = value;
    }

    IsCurrent(ep){
        return (ep >= this.startEp && ep <= this.endEp);
    }
}

class Person {
    _name = "";
    _location = [TimeStampDetail];

    constructor(n, l, d){
       this._name = n;
       this._location = l;
       this._details = d;
    }

    GetLocation(ep){
        let response = "";
        for(let index in this._location){
            if(this._location[index].IsCurrent(ep)) response += this._location[index].value;
        }
        return response;
    }

    GetDetails = function (ep){
        let response = "";
        for(var index in this._details){
            if(this._details[index].IsCurrent(ep)) response += this._details[index].value + ", ";
        }
        return response;
    }

    WasSearchedFor(searchString){
        for (var k of keywords){
            if(k == searchString.toLowerCase()) return true;
        }
        return false;
    }
}

function GetRelevant(contents, ep){
    let response = "";

    for (var p of contents){
        if(p.IsCurrent(ep)) {
            response += "<tr><td>" + p.value._name + "</td>"
            response += "<td>" + p.value.GetLocation(ep) + "</td>"
            response += "<td>" + p.value.GetDetails(ep) + "</td></tr>"
        }
    }
    return response;
}

// Season 1: 1 - 40
// Season 2: 41 - 80
// Season 3: 81 - 120
// Season 4: 121 - 160
// Season 5: 161 - 200

function GetPeople(ep) {
    // People
    const JonSims1 = new Person("Jonathan Sims", [new TimeStampDetail(1, 100, "working at The Magnus Institute")], [new TimeStampDetail(1, 100, "new head archivist")]);
    const Gertrude1 = new Person("Gertrude Robinson", [new TimeStampDetail(1, 100, "dead")], [new TimeStampDetail(1, 100, "old head archivist")])
    const Sasha1 = new Person("Sasha James", [new TimeStampDetail(1, 100, "working at The Magnus Institute")], [new TimeStampDetail(1, 100, "archivist assistant")])
    const Tim1 = new Person("Timothy Stoker", [new TimeStampDetail(2, 100, "working at The Magnus Institute")], [new TimeStampDetail(2, 100, "archivist assistant")])
    
    const Watts = new Person("Nathan Watts", [new TimeStampDetail(1, 40, "no follow-up")], [new TimeStampDetail(1, 40, "provided statement in ep 1")]) 
    const Baldwin = new Person("Sarah Baldwin", [new TimeStampDetail(1, 40, "missing")], [new TimeStampDetail(1, 40, "a victim in ep 1")]) 
    const Rawlings = new Person("Daniel Rawlings", [new TimeStampDetail(1, 40, "missing")], [new TimeStampDetail(1, 40, "a victim in ep 1")]) 
    const Gillespie = new Person("Joshua Gillespie", [new TimeStampDetail(2, 40, "no follow-up")], [new TimeStampDetail(2, 40, "provided statement in ep 2")]) 
    const Folger = new Person("Graham Folger", [new TimeStampDetail(3, 40, "missing")], [new TimeStampDetail(1, 40, "owner of the ornate table")]) 
    const Patel = new Person("Amy Patel", [new TimeStampDetail(3, 35, "declined follow-up")], [new TimeStampDetail(3, 40, "provided statement in ep 3"), new TimeStampDetail(1, 100, "watched Graham Folger until he was replaced by an unconvincing imposter")]) 


    const VoicedPeopleArray = [
        new TimeStampDetail(1, 10, JonSims1)
    ];
    document.getElementById("voicedPeopleContents").innerHTML = GetRelevant(VoicedPeopleArray, ep);

    const UnvoicedPeopleArray = [
        new TimeStampDetail(1, 200, Gertrude1),
        new TimeStampDetail(1, 40, Sasha1),
        new TimeStampDetail(2, 80, Tim1),
        new TimeStampDetail(1, 40, Watts),
        new TimeStampDetail(1, 40, Baldwin),
        new TimeStampDetail(1, 40, Rawlings),
        new TimeStampDetail(2, 40, Gillespie),
        new TimeStampDetail(3, 40, Folger),
        new TimeStampDetail(3, 40, Patel),
    ];
    document.getElementById("unvoicedPeopleContents").innerHTML = GetRelevant(UnvoicedPeopleArray, ep);

    // Mysteries
    const Archives = new Person("The Magnus Institute", [new TimeStampDetail(1, 100, "active")], [new TimeStampDetail(1, 100, "An old archive building")]);
    const BreekonHope = new Person("Breekon & Hope", [new TimeStampDetail(2, 100, "liquidated")], [new TimeStampDetail(2, 100, "a delivery company in Nottingham")]);
    const webTable = new Person("an ornate wooden table", [new TimeStampDetail(3, 40, "in a London flat")], [new TimeStampDetail(3, 40, "bears an intricate carving on it with snaking lines weaving towards a small hole in the centre")]);

    const MysteryArray = [
        new TimeStampDetail(1, 160, Archives),
        new TimeStampDetail(2, 80, BreekonHope),
        new TimeStampDetail(3, 40, webTable)
    ];
    document.getElementById("mysteriesContents").innerHTML = GetRelevant(MysteryArray, ep);
}