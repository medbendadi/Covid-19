import React from "react";
import { Cards, ChartEl , CountryPicker } from './components'
import styles from './App.module.css'

import { featchData } from "./api";

class App extends React.Component {
  state = {
    data:{},
    country: '',
  }
  async componentDidMount(){
    const featchedData = await featchData();
    this.setState({ data:featchedData })
  }
  
  handleCountryChange = async (country) =>{
    // fetch the data
    const featchedData = await featchData(country)
    // set the state
    this.setState({ data: featchedData, country :country })

  }

  render(){
    const { data , country } = this.state;
    return (
      <div className= {styles.container}>
        <Cards data = {data}/>
        <CountryPicker handleCountryChange= {this.handleCountryChange}/>
        <ChartEl data={data} country={country}/>
      </div>
    )

  }
}

export default App;
