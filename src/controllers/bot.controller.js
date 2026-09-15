import chooseMove from "../strategy.js";


export class BotController {
    static async botMove (req, res) {
        try {
            const {state, semilla} = req.body;


            let movement = chooseMove(state, semilla)

            res.status(200).json(movement);
        } catch (error){
            return res.status(500).json({ message: error.message })
        }

}

static async botPrueba (req, res) {
    res.send('Hello World!');
}

};