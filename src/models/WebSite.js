const mongoose = require('mongoose')
const { Schema } = mongoose

const WebSite = mongoose.model(
  'WebSite',
  new Schema(
    {
      name: String,
      url: String,
      engagementVisits: {
        domain: String,
        favicon: String,
        totalVisits: Number,
        change: Number,
        shareOfVisits: Number,
        trend: [Number],
      },
      webRanks: {
        globalRank: {
          value: Number,
        },
        countryRank: {
          value: Number,
        },
        categoryRank: {
          value: Number,
        },
        category: String,
        country: Number,
      },
      engagementDesktopVsMobileVisits: {
        desktop: Number,
        mobileWeb: Number,
      },
      engagementOverview: {
        bounceRate: Number,
        source: String,
        domain: String,
        avgMonthVisits: Number,
        avgVisitDuration: Number,
        pagesPerVisit: Number,
        totalPagesViews: Number,
        favicon: String,
      },
      geography: { type: Schema.Types.Mixed },
      trafficSourcesOverview: {
        mail: Number,
        social: Number,
        paidReferrals: Number,
        paidSearch: Number,
        organicSearch: Number,
        referrals: Number,
        direct: Number,
      },
      searchBrandedKeywordsWorldWide: {
        branded: Number,
        noneBranded: Number,
      },
      topAdNetworks: {
        type: Schema.Types.Mixed,
      },
      newSearchKeywordsWorldWide: {
        type: Schema.Types.Mixed,
      },
      topIncomingAds: {
        type: Schema.Types.Mixed,
      },
    },

    { timestamps: true }
  )
)

module.exports = WebSite
