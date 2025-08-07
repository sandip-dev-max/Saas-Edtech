import { Status } from "@/lib/store/types/type"


export interface IUserData{
    username : string, 
    token : string, 
}

export interface IRegisterData extends IUserData{
  email : string
}

export interface IInitialState{
  user : IUserData, 
  status : Status
}