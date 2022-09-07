export default function buildMakeService(){
    return function makeService({...entity}){
        const { 
            name,
            price
         } = {...entity};

         if(!name) throw new Error ('service must have a name');
         if(!price) throw new Error ('service must have a price');
         
        const service = Object.freeze({...entity});
        return service;
    };
}