import db from '../db/models/index'

class HomeController {
    async index(req, res) {
        try {
            const rawUsers = await db.User.findAll();
            const users = rawUsers.map(user => user.dataValues)
            if (users) {
                console.log(users);
                return res.status(200).render('homepage', { data: users })
            }
            return res.status(400).json('Not found the data');
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}
export default HomeController;