require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteName: 'My Shop',
  },
  plugins: [
  {
    resolve: `gatsby-source-shopify`,
    options: {
      // The domain name of your Shopify shop.
      shopName: `musles-enterprise.myshopify.com`,
      // The storefront access token
      accessToken: `7d380b6c2736f57dde861be1f1bf4517`,
    },
  },
]
