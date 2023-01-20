//import results from "@/data/2022/results";
import points from "@/data/points";

export default (results) => {
    let result = {};
    for (let i = 1; i <= Object.keys(results).length; i++ ) {
        let race = results[i].race;
        let lap = results[i].lap;
        let lapNotScored = results[i].lapNotScored;
        let scores_type = results[i].scores;
        let sprint = results[i].sprint;
        if (race) {
            race.map((name, index) => {
                let incr = points[scores_type][index] ? points[scores_type][index] : 0;
                result[name] = result[name] ? result[name] + incr : incr;
                if (name === lap && !lapNotScored) {
                    result[name]++;
                }
            })
        }
        if (sprint) {
            sprint.map((name, index) => {
                let incr = points['sprint'][index] ? points['sprint'][index] : 0;
                result[name] = result[name] ? result[name] + incr : incr;
            })
        }
    }
    return result;
}
