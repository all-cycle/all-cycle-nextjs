import styled from "styled-components";

import StyledButton from "@/components/common/StyledButton";

const Form = styled.form`
`;

const FormGroup = styled.div`
`;

const Textarea = styled.textarea`
  display: block;
  width: 100%;
  resize: none;
  min-height: calc(1.5em + 5rem + 2px);
  padding: 0.375rem 0.75rem;
  margin-bottom: 1em;
  font-size: 1em;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

const RangeContainer = styled.div`
  text-align: center;
  margin-bottom: 2em;
`;

const RangeSlider = styled.input`
  all: unset;
  width: 70vw;
  height: 5vh;
  background-color: ${(props) => props.theme.lightGray.color};

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20%;
    height: 5vh;
    background-color: ${(props) => props.theme.green.color};
  }

  &:focus {
    outline: none;
  }
`;

const RangeDataList = styled.datalist`
  width: 70%;
  display: inline-flex;
  justify-content: space-between;
  color: ${(props) => props.theme.gray.color};
`;

function ReviewForm({
  comment,
  recycleScore,
  preferenceScore,
  onChange,
  onSubmit,
}) {
  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Textarea
          name="comment"
          value={comment}
          onChange={onChange}
        />
      </FormGroup>

      <RangeContainer>
        <RangeSlider
          name="recycleScore"
          value={recycleScore}
          type="range"
          max="5"
          min="1"
          step="1"
          list="ticks1"
          onChange={onChange}
        />
        <RangeDataList id="ticks1">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </RangeDataList>
      </RangeContainer>

      {/* TODO insert CSR 함수실행 */}
      <StyledButton type="submit">Confirm</StyledButton>
    </Form>
  );
}

export default ReviewForm;
