/* tslint:disable */
// example v0.0.1
// --
// This file has been generated by https://github.com/webrpc/webrpc using gen/typescript
// Do not edit by hand. Update your webrpc schema and re-generate.


export enum Kind {
  USER = 'USER',
  ADMIN = 'ADMIN'
}

export interface Empty {
}

export interface User {
  id: number
  USERNAME: string
  role: string
  created_at?: string
}

export interface ComplexType {
  meta: {[key: string]: any}
  metaNestedExample: {[key: string]: {[key: string]: number}}
  namesList: Array<string>
  numsList: Array<number>
  doubleArray: Array<Array<string>>
  listOfMaps: Array<{[key: string]: number}>
  listOfUsers: Array<User>
  mapOfUsers: {[key: string]: User}
  user: User
}

export interface ExampleService {
  ping(headers: object): Promise<PingReturn>
  status(headers: object): Promise<StatusReturn>
  getUser(args: GetUserArgs, headers: object): Promise<GetUserReturn>
}

export interface PingArgs {
}

export interface PingReturn {  
}
export interface StatusArgs {
}

export interface StatusReturn {
  status: boolean  
}
export interface GetUserArgs {
  header: {[key: string]: string}
  userID: number
}

export interface GetUserReturn {
  code: number
  user: User  
}


  
export class WebRPCError extends Error {
    statusCode?: number

    constructor(msg: string = "error", statusCode?: number) {
        super("webrpc eror: " + msg);

        this.statusCode = statusCode
    }
}

import express from 'express'
        
        

        export type ExampleServiceService = {
            
                Ping: (args: PingArgs) => PingReturn | Promise<PingReturn>
            
                Status: (args: StatusArgs) => StatusReturn | Promise<StatusReturn>
            
                GetUser: (args: GetUserArgs) => GetUserReturn | Promise<GetUserReturn>
            
        }

        export const createExampleServiceApp = (serviceImplementation: ExampleServiceService) => {
            const app = express();

            app.use(express.json())

            app.post('/*', async (req, res) => {
                const requestPath = req.baseUrl + req.path

                if (!req.body) {
                    res.status(400).send("webrpc error: missing body");

                    return
                }

                switch(requestPath) {
                    

                    case "/rpc/ExampleService/Ping": {                        
                        try {
                            

                            const response = await serviceImplementation["Ping"](req.body);

                            

                            res.status(200).json(response);
                        } catch (err) {
                            if (err instanceof WebRPCError) {
                                const statusCode = err.statusCode || 400
                                const message = err.message

                                res.status(statusCode).json({
                                    msg: message,
                                    status: statusCode,
                                    code: ""
                                });

                                return
                            }

                            if (err.message) {
                                res.status(400).send(err.message);

                                return;
                            }

                            res.status(400).end();
                        }
                    }

                    return;
                    

                    case "/rpc/ExampleService/Status": {                        
                        try {
                            

                            const response = await serviceImplementation["Status"](req.body);

                            
                                if (!("status" in response)) {
                                    throw new WebRPCError("internal", 500);
                                }
                            

                            res.status(200).json(response);
                        } catch (err) {
                            if (err instanceof WebRPCError) {
                                const statusCode = err.statusCode || 400
                                const message = err.message

                                res.status(statusCode).json({
                                    msg: message,
                                    status: statusCode,
                                    code: ""
                                });

                                return
                            }

                            if (err.message) {
                                res.status(400).send(err.message);

                                return;
                            }

                            res.status(400).end();
                        }
                    }

                    return;
                    

                    case "/rpc/ExampleService/GetUser": {                        
                        try {
                            
                                    if (!("header" in req.body)) {
                                        throw new WebRPCError("Missing Argument `header`")
                                    }
                                if ("header" in req.body && !validateType(req.body["header"], "object")) {
                                    throw new WebRPCError("Invalid arg: header")
                                }
                            
                                    if (!("userID" in req.body)) {
                                        throw new WebRPCError("Missing Argument `userID`")
                                    }
                                if ("userID" in req.body && !validateType(req.body["userID"], "number")) {
                                    throw new WebRPCError("Invalid arg: userID")
                                }
                            

                            const response = await serviceImplementation["GetUser"](req.body);

                            
                                if (!("code" in response)) {
                                    throw new WebRPCError("internal", 500);
                                }
                            
                                if (!("user" in response)) {
                                    throw new WebRPCError("internal", 500);
                                }
                            

                            res.status(200).json(response);
                        } catch (err) {
                            if (err instanceof WebRPCError) {
                                const statusCode = err.statusCode || 400
                                const message = err.message

                                res.status(statusCode).json({
                                    msg: message,
                                    status: statusCode,
                                    code: ""
                                });

                                return
                            }

                            if (err.message) {
                                res.status(400).send(err.message);

                                return;
                            }

                            res.status(400).end();
                        }
                    }

                    return;
                    

                    default: {
                        res.status(404).end()
                    }
                }
            });

            return app;
        };

  

const JS_TYPES = [
    "bigint",
    "boolean",
    "function",
    "number",
    "object",
    "string",
    "symbol",
    "undefined"
]


    const validateKind = (value: any) => {
        
            
                if (!("USER" in value) || !validateType(value["USER"], "number")) {
                    return false
                }
            
        
            
                if (!("ADMIN" in value) || !validateType(value["ADMIN"], "number")) {
                    return false
                }
            
        

        return true
    }

    const validateEmpty = (value: any) => {
        

        return true
    }

    const validateUser = (value: any) => {
        
            
                if (!("id" in value) || !validateType(value["id"], "number")) {
                    return false
                }
            
        
            
                if (!("USERNAME" in value) || !validateType(value["USERNAME"], "string")) {
                    return false
                }
            
        
            
                if (!("role" in value) || !validateType(value["role"], "string")) {
                    return false
                }
            
        
            
                if ("created_at" in value && !validateType(value["created_at"], "string")) {
                    return false
                }
            
        

        return true
    }

    const validateComplexType = (value: any) => {
        
            
                if (!("meta" in value) || !validateType(value["meta"], "object")) {
                    return false
                }
            
        
            
                if (!("metaNestedExample" in value) || !validateType(value["metaNestedExample"], "object")) {
                    return false
                }
            
        
            
                if (!("namesList" in value) || !validateType(value["namesList"], "string[]")) {
                    return false
                }
            
        
            
                if (!("numsList" in value) || !validateType(value["numsList"], "number[]")) {
                    return false
                }
            
        
            
                if (!("doubleArray" in value) || !validateType(value["doubleArray"], "Array<string>[]")) {
                    return false
                }
            
        
            
                if (!("listOfMaps" in value) || !validateType(value["listOfMaps"], "{[key: string]: number}[]")) {
                    return false
                }
            
        
            
                if (!("listOfUsers" in value) || !validateType(value["listOfUsers"], "User[]")) {
                    return false
                }
            
        
            
                if (!("mapOfUsers" in value) || !validateType(value["mapOfUsers"], "object")) {
                    return false
                }
            
        
            
                if (!("user" in value) || !validateType(value["user"], "User")) {
                    return false
                }
            
        

        return true
    }


const TYPE_VALIDATORS: { [type: string]: (value: any) => boolean } = {
    
        Kind: validateKind,
    
        Empty: validateEmpty,
    
        User: validateUser,
    
        ComplexType: validateComplexType,
    
}

const validateType = (value: any, type: string) => {
    if (JS_TYPES.indexOf(type) > -1) {
        return typeof value === type;
    }

    const validator = TYPE_VALIDATORS[type];

    if (!validator) {
        return false;
    }

    return validator(value);
}
