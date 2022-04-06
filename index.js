// code your solution here
function saturdayFun(activity){
     return activity? `This Saturday, I want to ${activity}!`:"This Saturday, I want to roller-skate!"
}
const mondayWork = function (monActivity){
    return monActivity? `This Monday, I will ${monActivity}.`:"This Monday, I will go to the office."
}
function wrapAdjective(wrap = '*'){
    return function(wrap2 = "a hard worker"){
        let emphatic = `You are ${wrap}${wrap2}${wrap}!`
        return emphatic
    }
}
wrapAdjective()()