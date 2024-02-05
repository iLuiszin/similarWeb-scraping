const WebSite = require('../models/WebSite')
const returnUrls = require('../helpers/returnUrls')
const formatKeys = require('../helpers/formatKeys')
const axios = require('axios')

module.exports = class ScrapeController {
  static async getInfo(req, res) {
    // #swagger.tags = ['Scrape SimilarWeb']
    try {
      let { url } = req.body
      const { id } = req.params

      if (id) {
        const webSite = await WebSite.findById(id)

        if (!webSite) {
          return res.status(404).json({ message: 'Site não encontrado.' })
        }

        return res.status(200).json(webSite)
      }

      if (!url || !url.includes('similarweb.com')) {
        return res
          .status(400)
          .json({ message: 'A URL deve ser do site similarweb.com.' })
      }

      if (url.includes('https://')) {
        url = url.replace('https://', '')
      }

      const match = url.match(/key=([^&]+)/)
      const domain = match ? match[1] : url.split('/')[3]

      const webSite = await WebSite.findOne({ name: domain })

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
      await WebSite.deleteMany()
      let { url } = req.body

      if (!url || !url.includes('similarweb.com')) {
        return res
          .status(400)
          .json({ message: 'A URL deve ser do site similarweb.com.' })
      }

      if (url.includes('https://')) {
        url = url.replace('https://', '')
      }

      const match = url.match(/key=([^&]+)/)
      const domain = match ? match[1] : url.split('/')[3]

      const webSiteExists = await WebSite.findOne({ name: domain })

      if (webSiteExists) {
        return res.status(200).json({
          message: 'Este site já se encontra no banco de dados.',
          id: webSiteExists._id,
        })
      }

      const urls = returnUrls(domain)
      let fullData = {}

      for (const url of urls) {
        const metric = url.split('/')[5]
        const { data } = await axios.get(url, {
          headers: {
            'User-Agent': process.env.USER_AGENT,
            Cookie: process.env.COOKIE,
          },
        })

        let savedData = data.Data[domain]

        if (!savedData) {
          if (data.Data.length === 1) {
            savedData = data.Data[0]
          } else {
            savedData = []
            for (const item in data.Data) {
              savedData.push(data.Data[item])
            }
          }
        }

        fullData[metric] = { ...savedData, ...fullData[metric] }
      }

      fullData = formatKeys(fullData)
      fullData.name = domain
      fullData.url = `https://similarweb.com/website/${domain}/`

      const webSite = new WebSite(fullData)
      const newWebSite = await webSite.save()

      return res.status(201).json({
        message: 'Informações salvas com sucesso.',
        data: fullData,
        id: newWebSite._id,
      })
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }
}
