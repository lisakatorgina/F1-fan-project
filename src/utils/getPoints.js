import results from "@/data/results";
import points from "@/data/points";

export default () => {
    var result = {};
    for (var i = 1; i <= Object.keys(results).length; i++ ) {
        var race = results[i].race;
        var lap = results[i].lap;
        for (var k = 0; k < race.length; k++) {
            var name = race[k];
            var incr = points[k] ? points[k] : 0
            result[name] = result[name] ? result[name] + incr : incr;
            if (name === lap) {
                result[name]++;
            }
        }
    }
    return result;
}
