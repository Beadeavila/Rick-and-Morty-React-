import {rest} from 'msw';





export const handlers = [
        rest.get("https://rickandmortyapi.com/api/character"),(_req,res,ctx)=>{
                return res(ctx.json({
                        "results":[
                        {"id": 1,
                        "name": "Rick Sanchez",
                        "status": "Alive",
                        "species": "Human",
                        "gender": "Male"
                        }]
                }))
        }
];