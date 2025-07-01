import { useState } from 'react';
import css from './Sticker.module.css';

const Sticker = ({ img, label }) => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(true);
  };

  return (
    <li onClick={handleClick} className={css.sticker}>
      <img src={img} alt={label} />
      {visible && <p className={css.text}>{label}</p>}
    </li>
  );
};
export default Sticker;
// export class Sticker extends Component {
//   state = { visible: false };
//   handleClick = () => {
//     this.setState({ visible: true });
//   };

// render() {
//   const { img, label } = this.props;

// return (
//   <li onClick={this.handleClick} className={css.sticker}>
//     <img src={img} alt={label} />

//     {this.state.visible && <p className={css.text}>{label}</p>}
//   </li>
// );
//   }
// }
