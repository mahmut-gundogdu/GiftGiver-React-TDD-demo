import React, { Component } from 'react'

export default class Gift extends Component {

    handleChangePerson = (event) => {
        let { gift } = this.props
        gift.person = event.target.value;
        this.props.updateGift(gift)
    }
    handleChangePresent = (event) => {
        let { gift } = this.props
        gift.present = event.target.value;
        this.props.updateGift(gift)
    }

    render() {
        const { removeGift, gift } = this.props
        return (
            <div>
                Person:<input type="text" className="personName" value={gift.person} onChange={this.handleChangePerson}></input> <br />
                Present:<input type="text" className="presentName" value={gift.present} onChange={this.handleChangePresent}></input> <br />
                <button className="removeBtn" onClick={() => { removeGift(gift.id) }} >Remove</button>
            </div>
        )
    }
}