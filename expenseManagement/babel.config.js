module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-flow',
    'module:metro-react-native-babel-preset'
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    'react-native-reanimated/plugin' // Add this if you're using React Native Reanimated
  ]
};
