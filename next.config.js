module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }

    return config;
  },
  env: {
    managerAccount: "maudlinsy@gmail.com",
  },
  images: {
    domains: ["ecoseoul.or.kr"],
  },
};
