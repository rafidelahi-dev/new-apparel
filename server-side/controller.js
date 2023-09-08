const controller = {
  home: (req, res) => {
    res.send('/ is working')
    console.log('working here as well');
  },
  addtocart: async (req, res) => {
    const { buttonData } = req.body
    console.log('Button data received:', buttonData)

    // Perform any necessary server-side actions here
    res.send('Button click received on the server.')
  },
}
module.exports.controller = controller
