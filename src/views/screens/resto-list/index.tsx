import React from 'react'
import { Text, View } from 'react-native'
import { Api } from '../../../services/api'
import { AppStyle } from '../../styles'
import { RestoListScreenProps } from './props'
import { RestoListScreenState } from './state'

@AppStyle.withThemeClass()
export class RestoListScreen extends React.Component<
  RestoListScreenProps,
  RestoListScreenState
> {
  constructor(props: RestoListScreenProps) {
    super(props)
    this.state = {
      restaurants: []
    }
  }

  async componentDidMount() {
    const restaurants = await Api.loadRestaurant()
    this.setState({ restaurants })
  }

  public render() {
    const { theme } = this.props as Required<RestoListScreenProps>
    const { restaurants } = this.state
    return (
      <View style={theme.styles.screenContainer}>
        <Text style={{ color: theme.vars.color.text }}>Restaurant List</Text>
        {restaurants.map(r => (
          <Text key={r.id}>{r.name}</Text>
        ))}
      </View>
    )
  }
}
