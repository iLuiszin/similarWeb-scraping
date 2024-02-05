const mongoose = require('mongoose')
const { Schema } = mongoose

const WebSite = mongoose.model(
  'WebSite',
  new Schema(
    {
      siteName: String,
      TotalVisits: Number,
      Change: Number,
      ShareOfVisits: Number,
      Trend: [Number],
      GlobalRank: {
        Value: Number,
        Trend: [
          {
            Key: String,
            Value: Number,
          },
        ],
      },
      CountryRank: {
        Value: Number,
        Trend: [
          {
            Key: String,
            Value: Number,
          },
        ],
      },
      CategoryRank: {
        Value: Number,
        Trend: [
          {
            Key: String,
            Value: Number,
          },
        ],
      },
      Category: String,
      Country: Number,
      Desktop: Number,
      'Mobile Web': Number,
      Mail: Number,
      Social: Number,
      'Paid Referrals': Number,
      'Paid Search': Number,
      'Organic Search': Number,
      Referrals: Number,
      Direct: Number,
      Branded: Number,
      NoneBranded: Number,
      'Google Display Network': Number,
      Skimlinks: Number,
      'AvantLink (dist)': Number,
      AvantLink: Number,
      'Amazon Ad System': Number,
    },
    { timestamps: true }
  )
)

module.exports = WebSite
