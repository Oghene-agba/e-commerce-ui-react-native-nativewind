# e-commerce-ui-react-native-nativewind

![ecommerce](https://user-images.githubusercontent.com/72680556/218602455-25a1e4f7-e2e2-48db-9ada-e4e9f20da545.jpg)

# Welcome

It's no secret that using Tailwind CSS can save you a lot of time when creating beautiful apps. It also provides consistency in your UI.

NativeWind uses Tailwind CSS as scripting language to create a universal style system for React Native. NativeWind components can be shared between platforms and will output their styles as CSS StyleSheet on web and StyleSheet.create for native.

Its goals are to provide a consistent styling experience across all platforms, and improve Developer UX and code maintainability.

# Install NativeWind usign Expo
You will need to install nativewindand it's peer dependency tailwindcss.

<pre>
<code> 
yarn add nativewind
yarn add --dev tailwindcss
</code>
</pre>

# Setup Tailwind CSS
Run npx tailwindcss init to create a tailwind.config.jsfile

<pre>
<code> 
npx tailwindcss init
</code>
</pre>

Add the paths to all of your component files in your tailwind.config.js file.

<pre>
<code> 
// tailwind.config.js

module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './<custom directory>/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
</code>
</pre>


  
# Add the Babel plugin
Modify your babel.config.js

<pre>
<code> 

// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['nativewind/babel'], // add this line
  };
};

</code>
</pre>
