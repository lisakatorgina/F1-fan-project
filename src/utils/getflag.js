import country from "@/data/countries";

export default (value) => {
    var _country = country.filter(obj => {
        return obj.name === value;
    });
    if (_country[0]) {
        return _country[0].flag;
    }
}
