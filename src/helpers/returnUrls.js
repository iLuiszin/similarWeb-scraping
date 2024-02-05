module.exports = function returnUrls(domain) {
  const urls = [
    `https://pro.similarweb.com/widgetApi/WebsiteOverview/EngagementVisits/SingleMetric?country=999&from=2023%7C10%7C01&to=2023%7C12%7C31&includeSubDomains=true&isWindow=false&keys=${domain}&timeGranularity=Monthly&webSource=Total&ShouldGetVerifiedData=false`,
    `https://pro.similarweb.com/widgetApi/WebsiteOverview/WebRanks/SingleMetric?country=999&from=2023%7C10%7C01&to=2023%7C12%7C31&includeSubDomains=true&isWindow=false&keys=${domain}&timeGranularity=Monthly&webSource=Total`,
    `https://pro.similarweb.com/widgetApi/WebsiteOverview/EngagementDesktopVsMobileVisits/PieChart?country=999&from=2023%7C10%7C01&to=2023%7C12%7C31&includeSubDomains=true&isWindow=false&keys=${domain}&timeGranularity=Monthly&webSource=Total&ShouldGetVerifiedData=false`,
    `https://pro.similarweb.com/widgetApi/WebsiteOverview/EngagementOverview/Table?country=999&to=2023%7C12%7C31&from=2023%7C10%7C01&isWindow=false&webSource=Total&isDurationChanged=null&isCountryChanged=null&isWebSourceChanged=null&ignoreFilterConsistency=false&includeSubDomains=true&timeGranularity=Monthly&keys=${domain}&ShouldGetVerifiedData=false`,
    `https://pro.similarweb.com/widgetApi/WebsiteOverview/EngagementVisits/Table?country=999&from=2023%7C10%7C01&to=2023%7C12%7C31&timeGranularity=Monthly&ShouldGetVerifiedData=false&includeSubDomains=true&isWindow=false&keys=${domain}&webSource=Total`,
    `https://pro.similarweb.com/widgetApi/WebsiteGeography/Geography/Table?country=999&includeSubDomains=true&webSource=Total&timeGranularity=Monthly&orderBy=TotalShare%20desc&keys=${domain}&pageSize=5&from=2023%7C10%7C01&to=2023%7C12%7C31&isWindow=false`,
    `https://pro.similarweb.com/widgetApi/MarketingMixTotal/TrafficSourcesOverview/PieChart?country=999&from=2023%7C10%7C01&includeSubDomains=true&isWindow=false&keys=${domain}&timeGranularity=Monthly&to=2023%7C12%7C31`,
    `https://pro.similarweb.com/widgetApi/WebsiteOverviewDesktop/TrafficSourcesOverview/PieChart?country=999&webSource=Desktop&keys=${domain}&from=2023%7C10%7C01&to=2023%7C12%7C31&isWindow=false&includeSubDomains=true`,
    `https://pro.similarweb.com/widgetApi/TrafficSourcesSearch/SearchBrandedKeywordsWorldWide/WebsitePerformance/PieChart?country=999&from=2023%7C10%7C01&includeSubDomains=true&isWindow=false&keys=${domain}&to=2023%7C12%7C31&webSource=Total&timeGranularity=Monthly`,
    `https://pro.similarweb.com/widgetApi/WebsiteOverviewDesktop/TopAdNetworks/PieChart?country=999&from=2023%7C10%7C01&includeSubDomains=true&isWindow=false&keys=${domain}&timeGranularity=Monthly&to=2023%7C12%7C31&webSource=Desktop&orderBy=Share%20desc`,
    `https://pro.similarweb.com/widgetApi/SearchKeywords/NewSearchKeywordsWorldWide/WebsitePerformance/Table?country=999&from=2023%7C10%7C01&includeSubDomains=true&isWindow=false&keys=${domain}&to=2023%7C12%7C31&webSource=Total&IncludeOrganic=true&pageSize=5&timeGranularity=Monthly`,
    `https://pro.similarweb.com/widgetApi/WebsiteOverviewDesktop/TopIncomingAds/Table?appMode=single&country=999&from=2023%7C10%7C01&includeSubDomains=true&isWindow=false&keys=${domain}&timeGranularity=Monthly&to=2023%7C12%7C31&pageSize=5&webSource=Desktop&orderBy=Share%20desc`,
  ]

  return urls
}
