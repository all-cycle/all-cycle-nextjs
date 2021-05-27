import {
  ImageOptionList,
  ImageOption,
  Caption,
  Picture,
} from "./styled";

function ImageOptions({ list, alts, handleSelectOption }) {
  return (
    <ImageOptionList>
      {list.map((image, index) => (
        <ImageOption
          key={alts[index]}
          onClick={() => handleSelectOption(image)}
        >
          <Caption>{index + 1}</Caption>
          <Picture src={image} alt={alts[index]} />
        </ImageOption>
      ))}
    </ImageOptionList>
  );
}

export default ImageOptions;
