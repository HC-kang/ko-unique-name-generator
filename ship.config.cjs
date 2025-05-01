module.exports = {
  mergeStrategy: {
    toSameBranch: ['main'],
  },
  shouldGenerateChangelog: true,
  onlyPublishWithReleaseLabel: true,
  publishCommand: () => 'npm publish',
  updateChangelog: true,
  formatCommitMessage: ({ version }) => `chore(release): v${version}`,
  formatPullRequestTitle: ({ version }) => `🔖 Release v${version}`,
  formatChangelog: ({ version, date, pullRequests }) => {
    const prLines = pullRequests
      .map(pr => `- ${pr.title} (#${pr.number})`)
      .join('\n');
    return `## ${version} (${date})\n\n${prLines}\n`;
  },
};
