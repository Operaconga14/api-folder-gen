export const javascript =
        `/**This is Javacript Server File Example*/
        const express = require('express');

        const app = express();
        const PORT = 3000;

        // Middleware configuration here.

        app.get('/', (req, res) => {
        res.status(200).json({message: 'My Api'})
        })


        app.listen(PORT, () => {
        // change the 3000 to your desired Port number or configuration
        console.log('listening to 3000 url: http://localhost:3000')
        })
        `;

export const typescript =
        `/**This is Typescript Server File Example*/
        import express, {Request, Response} from 'express';

        const app = express();
        const PORT = 3000;

        // Middleware configuration here.


        app.get('/', (req: Request, res: Response) => {
                res.status(200).json({ message: 'My Api' });
        });



         app.listen(PORT, () => {
        // change the 3000 to your desired Port number or configuration
        console.log('listening to 3000 url: http://localhost:3000')
        })
        `;
