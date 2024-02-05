const {
  extractDomain,
  getWebSiteByDomain,
  fetchDataForDomain,
  saveWebSiteToDatabase,
  isValidUrl,
  getWebSiteById,
} = require('../helpers/utilFunctions')

module.exports = class ScrapeController {
  static async getInfo(req, res) {
    // #swagger.tags = ['Scrape SimilarWeb']
    try {
      const { url } = req.body
      const { id } = req.params

      if (id) {
        return await getWebSiteById(res, id)
      }

      if (!isValidUrl(url)) {
        return res
          .status(400)
          .json({ message: 'A URL deve ser do site similarweb.com.' })
      }

      const domain = extractDomain(url)
      const webSite = await getWebSiteByDomain(domain)

      if (!webSite) {
        return res.status(404).json({ message: 'Site não encontrado.' })
      }

      res.status(200).json(webSite)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  static async saveInfo(req, res) {
    // #swagger.tags = ['Scrape SimilarWeb']
    try {
      const { url } = req.body

      if (!isValidUrl(url)) {
        return res
          .status(400)
          .json({ message: 'A URL deve ser do site similarweb.com.' })
      }

      const domain = extractDomain(url)
      const webSite = await getWebSiteByDomain(domain)

      if (webSite) {
        return res
          .status(200)
          .json({ message: 'Este site já se encontra no banco de dados.' })
      }

      const fullData = await fetchDataForDomain(domain)

      const newWebSite = await saveWebSiteToDatabase(fullData)

      return res.status(201).json({
        message: 'Informações salvas com sucesso.',
        id: newWebSite._id,
      })
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }
}
