import teams from "@/data/teams";

export default (value) => {
    var _team = teams.filter(obj => {
        return obj.drivers.includes(value);
    });
    if (_team.length > 0 && _team[0]) {
        return _team[0].logo;
    }
}
