const { FusesPlugin } = require('@electron-forge/plugin-fuses');
const { FuseV1Options, FuseVersion } = require('@electron/fuses');

module.exports = {
  packagerConfig: {
    asar: true,
    icon: './src/img/app.ico',
    extendInfo: {
      LSApplicationCategoryType: 'public.app-category.games'
    }
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        name: 'Mettato Neo Fangame',
        setupIcon: './src/img/app.ico',
        setupExe: 'mettaton-neo-fangame.exe',
        noMsi: true,
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
      config: {
        name: 'Mettato Neo Fangame',
        icon: './src/img/app.icns',
      }
    },
    {
      name: '@electron-forge/maker-deb',
      config: {
        options: {
          categories: ['Game'],
          section: 'games',
          priority: 'optional',
          description: 'Mettaton Neo Fangame - a fangame about Mettaton Neo from Undertale',
        }
      },
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {
        options: {
          categories: ['Game', 'Amusement'],
          description: 'Mettaton Neo Fangame - a fangame about Mettaton Neo from Undertale'
        }
      },
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
    // Fuses are used to enable/disable various Electron functionality
    // at package time, before code signing the application
    new FusesPlugin({
      version: FuseVersion.V1,
      [FuseV1Options.RunAsNode]: false,
      [FuseV1Options.EnableCookieEncryption]: true,
      [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false,
      [FuseV1Options.EnableNodeCliInspectArguments]: false,
      [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true,
      [FuseV1Options.OnlyLoadAppFromAsar]: true,
    }),
  ],
};
