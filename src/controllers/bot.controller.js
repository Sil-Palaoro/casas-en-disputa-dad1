import chooseMove from "../strategy.js";


export class BotController {
    static async botMove (req, res) {
        try {
            const state = req.body;

            if(!state) {
                res.status(400).json({ message: "La llamada no tiene un body"});
            } 

            let movement = chooseMove(state)

            console.log(movement);


            res.status(200).json(movement);
        } catch (error){
            return res.status(500).json({ message: error.message })
        }

}

static async botPrueba (req, res) {
    res.send('Hello World!');
}

};