module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination:
          "https://www.facebook.com/plugins/customer_chat/facade_gating/?page_id=584689638543871&suppress_http_code=1",
      },
    ];
  },
};
