export const API_KEY='AIzaSyBaQ61go639FWu9JGj0sh51JsJRsp18fjI'

export const value_converter=(value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M"
    }else if(value>=1000){
        return Math.floor(value/1000)+"K"
    }
    else{
        return value
    }
}