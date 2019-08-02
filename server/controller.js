module.exports = {
    allHouses: (req, res) => {
        let db = req.app.get('db')
        db.get_all()
            .then(house => {
                res.status(200).send(house)
            })
    }
}
