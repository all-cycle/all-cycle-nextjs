import { useState } from "react";
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import styled from "styled-components";
import { faSmile, faSadTear } from "@fortawesome/free-solid-svg-icons";

import AccessDenied from "@/components/element/AccessDenied";
import fetchData from "@/utils/fetchData";
import useReviewForm from "@/hooks/useReviewForm";
import StyledButton from "@/components/element/StyledButton";
import StyledIcon from "@/components/element/StyledIcon";

const Form = styled.form`
  padding: 1em;
`;

const FormGroup = styled.div`
`;

const Textarea = styled.textarea`
  display: block;
  width: 100%;
  resize: none;
  min-height: calc(1.5em + 2rem + 2px);
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

const RangeFigure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2em;
`;

const RangeSlider = styled.input`
  all: unset;
  width: 70vw;
  height: 3vh;
  background-color: ${(props) => props.theme.badgeBg.color};

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20%;
    height: 3vh;
    background-color: ${(props) => props.theme.green.color};
  }

  &:focus {
    outline: none;
  }
`;

const RangeDataList = styled.datalist`
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  padding-top: 0.3em;
  font-size: 0.8em;
  color: ${(props) => props.theme.gray.color};
`;

const Label = styled.label`
  font-weight: 600;
  margin-bottom: 1em;
`;

const FigCaption = styled.figcaption`
  font-size: 0.7em;
  margin-bottom: 0.3em;
`;

const SmileIcon = styled(StyledIcon)`
  margin: 0 0.8em;
  color: ${(props) => props.theme.yellow.color};
`;

const SadIcon = styled(StyledIcon)`
  margin: 0 0.8em;
  color: ${(props) => props.theme.graishGreen.color};
`;

const RangeContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Message = styled.span`
  margin: 0.7em;
  font-size: 0.7em;
  font-weight: 400;
  color: ${(props) => props.theme.red.color};
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-size: 0.7em;
`;

function ReviewForm({ productId, toggle }) {
  const [session] = useSession();
  const router = useRouter();

  if (!session) {
    return <AccessDenied />;
  }

  const [message, setMessage] = useState("");
  const {
    reviewData,
    handleChange,
  } = useReviewForm(productId);

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetchData("POST", "/api/review", reviewData);

    if (response.result) {
      toggle();
      router.replace(router.asPath);
      return;
    }

    setMessage("다시 시도해주세요.");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>
          한줄평
          {(message) && <Message>{message}</Message>}
        </Label>
        <Textarea
          name="comment"
          value={reviewData.comment}
          onChange={handleChange}
        />
      </FormGroup>

      <FigCaption>재활용하기 편했다면 높은 점수를 줘 칭찬해주세요!</FigCaption>
      <RangeFigure>
        <RangeContainer>
          <SmileIcon icon={faSmile} />
          <RangeSlider
            name="recycleScore"
            value={reviewData.recycleScore}
            type="range"
            max="5"
            min="1"
            step="1"
            list="ticks1"
            onChange={handleChange}
          />
          <SadIcon icon={faSadTear} />
        </RangeContainer>
        <RangeDataList id="ticks1">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </RangeDataList>
      </RangeFigure>

      <FigCaption>다음에도 이 제품을 또 구매하실건가요?</FigCaption>
      <RangeFigure>
        <RangeContainer>
          <SmileIcon icon={faSmile} />
          <RangeSlider
            name="preferenceScore"
            value={reviewData.preferenceScore}
            type="range"
            max="5"
            min="1"
            step="1"
            list="ticks1"
            onChange={handleChange}
          />
          <SadIcon icon={faSadTear} />
        </RangeContainer>
        <RangeDataList id="ticks1">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </RangeDataList>
      </RangeFigure>

      <ButtonWrapper>
        <StyledButton onClick={toggle}>취소</StyledButton>
        <StyledButton type="submit">작성완료</StyledButton>
      </ButtonWrapper>
    </Form>
  );
}

export default ReviewForm;
