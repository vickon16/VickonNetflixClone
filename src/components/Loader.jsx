import { ColorRing } from 'react-loader-spinner';

const Loader = ({width, height, ...restProps}) => {
  return (
    <ColorRing
      {...restProps}
      visible={true}
      height={height}
      width={width}
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={["#a5a5a5", "#a5a5a5", "#a5a5a5", "#a5a5a5", "#a5a5a5"]}
    />
  );
}

export default Loader