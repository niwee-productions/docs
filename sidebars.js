module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: ['index', 'intro/cli', 'intro/windows-wsl', 'intro/linux', 'intro/macos'],
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
    {
      type: 'category',
      label: 'NW Servers',
      collapsed: false,
      items: ['nw-servers/introduction', 'nw-servers/connect', 'nw-servers/ssh-keys'],
    },
    {
      type: 'category',
      label: 'CI/CD',
      collapsed: false,
      items: ['ci-cd/introduction', 'ci-cd/runners'],
    },
    {
      type: 'category',
      label: 'Cloudpanel',
      collapsed: false,
      items: ['cloudpanel/introduction'],
    },
  ],
};
