module.exports = {
    allHouses: (req, res) => {
        let db = req.app.get('db')
        db.get_all()
            .then(house => {
                res.status(200).send(house)
            })
            .catch(err => {
                res.status(500).send(err)
            })
    },
    addHouse: async (req, res) => {
        const { name, address, city, state, zipcode } = req.body
        let db = req.app.get('db')
        let results = await db.add_house([name, address, city, state, zipcode])
        res.status(200).send(results)
    }
}
