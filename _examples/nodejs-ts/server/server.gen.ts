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


  
class WebRPCError extends Error {
    statusCode?: number

    constructor(msg: string = "error", statusCode?: number) {
        super("webrpc eror: " + msg);

        this.statusCode = statusCode
    }
}

import express from 'express'
        
        

        type ExampleServiceService = {
            
                Ping: (args: PingArgs) => PingReturn | Promise<PingReturn>
            
                Status: (args: StatusArgs) => StatusReturn | Promise<StatusReturn>
            
                GetUser: (args: GetUserArgs) => GetUserReturn | Promise<GetUserReturn>
            
        }

        export const createExampleServiceApp = (serviceImplementation: ExampleServiceService) => {
            const app = express();

            app.post('/*', async (req, res) => {
                const requestPath = req.baseUrl + req.path

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
                    

                    case "/rpc/ExampleService/Status": {                        
                        try {
                            

                            const response = await serviceImplementation["Status"](req.body);

                            
                                if (!response["status"]) {
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
                    

                    case "/rpc/ExampleService/GetUser": {                        
                        try {
                            
                                if (!req.body["header"] || typeof req.body["header"] !== "object") {
                                    throw new WebRPCError("Invalid arg: header, got type " + typeof req.body["header"] + " expected " + "object", 400);
                                }
                            
                                if (!req.body["userID"] || typeof req.body["userID"] !== "number") {
                                    throw new WebRPCError("Invalid arg: userID, got type " + typeof req.body["userID"] + " expected " + "number", 400);
                                }
                            

                            const response = await serviceImplementation["GetUser"](req.body);

                            
                                if (!response["code"]) {
                                    throw new WebRPCError("internal", 500);
                                }
                            
                                if (!response["user"]) {
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
                    

                    default: {
                        res.status(404).end()
                    }
                }
            });

            return app;
        };
