class PartyPlanner {
	constructor (guestList = []){
		this.guestList = guestList
	}
	addToGuestList(name){
		this.guestList.push(name);
	}
	throwParty(){
		if(!this.guestList.length) return "Gotta add people to the guest list"
		else {
			for(let i = 0; i <this.guestList.length; i++){
				let guest = this.guestList[i];
				return `Welcome to the party ${guest}`
			}
		}
	}
}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}