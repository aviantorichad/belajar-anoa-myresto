import { createTheme } from 'anoa-react-native-theme'

export const BaseTheme = createTheme(
  {
    spacing: {
      normal: 24
    },
    color: {
      background: '#FCAF58',
      text: '#FFF'
    }
  },
  vars => ({
    screenContainer: {
      padding: vars.spacing.normal,
      backgroundColor: vars.color.background,
    }
  })
)
