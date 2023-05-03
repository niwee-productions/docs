module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: ['index', 'intro/cli', 'intro/windows-wsl', 'intro/linux', 'intro/macos', 'intro/discord'],
    },
    {
      type: 'category',
      label: 'Command Reference',
      collapsed: false,
      items: [
        'cli/commands/help',
        'cli/commands/install',
        'cli/commands/pack',
        'cli/commands/git',
        'cli/commands/go',
        'cli/commands/no',
        'cli/commands/shutdown',
        'cli/commands/new',
        'cli/commands/webpack',
      ],
    },
  ],
};
