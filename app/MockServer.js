/*
name: 카테고리 이름
icon: 카테고리 아이콘 url


*/

export default function getMockServer() {
    return {
        getCategories: ()=> {
            let r = []
            r.push({name: "간식", list: ["덴탈껌", "껌", "영양/기능"]})
            r.push({name: "사료", list: ["건식", "습식", "자연식"]})
            r.push({name: "미용용품"})
            r.push({name: "패션용품"})
            return r
        }
    }
}