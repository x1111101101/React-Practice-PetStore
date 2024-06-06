export default function newMockServer() {
    return {
        getCategories: ()=> {
            let r = []
            r.push({name: "간식"})
            r.push({name: "사료"})
            r.push({name: "미용용품"})
            r.push({name: "패션용품"})
            return r
        }
    }
}