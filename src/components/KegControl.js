import React from 'react';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      kegList: [
        {
          name: "Briney Melon Gose",
          brewery: "Anderson Valley",
          abv: "4.2%",
          origin: "CA",
          pintPrice: 6, 
          kegLevel: 124,
          id: "7707701"
        },
        {
          name: "Cheap and Cold",
          brewery: "Hamm's",
          abv: "4.7%",
          origin: "USA",
          pintPrice: 3, 
          kegLevel: 124,
          id: "7707702"
        },
        {
          name: "Viva La Pineapple Cider",
          brewery: "Reverend Nat's",
          abv: "6%",
          origin: "PDX",
          pintPrice: 6, 
          kegLevel: 124,
          id: "7707703"
        },
        {
          name: "Dystopia IPA",
          brewery: "Grains of Wrath",
          abv: "6.7%%",
          origin: "WA",
          pintPrice: 6, 
          kegLevel: 124,
          id: "7707704"
        },
        {
          name: "FanZine IPA",
          brewery: "Fort George",
          abv: "6.7%",
          origin: "OR",
          pintPrice: 6, 
          kegLevel: 124,
          id: "7707705"
        },
        {
          name: "Pilsner",
          brewery: "Chuckanut",
          abv: "5%",
          origin: "WA",
          pintPrice: 5, 
          kegLevel: 124,
          id: "7707706"
        },
        {
          name: "Dark Star Coffee Bourbon Stout",
          brewery: "Fremont",
          abv: "14.5%",
          origin: "WA",
          pintPrice: 9, 
          kegLevel: 124,
          id: "7707707"
        },
        {
          name: "Pretty Hot Habenero Pils",
          brewery: "Ross Island",
          abv: "4.9%",
          origin: "PDX",
          pintPrice: 5, 
          kegLevel: 124,
          id: "7707708"
        },
      ]
    }
  }

  renderTableData() {
    return this.state.kegList.map((keg, index) => {
      const { name, brewery, abv, origin, pintPrice, id } = keg
      return (
        <tr key={id}>
          <td>{name}</td>
          <td>{brewery}</td>
          <td>{pintPrice}</td>
          <td>{abv}</td>
          <td>{origin}</td>
        </tr>
      )
    })
  }

  // renderTableHeader() {
  //   r
  //   })
  // }

  render() {
    return (
      <div className="menu">
        <h1 id='title'>BEER SELECTION</h1>
        <table id='kegList'>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Brewery</th>
              <th>Price</th>
              <th>ABV</th>
              <th>Origin</th>
            </tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    )
  }




}

export default KegControl;