export const INC='INC';
export const DEC='DEC';
export const RESULT='RESULT';

export const increment=()=>{
    return{
        type:INC
    }
}

export const decrement=(value)=>{
    return{
        type:DEC,
        val:value
    }
}
