import {
  OptionList,
  Option,
  Caption,
  OptionButton,
} from "./styled";

function Options({ list, handleSelectOption }) {
  return (
    <OptionList>
      {list.map((example, index) => (
        <Option key={example}>
          <Caption>{index + 1}</Caption>
          <OptionButton
            key={example}
            size={0.9}
            onClick={() => handleSelectOption(example)}
          >
            {example}
          </OptionButton>
        </Option>
      ))}
    </OptionList>
  );
}

export default Options;
