/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@components'] = './src/components';
    config.resolve.alias['@utils'] = './src/utils';
    config.resolve.alias['@global-style'] = './src/global-style';
    config.resolve.alias['@actions'] = './src/actions';
    return config;
  },

  images: {
    domains: [
      'res.cloudinary.com',
      'images-cdn.ubuy.co.in',
      'static.bhphoto.com',
      'm.media-amazon.com',
      'api.getquipt.com',
      'jaybesttech.net',
      'backmarket.com',
      'www.backmarket.com',
      'd2e6ccujb3mkqf.cloudfront.net',
      'images.alcatelonetouch.us',
      'www.rvmobileinternet.com',
      'ss7.vzw.com',
      'static.swappa.com',
      'www.computron.com.ec',
      'aws-obg-image-lb-4.tcl.com',
      'www.macrosistemas.com',
      'ssl-product-images.www8-hp.com',
      'i.ebayimg.com',
    ],
  },
};

module.exports = nextConfig;
