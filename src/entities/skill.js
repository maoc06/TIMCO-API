export default function buildMakeSKill(){
    return function makeSkill({...entity}){
        const {name}={...entity};

        if(!name) throw new Error('skill must have a name');

        const skill = Object.freeze({...entity});
        return skill;
    };
        
}