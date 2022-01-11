import drivers from "@/data/drivers";

export default (value) => {
    var _name = drivers.filter(obj => {
        return obj.id === value;
    });
    if (_name[0]) {
        return _name[0].name;
    }
}
