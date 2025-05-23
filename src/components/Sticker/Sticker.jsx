import { Component } from 'react';
import css from './Sticker.module.css';

export class Sticker extends Component {
  state = { visible: false };
  handleClick = () => {
    this.setState({ visible: true });
  };

  render() {
    const { img, label } = this.props;

    return (
      <li onClick={this.handleClick} className={css.sticker}>
        <img src={img} alt={label} />

        {this.state.visible && <p className={css.text}>{label}</p>}
      </li>
    );
  }
}
