import teams from "@/data/teams";
import teams2022 from "@/data/2022/teams";
import teams2023 from "@/data/2023/teams";

const teamDataByYear = {
    '2022': teams2022,
    '2023': teams2023
};

export default (value, year) => {
    const _team_data = teamDataByYear[year] || teams;

    const foundTeam = _team_data.find(obj => obj.drivers.includes(value));

    return foundTeam ? foundTeam.logo : undefined;
}
