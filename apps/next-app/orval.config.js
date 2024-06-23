module.exports = {
  feedoongApp: {
    input: 'src/services/spec.json',
    output: {
      target: 'src/services/types/_generated',
      mode: 'tags',
      override: {
        mutator: {
          path: 'src/services/api/index.ts',
          name: 'feedoongApi',
        },
      },
    },
  },
}
