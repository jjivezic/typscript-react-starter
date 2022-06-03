export type RegisterUser = {
    name: string,
    username: string,
}

export type LoginUser = {
    name: string,
    username: string,
}


export type User = {
    name: string,
    username: string,
    phone:string,
    _id:string
}

export type errorResponse = {
    message: string,

  }