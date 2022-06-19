import getTrad from "../getTrad";

describe('# Get Translation', () => {
  it('should get translations for label', () => {
    expect(getTrad('aha')).toBe('strapi-4-deep-export-to-csv-plugin.aha')
  });
});
