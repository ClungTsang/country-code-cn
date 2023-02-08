import countryFull from "country-data";
import countryCn from './country-cn.js'

const continents = countryFull.continents
const initCountry = () => {
  let list = {}
  for (const key in continents) {
    if (Object.hasOwnProperty.call(continents, key)) {
      const continentName = continents[key].name; // 洲名称
      const countryCodeList = continents[key].countries; // 代码列表
      list[continentName] = []
      countryCodeList.forEach(code => {
        const countryData = countryCn.find(target => {
          return target.ab == code
        })
        if (countryData) {
          list[continentName].push({
            name: continentName,
            ...countryData,
          })
        }
      })
    }
  }
  return list
}
export { initCountry }